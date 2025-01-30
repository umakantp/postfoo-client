'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { REGEXP_ONLY_DIGITS } from 'input-otp'
import Link from 'next/link'
import { HoneypotInputs } from 'src/components/providers/honeypot-provider'
import { buttonVariants } from 'src/components/ui/button'
import { Icons } from 'src/components/ui/icons'
import { Input } from 'src/components/ui/input'
import { InputOTP, InputOTPGroup, InputOTPSlot } from 'src/components/ui/input-otp'
import { Label } from 'src/components/ui/label'
import { useResetPasswordMutation } from 'src/generated/graphql'
import { routes } from 'src/utils/constants'
import { resetPasswordSchema } from 'src/utils/form'
import { useNavigation } from 'src/utils/history'
import { toast } from 'src/utils/toast'
import { cn, getHoneypotFormValues, setFormErrors } from 'src/utils/utils'

type FormData = z.infer<typeof resetPasswordSchema>

interface ForgotPasswordResetFormProps {
  mobile: string,
}

const ForgotPasswordResetForm: React.FC<ForgotPasswordResetFormProps> = ({ mobile }) => {
  const {
    register,
    getValues,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      mobile: mobile,
    },
  })
  const resetPassword = useResetPasswordMutation()
  const isLoading = resetPassword.isPending

  const navigate = useNavigation()

  async function onSubmit(data: FormData) {
    try {
      const resetPasswordResult = await resetPassword.mutateAsync({
        input: {
          mobile: mobile,
          code: data.code,
          password: data.password,
          ...getHoneypotFormValues(data),
        },
      })

      if (!resetPasswordResult.resetPassword.error) {
        toast({ variant: 'success', description: 'Password reset successful. Taking you to sign in.' })
        navigate('SIGN_IN')
      }
    } catch (error: any) {
      setFormErrors(error, setError)
    }
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="flex flex-col gap-1 mb-3">
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS}
              value={getValues('code')}
              onChange={value => setValue('code', value)}
            >
              <InputOTPGroup className="m-autox`">
                <InputOTPSlot index={0} variant="large" />
                <InputOTPSlot index={1} variant="large" />
                <InputOTPSlot index={2} variant="large" />
                <InputOTPSlot index={3} variant="large" />
                <InputOTPSlot index={4} variant="large" />
                <InputOTPSlot index={5} variant="large" />
              </InputOTPGroup>
            </InputOTP>
            {errors?.code && (
              <p className="px-1 text-xs text-red-600">
                {errors.code.message}
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
          <HoneypotInputs />
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Reset password
          </button>
        </div>
      </form>
      <p className="px-8 text-center text-sm text-muted-foreground">
        <Link
          href={routes.FORGOT_PASSWORD}
          className="hover:text-brand underline underline-offset-4"
        >
          Back to forgot password
        </Link>
      </p>
    </div>
  )
}

export default ForgotPasswordResetForm
