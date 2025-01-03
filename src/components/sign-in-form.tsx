'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import Link from 'next/link'
import { buttonVariants } from 'src/components/ui/button'
import { Icons } from 'src/components/ui/icons'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'
import { PhoneInput } from 'src/components/ui/phone-input'
import { useSignInMutation } from 'src/generated/graphql'
import { signinSchema } from 'src/utils/form'
import { useNavigation } from 'src/utils/history'
import logger from 'src/utils/logger'
import { set, storageKeys } from 'src/utils/storage'
import { cn } from 'src/utils/utils'

type FormData = z.infer<typeof signinSchema>

const UserAuthForm: React.FC = () => {
  const {
    register,
    getValues,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signinSchema),
  })
  const searchParams = useSearchParams()
  const [signIn, { loading: isLoading }] = useSignInMutation({ fetchPolicy: 'no-cache' })
  const navigate = useNavigation()

  async function onSubmit(data: FormData) {
    try {
      const signInResult = await signIn({
        variables: {
          input: {
            mobile: data.mobile,
            password: data.password,
          },
        },
      })

      if (signInResult.data) {
        const user = signInResult.data.signIn
        set(storageKeys.AUTH_TOKEN, user.token)
        const fromRoute = searchParams?.get('from')
        return navigate(fromRoute ? fromRoute : 'HOME')
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
                href="/auth/forgot-password"
                className="hover:text-brand underline underline-offset-4"
              >
                Forgot Password?
              </Link>
            </p>
          </div>
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

export default UserAuthForm
