'use client'

import { ApolloProvider } from '@apollo/client'
import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'
import * as React from 'react'
import AuthProvider from 'src/components/auth-provider'
import MainNav from 'src/components/navigation/main-nav'
import { SiteFooter } from 'src/components/site-footer'

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
                <div className="flex min-h-screen flex-col space-y-6">
                  <header className="sticky top-0 z-40 border-b bg-background">
                    <div className="container flex h-16 items-center justify-between py-4">
                      <MainNav />
                    </div>
                  </header>
                  <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
                    <main className="flex w-full flex-1 flex-col overflow-hidden">
                      {children}
                    </main>
                  </div>
                  <SiteFooter className="border-t" />
                </div>
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
