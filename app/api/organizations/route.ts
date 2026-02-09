import { NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, slug, logo_url, plan } = body || {}
    if (!name || !slug) {
      return NextResponse.json({ error: "Missing name or slug" }, { status: 400 })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json({ error: "Supabase not configured" }, { status: 500 })
    }

    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return req.cookies.getAll()
        },
        setAll() {},
      },
    })

    const { data: userResp } = await supabase.auth.getUser()
    const user = userResp.user
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data: org, error: orgError } = await supabase
      .from("organizations")
      .insert({ name, slug, logo_url, plan: plan || "free" })
      .select("*")
      .single()

    if (orgError || !org) {
      return NextResponse.json({ error: orgError?.message || "Failed to create organization" }, { status: 500 })
    }

    const { error: profileError } = await supabase
      .from("profiles")
      .update({ organization_id: org.id })
      .eq("id", user.id)

    if (profileError) {
      return NextResponse.json({ error: profileError.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true, organization: org })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unknown error" }, { status: 500 })
  }
}
