import type React from "react"
import { AdminNav } from "@/components/admin-nav"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

  if (profile?.role !== "admin") {
    redirect("/dashboard")
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <AdminNav />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
