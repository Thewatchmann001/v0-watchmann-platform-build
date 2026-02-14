import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Zap, Shield, Users, TrendingUp, Cpu, ShoppingCart, GraduationCap, FileText } from "lucide-react"

export default function HomePage() {
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
            Complete ecosystem for modern agencies: AI Labs showcase, marketplace, learning academy, and powerful client
            management tools.
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
              asChild
              className="border-slate-700 text-white hover:bg-slate-800 text-lg px-8 bg-transparent"
            >
              <Link href="#features">Explore Features</Link>
            </Button>
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
      <section id="features" className="container mx-auto px-4 py-20">
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

      {/* Platform Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Lightning Fast</h3>
              <p className="text-slate-400">Built on cutting-edge infrastructure for optimal performance and speed</p>
            </div>

            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Enterprise Security</h3>
              <p className="text-slate-400">Bank-grade security with Row Level Security and advanced encryption</p>
            </div>

            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Multi-Tenant Ready</h3>
              <p className="text-slate-400">Perfect for agencies managing multiple clients and organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto border-slate-800 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur">
          <CardContent className="p-12 text-center space-y-6">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
              <TrendingUp className="h-8 w-8 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Transform Your Agency?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Join hundreds of agencies already using Watchmann Technologies Ltd to scale their operations and deliver exceptional
              results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/auth/sign-up">
                  Start Free Trial
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-slate-700 text-white hover:bg-slate-800 bg-transparent"
              >
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <SiteFooter />
    </div>
  )
}
