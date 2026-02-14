"use client"

import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa"
import { useSearchParams } from "next/navigation"

export function OAuthButtons() {
  const searchParams = useSearchParams()
  const supabase = createClient()

  const handleOAuthLogin = async (provider: "google" | "github" | "facebook") => {
    const next = searchParams.get("next") || "/welcome"
    const origin = typeof window !== "undefined" ? window.location.origin : ""
    const redirectTo = `${origin}/auth/callback?next=${encodeURIComponent(next)}`

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo,
      },
    })

    if (error) {
      console.error("OAuth login error:", error.message)
      alert(`Authentication failed: ${error.message}`)
    }
  }

  return (
    <>
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-700" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-slate-900 px-2 text-slate-400">Or continue with</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <Button
          variant="outline"
          type="button"
          onClick={() => handleOAuthLogin("google")}
          className="border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200"
        >
          <FaGoogle className="h-4 w-4" />
          <span className="sr-only">Google</span>
        </Button>
        <Button
          variant="outline"
          type="button"
          onClick={() => handleOAuthLogin("github")}
          className="border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200"
        >
          <FaGithub className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </Button>
        <Button
          variant="outline"
          type="button"
          onClick={() => handleOAuthLogin("facebook")}
          className="border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200"
        >
          <FaFacebook className="h-4 w-4" />
          <span className="sr-only">Facebook</span>
        </Button>
      </div>
    </>
  )
}
