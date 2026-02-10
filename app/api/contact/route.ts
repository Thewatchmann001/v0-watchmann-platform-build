import { NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, organization, description } = body || {}

    if (!name || !email || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (!supabaseUrl || (!supabaseAnonKey && !supabaseServiceKey)) {
      return NextResponse.json({ error: "Supabase not configured" }, { status: 500 })
    }

    const supabase = createServerClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey, {
      cookies: {
        getAll() {
          return req.cookies.getAll()
        },
        setAll() {},
      },
    })

    const { error } = await supabase
      .from("contact_requests")
      .insert({
        name,
        email,
        phone,
        organization,
        description,
      })

    let stored = true
    if (error) {
      const msg = String(error.message || "")
      const tableMissing =
        msg.includes("relation") ||
        msg.includes("schema cache") ||
        msg.includes("does not exist") ||
        msg.includes("not found")
      if (!tableMissing) {
        return NextResponse.json({ error: error.message }, { status: 500 })
      }
      stored = false
    }

    const apiKey = process.env.RESEND_API_KEY
    if (apiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: "onboarding@resend.dev",
            to: "watchmann2025@gmail.com",
            subject: "New Contact Request",
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\nOrganization: ${organization || "-"}\n\n${description}`,
          }),
        })
      } catch {}
    }

    return NextResponse.json({ ok: true, stored })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unknown error" }, { status: 500 })
  }
}
