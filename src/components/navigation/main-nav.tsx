'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import * as React from 'react'
import { useAuth } from 'src/components/auth-provider'

import MobileNav from 'src/components/navigation/mobile-nav'
import { Icons } from 'src/components/ui/icons'
import { routes } from 'src/utils/constants'
import { cn } from 'src/utils/utils'

const MainNav: React.FC = () => {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)
  const { user } = useAuth()

  const publicItems = [
    {
      title: 'Home',
      href: routes.HOME,
    },
    {
      title: 'Pricing',
      href: routes.PRICING,
    },
    {
      title: 'Sign In',
      href: routes.SIGN_IN,
    },
    {
      title: 'Sign Up',
      href: routes.SIGN_UP,
    },
  ]

  const signedInItems = [
    {
      title: 'Portfolio',
      href: routes.PORTFOLIO,
    },
    {
      title: 'Subscription',
      href: routes.ACCOUNT_SUBSCRIPTION,
    },
    {
      title: 'Settings',
      href: routes.ACCOUNT_PROFILE,
    },
    {
      title: 'Sign Out',
      href: routes.SIGN_OUT,
    },
  ]

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href={routes.HOME} className="hidden items-center space-x-2 md:flex">
        <div className="flex flex-col space-y-2" style={{ background: 'url(/images/logo.svg) no-repeat center center', width: '130px', height: '52px' }}></div>
      </Link>
      <nav className="hidden gap-6 md:flex">
        {user && signedInItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
              item.href.startsWith(`/${segment}`)
                ? 'text-foreground'
                : 'text-foreground/60',
            )}
          >
            {item.title}
          </Link>
        ))}
        {!user && publicItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
              item.href.startsWith(`/${segment}`)
                ? 'text-foreground'
                : 'text-foreground/60',
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <div className="flex flex-row justify-center" style={{ width: '80px' }}><Icons.close /></div> : <div className="flex flex-col space-y-2" style={{ background: 'url(/images/logo.svg) no-repeat center center', width: '80px', height: '30px' }}></div>}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && (
        <MobileNav publicItems={publicItems} signedInItems={signedInItems} />
      )}
    </div>
  )
}

export default MainNav
