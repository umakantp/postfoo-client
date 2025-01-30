'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import Link from 'next/link'
import { useAuth } from 'src/components/providers/auth-provider'
import { HoneypotInputs, useHoneypot } from 'src/components/providers/honeypot-provider'
import { buttonVariants } from 'src/components/ui/button'
import { Icons } from 'src/components/ui/icons'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'
import { PhoneInput } from 'src/components/ui/phone-input'
import { useSignInMutation } from 'src/generated/graphql'
import { HONEYPOT_DEFAULT_VALID_FROM_FIELD_NAME, Route, routes } from 'src/utils/constants'
import { signinSchema } from 'src/utils/form'
import { useNavigation } from 'src/utils/history'
import logger from 'src/utils/logger'
import { cn, delay, getHoneypotFormValues } from 'src/utils/utils'

type SignInFormData = z.infer<typeof signinSchema>

const SignInForm: React.FC = () => {
  const { encryptedValidFrom } = useHoneypot()
  const {
    register,
    getValues,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    defaultValues: {
      [HONEYPOT_DEFAULT_VALID_FROM_FIELD_NAME]: encryptedValidFrom,
    },
    resolver: zodResolver(signinSchema),
  })
  const { setUser } = useAuth()
  const searchParams = useSearchParams()
  const signIn = useSignInMutation()
  const isLoading = signIn.isPending
  const navigate = useNavigation()

  async function onSubmit(data: SignInFormData) {
    try {
      const signInResult = await signIn.mutateAsync({
        input: {
          mobile: data.mobile,
          password: data.password,
          ...getHoneypotFormValues(data),
        },
      })

      if (signInResult.signIn) {
        const user = signInResult.signIn
        setUser(user)
        // Provider takes to time to set the user in state
        await delay(100)
        const fromRoute = searchParams?.get('from')
        return navigate(fromRoute ? fromRoute as Route : 'PORTFOLIOS')
      }
    } catch (error: any) {
      if (error.graphQLErrors) {
        error.graphQLErrors.map((err: any) => {
          if (err?.extensions?.fieldName) {
            setError(err.extensions.fieldName, {
              message: err.message,
            })
          }
        })
      } else {
        logger.error(error)
      }
    }
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="mobile">
              Mobile
            </Label>
            <PhoneInput
              id="mobile"
              countries={['IN']}
              defaultCountry="IN"
              disabled={isLoading}
              {...register('mobile')}
              onBlur={() => {
                // no op this breaks the phone input
              }}
              value={getValues('mobile')}
              onChange={(value: string) => {
                setValue('mobile', value)
              }}
            />
            {errors?.mobile && (
              <p className="px-1 text-xs text-red-600">
                {errors.mobile.message}
              </p>
            )}
          </div>
          <div className="grid gap-1 mt-3">
            <Label htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="********"
              type="password"
              disabled={isLoading}
              {...register('password')}
            />
            {errors?.password && (
              <p className="px-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="grid gap-1 my-3">
            <p className="text-right text-sm text-muted-foreground">
              <Link
                href={routes.FORGOT_PASSWORD}
                className="hover:text-brand underline underline-offset-4"
              >
                Forgot Password?
              </Link>
            </p>
          </div>
          <HoneypotInputs />
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
