import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/watchmann-logo.png" alt="Watchmann Logo" width={32} height={32} className="w-8 h-auto object-contain" />
              <span className="text-xl font-bold text-white whitespace-nowrap">Watchmann Technologies</span>
            </div>
            <p className="text-sm text-slate-400">
              An AI and software company building products for agencies and businesses. Based in Freetown, Sierra
              Leone.
            </p>
            <p className="text-xs text-slate-500 pt-2">
              Founded by{" "}
              <Link href="/about" className="text-slate-400 hover:text-blue-400 transition-colors">
                Joseph Edward Musa Amah
              </Link>
            </p>
            <Link
              href="mailto:watchmann2025@gmail.com"
              className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-400 transition-colors pt-1"
            >
              <Mail size={14} />
              watchmann2025@gmail.com
            </Link>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Full Portfolio
                </Link>
              </li>
              <li>
                <Link href="/platform" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Watchmann Platform
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Jems AI
                </Link>
              </li>
              <li>
                <Link
                  href="https://landbiznes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  LandBiznes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Site</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-labs" className="text-sm text-slate-400 hover:text-white transition-colors">
                  AI Labs
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/academy" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Academy
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Watchmann Technologies. All rights reserved.</p>
          <p className="mt-2 text-[10px] uppercase tracking-widest text-slate-600">Freetown, Sierra Leone 🇸🇱</p>
        </div>
      </div>
    </footer>
  )
}
