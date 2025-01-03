import { Metadata } from 'next'
import * as React from 'react'
import ForgotPasswordForm from 'src/components/forgot-password'

export const metadata: Metadata = {
  title: 'Forgot your password?',
  description: 'Reset password to your account',
}

const Page: React.FC = () => {
  return (
    <div className="container flex h-screen w-screen flex-col mt-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex flex-col space-y-2 mb-8" style={{ background: 'url(/images/logo.svg) no-repeat center center', height: '60px' }}></div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Forgot your password?
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter the mobile number associated with your account and we'll send you a OTP code to reset your password.
          </p>
        </div>
        <ForgotPasswordForm />
      </div>
    </div>
  )
}

export default Page
