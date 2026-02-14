"use client"

import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { FaGoogle, FaGithub } from "react-icons/fa"
import { useSearchParams } from "next/navigation"

export function OAuthButtons() {
  const searchParams = useSearchParams()
  const supabase = createClient()

  const handleOAuthLogin = async (provider: "google" | "github") => {
    const next = searchParams.get("next") || "/welcome"
    const origin = typeof window !== "undefined" ? window.location.origin : ""
    const redirectTo = `${origin}/auth/callback?next=${encodeURIComponent(next)}`

    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo,
      },
    })
  }

  return (
    <>
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" type="button" onClick={() => handleOAuthLogin("google")}>
          <FaGoogle className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button variant="outline" type="button" onClick={() => handleOAuthLogin("github")}>
          <FaGithub className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </>
  )
}
