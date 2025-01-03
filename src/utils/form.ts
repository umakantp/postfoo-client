import * as z from 'zod'

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

export const signinSchema = z.object({
  mobile: mobileSchema,
  password: passwordSchema,
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
