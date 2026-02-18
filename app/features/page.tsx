import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Cpu, ShoppingCart, GraduationCap, Users, ArrowRight, Shield, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  const pillars = [
    {
      title: "AI Labs",
      description: "Showcase and experiment with cutting-edge AI models tailored for agency workflows.",
      icon: Cpu,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      features: [
        "Custom Model Training: Train models on your specific client data.",
        "Prompt Engineering Hub: Collaborative environment for perfecting AI interactions.",
        "API Integration: Seamlessly connect AI outputs to your existing tools.",
      ],
    },
    {
      title: "Marketplace",
      description: "A curated ecosystem for buying and selling AI-powered assets and agency templates.",
      icon: ShoppingCart,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      features: [
        "Pre-built Workflows: Ready-to-use automation for common agency tasks.",
        "Asset Monetization: Sell your custom tools and templates to other agencies.",
        "Verified Vendors: Every asset is vetted for quality and security.",
      ],
    },
    {
      title: "Academy",
      description: "Comprehensive learning platform to bridge the gap between AI potential and agency reality.",
      icon: GraduationCap,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      features: [
        "Certifications: Earn credentials that prove your agency's AI expertise.",
        "Hands-on Workshops: Practical sessions on implementing AI in real-world scenarios.",
        "Expert Library: Access to a growing collection of case studies and best practices.",
      ],
    },
    {
      title: "Client Management",
      description: "Streamlined dashboard for managing client relationships and AI-driven deliverables.",
      icon: Users,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      features: [
        "Automated Reporting: Generate professional client reports in minutes, not hours.",
        "White-label Portals: Provide your clients with a branded experience.",
        "Resource Allocation: Optimize your team's workload with AI-driven insights.",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Built for the Modern Agency</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Explore the four pillars of the Watchmann platform designed to automate your workflows and scale your impact.
          </p>
        </section>

        {/* Pillars Deep Dive */}
        <section className="container mx-auto px-4 py-10 space-y-32">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`flex flex-col md:items-center gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="flex-1 space-y-6">
                <div className={`h-16 w-16 rounded-2xl ${pillar.bg} flex items-center justify-center`}>
                  <pillar.icon className={`h-8 w-8 ${pillar.color}`} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{pillar.title}</h2>
                <p className="text-xl text-slate-400">{pillar.description}</p>
                <ul className="space-y-4">
                  {pillar.features.map((feature, i) => {
                    const [title, desc] = feature.split(": ")
                    return (
                      <li key={i} className="flex gap-3">
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                        <div>
                          <span className="font-semibold text-white">{title}:</span>
                          <span className="text-slate-400"> {desc}</span>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                <div className="pt-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="#">
                      Explore {pillar.title} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
                     <span className="text-slate-500 text-lg">{pillar.title} Dashboard Mockup</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Shared Platform Features */}
        <section className="container mx-auto px-4 py-32 border-t border-slate-900">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Enterprise-Grade Infrastructure</h2>
            <p className="text-xl text-slate-400">Security and performance come standard.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
              <Shield className="h-10 w-10 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Unmatched Security</h3>
              <p className="text-slate-400 leading-relaxed">
                Bank-grade encryption, SOC 2 compliance, and granular RLS ensure your client data remains yours and yours alone.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
              <Zap className="h-10 w-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Lightning Performance</h3>
              <p className="text-slate-400 leading-relaxed">
                Built on Next.js 15 and a global edge network, Watchmann delivers sub-second response times worldwide.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
              <TrendingUp className="h-10 w-10 text-emerald-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Elastic Scalability</h3>
              <p className="text-slate-400 leading-relaxed">
                From 5 to 5,000 clients, our infrastructure scales with you. No manual provisioning required.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-20">
           <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to see it in action?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join 500+ agencies transforming their business with AI. Start your 14-day free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-slate-100">
                  <Link href="/auth/sign-up">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blue-400 text-white hover:bg-blue-700 bg-transparent">
                  <Link href="/contact">Book a Demo</Link>
                </Button>
              </div>
           </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
