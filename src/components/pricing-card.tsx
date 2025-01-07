import Link from 'next/link'
import * as React from 'react'
import { Button, buttonVariants } from 'src/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'src/components/ui/card'
import { Icons } from 'src/components/ui/icons'
import { cn } from 'src/utils/utils'

interface PricingCardProps {
  isYearly?: boolean,
  title: string,
  monthlyPrice?: number,
  yearlyPrice?: number,
  description: string,
  features: string[],
  actionLabel: string,
  popular?: boolean,
  exclusive?: boolean,
  actionLink?: string,
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, features, actionLabel, actionLink, popular, monthlyPrice, yearlyPrice, isYearly }) => {
  return (
    <Card className={cn(`w-72 flex flex-col justify-between py-1 ${popular ? 'border-rose-400' : 'border-zinc-700'} mx-auto sm:mx-0`)}>
      <div>
        <CardHeader className="pb-8 pt-4">
          {isYearly && yearlyPrice && monthlyPrice ? (
            <div className="flex justify-between">
              <CardTitle className="text-zinc-700 dark:text-zinc-400 text-lg">{title}</CardTitle>
              <div
                className={cn('px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white', {
                  'bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black ': popular,
                })}>
                Save ₹{monthlyPrice * 12 - yearlyPrice}
              </div>
            </div>
          ) : (
            <CardTitle className="text-zinc-700 dark:text-zinc-400 text-lg">{title}</CardTitle>
          )}
          <div className="flex gap-0.5">
            <h3 className="text-3xl font-bold">{yearlyPrice && isYearly ? '₹' + yearlyPrice : monthlyPrice ? '₹' + monthlyPrice : 'Free'}</h3>
            <span className="flex flex-col justify-end text-sm mb-1">{yearlyPrice && isYearly ? '/year' : monthlyPrice ? '/month' : null}</span>
          </div>
          <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {features.map((feature: string) => (
            <div className="flex gap-2" key={feature}>
              <Icons.checkCircle2 size={18} className="my-auto text-green-400" />
              <p className="pt-0.5 text-zinc-700 dark:text-zinc-400 text-sm">{feature}</p>
            </div>
          ))}
        </CardContent>
      </div>
      <CardFooter className="mt-2">
        {!actionLink && <Button disabled className="relative inline-flex w-full items-center justify-center rounded-md px-6 font-medium transition-colors focus:outline-none">
          <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
          {actionLabel}
        </Button>}
        {actionLink && <Link className={cn(buttonVariants({ variant: 'outline' }), 'relative inline-flex w-full items-center justify-center rounded-md px-6 font-medium transition-colors focus:outline-none')} href={actionLink}>
          <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
          {actionLabel}
        </Link>}
      </CardFooter>
    </Card>
  )
}

export default PricingCard
