import { Check, ChevronsDown } from 'lucide-react'
import * as React from 'react'
import { Button } from 'src/components/ui/button'
import { Command, CommandItem, CommandList } from 'src/components/ui/command'
import { Dialog } from 'src/components/ui/dialog'
import { Popover, PopoverContent, PopoverTrigger } from 'src/components/ui/popover'
import { PortfolioResponseFragment } from 'src/generated/graphql'
import { cn } from 'src/utils/utils'

interface PortfolioSelectorProps {
  showNewPortfolioDialog: boolean,
  setShowNewPortfolioDialog: (show: boolean) => void,
  showPopover: boolean,
  setShowPopover: (show: boolean) => void,
  selectedPortfolio: PortfolioResponseFragment,
  setSelectedPortfolio: (portfolio: PortfolioResponseFragment) => void,
  portfolios?: PortfolioResponseFragment[],
}

const PortfolioSelector: React.FC<PortfolioSelectorProps> = ({ showNewPortfolioDialog, setShowNewPortfolioDialog, showPopover, setShowPopover, selectedPortfolio, setSelectedPortfolio, portfolios }) => {
  return (
    <Dialog open={showNewPortfolioDialog} onOpenChange={setShowNewPortfolioDialog}>
      <Popover open={showPopover} onOpenChange={setShowPopover} modal>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className={cn('text-2xl justify-between border-none p-0')}
          >
            <span className="mr-3">{selectedPortfolio.name}</span>
            <ChevronsDown className="ml-auto opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <Command>
            <CommandList>
              {portfolios && portfolios.map((portfolio) => {
                return (
                  <CommandItem
                    key={portfolio.id}
                    onSelect={() => {
                      setSelectedPortfolio(portfolio)
                      setShowPopover(false)
                    }}
                    className="text-sm"
                  >
                    {portfolio.name}
                    <Check
                      className={cn(
                        'ml-auto',
                        selectedPortfolio.id === portfolio.id
                          ? 'opacity-100'
                          : 'opacity-0'
                      )}
                    />
                  </CommandItem>
                )
              })}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </Dialog>
  )
}

export default PortfolioSelector
