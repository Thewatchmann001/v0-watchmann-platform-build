import Link from "next/link"
import Image from "next/image"

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
              Enterprise-grade AI platform for agencies and businesses. Built in Sierra Leone. Scaling across West Africa.
            </p>
            <p className="text-xs text-slate-500 pt-2">
              Founded by{" "}
              <Link href="/about" className="text-slate-400 hover:text-blue-400 transition-colors">
                Joseph Edward Musa Amah
              </Link>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Platform</h3>
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
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Pricing
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
          <p className="mt-2 text-[10px] uppercase tracking-widest text-slate-600">Built in Sierra Leone 🇸🇱</p>
        </div>
      </div>
    </footer>
  )
}
