import { MoveLeft, MoveRight } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'
import { Button } from 'src/components/ui/button'
import { ScrollArea, ScrollBar } from 'src/components/ui/scroll-area'
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
  const viewportRef = React.useRef<HTMLDivElement>(null)
  const onLeftClickHandler = () => {
    if (viewportRef !== null && viewportRef.current !== null) {
      const allNodes = viewportRef.current.getElementsByTagName('a')
      // Lets find which is current first element.
      const parentPosLeft = viewportRef.current.getBoundingClientRect().left
      const currentFirstElemment = Array.from(allNodes).findIndex(node => node.getBoundingClientRect().left >= parentPosLeft)
      // next element to pull back to start of the parent
      const nextElementLeft = allNodes[(currentFirstElemment - 1)] ? allNodes[(currentFirstElemment - 1)].getBoundingClientRect().left : 0
      // difference between next element and parent
      const movementToLeft = nextElementLeft - parentPosLeft
      viewportRef.current.scrollLeft += movementToLeft
    }
  }
  const onRightClickHandler = () => {
    if (viewportRef !== null && viewportRef.current !== null) {
      const allNodes = viewportRef.current.getElementsByTagName('a')
      // Lets find which is current first element.
      const parentPosLeft = viewportRef.current.getBoundingClientRect().left
      const currentFirstElemment = Array.from(allNodes).findIndex(node => node.getBoundingClientRect().left >= parentPosLeft)
      // next element to pull back to start of the parent
      const nextElementLeft = allNodes[(currentFirstElemment + 1)].getBoundingClientRect().left
      // difference between next element and parent
      const movementToRight = nextElementLeft - parentPosLeft
      viewportRef.current.scrollLeft += movementToRight
    }
  }
  return (
    <>
      <div className="hidden md:block">
        <div className="border-b">
          <div className="flex h-16 items-center">
            <div className={cn('flex items-center space-x-4 lg:space-x-6')}>
              {Object.entries(PortfolioNavTabLinks).map(([tab, link]) => (
                <Link key={tab} href={makePath(link, { portfolioId })} className={cn('text-sm font-medium transition-colors hover:text-primary', selectedTab !== tab && 'text-muted-foreground')}>{PortfolioNavTabLabels[tab as PortfolioNavTab]}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="border-b flex flex-row justify-between items-center">
          <Button variant="tabIcon" size="tabIcon" className="pr-0 mr-1" onClick={onLeftClickHandler}><MoveLeft className="mr-2 h-4 w-4" /></Button>
          <ScrollArea className="whitespace-nowrap" viewportRef={viewportRef}>
            <div className="flex h-16 items-center">
              <div className={cn('w-max flex items-center space-x-4 lg:space-x-6')}>
                {Object.entries(PortfolioNavTabLinks).map(([tab, link]) => (
                  <Link key={tab} href={makePath(link, { portfolioId })} className={cn('text-sm font-medium transition-colors hover:text-primary', selectedTab !== tab && 'text-muted-foreground')}>{PortfolioNavTabLabels[tab as PortfolioNavTab]}</Link>
                ))}
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <Button variant="tabIcon" size="tabIcon" className="pl-0 ml-1" onClick={onRightClickHandler}><MoveRight className="ml-2 h-4 w-4" /></Button>
        </div>
      </div>
    </>
  )
}

export default PortfolioNav
