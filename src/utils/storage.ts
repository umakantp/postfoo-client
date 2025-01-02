
export const storageKeys = {
  AUTH_TOKEN: 'r-auth-token',
}

export const get = <T>(key: string, initialValue?: T): T | undefined => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  } catch {
    return initialValue
  }
}

export const set = <T>(key: string, value: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
  }
}

export const del = (key: string) => {
  try {
    localStorage.removeItem(key)
  } catch {
  }
}
