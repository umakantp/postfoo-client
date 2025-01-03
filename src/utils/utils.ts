import { clsx, type ClassValue } from 'clsx'
import * as React from 'react'
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
    } catch (_err) {
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
