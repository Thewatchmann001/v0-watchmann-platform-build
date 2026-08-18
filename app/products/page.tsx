import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Products - Watchmann Technologies",
  description: "The product portfolio built by Watchmann Technologies.",
}

const products = [
  {
    name: "Jems AI",
    category: "AI Fusion Platform",
    status: "In development · targeting 2026",
    statusColor: "text-amber-400 border-amber-500/20 bg-amber-500/10",
    description:
      "A proprietary platform that fuses multiple AI models into a single, unified intelligence layer. Jems AI is not yet live — details on the underlying approach are intentionally limited while the work is in progress.",
    href: null,
    external: false,
  },
  {
    name: "Alward",
    category: "[TODO: confirm/provide product category]",
    status: "[TODO: confirm status]",
    statusColor: "text-slate-400 border-slate-600 bg-slate-800/40",
    description:
      "[TODO: confirm/provide — no description of Alward exists in the codebase yet. Do not publish this page until this card is filled in or removed.]",
    href: null,
    external: false,
  },
  {
    name: "Watchmann Platform",
    category: "Agency Operating System · SaaS",
    status: "Live",
    statusColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    description:
      "The agency operating system we built: client management, automated reporting, and AI tool deployment for agencies, in one platform.",
    href: "/platform",
    external: false,
  },
  {
    name: "LandBiznes",
    category: "Blockchain · PropTech",
    status: "Live",
    statusColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    description:
      "Sierra Leone's first blockchain-powered land registry and marketplace. Satellite boundary mapping, KYC verification, and trust scores built to eliminate land fraud.",
    href: "https://landbiznes.com",
    external: true,
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
            Products
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold text-white text-balance tracking-tight">What We Build</h1>
          <p className="text-xl text-slate-300 text-balance">
            Watchmann Technologies builds and operates a portfolio of AI and software products. Here's everything
            we've shipped and everything we're building.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {products.map((product) => {
            const content = (
              <div className="h-full border border-slate-800 bg-slate-900/50 backdrop-blur p-8 rounded-2xl hover:border-blue-500/50 transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-400">
                    {product.category}
                  </span>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border ${product.statusColor}`}
                  >
                    {product.status}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-3">{product.name}</h2>
                <p className="text-slate-400 leading-relaxed mb-4">{product.description}</p>
                {product.href && (
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400">
                    {product.external ? "Visit site" : "Learn more"}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </div>
            )

            if (!product.href) {
              return <div key={product.name}>{content}</div>
            }

            return product.external ? (
              <Link key={product.name} href={product.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                {content}
              </Link>
            ) : (
              <Link key={product.name} href={product.href} className="block h-full">
                {content}
              </Link>
            )
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
