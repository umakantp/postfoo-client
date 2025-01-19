import { clsx, type ClassValue } from 'clsx'
import * as React from 'react'
import { HONEYPOT_DEFAULT_NAME_FIELD_NAME, HONEYPOT_DEFAULT_VALID_FROM_FIELD_NAME } from 'src/utils/constants'
import logger from 'src/utils/logger'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Copied from https://usehooks.com/useLocalStorage/
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch {
      // If error also return initialValue
      // logger.error(err)
      return initialValue
    }
  })
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (err) {
      // A more advanced implementation would handle the error case
      logger.error(err)
    }
  }
  return [storedValue, setValue] as const
}

export const removeTrailingSlash = (path: string) => {
  return path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path
}

export const setFormErrors = (error: any, setError: any) => {
  if (error.graphQLErrors) {
    error.graphQLErrors.map((err: any) => {
      if (err?.extensions?.fieldName) {
        setError(err.extensions.fieldName, {
          message: err.message,
        })
      }
    })
  } else {
    logger.error(error)
  }
}

/**
 * Safe mathematical rounding
 * Why is this needed? Try doing: `0.1 + 0.2`
 */
export const safeFloor = (num: number, maxDecimals = 2): number => {
  const int = toFloorInt(num, maxDecimals)
  return fromInt(int, maxDecimals)
}

/** Usually preferred over safeFloor (f.e. 17067.92) except when the number must NEVER round up (like bank balances) */
export const safeRound = (num: number, maxDecimals = 2): number => {
  const int = toInt(num, maxDecimals)
  return fromInt(int, maxDecimals)
}

export const parseInteger = (val: any): number => {
  return Number.parseInt(val, 10)
}

/** Converts a float to an integer, to do math on it */
export const toInt = (num: number, maxDecimals = 2): number => {
  return Math.round(num * (10 ** maxDecimals))
}

/** This one ensures it always rounds down */
export const toFloorInt = (num: number, maxDecimals = 2): number => {
  // Sadly floor(num * 100) yields the wrong number for f.e.: 17067.92
  const [integer, decimals = ''] = num.toString().split('.')
  const str = integer + decimals.padEnd(maxDecimals, '0').slice(0, maxDecimals)
  return parseInteger(str)
}

/** Brings the float back from an integer */
export const fromInt = (num: number, maxDecimals = 2): number => {
  return Math.floor(num) / (10 ** maxDecimals)
}

export const getHoneypotFormValues = (formData: Record<string, string>) => {
  return {
    // This is a hack to make sure the honeypot input is always present even if it's empty
    // otherwwise graphql doesn't send undefined inputs.
    [HONEYPOT_DEFAULT_NAME_FIELD_NAME]: formData[HONEYPOT_DEFAULT_NAME_FIELD_NAME] || '',
    [HONEYPOT_DEFAULT_VALID_FROM_FIELD_NAME]: formData[HONEYPOT_DEFAULT_VALID_FROM_FIELD_NAME],
  }
}

export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
