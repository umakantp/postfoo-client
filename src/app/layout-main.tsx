import { usePathname } from 'next/navigation'
import * as React from 'react'
import MainNav from 'src/components/navigation/navigation-main'
import { SiteFooter } from 'src/components/site-footer'

interface LayoutMainProps {
  children: React.ReactNode,
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children }) => {
  const pathname = usePathname()
  const isAuthRoute = pathname.match(/^\/auth\//)
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav />
        </div>
      </header>
      {!isAuthRoute && <div className="container grid flex-1 gap-12">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <div className="container">
            {children}
          </div>
        </main>
      </div>}
      {isAuthRoute && <>{children}</>}
      <SiteFooter className="border-t" />
    </div>
  )
}

export default LayoutMain
