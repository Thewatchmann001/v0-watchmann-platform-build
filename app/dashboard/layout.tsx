import type React from "react"
import { DashboardNav } from "@/components/dashboard-nav"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
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

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <DashboardNav />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
