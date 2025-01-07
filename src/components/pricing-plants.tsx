'use client'

import * as React from 'react'
import PricingCard from 'src/components/pricing-card'
import { Tabs, TabsList, TabsTrigger } from 'src/components/ui/tabs'
import { routes } from 'src/utils/constants'

const plans = [
  {
    title: 'Basic',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Good to get you started for trying out the features',
    features: ['Create one portfolio', 'Add max 5 currentfunds', 'Add max 30 current stocks'],
    actionLabel: 'Sign Up',
    actionLink: routes.SIGN_UP,
  },
  {
    title: 'Pro',
    monthlyPrice: 100,
    yearlyPrice: 1000,
    description: 'Perfect when you are serious about tracking your investments',
    features: ['Create unlimited portfolios', 'Add unlimited funds', 'Add unlimited stocks'],
    actionLabel: 'Coming Soon',
    popular: true,
  },
]

const PricingPlans: React.FC = () => {
  const [isYearly, setIsYearly] = React.useState(false)
  const onSwitch = (value: string) => setIsYearly(parseInt(value) === 1)

  return (
    <>
      <Tabs defaultValue="0" className="w-40 mx-auto" onValueChange={onSwitch}>
        <TabsList className="py-6 px-2">
          <TabsTrigger value="0" className="text-base">
            Monthly
          </TabsTrigger>
          <TabsTrigger value="1" className="text-base">
            Yearly
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        {plans.map(plan => (
          <PricingCard key={plan.title} {...plan} isYearly={isYearly} />
        ))}
      </section>
    </>
  )
}

export default PricingPlans
