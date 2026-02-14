import { createClient } from "@/lib/supabase/server"
import { NextResponse, type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code")
  // if "next" is in search params, use it as the redirection URL
  const next = request.nextUrl.searchParams.get("next") ?? "/welcome"

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return NextResponse.redirect(`${request.nextUrl.origin}${next}`)
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${request.nextUrl.origin}/auth/error`)
}
