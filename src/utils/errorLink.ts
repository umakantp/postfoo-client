import { onError } from '@apollo/client/link/error'
import { ErrorCode } from 'src/generated/graphql'
import { routes } from 'src/utils/constants'
import { hardRedirect } from 'src/utils/history'
import logger from 'src/utils/logger'
import { del, storageKeys } from 'src/utils/storage'


export const errorLink = onError((data) => {
  if (data.graphQLErrors) {
    let accessDenied = false
    let forbidden = false
    data.graphQLErrors.forEach(({ extensions, message }) => {
      const code = extensions?.code
      code ? logger.error(message, { code }) : logger.error(message)
      if (code === ErrorCode.UNAUTHENTICATED || code === ErrorCode.METHOD_NOT_ALLOWED) {
        accessDenied = true
      }
      if (code === ErrorCode.FORBIDDEN) {
        forbidden = true
      }
    })
    if (forbidden) {
      hardRedirect(routes.HOME)
    }
    if (accessDenied) {
      del(storageKeys.AUTH_TOKEN)
      // Something broke, so we delete and we redirect to the home page
      hardRedirect(routes.HOME)
      return
    }
  } else if (data.networkError) {
    logger.error(data.networkError)
  }
})
