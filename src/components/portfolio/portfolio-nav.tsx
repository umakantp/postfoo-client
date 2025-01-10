import Link from 'next/link'
import * as React from 'react'
import { Route } from 'src/utils/constants'
import { makePath } from 'src/utils/history'
import { cn } from 'src/utils/utils'

export enum PortfolioNavTab {
  Dashboard = 'dashboard',
  MutualFunds = 'funds',
  Stocks = 'stocks',
  Schemes = 'schemes',
  Insurances = 'insurances',
  Re = 're',
  Personal = 'personal',
}

export const PortfolioNavTabLinks: Record<PortfolioNavTab, Route> = {
  [PortfolioNavTab.Dashboard]: 'PORTFOLIO_DETAIL',
  [PortfolioNavTab.MutualFunds]: 'PORTFOLIO_DETAIL_FUNDS',
  [PortfolioNavTab.Stocks]: 'PORTFOLIO_DETAIL_STOCKS',
  [PortfolioNavTab.Schemes]: 'PORTFOLIO_DETAIL_SCHEMES',
  [PortfolioNavTab.Insurances]: 'PORTFOLIO_DETAIL_INSURANCES',
  [PortfolioNavTab.Re]: 'PORTFOLIO_DETAIL_RE',
  [PortfolioNavTab.Personal]: 'PORTFOLIO_DETAIL_PERSONAL',
}

const PortfolioNavTabLabels: Record<PortfolioNavTab, string> = {
  [PortfolioNavTab.Dashboard]: 'Dashboard',
  [PortfolioNavTab.MutualFunds]: 'Mutual Funds',
  [PortfolioNavTab.Stocks]: 'Stocks',
  [PortfolioNavTab.Schemes]: 'FD/NPS/PPF/EPF',
  [PortfolioNavTab.Insurances]: 'Insurances',
  [PortfolioNavTab.Re]: 'RE',
  [PortfolioNavTab.Personal]: 'Personal',
}

interface PortfolioNavProps {
  portfolioId: string,
  selectedTab: PortfolioNavTab,
}

const PortfolioNav: React.FC<PortfolioNavProps> = ({ portfolioId, selectedTab }) => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center">
        <div className={cn('flex items-center space-x-4 lg:space-x-6')}>
          {Object.entries(PortfolioNavTabLinks).map(([tab, link]) => (
            <Link key={tab} href={makePath(link, { portfolioId })} className={cn('text-sm font-medium transition-colors hover:text-primary', selectedTab !== tab && 'text-muted-foreground')}>{PortfolioNavTabLabels[tab as PortfolioNavTab]}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioNav
