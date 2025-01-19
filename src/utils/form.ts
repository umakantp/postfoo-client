import { HONEYPOT_DEFAULT_NAME_FIELD_NAME, HONEYPOT_DEFAULT_VALID_FROM_FIELD_NAME } from 'src/utils/constants'
import * as z from 'zod'

export const getHoneypotFormSchema = () => {
  return {
    [HONEYPOT_DEFAULT_NAME_FIELD_NAME]: z.string().optional(),
    [HONEYPOT_DEFAULT_VALID_FROM_FIELD_NAME]: z.string().optional(),
  }
}

const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters long')
  .max(40, 'Password can be maximum of 40 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
  .regex(/\d/, { message: 'Password must contain at least one number' })
  .regex(/[!@#$%^&*]/, { message: 'Password must contain at least one special character' })

const mobileSchema = z.string()
  .length(13, 'Mobile number must be 10 digits long')
  // Check if the mobile number is valid & starts with +91
  .regex(/^(\+91)?[0-9]{10}$/, 'Only Indian mobile numbers are supported')

const otpCodeSchema = z.string()
  .length(6, 'Provide complete OTP code')
  .regex(/^\d+$/, 'OTP must contain only numbers')

export const signinSchema = z.object({
  mobile: mobileSchema,
  password: passwordSchema,
  ...getHoneypotFormSchema(),
})

export const signupSchema = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters long').max(40, 'First name can be maximum of 40 characters'),
  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters long').max(40, 'Last name can be maximum of 40 characters')
    .optional()
    .or(z.literal('')),
  mobile: mobileSchema,
  password: passwordSchema,
  confirmPassword: passwordSchema,
}).refine(data => data.confirmPassword === data.password, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export const verifyCodeSchema = z.object({
  code: otpCodeSchema,
  ...getHoneypotFormSchema(),
})

export const forgotPasswordSchema = z.object({
  mobile: mobileSchema,
  ...getHoneypotFormSchema(),
})

export const resetPasswordSchema = z.object({
  mobile: mobileSchema,
  code: otpCodeSchema,
  password: passwordSchema,
  confirmPassword: passwordSchema,
  ...getHoneypotFormSchema(),
}).refine(data => data.confirmPassword === data.password, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export const portfolioFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 3 characters long').max(40, 'Name can be maximum of 40 characters'),
  description: z.string().optional(),
})

export const portfolioAddFundFormSchema = z.object({
  fundId: z.string().length(12, 'Selec the fund'),
  cost: z.coerce.number().positive('Cost must be positive'),
  units: z.coerce.number().positive('Units must be positive'),
})
