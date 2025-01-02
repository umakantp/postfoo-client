"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useSearchParams } from "next/navigation"
import * as React from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import Link from "next/link"
import { buttonVariants } from "src/components/ui/button"
import { Icons } from "src/components/ui/icons"
import { Input } from "src/components/ui/input"
import { Label } from "src/components/ui/label"
import { signinSchema } from "src/utils/form"
import { toast } from "src/utils/toast"
import { cn } from "src/utils/utils"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const signIn = async (data: FormData & { callbackUrl: string }) => {
  // no op
  await new Promise(resolve => setTimeout(resolve, 1000))
  return { ok: true }
}

type FormData = z.infer<typeof signinSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signinSchema),
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false)
  const searchParams = useSearchParams()

  async function onSubmit(data: FormData) {
    setIsLoading(true)

    const signInResult = await signIn({
      mobile: data.mobile,
      password: data.password,
      callbackUrl: searchParams?.get("from") || "/dashboard",
    })

    setIsLoading(false)

    if (!signInResult?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again.",
        variant: "destructive",
      })
    }

    return toast({
      title: "Check your email",
      description: "We sent you a login link. Be sure to check your spam too.",
    })
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              {...register("mobile")}
            />
            {errors?.mobile && (
              <p className="px-1 text-xs text-red-600">
                {errors.mobile.message}
              </p>
            )}
          </div>
          <div className="grid gap-1 mt-3">
            <Label htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="********"
              type="password"
              disabled={isLoading || isGitHubLoading}
              {...register("password")}
            />
            {errors?.password && (
              <p className="px-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="grid gap-1 my-3">
            <p className="text-right text-sm text-muted-foreground">
              <Link
                href="/auth/forgot-password"
                className="hover:text-brand underline underline-offset-4"
              >
                Forgot Password?
              </Link>
            </p>
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}
