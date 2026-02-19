import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Zap, Shield, Users, TrendingUp, Cpu, ShoppingCart, GraduationCap, FileText, Check } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-40 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-blue-500/10 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <Zap size={16} />
            <span>Join 500+ agencies scaling with AI</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-white text-balance tracking-tight leading-[1.1]">
            Automate Client Reporting & <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Scale Your Agency
            </span>{" "}
            Without Hiring
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 text-balance max-w-3xl mx-auto leading-relaxed">
            The complete OS for AI-driven agencies. Centralize client management, automate reporting, and access a premium marketplace of AI tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-forwards">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
              <Link href="/auth/sign-up">
                Get Started Free
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-slate-700 text-white hover:bg-slate-800 text-lg px-8 bg-transparent"
            >
              <Link href="#features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="container mx-auto px-4 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">One Platform. Every Pillar of Growth.</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Replace your fragmented toolstack with a unified operating system built specifically for agency scale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-4">
              {[
                { title: "AI Labs", desc: "Showcase custom AI solutions to clients", icon: Cpu },
                { title: "Marketplace", desc: "Access high-performing AI templates", icon: ShoppingCart },
                { title: "Academy", desc: "Train your team on the latest AI tech", icon: GraduationCap },
                { title: "Client Management", desc: "Automate reporting & deliverables", icon: Users },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all group cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-slate-700" />
                      <div className="w-3 h-3 rounded-full bg-slate-700" />
                      <div className="w-3 h-3 rounded-full bg-slate-700" />
                    </div>
                    <div className="mx-auto text-xs text-slate-500 font-medium">watchmann.dev/dashboard</div>
                  </div>
                  <div className="aspect-[16/10] bg-slate-950 flex p-0">
                    {/* Simulated Dashboard UI */}
                    <div className="w-48 border-r border-slate-800 p-4 space-y-6 hidden md:block bg-slate-900/30">
                      <div className="h-3 w-24 bg-slate-800 rounded" />
                      <div className="space-y-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="flex gap-2 items-center">
                            <div className="h-3 w-3 bg-slate-800 rounded-sm" />
                            <div className="h-2 w-20 bg-slate-800/50 rounded" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 p-6 space-y-6 overflow-hidden">
                      <div className="flex justify-between items-center">
                        <div className="space-y-2">
                          <div className="h-4 w-32 bg-slate-800 rounded" />
                          <div className="h-2 w-48 bg-slate-800/50 rounded" />
                        </div>
                        <div className="h-8 w-24 bg-blue-600/20 border border-blue-500/50 rounded flex items-center justify-center text-[10px] text-blue-400 font-bold uppercase tracking-wider">
                          Active
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { label: "Active Clients", value: "42", color: "text-blue-400" },
                          { label: "Reports Generated", value: "1.2k", color: "text-emerald-400" },
                          { label: "AI Labs Usage", value: "88%", color: "text-cyan-400" },
                        ].map((stat, i) => (
                          <div key={i} className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 space-y-2">
                            <div className="text-[10px] text-slate-500 font-bold uppercase">{stat.label}</div>
                            <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                          </div>
                        ))}
                      </div>
                      <div className="h-40 bg-slate-900/50 rounded-lg border border-slate-800 p-4 flex flex-col gap-4">
                        <div className="flex justify-between items-end h-full gap-2">
                          {[40, 70, 45, 90, 65, 80, 50, 95, 75, 60, 85].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-blue-500/20 border-t border-blue-500/50 rounded-t-sm"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-32 border-t border-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-xl text-slate-400">Scale your agency in three simple steps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent -z-10" />

            {[
              {
                step: "01",
                title: "Connect & Audit",
                desc: "Integrate your existing client accounts and let Watchmann audit your reporting workflows.",
                icon: Zap,
              },
              {
                step: "02",
                title: "Automate Workflows",
                desc: "Deploy AI Labs models to automate client communication, data analysis, and report generation.",
                icon: Cpu,
              },
              {
                step: "03",
                title: "Scale Output",
                desc: "Handle 10x the clients with the same team size by leveraging our marketplace and academy.",
                icon: TrendingUp,
              },
            ].map((item, idx) => (
              <div key={item.step} className="text-center space-y-6 group">
                <div className="relative mx-auto w-20 h-20">
                   <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/40 transition-colors" />
                   <div className="relative w-20 h-20 rounded-full border-2 border-slate-800 bg-slate-950 flex items-center justify-center text-blue-400 font-bold text-xl group-hover:border-blue-500 transition-colors">
                     {item.step}
                   </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Features Section (Problem -> Solution -> Outcome) */}
      <section id="features" className="container mx-auto px-4 py-32 bg-slate-900/20">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Problem */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
                The Problem
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Agencies are drowning in manual reporting.</h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Most agencies spend 40% of their time manually pulling data, formatting slides, and explaining basic metrics to clients. This overhead kills margins and prevents scaling.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-2"><ArrowRight className="text-red-500 shrink-0" size={20} /> Data silos across dozens of tools</li>
                <li className="flex gap-2"><ArrowRight className="text-red-500 shrink-0" size={20} /> Human error in critical reporting</li>
                <li className="flex gap-2"><ArrowRight className="text-red-500 shrink-0" size={20} /> High churn due to lack of visibility</li>
              </ul>
            </div>
            <div className="relative aspect-square rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center p-12 overflow-hidden">
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
               <div className="text-center space-y-4 relative z-10">
                 <div className="text-6xl">📉</div>
                 <div className="text-slate-500 font-mono text-sm">Fragmented Workflows</div>
               </div>
            </div>
          </div>

          {/* Solution */}
          <div className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
            <div className="md:order-2 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                The Solution
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">A unified AI OS for your agency.</h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Watchmann centralizes your data and uses custom AI models to automate 90% of your reporting and client management tasks. One source of truth, infinite scalability.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-2"><Check className="text-blue-500 shrink-0" size={20} /> Automated data aggregation</li>
                <li className="flex gap-2"><Check className="text-blue-500 shrink-0" size={20} /> AI-generated insights & commentary</li>
                <li className="flex gap-2"><Check className="text-blue-500 shrink-0" size={20} /> Branded client portals</li>
              </ul>
            </div>
            <div className="md:order-1 relative aspect-square rounded-2xl bg-blue-900/20 border border-blue-500/30 flex items-center justify-center p-12 overflow-hidden shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-blue-500" />
               <div className="text-center space-y-4 relative z-10">
                 <div className="text-6xl">🤖</div>
                 <div className="text-blue-400 font-mono text-sm">Watchmann AI Engine</div>
               </div>
            </div>
          </div>

          {/* Outcome */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                The Outcome
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Scale without adding headcount.</h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                By automating the busy work, your team can focus on strategy and high-level client relationships. Our partners see an average 3x increase in client capacity per account manager.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-2xl font-bold text-emerald-400">300%</div>
                  <div className="text-xs text-slate-500">Capacity Increase</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-2xl font-bold text-emerald-400">-75%</div>
                  <div className="text-xs text-slate-500">Reporting Time</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl bg-emerald-900/10 border border-emerald-500/20 flex items-center justify-center p-12 overflow-hidden">
               <div className="text-center space-y-4 relative z-10">
                 <div className="text-6xl">🚀</div>
                 <div className="text-emerald-400 font-mono text-sm">Exponential Growth</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section className="container mx-auto px-4 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by the World's Best Agencies</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {["LandBiznes", "Kobtec", "Configure SL", "GlobalAds", "Nexus"].map((logo) => (
                <span key={logo} className="text-2xl font-bold text-slate-400 tracking-tighter">{logo}</span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Watchmann has fundamentally changed how we handle client reporting. We've reclaimed 15 hours a week per account manager.",
                author: "Daniel Moseray",
                role: "LandBiznes",
              },
              {
                quote: "The AI Labs pillar is a game-changer. We can now offer custom AI solutions to our clients that were previously impossible.",
                author: "Thomas Kobba",
                role: "Kobtec Company",
              },
              {
                quote: "Scaling from 20 to 60 clients was seamless. The automation tools are the most robust we've found in the market.",
                author: "Momodu Thoronka",
                role: "Configure sl media",
              },
            ].map((t, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
                <div className="flex text-blue-400 mb-2">
                  {[...Array(5)].map((_, i) => <Zap key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 italic">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Case Study Snippet */}
          <div className="mt-32 p-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20">
             <div className="bg-slate-950 rounded-[22px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                    Case Study: GlobalAds
                  </div>
                  <h3 className="text-3xl font-bold text-white">How GlobalAds scaled to 100+ clients without hiring new account managers.</h3>
                  <div className="flex gap-8">
                    <div>
                      <div className="text-3xl font-bold text-blue-400">100%</div>
                      <div className="text-sm text-slate-500">Retention Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-400">4.5x</div>
                      <div className="text-sm text-slate-500">ROI Increase</div>
                    </div>
                  </div>
                  <Button variant="link" asChild className="text-blue-400 p-0 text-lg">
                    <Link href="/blog/globalads-case-study">Read the full story <ArrowRight className="ml-2" /></Link>
                  </Button>
                </div>
                <div className="flex-1 w-full aspect-video rounded-xl bg-slate-900 border border-slate-800 p-6 flex flex-col gap-4 overflow-hidden shadow-inner shadow-blue-500/5">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <div className="h-3 w-3 bg-blue-500 rounded-full animate-pulse" />
                      <div className="h-3 w-32 bg-slate-800 rounded" />
                    </div>
                    <div className="h-6 w-20 bg-blue-500/20 rounded-full border border-blue-500/50 flex items-center justify-center">
                      <div className="h-1.5 w-10 bg-blue-400 rounded-full" />
                    </div>
                  </div>
                  <div className="flex-1 flex gap-1 items-end px-2 py-4">
                    {[25, 45, 35, 75, 55, 85, 65, 80, 90, 100, 85, 95, 110, 105, 120].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-600/40 to-cyan-400/40 rounded-t-sm"
                        style={{ height: `${(h / 120) * 100}%` }}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-4 gap-3 mt-auto">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-12 bg-slate-950/50 rounded-lg border border-slate-800 flex flex-col justify-center px-3 gap-2">
                        <div className="h-1.5 w-8 bg-slate-800 rounded" />
                        <div className="h-2 w-12 bg-slate-700 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
             </div>
          </div>

          {/* Trust Signals */}
          <div className="mt-32 pt-16 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-white mb-2">Enterprise-Grade Trust</h4>
              <p className="text-slate-400">Your data security is our top priority.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 grayscale opacity-60">
               <div className="flex flex-col items-center gap-2">
                 <Shield className="h-10 w-10 text-slate-300" />
                 <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">SOC 2 Type II</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <Shield className="h-10 w-10 text-slate-300" />
                 <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">GDPR Compliant</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <Shield className="h-10 w-10 text-slate-300" />
                 <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">ISO 27001</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <Shield className="h-10 w-10 text-slate-300" />
                 <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">SSL Secure</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-12 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">Ready to Scale Your Agency to the Next Level?</h2>
              <p className="text-xl text-blue-100">Join 500+ agencies using Watchmann to automate their operations and increase their margins.</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild className="bg-white text-blue-700 hover:bg-blue-50 text-xl py-8 px-8">
                  <Link href="/auth/sign-up">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-blue-400 text-white hover:bg-blue-700 bg-transparent text-xl py-8 px-8">
                  <Link href="/contact">Schedule Agency Assessment</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 bg-blue-900/50 flex items-center justify-center p-12 relative overflow-hidden">
               <div className="absolute inset-0 opacity-20">
                 <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-[100px]" />
                 <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-400 rounded-full blur-[100px]" />
               </div>
               <div className="relative z-10 text-center space-y-4">
                 <div className="text-5xl font-bold text-white">14 Days</div>
                 <div className="text-blue-200">Free trial. No credit card required.</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
