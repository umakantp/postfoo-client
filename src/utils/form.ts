import * as z from "zod"

export const signinSchema = z.object({
  mobile: z.string().min(10).max(10),
  password: z.string().min(8),
})
