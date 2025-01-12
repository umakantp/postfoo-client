'use client'

import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import * as React from 'react'
import PageTitle from 'src/components/commons/page-title'
import Para from 'src/components/commons/para'
import Placeholder from 'src/components/placeholder'
import PortfolioSelector from 'src/components/portfolio/components/portfolio-selector'
import PortfolioDashboard from 'src/components/portfolio/portfolio-dashboard'
import PortfolioFunds from 'src/components/portfolio/portfolio-funds'
import PortfolioNav, { PortfolioNavTab, PortfolioNavTabLinks } from 'src/components/portfolio/portfolio-nav'
import { useAuth } from 'src/components/providers/auth-provider'
import { buttonVariants } from 'src/components/ui/button'
import { PortfolioResponseFragment, usePortfolioQuery } from 'src/generated/graphql'
import { routes } from 'src/utils/constants'
import { useMatchedRoute } from 'src/utils/history'
import { cn } from 'src/utils/utils'

const Portfolios: React.FC = () => {
  const { portfolioId: portfolioIdParam  } = useParams()
  const { user }  = useAuth()
  const [showPopover, setShowPopover] = React.useState(false)
  const [showNewPortfolioDialog, setShowNewPortfolioDialog] = React.useState(false)
  const [selectedTab, setSelectedTab] = React.useState<PortfolioNavTab>(PortfolioNavTab.Dashboard)
  // Either from param or read first portfolio id as default portfolio
  const portfolioId = (portfolioIdParam as string | undefined) || user?.memberships?.[0]?.portfolio.id
  const { data } = usePortfolioQuery({ variables: { portfolioId: portfolioId! }, skip: !portfolioId })
  const [selectedPortfolio, setSelectedPortfolio] = React.useState<PortfolioResponseFragment | undefined>()
  const matchedRoute = useMatchedRoute()

  React.useEffect(() => {
    if (data && data.portfolio.id !== selectedPortfolio?.id) {
      setSelectedPortfolio(data.portfolio)
    }
  }, [data, selectedPortfolio, setSelectedPortfolio])

  React.useEffect(() => {
    Object.entries(PortfolioNavTabLinks).map(([tab, route]) => {
      if (routes[route] === matchedRoute) {
        setSelectedTab(tab as PortfolioNavTab)
      }
    })
  }, [matchedRoute, setSelectedTab])

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

  if (!data || !selectedPortfolio) {
    return <Placeholder />
  }
  const portfolios = user?.memberships?.map(membership => membership.portfolio)

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div>
          <PortfolioSelector
            showNewPortfolioDialog={showNewPortfolioDialog}
            setShowNewPortfolioDialog={setShowNewPortfolioDialog}
            showPopover={showPopover}
            setShowPopover={setShowPopover}
            selectedPortfolio={selectedPortfolio}
            setSelectedPortfolio={setSelectedPortfolio}
            portfolios={portfolios}
          />
        </div>
        <div className='flex flex-row items-center'>
          <Link className={cn(buttonVariants({ variant: 'outline', size: 'xs' }))} href={routes.PORTFOLIO_CREATE}>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add portfolio
          </Link>
        </div>
      </div>
      <div>
        <PortfolioNav portfolioId={portfolioId} selectedTab={selectedTab} />
        <div className="my-3">
          {selectedTab === PortfolioNavTab.Dashboard && <PortfolioDashboard/>}
          {selectedTab === PortfolioNavTab.MutualFunds && <PortfolioFunds portfolio={selectedPortfolio} />}
        </div>
      </div>
    </div>
  )
}

export default Portfolios
