'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'src/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from 'src/components/ui/form'
import { Input } from 'src/components/ui/input'
import { Textarea } from 'src/components/ui/textarea'
import { useCreatePortfolioMutation } from 'src/generated/graphql'
import { portfolioFormSchema } from 'src/utils/form'
import { useNavigation } from 'src/utils/history'
import { logOrDisplayError } from 'src/utils/utils'
import { z } from 'zod'

type PortfolioFormValues = z.infer<typeof portfolioFormSchema>

const defaultValues: Partial<PortfolioFormValues> = {
  name: '',
  description: '',
}

const PortfolioForm: React.FC = () => {
  const createPortfolio = useCreatePortfolioMutation()
  const navigate = useNavigation()
  const form = useForm<PortfolioFormValues>({
    resolver: zodResolver(portfolioFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  const onSubmit = async (data: PortfolioFormValues) => {
    try {
      const createPortfolioResult = await createPortfolio.mutateAsync({
        input: {
          name: data.name,
          description: data.description,
        },
      })
      if (createPortfolioResult.createPortfolio) {
        const portfolio = createPortfolioResult.createPortfolio
        return navigate('PORTFOLIO_DETAIL', { portfolioId: portfolio.id }, { })
      }
    } catch (error: any) {
      logOrDisplayError<PortfolioFormValues>(error, form)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {form.formState.errors?.general && (
          <p className="px-1 text-sm text-red-600">
            {form.formState.errors.general.message}
          </p>
        )}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="My Debt Funds" {...field} />
              </FormControl>
              <FormDescription>
                This is how your portfolio will be named in the app
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="My all debut funds holding on the Zerodha Coin."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Write a little on what this portfolio is about
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create portfolio</Button>
      </form>
    </Form>
  )
}

export default PortfolioForm

