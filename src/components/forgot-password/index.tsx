'use client'

import * as React from 'react'
import ForgotPasswordForm from './forgot-password-form'
import ForgotPasswordResetForm from './forgot-password-reset-form'

const ForgotPassword: React.FC = () => {
  const [step, setStep] = React.useState<'mobile' | 'otpAndReset'>('mobile')
  const [mobile, setMobile] = React.useState<string>('')

  if (step === 'mobile') {
    return <ForgotPasswordForm setStep={setStep} setMobile={setMobile} />
  }
  return (
    <ForgotPasswordResetForm mobile={mobile} />
  )
}

export default ForgotPassword
