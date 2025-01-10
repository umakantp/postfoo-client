import EventEmitter from 'events'
import { isEmpty } from 'lodash'
import { usePathname, useRouter } from 'next/navigation'
import { stringify } from 'querystring'
import * as React from 'react'
import { Route, routes } from 'src/utils/constants'
import logger from 'src/utils/logger'
import { removeTrailingSlash } from 'src/utils/utils'

// UrlParams are the parameters that are passed to the route /profiles/(:id)
// Keep it as `type` instead of `interface` to make it work with
// useParams of React Router DOM.
export type UrlParams = {
  userId?: string,
  portfolioId?: string,
}

type UrlQuery = Record<string, string | undefined | string[]>

// Taken from Next js as is.
const generatePath = (pathname: string, query?: UrlParams, hash?: string | null | undefined) => {
  const remainingQuery: UrlParams = query ? { ...query } : {}
  // Replace slugs, and remove them from the `query`
  let asPath = pathname.replace(/\[{1,2}(.+?)]{1,2}/g, ($0, slug: keyof UrlParams) => {
    if (slug.startsWith('...')) {
      slug = slug.replace('...', '') as keyof UrlParams
    }
    const value: string | string[] = remainingQuery[slug]!
    delete remainingQuery[slug]
    if (Array.isArray(value)) {
      return value.map(v => encodeURIComponent(v)).join('/')
    }
    return value !== undefined ? encodeURIComponent(String(value)) : ''
  })
  // Remove any trailing slashes; this can occur if there is no match for a catch-all slug ([[...slug]])
  asPath = removeTrailingSlash(asPath)

  // Append remaining query as a querystring, if needed:
  const qs = stringify(remainingQuery)
  if (qs) {
    asPath += `?${qs}`
  }
  if (hash) {
    asPath += hash
  }

  return asPath
}

export const makePath = (route: Route, props?: UrlParams, query?: UrlQuery) => {
  const path = generatePath(routes[route], props)
  if (isEmpty(query)) {
    return path
  }
  const queryParams = new URLSearchParams(query as Record<string, string>)
  return `${path}?${queryParams}`
}

export const hardRedirect = (path: string) => {
  // Hard refresh clears the cache, use it sparingly.
  logger.info('Navigated to', path)
  window.location.replace(path)
}

export enum NavigationEvent {
  Changing = 'Changing',
  Changed = 'Changed',
}

export const navigationEvents = new EventEmitter()

export interface NavigationData {
  route: Route,
  props?: UrlParams,
  query?: UrlQuery,
  replace: boolean,
  isPrevented: boolean,
}

export type Navigate = (route: Route, props?: UrlParams, query?: UrlQuery, replace?: boolean) => void

export const useNavigation = () => {
  const { push, replace } = useRouter()
  return React.useCallback<Navigate>((route: Route, props?: UrlParams, query?: UrlQuery, replaceParam = false) => {
    // These can also be overriden by event handlers
    const eventData: NavigationData = { isPrevented: false, route, props, query, replace: replaceParam }
    navigationEvents.emit(NavigationEvent.Changing, eventData)
    if (eventData.isPrevented) {
      logger.info('Prevented the navigation to', route, eventData)
    } else {
      const path = makePath(eventData.route, eventData.props, eventData.query)
      if (eventData.replace) {
        replace(path)
      } else {
        push(path)
      }
      navigationEvents.emit(NavigationEvent.Changed, eventData, path)
      logger.info('Navigated to', path, eventData)
    }
  }, [push, replace])
}

const matchesPathname = (asPath: string, pathname: string) => {
  if (asPath === pathname) {
    return true
  }
  const baseAsPath = removeTrailingSlash(asPath.split('?')[0] as string)
  const basePathname = removeTrailingSlash(pathname.split('?')[0] as string)
  if (baseAsPath === basePathname) {
    return true
  }
  const basePathRegex = new RegExp(
    `^${basePathname.replace(/(\[[a-zA-Z0-9-]+\])+/g, '[a-zA-Z0-9-]+')}$`
      .replace(/\[\[\.\.\.[a-zA-Z0-9-]+\]\]/g, '?.*')
      .replace(/\[\.\.\.[a-zA-Z0-9-]+\]/g, '.*'),
  )
  if (basePathRegex.test(baseAsPath)) {
    return true
  }
  return false
}

export const useMatchedRoute = () => {
  const pathname = usePathname()
  for (const routeKey of Object.keys(routes)) {
    const r = routes[routeKey as Route] as string
    if (pathname && matchesPathname(pathname, r)) {
      return r
    }
  }
  return ''
}

export const useIsHrefActive = () => {
  const activePath = useMatchedRoute()
  return (href: string) => {
    // Matches it to the route pattern like /portfolio/[portfolioId]/users
    const regExpPattern = new RegExp(`^${activePath.replace(/\[.*?\]/g, '[^/]+')}$`)
    // Check if the href matches the active pattern
    return regExpPattern.test(href)
  }
}


