'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { buttonVariants } from 'src/components/ui/button'
import { Icons } from 'src/components/ui/icons'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'
import { PhoneInput } from 'src/components/ui/phone-input'
import { useSignUpMutation } from 'src/generated/graphql'
import { signupSchema } from 'src/utils/form'
import { useNavigation } from 'src/utils/history'
import logger from 'src/utils/logger'
import { cn } from 'src/utils/utils'

type FormData = z.infer<typeof signupSchema>

const SignUpForm: React.FC = () => {
  const {
    register,
    getValues,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signupSchema),
  })
  const [signUp, { loading: isLoading }] = useSignUpMutation({ fetchPolicy: 'no-cache' })
  const navigate = useNavigation()

  async function onSubmit(data: FormData) {
    try {
      const signUpResult = await signUp({
        variables: {
          input: {
            firstName: data.firstName,
            lastName: data.lastName,
            mobile: data.mobile,
            password: data.password,
          },
        },
      })

      if (signUpResult.data) {
        const user = signUpResult.data.signUp
        return navigate('VERIFY_ACCOUNT', {}, { userId: user.id }, true)
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
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="Aditya"
                disabled={isLoading}
                {...register('firstName')}
              />
              {errors?.firstName && (
                <p className="px-1 text-xs text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Singhaniya"
                disabled={isLoading}
                {...register('lastName')}
              />
              {errors?.lastName && (
                <p className="px-1 text-xs text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col space-y-2 w-full mb-3">
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
          <div className="flex flex-col space-y-2 w-full mb-3">
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
          <div className="flex flex-col space-y-2 w-full mb-3">
            <Label htmlFor="confirmPassword">
              ConfirmPassword
            </Label>
            <Input
              id="confirmPassword"
              placeholder="********"
              type="password"
              disabled={isLoading}
              {...register('confirmPassword')}
            />
            {errors?.confirmPassword && (
              <p className="px-1 text-xs text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
