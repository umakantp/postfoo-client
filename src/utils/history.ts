import logger from 'src/utils/logger'

export const hardRedirect = (path: string) => {
  // Hard refresh clears the cache, use it sparingly.
  logger.info('Navigated to', path)
  window.location.replace(path)
}
