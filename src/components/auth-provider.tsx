'use client'

import * as React from 'react'
import { MyUserResponseFragment, useMeQuery } from 'src/generated/graphql'
import { del, get, set, storageKeys } from 'src/utils/storage'

const AuthContext = React.createContext<{
  setUser: (user: MyUserResponseFragment | undefined) => void,
  user: MyUserResponseFragment | undefined,
  setUserToken: (userToken: string | undefined) => void,
  isLoading: boolean,
}>({
      setUser: (_user: MyUserResponseFragment | undefined) => undefined,
      user: undefined,
      setUserToken: (_token: string | undefined) => undefined,
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
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<MyUserResponseFragment | undefined>()
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const userToken = get<string | undefined>(storageKeys.AUTH_TOKEN)
  const setUserToken = (token: string | undefined) => {
    if (token) {
      set(storageKeys.AUTH_TOKEN, token)
    } else {
      del(storageKeys.AUTH_TOKEN)
    }
  }
  const { data, error } = useMeQuery()

  React.useEffect(() => {
    if (userToken) {
      // If only user token is present
      if (!user && data) {
        // User is not loaded from token, lets do it.
        if (data.me) {
          setUser(data.me)
          // update fresh token
          setUserToken(data.me.token)
        } else {
          // remove old token, it might be broken or old expired one.
          setUserToken(undefined)
        }
        setIsLoading(false)
      } else if (error) {
        // Some error
        setUserToken(undefined)
        setIsLoading(false)
      } else {
        // User is loaded, lets stop loading.
        setIsLoading(false)
      }
    } else {
      setIsLoading(false)
      // user token is missing, app will direct to login when loading is done
    }
  }, [user, userToken, setIsLoading, setUser, data, error])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        setUserToken,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
