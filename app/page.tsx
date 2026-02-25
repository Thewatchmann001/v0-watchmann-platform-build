import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  ArrowRight,
  Zap,
  Shield,
  Users,
  Cpu,
  ShoppingCart,
  GraduationCap,
  LayoutDashboard,
  CheckCircle2,
  Lock,
  Globe,
  X,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-4">
                <Zap className="mr-2 h-4 w-4" />
                <span>Next-Gen Agency Operating System</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white text-balance leading-tight">
                Scale Your Agency with{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Intelligent Operations
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 text-balance max-w-3xl mx-auto leading-relaxed">
                A unified ecosystem designed for modern enterprises. Seamlessly integrate AI innovation, curated
                marketplaces, expert learning, and comprehensive client management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-lg px-10 py-7 h-auto rounded-full shadow-lg shadow-blue-600/20">
                  <Link href="/auth/sign-up">
                    Start Free Trial
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-slate-800 text-white hover:bg-slate-900 text-lg px-10 py-7 h-auto rounded-full bg-transparent"
                >
                  <Link href="/contact">Schedule Agency Assessment</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-24 bg-slate-900/30 border-y border-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">The Problem</h2>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Most agencies struggle with fragmented tools, siloed data, and the overwhelming pace of AI innovation.
                  This operational friction leads to:
                </p>
                <ul className="space-y-4">
                  {[
                    "Stagnant growth due to manual, repetitive workflows",
                    "Disconnect between client expectations and delivery speed",
                    "Fragmented learning paths for team members",
                    "Lack of unified visibility across multiple client projects",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 h-5 w-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <X className="h-3 w-3 text-red-500" />
                      </div>
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative group animate-in fade-in slide-in-from-right-8 duration-700">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative border border-slate-800 bg-slate-950 p-8 rounded-2xl overflow-hidden">
                   <div className="flex flex-col gap-4">
                      <div className="h-2 w-1/2 bg-slate-800 rounded animate-pulse" />
                      <div className="h-2 w-3/4 bg-slate-800 rounded animate-pulse delay-75" />
                      <div className="grid grid-cols-3 gap-4 pt-4">
                        <div className="h-20 bg-slate-900 rounded-lg border border-slate-800" />
                        <div className="h-20 bg-slate-900 rounded-lg border border-slate-800" />
                        <div className="h-20 bg-slate-900 rounded-lg border border-slate-800" />
                      </div>
                      <div className="h-40 bg-slate-900 rounded-lg border border-slate-800 mt-4 flex items-center justify-center">
                        <Lock className="h-8 w-8 text-slate-700" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">The Watchmann Ecosystem</h2>
              <p className="text-xl text-slate-400">
                A unified architecture that transforms fragmented operations into a cohesive, high-performance engine.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <Card className="group relative border-slate-800 bg-slate-900/50 backdrop-blur hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="h-7 w-7 text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">AI Labs</CardTitle>
                  <CardDescription className="text-slate-400 text-base">
                    Innovation lab for experimental research and custom AI agent development.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                   <Link href="/ai-labs" className="inline-flex items-center text-blue-400 font-medium hover:underline">
                      Explore Innovation <ArrowRight className="ml-2 h-4 w-4" />
                   </Link>
                </CardContent>
              </Card>

              <Card className="group relative border-slate-800 bg-slate-900/50 backdrop-blur hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ShoppingCart className="h-7 w-7 text-cyan-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Marketplace</CardTitle>
                  <CardDescription className="text-slate-400 text-base">
                    Curated solution ecosystem for premium tools, templates, and service packs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                   <Link href="/marketplace" className="inline-flex items-center text-cyan-400 font-medium hover:underline">
                      Browse Solutions <ArrowRight className="ml-2 h-4 w-4" />
                   </Link>
                </CardContent>
              </Card>

              <Card className="group relative border-slate-800 bg-slate-900/50 backdrop-blur hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-7 w-7 text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Academy</CardTitle>
                  <CardDescription className="text-slate-400 text-base">
                    Expert-led learning paths to master the intersection of tech and operations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                   <Link href="/academy" className="inline-flex items-center text-blue-400 font-medium hover:underline">
                      Master Skills <ArrowRight className="ml-2 h-4 w-4" />
                   </Link>
                </CardContent>
              </Card>

              <Card className="group relative border-slate-800 bg-slate-900/50 backdrop-blur hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <LayoutDashboard className="h-7 w-7 text-cyan-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Management</CardTitle>
                  <CardDescription className="text-slate-400 text-base">
                    Unified operational hub for client projects and resource allocation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                   <Link href="/dashboard" className="inline-flex items-center text-cyan-400 font-medium hover:underline">
                      Access Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                   </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Outcome / Trust Signals Section */}
        <section className="py-24 bg-slate-900/20 border-t border-slate-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-400" />
                  <span className="text-xl font-bold text-white tracking-widest">SOC 2 TYPE II</span>
               </div>
               <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-400" />
                  <span className="text-xl font-bold text-white tracking-widest">GDPR READY</span>
               </div>
               <div className="flex items-center gap-3">
                  <Globe className="h-8 w-8 text-blue-400" />
                  <span className="text-xl font-bold text-white tracking-widest">ISO 27001</span>
               </div>
            </div>

            <div className="mt-24 grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                { label: "Efficiency Boost", value: "45%", desc: "Average increase in operational speed" },
                { label: "ROI Growth", value: "2.5x", desc: "Return on investment within 12 months" },
                { label: "Uptime", value: "99.9%", desc: "Enterprise-grade reliability and support" },
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-2">
                  <div className="text-5xl font-bold text-white">{stat.value}</div>
                  <div className="text-lg font-medium text-blue-400">{stat.label}</div>
                  <p className="text-slate-400">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Flexible Pricing for Every Stage</h2>
              <p className="text-xl text-slate-400">
                Choose the plan that fits your agency's growth and operational complexity.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-slate-800 bg-slate-950/50 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Starter</CardTitle>
                  <CardDescription className="text-slate-400">Essential tools for boutique agencies</CardDescription>
                  <div className="pt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">$49</span>
                    <span className="text-slate-500">/mo</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                   <ul className="space-y-4">
                      {["5 Client Projects", "Core AI Labs Access", "Standard Marketplace Tools", "Email Support"].map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                          <CheckCircle2 className="h-5 w-5 text-blue-500" />
                          <span>{f}</span>
                        </li>
                      ))}
                   </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                   <Button asChild variant="outline" className="w-full border-slate-800 text-white hover:bg-slate-900">
                      <Link href="/auth/sign-up">Get Started</Link>
                   </Button>
                </div>
              </Card>

              <Card className="border-blue-500/50 bg-slate-900/50 flex flex-col relative scale-105 shadow-2xl shadow-blue-500/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">Professional</CardTitle>
                  <CardDescription className="text-slate-400">Advanced scaling for established teams</CardDescription>
                  <div className="pt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">$149</span>
                    <span className="text-slate-500">/mo</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                   <ul className="space-y-4">
                      {["Unlimited Projects", "Full AI Labs Suite", "Premium Marketplace Assets", "Academy Certifications", "Priority Support"].map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                          <CheckCircle2 className="h-5 w-5 text-blue-500" />
                          <span>{f}</span>
                        </li>
                      ))}
                   </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                   <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href="/auth/sign-up">Start Free Trial</Link>
                   </Button>
                </div>
              </Card>

              <Card className="border-slate-800 bg-slate-950/50 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Enterprise</CardTitle>
                  <CardDescription className="text-slate-400">Custom solutions for large-scale operations</CardDescription>
                  <div className="pt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">$499</span>
                    <span className="text-slate-500">/mo</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                   <ul className="space-y-4">
                      {["Custom Infrastructure", "Dedicated Success Manager", "SLA Guarantees", "Whitelabel Options", "On-site Training"].map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                          <CheckCircle2 className="h-5 w-5 text-blue-500" />
                          <span>{f}</span>
                        </li>
                      ))}
                   </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                   <Button asChild variant="outline" className="w-full border-slate-800 text-white hover:bg-slate-900">
                      <Link href="/contact">Schedule Assessment</Link>
                   </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-8 py-20 text-center text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-cyan-500 -z-10" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to Transform Your Agency?</h2>
              <p className="text-xl text-blue-50 opacity-90 leading-relaxed">
                Join the elite agencies using Watchmann Technologies to deliver world-class results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-10 h-auto py-5 rounded-full shadow-xl">
                  <Link href="/auth/sign-up">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 text-lg px-10 h-auto py-5 rounded-full backdrop-blur-sm">
                  <Link href="/contact">Schedule Agency Assessment</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
