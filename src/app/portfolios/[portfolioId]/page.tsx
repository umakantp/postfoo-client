import { Metadata } from 'next'
import * as React from 'react'
import Portfolio from 'src/components/portfolio'

export const metadata: Metadata = {
  title: 'Your Portfolios',
  description: 'See and manage your portfolios',
}

const Page: React.FC = () => {
  return (
    <div className="flex flex-col mt-8">
      <Portfolio />
    </div>
  )
}

export default Page
