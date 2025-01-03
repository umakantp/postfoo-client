/* eslint-disable no-console */

const now = () => {
  const [date, time] = new Date().toISOString().split(/[T.]/)
  return `${date} ${time}`
}

const logger = {
  debug: (...args: any[]) => {
    console.debug(now(), '[DEBUG]', ...args)
  },

  info: (...args: any[]) => {
    console.info(now(), '[INFO]', ...args)
  },

  warn: (...args: any[]) => {
    console.warn(now(), '[WARN]', ...args)
  },

  error: (...args: any[]) => {
    console.error(now(), '[ERROR]', ...args)
  },
}

export default logger
