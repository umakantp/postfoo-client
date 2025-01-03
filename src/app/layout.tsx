'use client'

import { ApolloProvider } from '@apollo/client'
import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'
import * as React from 'react'
import LayoutMain from 'src/app/layout-main'
import AuthProvider from 'src/components/auth-provider'

import ThemeProvider from 'src/components/theme-provider'
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
  const queryClient = getClient(token)
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
        <ApolloProvider client={queryClient}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AuthProvider>
              <>
                <LayoutMain>
                  {children}
                </LayoutMain>
                <Toaster />
              </>
            </AuthProvider>
          </ThemeProvider>
        </ApolloProvider>
      </body>
    </html>
  )
}

export default RootLayout
