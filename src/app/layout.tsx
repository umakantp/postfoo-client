'use client'

import { ApolloProvider } from '@apollo/client'
import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'
import * as React from 'react'
import LayoutMain from 'src/app/layout-main'
import Placeholder from 'src/components/placeholder'
import AuthProvider from 'src/components/providers/auth-provider'
import { fetchHoneypotInputs, HoneypotInputProps, HoneypotProvider } from 'src/components/providers/honeypot-provider'

import ThemeProvider from 'src/components/providers/theme-provider'
import { Toaster } from 'src/components/ui/toaster'
import 'src/styles/global.css'
import { getClient } from 'src/utils/apolloClient'
import { get, storageKeys } from 'src/utils/storage'
import { cn } from 'src/utils/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: '../../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})

interface RootLayoutProps {
  children: React.ReactNode,
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const token = get<string | undefined>(storageKeys.AUTH_TOKEN)
  const [localToken, setLocalToken] = React.useState<string | undefined>(token)
  const queryClient = getClient(localToken)
  const [honeypotCheck, setHoneypotCheck] = React.useState<boolean>(false)
  const [honeypotInputs, setHoneypotInputs] = React.useState<Partial<HoneypotInputProps>>({})

  React.useEffect(() => {
    fetchHoneypotInputs().then((data) => {
      setHoneypotInputs(data)
      setHoneypotCheck(true)
    })
  }, [fetchHoneypotInputs])

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable
        )}
      >
        {!honeypotCheck && <div><Placeholder /></div>}
        {honeypotCheck && <ApolloProvider client={queryClient}>
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
        </ApolloProvider>}
      </body>
    </html>
  )
}

export default RootLayout
