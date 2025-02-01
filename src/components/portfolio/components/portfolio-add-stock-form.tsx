'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'src/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from 'src/components/ui/command'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from 'src/components/ui/form'
import { Input } from 'src/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from 'src/components/ui/popover'
import { StockResponseFragment, useCreatePortfolioStockMutation, useStocksQuery } from 'src/generated/graphql'
import { portfolioAddStockFormSchema } from 'src/utils/form'
import logger from 'src/utils/logger'
import { toast } from 'src/utils/toast'
import { cn } from 'src/utils/utils'
import { z } from 'zod'

type PortfolioAddStockFormValues = z.infer<typeof portfolioAddStockFormSchema>

const defaultValues: Partial<PortfolioAddStockFormValues> = {
  stockId: '',
  cost: 0,
  units: 0,
}

interface PortfolioAddStockFormProps {
  portfolioId: string,
  setShowAddStockDialog: (show: boolean) => void,
}

const PortfolioAddStockForm: React.FC<PortfolioAddStockFormProps> = ({ portfolioId, setShowAddStockDialog }) => {
  const createPortfolioStock = useCreatePortfolioStockMutation()

  const form = useForm<PortfolioAddStockFormValues>({
    resolver: zodResolver(portfolioAddStockFormSchema),
    defaultValues,
    mode: 'onChange',
  })
  const { data: stocksData } = useStocksQuery()
  const stocks: StockResponseFragment[] = stocksData?.stocks.nodes || []

  const onSubmit = async (data: PortfolioAddStockFormValues) => {
    try {
      const createPortfolioStockResult = await createPortfolioStock.mutateAsync({
        input: {
          stockId: data.stockId,
          cost: data.cost,
          portfolioId,
          units: data.units,
        },
      })
      if (createPortfolioStockResult.createPortfolioStock) {
        return setShowAddStockDialog(false)
      }
    } catch (error: any) {
      if (error.graphQLErrors) {
        error.graphQLErrors.map((err: any) => {
          if (err?.extensions?.fieldName) {
            form.setError(err.extensions.fieldName, {
              message: err.message,
            })
          }
        })
      } else {
        logger.error(error)
      }
    }
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="stockId"
          render={({ field }) => {
            const sf = field.value ? stocks.find(stock => stock.id === field.value) : undefined
            return (<FormItem className="flex flex-col">
              <FormLabel>Name</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        'w-full justify-between',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {sf ? `${sf.name}-${sf.symbol}-${sf.exchange}` : 'Select stock'}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Search stock..." />
                    <CommandList>
                      <CommandEmpty>No stock found</CommandEmpty>
                      <CommandGroup>
                        {stocks.map(stock => (
                          <CommandItem
                            key={stock.id}
                            value={stock.id}
                            onSelect={() => {
                              form.setValue('stockId', stock.id)
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2',
                                stock.id === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                            {stock.name}-{stock.symbol}-{stock.exchange}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select a stock to add to the portfolio
              </FormDescription>
              <FormMessage />
            </FormItem>)
          }}
        />
        <FormField
          control={form.control}
          name="units"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shares</FormLabel>
              <FormControl>
                <Input placeholder="234.23" {...field} />
              </FormControl>
              <FormDescription>
                How many shares do you have?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cost"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cost</FormLabel>
              <FormControl>
                <Input startAdornment="₹" placeholder="45000" {...field} />
              </FormControl>
              <FormDescription>
                How much money did you spend on these shares?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add Stock</Button>
      </form>
    </Form>
  )
}

export default PortfolioAddStockForm

