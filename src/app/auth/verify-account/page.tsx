import { Metadata } from 'next'
import * as React from 'react'
import VerifyCodeForm from 'src/components/verify-code-form'

export const metadata: Metadata = {
  title: 'Verify Account',
  description: 'Verify your account & get started',
}

const Page: React.FC = () => {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex flex-col space-y-2" style={{ background: 'url(/images/logo.svg) no-repeat center center', height: '100px' }}></div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Verify your account
          </h1>
          <p className="text-sm text-muted-foreground">
            We've sent a OTP code to your mobile number. Enter the code below to verify your identity.
          </p>
        </div>
        <VerifyCodeForm />
      </div>
    </div>
  )
}

export default Page
