import { Metadata } from 'next'
import Link from 'next/link'
import * as React from 'react'
import { Button } from 'src/components/ui/button'
import { routes } from 'src/utils/constants'

export const metadata: Metadata = {
  title: 'PostFoo - Track your investments',
  description: 'Track your investments, and manage your portfolios on PostFoo.',
}

const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="font-heading text-5xl text-center">Your Personal Investment Tracker</h1>
          <p className="text-lg text-muted-foreground text-center">Track your investments, and manage your portfolios.</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="grid grid-cols-1 gap-4 mb-10 md:grid-cols-3">
          <div>
            <h1 className="font-heading text-2xl text-center">No spam</h1>
            <p className="text-lg text-muted-foreground text-center">No advertisements, no tracking, no data sharing, no spam emails.</p>
          </div>
          <div>
            <h1 className="font-heading text-2xl text-center">Multiple users</h1>
            <p className="text-lg text-muted-foreground text-center">Add your family members, and share them data with write/read access.</p>
          </div>
          <div>
            <h1 className="font-heading text-2xl text-center">Multiple portfolios</h1>
            <p className="text-lg text-muted-foreground text-center">Manage multiple portfolios, and track investments of family members.</p>
          </div>
        </div>
        <Button><Link href={routes.PRICING}>Get Started</Link></Button>
      </div>
    </div>
  )
}

export default Page
