"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Cpu, ShoppingCart, GraduationCap, FileText, Play, CheckCircle2, X } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function PlatformPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDemoModalOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-block text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
            A Watchmann Technologies product
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold text-white text-balance tracking-tight">
            The Operating System for <span className="text-blue-400">AI-Driven Agencies</span>
          </h1>
          <p className="text-xl text-slate-300 text-balance max-w-2xl mx-auto">
            We built Watchmann Platform to centralize client management, automate reporting, and deploy custom AI
            tools for agencies — all in one place.
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
            <div className="text-slate-400 mb-1">▸ Analyzing data points...</div>
            <div className="text-slate-400 mb-1">▸ Identifying key growth trends...</div>
            <div className="text-emerald-400 mb-2">✓ Report Ready — Q4 Summary</div>
            <div className="pl-4 text-slate-300 mb-2">Delivered to client in seconds, not hours</div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">$</span>
              <span className="w-2 h-5 bg-blue-500/50 animate-pulse"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="reveal container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">Everything an Agency Needs, In One Place</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Built for modern agencies deploying AI on behalf of their clients
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
                <div className="h-12 w-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-slate-300" />
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
                <div className="h-12 w-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-slate-300" />
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

      {/* Client list — TODO: reconfirm these client names with each company before this page goes live. See CONTENT_AUDIT.md. */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-10 tracking-tight">
            Agencies and businesses we've worked with
          </h2>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {["LandBiznes", "Kobtec", "Configure SL", "Wafjed", "TranscendMovement"].map((item) => (
              <span key={item} className="text-lg font-medium text-slate-400">
                {item}
              </span>
            ))}
          </div>
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
              <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
                Ready to Scale Your Agency to the Next Level?
              </h2>
              <p className="text-xl text-blue-100">
                Automate your reporting, deploy AI tools for your clients, and grow capacity without growing
                headcount.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild className="bg-white text-blue-700 hover:bg-blue-50 text-xl py-8 px-8">
                  <Link href="/auth/sign-up">Start Free Trial</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-blue-400 text-white hover:bg-blue-700 bg-transparent text-xl py-8 px-8"
                >
                  <Link href="/contact">Schedule Agency Assessment</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 bg-blue-900/50 flex items-center justify-center p-12">
              <div className="text-center space-y-4">
                <div className="text-5xl font-semibold text-white">14 Days</div>
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

                <h3 className="text-3xl font-semibold text-white">Schedule a Platform Demo</h3>
                <p className="text-slate-400 text-lg">
                  See Watchmann Platform in action — a live walkthrough tailored to your agency's needs.
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
