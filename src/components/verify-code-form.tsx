'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { HoneypotInputs } from 'src/components/providers/honeypot-provider'
import { Button, buttonVariants } from 'src/components/ui/button'
import { Icons } from 'src/components/ui/icons'
import { InputOTP, InputOTPGroup, InputOTPSlot } from 'src/components/ui/input-otp'
import { useResendCodeMutation, useVerifyCodeMutation } from 'src/generated/graphql'
import { verifyCodeSchema } from 'src/utils/form'
import { useNavigation } from 'src/utils/history'
import { toast } from 'src/utils/toast'
import { cn, getHoneypotFormValues, setFormErrors } from 'src/utils/utils'

type FormData = z.infer<typeof verifyCodeSchema>

const VerifyCodeForm: React.FC = () => {
  const {
    getValues,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(verifyCodeSchema),
  })
  const searchParams = useSearchParams()
  const userId = searchParams.get('userId')
  const [verifyCode, { loading: isLoading }] = useVerifyCodeMutation({ fetchPolicy: 'no-cache' })
  const [resendCode, { loading: isResending }] = useResendCodeMutation({ fetchPolicy: 'no-cache' })
  const navigate = useNavigation()

  const handleResendCode = async () => {
    if (!userId) {
      toast({
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      })
      return
    }
    const resendCodeResult = await resendCode({
      variables: {
        input: {
          userId,
        },
      },
    })
    if (resendCodeResult.data) {
      setTimer(60)
      toast({
        description: 'OTP Code has been resent, please check your mobile.',
      })
    }
  }

  async function onSubmit(data: FormData) {
    try {

      if (!userId) {
        toast({
          description: 'Something went wrong. Please try again.',
          variant: 'destructive',
        })
        return
      }
      const verifyCodeResult = await verifyCode({
        variables: {
          input: {
            userId,
            code: data.code,
            ...getHoneypotFormValues(data),
          },
        },
      })

      if (verifyCodeResult.data) {
        toast({
          description: 'Account verified successfully. Taking you for Sign In page.',
          variant: 'success',
        })
        return navigate('SIGN_IN', {}, {}, true)
      }
    } catch (error: any) {
      setFormErrors(error, setError)
    }
  }
  const [timer, setTimer] = React.useState(60)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer => timer - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="flex flex-col gap-1">
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
          <HoneypotInputs />
          <button className={cn(buttonVariants())} disabled={isLoading || isResending}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Verify Code
          </button>
          <p className="px-8 text-center text-sm text-muted-foreground">
            Didn&apos;t receive the code?
            <Button  disabled={isLoading || isResending || timer > 0} type="button" variant="link" size="sm" className={`${timer === 0 ? 'underline underline-offset-4': ''} pl-1`} onClick={handleResendCode}>
              {timer > 0 ? `Resend code in ${timer} seconds` : 'Resend code'}
            </Button>
          </p>
        </div>
      </form>
    </div>
  )
}

export default VerifyCodeForm
