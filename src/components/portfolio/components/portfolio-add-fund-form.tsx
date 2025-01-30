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
import { FundResponseFragment, useCreatePortfolioFundMutation, useFundsQuery } from 'src/generated/graphql'
import { portfolioAddFundFormSchema } from 'src/utils/form'
import logger from 'src/utils/logger'
import { toast } from 'src/utils/toast'
import { cn } from 'src/utils/utils'
import { z } from 'zod'

type PortfolioAddFundFormValues = z.infer<typeof portfolioAddFundFormSchema>

const defaultValues: Partial<PortfolioAddFundFormValues> = {
  fundId: '',
  cost: 0,
  units: 0,
}

interface PortfolioAddFundFormProps {
  portfolioId: string,
  setShowAddFundDialog: (show: boolean) => void,
}

const PortfolioAddFundForm: React.FC<PortfolioAddFundFormProps> = ({ portfolioId, setShowAddFundDialog }) => {
  const createPortfolioFund = useCreatePortfolioFundMutation()

  const form = useForm<PortfolioAddFundFormValues>({
    resolver: zodResolver(portfolioAddFundFormSchema),
    defaultValues,
    mode: 'onChange',
  })
  const { data: fundsData } = useFundsQuery()
  const funds: FundResponseFragment[] = fundsData?.funds.nodes || []

  const onSubmit = async (data: PortfolioAddFundFormValues) => {
    try {
      const createPortfolioFundResult = await createPortfolioFund.mutateAsync({
        input: {
          fundId: data.fundId,
          cost: data.cost,
          portfolioId,
          units: data.units,
        },
      })
      if (createPortfolioFundResult.createPortfolioFund) {
        return setShowAddFundDialog(false)
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
          name="fundId"
          render={({ field }) => {
            const sf = field.value ? funds.find(fund => fund.id === field.value) : undefined
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
                      {sf ? `${sf.name}-${sf.type}-${sf.plan}` : 'Select fund'}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Search fund..." />
                    <CommandList>
                      <CommandEmpty>No fund found</CommandEmpty>
                      <CommandGroup>
                        {funds.map(fund => (
                          <CommandItem
                            key={fund.id}
                            value={fund.id}
                            onSelect={() => {
                              form.setValue('fundId', fund.id)
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2',
                                fund.id === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                            {fund.name}-{fund.type}-{fund.plan}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select a fund to add to the portfolio
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
              <FormLabel>Units</FormLabel>
              <FormControl>
                <Input placeholder="234.23" {...field} />
              </FormControl>
              <FormDescription>
                How many units do you have?
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
                How much money did you spend on these units?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add Fund</Button>
      </form>
    </Form>
  )
}

export default PortfolioAddFundForm

