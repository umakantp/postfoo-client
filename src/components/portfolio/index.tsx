'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import * as React from 'react'
import { useAuth } from 'src/components/auth-provider'
import PageTitle from 'src/components/commons/page-title'
import Para from 'src/components/commons/para'
import Placeholder from 'src/components/placeholder'
import { buttonVariants } from 'src/components/ui/button'
import { usePortfolioQuery } from 'src/generated/graphql'
import { routes } from 'src/utils/constants'
import { cn } from 'src/utils/utils'

const Portfolios: React.FC = () => {
  const { portfolioId: portfolioIdParam  } = useParams()
  const { user }  = useAuth()
  // Either from param or read first portfolio id as default portfolio
  const portfolioId = (portfolioIdParam as string | undefined) || user?.memberships?.[0]?.portfolio.id
  const { data } = usePortfolioQuery({ variables: { portfolioId: portfolioId! }, skip: !portfolioId })

  if (!portfolioId) {
    return <div>
      <PageTitle title="Portfolios" />
      <Para>
        You have not created a portfolio yet. Please create a portfolio to start using PostFoo.
        <br /><br />
        <Link className={cn(buttonVariants({ variant: 'default' }))} href={routes.PORTFOLIO_CREATE}>Create Portfolio</Link>
      </Para>
    </div>
  }

  if (!data) {
    return <Placeholder />
  }

  const { portfolio } = data

  return (
    <div>
      <PageTitle title={portfolio.name} />
      <Para>
        Demo test
      </Para>
    </div>
  )
}

export default Portfolios
