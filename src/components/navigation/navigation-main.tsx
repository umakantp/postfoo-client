'use client'

import Link from 'next/link'
import * as React from 'react'
import { useAuth } from 'src/components/providers/auth-provider'

import NavigationLink, { MenuItem } from 'src/components/navigation/navigation-link'
import MobileNav from 'src/components/navigation/navigation-mobile'
import { Icons } from 'src/components/ui/icons'
import { routes } from 'src/utils/constants'


const MainNav: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)
  const { user } = useAuth()

  const publicItems: MenuItem[] = [
    {
      title: 'Home',
      href: 'HOME',
    },
    {
      title: 'Pricing',
      href: 'PRICING',
    },
    {
      title: 'Sign In',
      href: 'SIGN_IN',
    },
    {
      title: 'Sign Up',
      href: 'SIGN_UP',
    },
  ]

  const signedInItems: MenuItem[] = [
    {
      title: 'Portfolio',
      href: 'PORTFOLIOS',
    },
    {
      title: 'Subscription',
      href: 'ACCOUNT_SUBSCRIPTION',
    },
    {
      title: 'Settings',
      href: 'ACCOUNT_PROFILE',
    },
    {
      title: 'Sign Out',
      href: 'SIGN_OUT',
    },
  ]

  return (
    <div className="flex justify-between w-full gap-6 md:gap-10">
      <Link href={routes.HOME} className="hidden items-center space-x-2 md:flex self-right">
        <div className="flex flex-col space-y-2" style={{ background: 'url(/images/logo.svg) no-repeat center center', width: '130px', height: '52px' }}></div>
      </Link>
      <nav className="hidden gap-6 md:flex">
        {user && signedInItems.map((item, index) => (
          <NavigationLink key={index} item={item} />
        ))}
        {!user && publicItems.map((item, index) => (
          <NavigationLink key={index} item={item} />
        ))}
      </nav>
      <div className="md:hidden flex flex-col space-y-2" style={{ background: 'url(/images/logo.svg) no-repeat center center', width: '80px', height: '30px' }}></div>
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <div className="flex flex-row justify-center"><Icons.close /></div> : undefined}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && (
        <MobileNav publicItems={publicItems} signedInItems={signedInItems} />
      )}
    </div>
  )
}

export default MainNav
