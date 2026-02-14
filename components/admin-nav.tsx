"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Users,
  Briefcase,
  ShoppingCart,
  BookOpen,
  FileText,
  Cpu,
  Settings,
  LogOut,
} from "lucide-react"
import Image from "next/image"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export function AdminNav() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back()
    } else {
      router.push("/welcome")
      router.refresh()
    }
  }

  const navItems = [
    { href: "/admin", label: "Analytics", icon: LayoutDashboard },
    { href: "/admin/users", label: "Users", icon: Users },
    { href: "/admin/projects", label: "Projects", icon: Briefcase },
    { href: "/admin/products", label: "Products", icon: ShoppingCart },
    { href: "/admin/courses", label: "Courses", icon: BookOpen },
    { href: "/admin/blog", label: "Blog", icon: FileText },
    { href: "/admin/ai-labs", label: "AI Labs", icon: Cpu },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="flex h-screen w-64 flex-col border-r border-slate-800 bg-slate-900">
      <div className="p-6 border-b border-slate-800">
        <Link href="/welcome" className="flex items-center space-x-2">
          <Image src="/watchmann-logo.png" alt="Watchmann Logo" width={32} height={32} className="w-8 h-auto object-contain" />
          <div>
            <span className="text-xl font-bold text-white block">Watchmann Technologies Ltd</span>
            <span className="text-xs text-slate-400">Admin Console</span>
          </div>
        </Link>
        <div className="mt-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800"
            onClick={handleBack}
          >
            <ArrowLeft className="mr-3 h-5 w-5" />
            Back
          </Button>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? "bg-blue-600 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </div>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <Button
          variant="ghost"
          className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800"
          onClick={handleLogout}
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  )
}
