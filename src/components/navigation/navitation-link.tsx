'use client'

import Link from 'next/link'
import * as React from 'react'
import { buttonVariants } from 'src/components/ui/button'
import { routes } from 'src/utils/constants'
import { useIsHrefActive } from 'src/utils/history'
import { cn } from 'src/utils/utils'

interface NavigationLinkProps {
  item: {
    title: string,
    href: string,
  },
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ item }) => {
  const isActive = useIsHrefActive()
  return <Link
    href={item.href}
    className={cn(
      'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
      item.href === routes.SIGN_UP ? cn(buttonVariants({ variant: 'outline' }), 'h-auto my-2') : '',
      isActive(item.href)
        ? 'text-foreground'
        : 'text-foreground/60',
    )}
  >
    {item.title}
  </Link>
}

export default NavigationLink
