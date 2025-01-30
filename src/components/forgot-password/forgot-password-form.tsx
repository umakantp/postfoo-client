'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import Link from 'next/link'
import { HoneypotInputs } from 'src/components/providers/honeypot-provider'
import { buttonVariants } from 'src/components/ui/button'
import { Icons } from 'src/components/ui/icons'
import { Label } from 'src/components/ui/label'
import { PhoneInput } from 'src/components/ui/phone-input'
import { useForgotPasswordMutation } from 'src/generated/graphql'
import { routes } from 'src/utils/constants'
import { forgotPasswordSchema } from 'src/utils/form'
import { cn, getHoneypotFormValues, setFormErrors } from 'src/utils/utils'

type FormData = z.infer<typeof forgotPasswordSchema>

interface ForgotPasswordFormProps {
  setStep: (step: 'mobile' | 'otpAndReset') => void,
  setMobile: (mobile: string) => void,
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ setStep, setMobile }) => {
  const {
    register,
    getValues,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(forgotPasswordSchema),
  })
  const forgotPassword = useForgotPasswordMutation()

  async function onSubmit(data: FormData) {
    try {
      const forgotPasswordResult = await forgotPassword.mutateAsync({
        input: {
          mobile: data.mobile,
          ...getHoneypotFormValues(data),
        },
      })

      if (!forgotPasswordResult.forgotPassword.error) {
        setStep('otpAndReset')
      }
    } catch (error: any) {
      if (error.graphQLErrors[0].message === 'User already has a valid code') {
        setStep('otpAndReset')
      } else {
        setFormErrors(error, setError)
      }
    }
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1 mb-3">
            <Label htmlFor="mobile">
              Mobile
            </Label>
            <PhoneInput
              id="mobile"
              countries={['IN']}
              defaultCountry="IN"
              disabled={forgotPassword.isPending}
              {...register('mobile')}
              onBlur={() => {
                // no op this breaks the phone input
              }}
              value={getValues('mobile')}
              onChange={(value: string) => {
                setValue('mobile', value)
                setMobile(value)
              }}
            />
            {errors?.mobile && (
              <p className="px-1 text-xs text-red-600">
                {errors.mobile.message}
              </p>
            )}
          </div>
          <HoneypotInputs />
          <button className={cn(buttonVariants())} disabled={forgotPassword.isPending}>
            {forgotPassword.isPending && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Reset password
          </button>
        </div>
      </form>
      <p className="px-8 text-center text-sm text-muted-foreground">
        <Link
          href={routes.SIGN_IN}
          className="hover:text-brand underline underline-offset-4"
        >
          Back to sign in
        </Link>
      </p>
    </div>
  )
}

export default ForgotPasswordForm
