import { get, storageKeys } from 'src/utils/storage'

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
      const { message } = json.errors[0] || {}
      throw new Error(message)
    }

    return json.data
  }
}
