'use client'

import { ApolloProvider } from '@apollo/client'
import * as React from 'react'
import LayoutMain from 'src/components/layouts/layout-main'
import AuthProvider from 'src/components/providers/auth-provider'
import { HoneypotInputProps, HoneypotProvider } from 'src/components/providers/honeypot-provider'

import ThemeProvider from 'src/components/providers/theme-provider'
import { Toaster } from 'src/components/ui/toaster'
import 'src/styles/global.css'
import { getClient } from 'src/utils/apolloClient'
import { get, storageKeys } from 'src/utils/storage'

interface LayoutAppProps {
  children: React.ReactNode,
  honeypotInputs: HoneypotInputProps,
}

const LayoutApp: React.FC<LayoutAppProps> = ({ children , honeypotInputs}) => {
  const token = get<string | undefined>(storageKeys.AUTH_TOKEN)
  const [localToken, setLocalToken] = React.useState<string | undefined>(token)
  const queryClient = getClient(localToken)

  return (
    <ApolloProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <HoneypotProvider {...honeypotInputs}>
          <AuthProvider onLogin={(user) => {
            setLocalToken(user?.token)
          }}>
            <>
              <LayoutMain>
                {children}
              </LayoutMain>
              <Toaster />
            </>
          </AuthProvider>
        </HoneypotProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default LayoutApp
