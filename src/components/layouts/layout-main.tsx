import { AlertCircle } from 'lucide-react'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import MainNav from 'src/components/navigation/navigation-main'
import NoticeUnsupportedBrowser from 'src/components/notice-unsupported-browser'
import { SiteFooter } from 'src/components/site-footer'
import { Alert, AlertDescription } from 'src/components/ui/alert'
import supportedBrowsers from 'src/utils/supported-browsers'

interface LayoutMainProps {
  children: React.ReactNode,
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children }) => {
  const pathname = usePathname()
  const isAuthRoute = pathname.match(/^\/auth\//)
  const [isSupportedBrowser, setIsSupportedBrowser] = React.useState(true)

  React.useEffect(() => {
    setIsSupportedBrowser(supportedBrowsers.test(navigator.userAgent))
  }, [])

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav />
        </div>
      </header>
      {!isSupportedBrowser && <div className="flex justify-center px-2">
        <Alert variant="destructive" className="lg:w-1/2 md:w-2/3 sm:w-full">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <NoticeUnsupportedBrowser />
          </AlertDescription>
        </Alert>
      </div>}
      {!isAuthRoute && <div className="container grid flex-1 gap-12">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <div className="md:container h-full">
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
