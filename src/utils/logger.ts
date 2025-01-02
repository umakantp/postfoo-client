/* eslint-disable no-console */
import { compact, isError, isString } from 'lodash'
import { toast } from 'src/utils/toast'

const isTesting = process.env.MODE !== 'prod'

const now = () => {
  const [date, time] = new Date().toISOString().split(/[T.]/)
  return `${date} ${time}`
}

const getMessage = (args: any[]): string => {
  return compact(args.map((arg) => {
    if (isString(arg)) {
      return arg
    }
    if (isError(arg)) {
      return arg.message
    }
    if (arg.code) {
      return null
    }
    return JSON.stringify(arg)
  })).join(' ')
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
    const message = getMessage(args)
    if (isTesting) {
      toast({ variant: 'warning', description: message })
    }
  },

  error: (...args: any[]) => {
    console.error(now(), '[ERROR]', ...args)
    const message = getMessage(args)
    if (isTesting) {
      toast({ variant: 'error', description: message })
    }
  },
}

export default logger
