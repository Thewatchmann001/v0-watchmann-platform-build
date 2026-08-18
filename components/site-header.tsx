"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { Menu, X, ArrowLeft, ChevronDown } from "lucide-react"
import Image from "next/image"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

const ecosystemLinks = [
  { href: "/ai-labs", label: "AI Labs" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/academy", label: "Academy" },
  { href: "/blog", label: "Blog" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [ecosystemOpen, setEcosystemOpen] = useState(false)
  const [isAuthed, setIsAuthed] = useState(false)
  const router = useRouter()
  const ecosystemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data }) => {
      setIsAuthed(!!data.user)
    })
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthed(!!session)
    })
    return () => {
      data.subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ecosystemRef.current && !ecosystemRef.current.contains(e.target as Node)) {
        setEcosystemOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  function handleBack() {
    if (typeof window !== "undefined") {
      if (window.history.length > 1) {
        router.back()
      } else {
        router.push("/welcome")
        router.refresh()
      }
    } else {
      router.push("/welcome")
      router.refresh()
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8 min-w-0">
          {isAuthed && (
            <Button
              variant="ghost"
              className="hidden lg:inline-flex shrink-0 text-slate-300 hover:text-white hover:bg-slate-800"
              onClick={handleBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          )}
          <Link href={isAuthed ? "/welcome" : "/"} className="flex items-center space-x-2 shrink-0">
            <Image src="/watchmann-logo.png" alt="Watchmann Logo" width={32} height={32} className="w-8 h-auto object-contain" />
            <span className="text-lg font-semibold text-white whitespace-nowrap">Watchmann Technologies</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <Link href="/products" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Products
            </Link>
            <Link href="/platform" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Platform
            </Link>
            <div className="relative" ref={ecosystemRef}>
              <button
                onClick={() => setEcosystemOpen((v) => !v)}
                className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Ecosystem
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${ecosystemOpen ? "rotate-180" : ""}`} />
              </button>
              {ecosystemOpen && (
                <div className="absolute left-0 top-full mt-3 w-44 rounded-lg border border-slate-800 bg-slate-900 py-1.5 shadow-xl">
                  {ecosystemLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setEcosystemOpen(false)}
                      className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              About
            </Link>
            {isAuthed && (
              <Link href="/dashboard" className="text-sm font-medium text-white transition-colors">
                Dashboard
              </Link>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Button variant="ghost" asChild className="text-slate-300 hover:text-white hover:bg-slate-800">
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/auth/sign-up">Get Started</Link>
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/products" className="text-sm font-medium text-slate-300 hover:text-white py-2">
              Products
            </Link>
            <Link href="/platform" className="text-sm font-medium text-slate-300 hover:text-white py-2">
              Platform
            </Link>
            <Link href="/ai-labs" className="text-sm font-medium text-slate-300 hover:text-white py-2">
              AI Labs
            </Link>
            <Link href="/marketplace" className="text-sm font-medium text-slate-300 hover:text-white py-2">
              Marketplace
            </Link>
            <Link href="/academy" className="text-sm font-medium text-slate-300 hover:text-white py-2">
              Academy
            </Link>
            <Link href="/blog" className="text-sm font-medium text-slate-300 hover:text-white py-2">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-300 hover:text-white py-2">
              About
            </Link>
            {isAuthed && (
              <>
                <Link href="/dashboard" className="text-sm font-medium text-white py-2">
                  Dashboard
                </Link>
                <button
                  onClick={handleBack}
                  className="flex items-center text-sm font-medium text-slate-300 hover:text-white py-2 text-left"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </button>
              </>
            )}
            <div className="flex flex-col gap-2 pt-4 border-t border-slate-800">
              <Button
                variant="outline"
                asChild
                className="w-full border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 bg-transparent"
              >
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/auth/sign-up">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
