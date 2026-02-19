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
        <section className="container mx-auto px-4 py-20 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
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
              className={`flex flex-col md:items-center gap-12 animate-in fade-in duration-1000 fill-mode-both ${
                index % 2 === 1
                  ? "md:flex-row-reverse slide-in-from-right-8"
                  : "md:flex-row slide-in-from-left-8"
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
                  <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden aspect-video bg-slate-950">
                    {pillar.title === "AI Labs" && (
                      <div className="p-6 h-full flex flex-col gap-4">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                          <div className="flex gap-2">
                            <div className="h-2 w-8 bg-blue-500 rounded" />
                            <div className="h-2 w-12 bg-slate-800 rounded" />
                          </div>
                          <div className="h-6 w-20 bg-blue-500/20 border border-blue-500/50 rounded flex items-center justify-center text-[10px] text-blue-400 font-bold uppercase tracking-wider">GPT-4-Turbo</div>
                        </div>
                        <div className="flex-1 flex gap-4">
                          <div className="w-1/3 space-y-3">
                            {[1, 2, 3, 4].map(i => (
                              <div key={i} className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg space-y-2">
                                <div className="h-1.5 w-full bg-slate-800 rounded" />
                                <div className="h-1.5 w-2/3 bg-slate-800/50 rounded" />
                              </div>
                            ))}
                          </div>
                          <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-lg p-4 font-mono text-[10px] text-slate-500 leading-relaxed">
                            <span className="text-blue-400">PROMPT:</span> Analyze the following dataset and generate a summary report for the Q4 marketing campaign...<br /><br />
                            <span className="text-emerald-400">OUTPUT:</span> Based on the provided data, the Q4 campaign saw a 24% increase in conversion rates...
                          </div>
                        </div>
                      </div>
                    )}
                    {pillar.title === "Marketplace" && (
                      <div className="p-6 h-full flex flex-col gap-6">
                        <div className="flex gap-4">
                           <div className="flex-1 h-8 bg-slate-900 border border-slate-800 rounded-lg flex items-center px-3 gap-2">
                             <div className="h-3 w-3 rounded-full border border-slate-700" />
                             <div className="h-2 w-24 bg-slate-800 rounded" />
                           </div>
                           <div className="h-8 w-24 bg-blue-600 rounded-lg" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex gap-3">
                              <div className="h-10 w-10 bg-slate-800 rounded-lg shrink-0" />
                              <div className="space-y-2 flex-1">
                                <div className="h-2 w-16 bg-slate-200 rounded" />
                                <div className="h-1.5 w-24 bg-slate-700 rounded" />
                                <div className="flex justify-between items-center pt-2">
                                  <div className="h-2 w-8 bg-blue-400 rounded" />
                                  <div className="h-4 w-10 bg-slate-800 rounded" />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {pillar.title === "Academy" && (
                      <div className="p-6 h-full flex gap-6">
                        <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-xl relative overflow-hidden flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
                            <div className="h-full w-2/3 bg-blue-500" />
                          </div>
                        </div>
                        <div className="w-1/3 space-y-3">
                           <div className="h-2 w-16 bg-slate-500 rounded mb-4" />
                           {[1, 2, 3, 4, 5, 6].map(i => (
                             <div key={i} className="flex gap-2 items-center">
                               <div className={`h-4 w-4 rounded border ${i < 4 ? "bg-blue-500 border-blue-500" : "border-slate-800"}`} />
                               <div className="h-1.5 w-full bg-slate-800 rounded" />
                             </div>
                           ))}
                        </div>
                      </div>
                    )}
                    {pillar.title === "Client Management" && (
                      <div className="p-6 h-full flex flex-col gap-6">
                        <div className="grid grid-cols-3 gap-4">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="h-16 bg-slate-900/50 border border-slate-800 rounded-lg p-3 space-y-2">
                              <div className="h-1.5 w-12 bg-slate-500 rounded" />
                              <div className="h-3 w-16 bg-slate-200 rounded" />
                            </div>
                          ))}
                        </div>
                        <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-lg p-4 space-y-4">
                           <div className="flex justify-between items-center">
                             <div className="h-2 w-24 bg-slate-200 rounded" />
                             <div className="h-6 w-16 bg-emerald-500/20 border border-emerald-500/50 rounded flex items-center justify-center text-[10px] text-emerald-400 font-bold uppercase">Healthy</div>
                           </div>
                           <div className="space-y-3">
                             {[1, 2, 3].map(i => (
                               <div key={i} className="flex items-center gap-4 py-2 border-b border-slate-800 last:border-0">
                                 <div className="h-8 w-8 rounded bg-slate-800" />
                                 <div className="flex-1 space-y-2">
                                   <div className="h-1.5 w-32 bg-slate-200 rounded" />
                                   <div className="h-1 w-24 bg-slate-700 rounded" />
                                 </div>
                                 <div className="h-2 w-12 bg-slate-800 rounded" />
                               </div>
                             ))}
                           </div>
                        </div>
                      </div>
                    )}
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
