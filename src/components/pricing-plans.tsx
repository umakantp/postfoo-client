'use client'

import * as React from 'react'
import PricingCard from 'src/components/pricing-card'
import { Tabs, TabsList, TabsTrigger } from 'src/components/ui/tabs'
import { SubscriptionPlan, usePlansQuery } from 'src/generated/graphql'
import { routes } from 'src/utils/constants'

const links = {
  [SubscriptionPlan.BASIC]: { link: routes.SIGN_UP, text: 'Sign Up' },
  [SubscriptionPlan.PRO]: { link: undefined, text: 'Coming Soon' },
  [SubscriptionPlan.ADVANCED]: { link: undefined, text: 'Coming Soon' },
}

const PricingPlans: React.FC = () => {
  const { data } = usePlansQuery()
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
        {data?.plans.plans.map(plan => (
          <PricingCard key={plan.title} {...plan} isYearly={isYearly} actionLabel={links[plan.id].text} actionLink={links[plan.id].link} />
        ))}
      </section>
    </>
  )
}

export default PricingPlans
