import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'
import * as React from 'react'
import LayoutApp from 'src/components/layouts/layout-app'

import 'src/styles/global.css'
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

const RootLayout: React.FC<RootLayoutProps> = async ({ children }) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-honeypot-inputs`, { cache: 'no-store' })
  const data = await response.json()
  const honeypotInputs = data.honeypot

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
        <LayoutApp honeypotInputs={honeypotInputs}>
          {children}
        </LayoutApp>
      </body>
    </html>
  )
}

export default RootLayout
