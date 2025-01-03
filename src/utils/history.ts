import EventEmitter from 'events'
import { isEmpty } from 'lodash'
import { useRouter } from 'next/navigation'
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
  return React.useCallback<Navigate>((route, props, query, replaceParam = false) => {
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

