'use client'

import Link from 'next/link'
import * as React from 'react'
import { buttonVariants } from 'src/components/ui/button'
import { Route, routes } from 'src/utils/constants'
import { useIsHrefActive } from 'src/utils/history'
import { cn } from 'src/utils/utils'

export type MenuItem = {
  title: string,
  href: Route,
}

interface NavigationLinkProps {
  item:MenuItem,
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ item }) => {
  const isActive = useIsHrefActive()
  return <Link
    href={routes[item.href]}
    className={cn(
      'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
      item.href === 'SIGN_UP' ? cn(buttonVariants({ variant: 'outline' }), 'h-auto my-2') : '',
      isActive(item.href)
        ? 'text-foreground'
        : 'text-foreground/60',
    )}
  >
    {item.title}
  </Link>
}

export default NavigationLink
