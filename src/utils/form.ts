import * as z from 'zod'

const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters long')
  .max(40, 'Password can be maximum of 40 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
  .regex(/\d/, { message: 'Password must contain at least one number' })
  .regex(/[!@#$%^&*]/, { message: 'Password must contain at least one special character' })

export const signinSchema = z.object({
  mobile: z.string()
    .length(13, 'Mobile number must be 10 digits long'),
  password: passwordSchema,
})
