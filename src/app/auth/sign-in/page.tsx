import { Metadata } from 'next'
import Link from 'next/link'
import * as React from 'react'
import SignInForm from 'src/components/sign-in-form'
import { routes } from 'src/utils/constants'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
}

const Page: React.FC = () => {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex flex-col space-y-2" style={{ background: 'url(/images/logo.svg) no-repeat center center', height: '100px' }}></div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Login to your PostFoo account
          </p>
        </div>
        <SignInForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account? <Link
            href={routes.SIGN_UP}
            className="hover:text-brand underline underline-offset-4"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Page
