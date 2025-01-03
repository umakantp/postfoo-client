import Link from 'next/link'
import * as React from 'react'
import SignUpForm from 'src/components/sign-up-form'
import { routes } from 'src/utils/constants'

export const metadata = {
  title: 'Create an account',
  description: 'Create an account to get started.',
}

const Page: React.FC = () => {
  return (
    <div className="container grid h-screen w-screen flex-col mt-8">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <div className="flex flex-col space-y-2 mb-6" style={{ background: 'url(/images/logo.svg) no-repeat center center', height: '80px' }}></div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Let's get you started. Fill in the details below to create your account.
            </p>
          </div>
          <SignUpForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking Sign Up, you agree to our{' '}
            <Link
              href={routes.TERMS_OF_SERVICE}
              className="hover:text-brand underline underline-offset-4"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href={routes.PRIVACY_POLICY}
              className="hover:text-brand underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
