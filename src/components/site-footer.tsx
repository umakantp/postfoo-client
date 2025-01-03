import * as React from 'react'

import { cn } from 'src/utils/utils'

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="flex flex-col space-y-2" style={{ background: 'url(/images/logo.svg) no-repeat center center', width: '56px', height: '20px' }}></div>
          <p className="text-center text-sm leading-loose md:text-left">
            Created by{' '}
            <a
              href="https://x.com/TheRealUmakant"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              umakant
            </a>
            . Based on{' '}
            <a
              href="https://github.com/shadcn-ui/taxonomy"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Shadcn Taxonomy
            </a>
            . Open source and available on{' '}
            <a
              href="https://github.com/umakantp/postfoo-client"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
