import { QueryClient } from '@tanstack/react-query'
import { ErrorCode } from 'src/generated/graphql'
import { routes } from 'src/utils/constants'
import { hardRedirect } from 'src/utils/history'
import logger from 'src/utils/logger'
import { del, get, storageKeys } from 'src/utils/storage'

export const queryClient = new QueryClient()

export const reactQueryFetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers']
): (() => Promise<TData>) => {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error('NEXT_PUBLIC_API_URL is not set')
  }
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api`
  const token = get<string | undefined>(storageKeys.AUTH_TOKEN)
  const headers = {
    ...options,
    authorization: token ? `Bearer ${token}` : '',
    'X-Client-Release': process.env.NEXT_PUBLIC_RELEASE || '',
    'X-Client-Release-At': process.env.NEXT_PUBLIC_RELEASE_AT || '',
    'X-Client-Mode': process.env.NEXT_PUBLIC_MODE || '',
  }
  return async () => {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
        'X-Client-Url': window.location.href || '',
      },
      body: JSON.stringify({
        query,
        variables
      })
    })

    const json = await res.json()

    if (json.errors) {
      let accessDenied = false
      let forbidden = false
      json.errors.forEach(({ extensions, message }: any) => {
        const code = extensions?.code
        if (code) {
          logger.error(message, { code })
        } else {
          logger.error(message)
        }
        if (code === ErrorCode.UNAUTHENTICATED || code === ErrorCode.METHOD_NOT_ALLOWED) {
          accessDenied = true
        }
        if (code === ErrorCode.FORBIDDEN) {
          forbidden = true
        }
      })
      // TODO: Probably show the toast and refer user back to current page.
      // Redirect to sign in page like a page refersh, clears current client cache..
      if (forbidden) {
        hardRedirect(routes.HOME)
        return
      }
      if (accessDenied) {
        del(storageKeys.AUTH_TOKEN)
        // Something broke, so we delete and we redirect to the home page
        hardRedirect(routes.HOME)
        return
      }
      throw json
    }

    return json.data
  }
}
