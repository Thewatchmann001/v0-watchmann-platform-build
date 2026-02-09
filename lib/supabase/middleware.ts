import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // If Supabase is not configured, just continue without auth
  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.next({
      request,
    })
  }

  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
        supabaseResponse = NextResponse.next({
          request,
        })
        cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options))
      },
    },
  })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Elevate super admin by email and enforce admin-only access
  let userRole: string | null = null
  let userEmail: string | null = null
  if (user) {
    userEmail = user.email || null
    const { data: profile } = await supabase.from("profiles").select("role,email").eq("id", user.id).single()
    userRole = profile?.role || null
    if (userEmail === "watchmann2025@gmail.com" && userRole !== "admin") {
      const { data: existing } = await supabase.from("profiles").select("id").eq("id", user.id).single()
      if (existing) {
        await supabase.from("profiles").update({ role: "admin" }).eq("id", user.id)
      } else {
        await supabase.from("profiles").insert({ id: user.id, email: userEmail, role: "admin" })
      }
      userRole = "admin"
    }
  }

  // Protected routes that require authentication
  const protectedPaths = ["/dashboard", "/admin", "/account"]
  const isProtectedPath = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))

  if (isProtectedPath && !user) {
    const url = request.nextUrl.clone()
    url.pathname = "/auth/login"
    return NextResponse.redirect(url)
  }

  // Redirect authenticated users hitting "/" to "/welcome"
  if (user && request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone()
    url.pathname = "/welcome"
    return NextResponse.redirect(url)
  }

  // Admin-only guard
  if (request.nextUrl.pathname.startsWith("/admin") && userRole !== "admin") {
    const url = request.nextUrl.clone()
    url.pathname = "/auth/error"
    url.searchParams.set("error", "Not authorized")
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}
