"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/hero-background"
import { LogoMarquee } from "@/components/logo-marquee"
import { TransformationSection } from "@/components/transformation-section"
import { AILabsSimulation, MarketplaceSimulation, AcademySimulation, ClientManagementSimulation } from "@/components/ui-simulations"
import Link from "next/link"
import { ArrowRight, Zap, Shield, Users, TrendingUp, Cpu, ShoppingCart, GraduationCap, Check, Play } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("AI Labs")

  const showcasePillars = [
    { title: "AI Labs", desc: "Showcase custom AI solutions to clients", icon: Cpu, component: <AILabsSimulation /> },
    { title: "Marketplace", desc: "Access high-performing AI templates", icon: ShoppingCart, component: <MarketplaceSimulation /> },
    { title: "Academy", desc: "Train your team on the latest AI tech", icon: GraduationCap, component: <AcademySimulation /> },
    { title: "Client Management", desc: "Automate reporting & deliverables", icon: Users, component: <ClientManagementSimulation /> },
  ]
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-500/30">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <HeroBackground />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-4 mb-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live System Status: Optimal</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-xs font-medium">
                <Zap size={14} className="text-blue-400" />
                <span>Join 500+ agencies scaling with Watchmann AI</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-8xl font-bold text-white text-balance tracking-tight leading-[1.1]"
            >
              Automate Client Reporting & <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Scale Your Agency
              </span>{" "}
              Without Hiring
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 text-balance max-w-3xl mx-auto leading-relaxed"
            >
              The complete OS for AI-driven agencies. Centralize client management, automate reporting, and access a premium marketplace of AI tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-7 h-auto group">
                <Link href="/auth/sign-up">
                  Get Started Free
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-7 h-auto bg-slate-900/50 backdrop-blur-sm group"
              >
                <Link href="#demo" className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-2 group-hover:bg-blue-500/20 transition-colors">
                    <Play size={16} className="text-blue-400 fill-blue-400" />
                  </div>
                  Play Demo
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Scroll to Explore</div>
          <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" />
        </motion.div>
      </section>

      {/* Product Showcase Section */}
      <section id="demo" className="container mx-auto px-4 py-32 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">One Platform. Every Pillar of Growth.</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Replace your fragmented toolstack with a unified operating system built specifically for agency scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 space-y-4"
            >
              {showcasePillars.map((item) => (
                <div
                  key={item.title}
                  onClick={() => setActiveTab(item.title)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer backdrop-blur-sm ${
                    activeTab === item.title
                      ? "bg-blue-600/10 border-blue-500/50 ring-1 ring-blue-500/20 shadow-[0_0_20px_-12px_rgba(59,130,246,0.5)]"
                      : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center transition-colors ${
                      activeTab === item.title ? "bg-blue-500 text-white" : "bg-blue-500/10 text-blue-400"
                    }`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8 h-full min-h-[500px]"
            >
              <div className="relative h-full group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 backdrop-blur-sm flex flex-col">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                    </div>
                    <div className="mx-auto text-[10px] text-slate-500 font-mono tracking-widest uppercase">watchmann_os_v1.0.4.sys</div>
                  </div>
                  <div className="flex-1 overflow-hidden relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                      >
                        {showcasePillars.find(p => p.title === activeTab)?.component}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TransformationSection />

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-32 border-t border-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">How It Works</h2>
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
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center space-y-6 group"
              >
                <div className="relative mx-auto w-20 h-20">
                   <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/40 transition-colors" />
                   <div className="relative w-20 h-20 rounded-full border-2 border-slate-800 bg-slate-950 flex items-center justify-center text-blue-400 font-bold text-xl group-hover:border-blue-500 transition-colors">
                     {item.step}
                   </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Features Section (Problem -> Solution -> Outcome) */}
      <section id="features" className="container mx-auto px-4 py-32 bg-slate-900/20">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
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
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse"
          >
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
          </motion.div>

          {/* Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section className="container mx-auto px-4 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by the World's Best Agencies</h2>
            <LogoMarquee />
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

          {/* Case Study Snippet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32 p-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20"
          >
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
          </motion.div>

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
    </div>
  )
}
