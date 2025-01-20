/* eslint-disable no-console */

import Sentry, { SeverityLevel } from '@sentry/nextjs'
import { compact, isError, isString } from 'lodash'

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
    Sentry.captureMessage(message, 'warning' as SeverityLevel)
  },

  error: (...args: any[]) => {
    console.error(now(), '[ERROR]', ...args)
    const message = getMessage(args)
    const error = args.find(isError) || new Error(message)
    Sentry.captureException(error)
  },
}

export default logger
