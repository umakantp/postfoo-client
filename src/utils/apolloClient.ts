import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename'
import { errorLink } from 'src/utils/errorLink'

const authLink = (token: string | undefined) => (setContext((__, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      'X-Client-Release': process.env.NEXT_PUBLIC_RELEASE,
      'X-Client-Release-At': process.env.NEXT_PUBLIC_RELEASE_AT,
      'X-Client-Mode': process.env.NEXT_PUBLIC_MODE,
      'X-Client-Url': window.location.href,
    },
  }
}))

const serverLink: HttpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQLAPI_URL })

export const getApolloLink = (token: string | undefined) => {
  const removeTypenameLink = removeTypenameFromVariables()
  return ApolloLink.from([authLink(token), errorLink, removeTypenameLink, serverLink])
}

export const getClient = (token: string | undefined): ApolloClient<any> => {
  const cache: InMemoryCache = new InMemoryCache()

  return new ApolloClient({
    link: getApolloLink(token),
    cache,
  })
}


export default getClient
