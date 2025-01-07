import { Metadata } from 'next'
import * as React from 'react'
import PricingPlans from 'src/components/pricing-plants'

export const metadata: Metadata = {
  title: 'PostFoo - Track your investments',
  description: 'Track your investments, and manage your portfolios on PostFoo.',
}

const Page: React.FC = () => {
  return (
    <div className="py-8">
      <section className="text-center">
        <h2 className="text-3xl font-bold">Pricing Plans</h2>
        <p className="text-xl pt-1">Choose the plan that's right for you</p>
        <br />
      </section>
      <PricingPlans />
    </div>
  )
}

export default Page
