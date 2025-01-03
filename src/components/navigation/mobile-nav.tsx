import Link from 'next/link'
import * as React from 'react'
import { MyUserResponseFragment } from 'src/generated/graphql'
import { routes } from 'src/utils/constants'
import { useLockBody } from 'src/utils/useLockBody'
import { cn } from 'src/utils/utils'

interface MobileNavProps {
  user?: MyUserResponseFragment,
  publicItems: { title: string, href: string }[],
  signedInItems: { title: string, href: string }[],
}

const MobileNav: React.FC<MobileNavProps> = ({ user, publicItems, signedInItems }) => {
  useLockBody()

  return (
    <div
      className={cn(
        'fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto px-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden'
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link href={routes.HOME} className="flex items-center space-x-2">
          <div className="flex flex-col space-y-2" style={{ background: 'url(/images/logo.svg) no-repeat center center', width: '80px', height: '30px' }}></div>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {!user && publicItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline',
              )}
            >
              {item.title}
            </Link>
          ))}
          {user && signedInItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline',
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
