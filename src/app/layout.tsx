import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'
import * as React from 'react'
import LayoutApp from 'src/components/layouts/layout-app'
import { HoneypotInputProps } from 'src/components/providers/honeypot-provider'

import 'src/styles/global.css'
import logger from 'src/utils/logger'
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
  let honeypotInputs: HoneypotInputProps | undefined
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-honeypot-inputs`, { cache: 'no-store' })
    const data = await response.json()
    honeypotInputs = data.honeypot
  } catch (error) {
    logger.error('Failed to fetch honeypot inputs')
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable,
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
