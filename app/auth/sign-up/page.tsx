"use client"

import type React from "react"

import { useState, Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck } from "lucide-react"
import { OAuthButtons } from "@/components/auth/oauth-buttons"

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-4">
      <Card className="w-full max-w-md border-slate-800 bg-slate-900 text-slate-100">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 mb-2">
            <ShieldCheck className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
          <CardDescription className="text-slate-400 text-center">
            Get started with Watchmann platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="full-name" className="text-slate-200">
                  Full Name
                </Label>
                <Input
                  id="full-name"
                  placeholder="John Doe"
                  required
                  className="bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-slate-200">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-slate-200">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  required
                  className="bg-slate-800 border-slate-700 text-slate-100"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password" className="text-slate-200">
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  className="bg-slate-800 border-slate-700 text-slate-100"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Sign up"}
              </Button>
            </div>
          </form>
          <Suspense fallback={<div className="h-20 animate-pulse bg-slate-800/50 rounded-lg mt-4" />}>
            <OAuthButtons />
          </Suspense>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link href="/auth/login" className="font-medium text-blue-500 hover:text-blue-400">
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
