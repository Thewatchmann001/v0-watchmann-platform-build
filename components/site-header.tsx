"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/watchmann-logo.png" alt="Watchmann Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-bold text-white">Watchmann</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/ai-labs" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              AI Labs
            </Link>
            <Link href="/marketplace" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Marketplace
            </Link>
            <Link href="/academy" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Academy
            </Link>
            <Link href="/blog" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              About
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
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
