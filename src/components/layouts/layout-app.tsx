'use client'

import * as React from 'react'
import LayoutMain from 'src/components/layouts/layout-main'
import AuthProvider from 'src/components/providers/auth-provider'
import { HoneypotInputProps, HoneypotProvider } from 'src/components/providers/honeypot-provider'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ThemeProvider from 'src/components/providers/theme-provider'
import { Toaster } from 'src/components/ui/toaster'
import 'src/styles/global.css'

interface LayoutAppProps {
  children: React.ReactNode,
  honeypotInputs: HoneypotInputProps,
}

const LayoutApp: React.FC<LayoutAppProps> = ({ children , honeypotInputs}) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <HoneypotProvider {...honeypotInputs}>
          <AuthProvider>
            <>
              <LayoutMain>
                {children}
              </LayoutMain>
              <Toaster />
            </>
          </AuthProvider>
        </HoneypotProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default LayoutApp
