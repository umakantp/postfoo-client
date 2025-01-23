'use client'

import * as Sentry from '@sentry/nextjs'
import { pick } from 'lodash'
import * as React from 'react'
import { MyUserResponseFragment, useMeQuery } from 'src/generated/graphql'
import { clear, del, get, set, storageKeys } from 'src/utils/storage'

const AuthContext = React.createContext<{
  setUser: (user: MyUserResponseFragment | undefined) => void,
  user: MyUserResponseFragment | undefined,
  isLoading: boolean,
}>({
      setUser: (_user: MyUserResponseFragment | undefined) => undefined,
      user: undefined,
      isLoading: true,
    })

// This hook can be used to access the user info.
export const useAuth = () => {
  const value = React.useContext(AuthContext)
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useAuth must be wrapped in a <AuthProvider />')
    }
  }

  return value
}

interface AuthProviderProps {
  children: React.ReactNode,
  onLogin?: (user: MyUserResponseFragment | undefined) => void,
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children, onLogin }) => {
  const [user, setUser] = React.useState<MyUserResponseFragment | undefined>()
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const setUserToken = React.useCallback((token: string | undefined) => {
    if (token) {
      set(storageKeys.AUTH_TOKEN, token)
    } else {
      del(storageKeys.AUTH_TOKEN)
    }
  }, [])
  const setUserWrapper = React.useCallback((user: MyUserResponseFragment | undefined) => {
    setUser(user)
    setUserToken(user?.token)
    Sentry.setUser(pick(user, ['id', 'name', 'isSuperadmin']))
    if (onLogin) {
      onLogin(user)
    }
    if (!user) {
      // Removing user, lets clear all local storage.
      clear()
    }
  }, [setUser, setUserToken, onLogin])

  const { data, error } = useMeQuery()

  React.useEffect(() => {
    const userToken = get<string | undefined>(storageKeys.AUTH_TOKEN)
    if (userToken) {
      // If only user token is present
      if (!user && data) {
        // User is not loaded from token, lets do it.
        if (data.me) {
          setUserWrapper(data.me)
        } else {
          // remove old token, it might be broken or old expired one.
          setUserWrapper(undefined)
        }
        setIsLoading(false)
      } else if (error) {
        // Some error
        setUserWrapper(undefined)
        setIsLoading(false)
      } else {
        // User is loaded, lets stop loading.
        setIsLoading(false)
      }
    } else {
      setIsLoading(false)
      // user token is missing, app will direct to login when loading is done
    }
  }, [user, setIsLoading, setUserWrapper, data, error])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser: setUserWrapper,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
