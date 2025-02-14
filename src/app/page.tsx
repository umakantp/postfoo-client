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
        <div className="flex flex-col items-center">
          <h1 className="font-heading text-5xl text-center">Your Personal Book Keeper</h1>
          <p className="text-lg text-muted-foreground text-center w-full lg:w-2/3 mt-3">Keep your investments, government schemes info, insurances, real estates information, bank accounts, wills and, more at once place accessible to you & your family at any time.</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="grid grid-cols-1 gap-4 mb-10 md:grid-cols-3">
          <div>
            <h1 className="font-heading text-2xl text-center">No spam</h1>
            <p className="text-lg text-muted-foreground text-center">No advertisements, no tracking, no data sharing with third parties, no spam emails.<br /><br />All the data is only stored with us and only shared with whom you give access.</p>
          </div>
          <div>
            <h1 className="font-heading text-2xl text-center">Multiple users</h1>
            <p className="text-lg text-muted-foreground text-center">Add your family members, and share them data with read access.<br /><br />They can directly access the data or request our support to get the data.</p>
          </div>
          <div>
            <h1 className="font-heading text-2xl text-center">More features</h1>
            <p className="text-lg text-muted-foreground text-center">Manage multiple portfolios, including folios for all family members.<br /><br />More features to be rolled out soon for auto sync data from various sources.</p>
          </div>
        </div>
        <Button><Link href={routes.PRICING}>Get Started</Link></Button>
      </div>
    </div>
  )
}

export default Page
