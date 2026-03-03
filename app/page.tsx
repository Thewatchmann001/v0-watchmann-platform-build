"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Zap, Shield, Users, TrendingUp, Cpu, ShoppingCart, GraduationCap, FileText, Play, CheckCircle2, X } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsDemoModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />


      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-balance">
            Transform Your Agency with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI-Powered Solutions
            </span>
          </h1>
          <p className="text-xl text-slate-300 text-balance max-w-2xl mx-auto">
            The complete operating system for AI-driven agencies. Centralize client management, automate reporting, and deploy custom AI solutions — all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
              <Link href="/auth/sign-up">
                Get Started Free
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsDemoModalOpen(true)}
              className="border-slate-700 text-white hover:bg-slate-800 text-lg px-8 bg-transparent flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Play className="fill-blue-400 text-blue-400" size={10} />
              </div>
              Watch Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 pt-8 text-sm text-slate-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="text-emerald-500" size={16} />
              No credit card required
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="text-emerald-500" size={16} />
              Setup in under 10 minutes
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="text-emerald-500" size={16} />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>


      <section className="py-24 container mx-auto px-4 reveal">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
          <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800/50 border-b border-slate-800">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
            <div className="ml-2 text-xs text-slate-500 font-mono">watchmann -- terminal</div>
          </div>
          <div className="p-6 font-mono text-sm sm:text-base leading-relaxed">
            <div className="text-blue-400 mb-2">$ generate_client_report --client="Q4 Summary"</div>
            <div className="text-slate-400 mb-1">▸ Loading client data...</div>
            <div className="text-slate-400 mb-1">▸ Analyzing 847 data points...</div>
            <div className="text-slate-400 mb-1">▸ Identifying key growth trends...</div>
            <div className="text-emerald-400 mb-2">✓ Report Ready — Q4 Summary</div>
            <div className="pl-4 text-slate-300 mb-1">Revenue up +34% vs Q3</div>
            <div className="pl-4 text-slate-300 mb-1">Client retention: 96%</div>
            <div className="pl-4 text-slate-300 mb-2">Delivered to 1 client in 4 seconds</div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">$</span>
              <span className="w-2 h-5 bg-blue-500/50 animate-pulse"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-slate-400">Active Agencies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1,000+</div>
            <div className="text-slate-400">Projects Managed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">25+</div>
            <div className="text-slate-400">AI Models</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-slate-400">Uptime</div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="reveal container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Everything You Need, All in One Place</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive platform built for modern agencies and enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-slate-800 bg-slate-900/50 backdrop-blur hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">AI Labs</CardTitle>
                <CardDescription className="text-slate-400">
                  Showcase cutting-edge AI projects and innovations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="text-blue-400 p-0">
                  <Link href="/ai-labs">
                    Explore Labs <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-900/50 backdrop-blur hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white">Marketplace</CardTitle>
                <CardDescription className="text-slate-400">
                  Buy and sell AI tools, templates, and services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="text-blue-400 p-0">
                  <Link href="/marketplace">
                    Browse Products <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-900/50 backdrop-blur hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Academy</CardTitle>
                <CardDescription className="text-slate-400">Learn from industry experts and master AI</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="text-blue-400 p-0">
                  <Link href="/academy">
                    Start Learning <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-900/50 backdrop-blur hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white">Blog & Insights</CardTitle>
                <CardDescription className="text-slate-400">
                  Stay updated with latest trends and best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="text-blue-400 p-0">
                  <Link href="/blog">
                    Read Articles <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Social Proof & Testimonials */}
      <section className="container mx-auto px-4 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by agencies & businesses across West Africa</h2>
            <div className="marquee">
              <div className="marquee__content">
                {["LandBiznes", "·", "Kobtec", "·", "Configure SL", "·", "Wafjed", "·", "TranscendMovement"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xl font-bold text-slate-700 px-8">
                    {item}
                  </div>
                ))}
              </div>
              <div className="marquee__content" aria-hidden="true">
                {["LandBiznes", "·", "Kobtec", "·", "Configure SL", "·", "Wafjed", "·", "TranscendMovement"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xl font-bold text-slate-700 px-8">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
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
          </motion.div>


          {/* Portfolio Section */}
          <div className="mt-32 reveal">
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest">
                What We Build
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Watchmann builds technology that solves real problems.</h2>
              <p className="text-xl text-slate-400 max-w-3xl">
                Beyond our agency platform, Watchmann develops enterprise-grade technology across industries. Every product credits Watchmann — because quality is non-negotiable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <Link href="https://landbiznes.com" target="_blank" className="group block h-full">
                <div className="h-full border border-slate-800 bg-slate-900/40 p-8 rounded-2xl hover:border-blue-500/50 transition-all hover:-translate-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-4 block">Blockchain · PropTech</span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">LandBiznes</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Sierra Leone's first blockchain-powered land registry and marketplace. Satellite boundary mapping, KYC verification, and trust scores eliminating land fraud.
                  </p>
                </div>
              </Link>

              <Link href="/" className="group block h-full">
                <div className="h-full border border-slate-800 bg-slate-900/40 p-8 rounded-2xl hover:border-cyan-500/50 transition-all hover:-translate-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-4 block">Agency · SaaS</span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">Watchmann Platform</h3>
                  <p className="text-slate-400 leading-relaxed">
                    The AI operating system for agencies. Automate reporting, deploy custom AI tools, and scale client capacity without scaling headcount.
                  </p>
                </div>
              </Link>

              <div className="h-full border border-slate-800 border-dashed bg-slate-900/20 p-8 rounded-2xl relative overflow-hidden">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-4 block">Coming 2026</span>
                <h3 className="text-2xl font-bold text-white mb-4">Jems AI</h3>
                <p className="text-slate-500 leading-relaxed">
                  A proprietary AI fusion platform that blends multiple AI models into one unified, emergent intelligence — the metallurgy of artificial minds.
                </p>
                <div className="absolute bottom-8 left-8 text-xs font-medium text-slate-600 italic">In development</div>
              </div>
            </div>
          </div>


          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-32 pt-16 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-12"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20"
        >
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
        </motion.div>
      </section>

      <SiteFooter />

      {/* Demo Modal */}
      <AnimatePresence>
        {isDemoModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setIsDemoModalOpen(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 sm:p-12 text-center space-y-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <Play className="fill-blue-400 text-blue-400" size={32} />
                </div>

                <h3 className="text-3xl font-bold text-white">Schedule a Platform Demo</h3>
                <p className="text-slate-400 text-lg">
                  See Watchmann in action — a live walkthrough of the platform tailored to your agency's needs.
                </p>

                <Button size="lg" asChild className="w-full bg-blue-600 hover:bg-blue-700 h-14 rounded-full text-lg">
                  <Link href="/contact">Book Your Demo →</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}
