import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    name: "Watchmann Platform",
    category: "Agency · SaaS",
    status: "Live",
    statusColor: "text-emerald-400",
    description:
      "The agency operating system we built: automate reporting, deploy custom AI tools, and scale client capacity without scaling headcount.",
    href: "/platform",
    external: false,
  },
  {
    name: "Jems AI",
    category: "AI Fusion Platform",
    status: "In development · 2026",
    statusColor: "text-amber-400",
    description:
      "A proprietary platform that fuses multiple AI models into a single, unified intelligence layer. Not yet live.",
    href: "/products",
    external: false,
  },
  {
    name: "Alward",
    category: "[TODO: confirm/provide]",
    status: "[TODO: confirm status]",
    statusColor: "text-slate-400",
    description: "[TODO: confirm/provide — no description exists yet. See CONTENT_AUDIT.md.]",
    href: "/products",
    external: false,
  },
  {
    name: "LandBiznes",
    category: "Blockchain · PropTech",
    status: "Live",
    statusColor: "text-emerald-400",
    description:
      "Sierra Leone's first blockchain-powered land registry and marketplace. Satellite boundary mapping, KYC verification, and trust scores eliminating land fraud.",
    href: "https://landbiznes.com",
    external: true,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-semibold text-white text-balance tracking-tight">
            We are an AI and software company building{" "}
            <span className="text-blue-400">a portfolio of products</span>
          </h1>
          <p className="text-xl text-slate-300 text-balance max-w-2xl mx-auto">
            Watchmann Technologies builds AI and software products for agencies, businesses, and industries across
            West Africa — including our own agency operating system, an AI fusion platform, and a blockchain land
            registry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 font-medium transition-colors"
            >
              See What We Build
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-3 font-medium transition-colors"
            >
              About Watchmann
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest">
              What We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Our Product Portfolio</h2>
            <p className="text-lg text-slate-400 max-w-2xl">
              Every product credits Watchmann. Here's what's live and what's in development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {products.map((product) => {
              const card = (
                <div className="h-full border border-slate-800 bg-slate-900/40 p-8 rounded-2xl transition-all hover:-translate-y-1 hover:border-blue-500/40">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                      {product.category}
                    </span>
                    <span className={`text-[10px] font-semibold uppercase tracking-widest ${product.statusColor}`}>
                      {product.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3 transition-colors group-hover:text-blue-400">
                    {product.name}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{product.description}</p>
                </div>
              )

              return product.external ? (
                <Link key={product.name} href={product.href} target="_blank" rel="noopener noreferrer" className="group block h-full">
                  {card}
                </Link>
              ) : (
                <Link key={product.name} href={product.href} className="group block h-full">
                  {card}
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/products" className="inline-flex items-center gap-1.5 text-blue-400 font-medium hover:text-blue-300">
              View full portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Founder credibility strip */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto border border-slate-800 bg-slate-900/40 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="relative w-20 h-20 shrink-0">
            <Image
              src="/professional-headshot-of-joseph-edward-musa-amah-f.jpg"
              alt="Joseph Edward Musa Amah"
              width={80}
              height={80}
              className="rounded-full object-cover border-2 border-blue-500/20"
            />
          </div>
          <div className="flex-1">
            <p className="text-slate-300">
              Founded by{" "}
              <span className="text-white font-semibold">Joseph Edward Musa Amah</span>, a mechanical engineer and
              software/AI builder based in Freetown, Sierra Leone.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-blue-400 font-medium hover:text-blue-300 shrink-0"
          >
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center border-t border-slate-900 pt-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Want to work with us?</h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
            Whether it's deploying Watchmann Platform for your agency or a broader engagement, get in touch directly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 font-medium transition-colors"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
