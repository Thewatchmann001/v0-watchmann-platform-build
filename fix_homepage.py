import re
import os

file_path = 'app/page.tsx'
with open(file_path, 'r') as f:
    content = f.read()

# 1. Update Hero Subtext (Task 8)
content = re.sub(
    r'<p className="text-xl text-slate-300 text-balance max-w-2xl mx-auto">\s*Complete ecosystem for modern agencies: AI Labs showcase, marketplace, learning academy, and powerful client\s*management tools.\s*</p>',
    '<p className="text-xl text-slate-300 text-balance max-w-2xl mx-auto">\n            The complete operating system for AI-driven agencies. Centralize client management, automate reporting, and deploy custom AI solutions — all in one platform.\n          </p>',
    content
)

# 2. Add Trust Indicators (Task 9) and Fix Demo Button (Task 3)
content = re.sub(
    r'<Button\s*size="lg"\s*variant="outline"\s*asChild\s*className="border-slate-700 text-white hover:bg-slate-800 text-lg px-8 bg-transparent"\s*>\s*<Link href="#features">Explore Features</Link>\s*</Button>',
    '''<Button
              size="lg"
              variant="outline"
              onClick={() => setIsDemoModalOpen(true)}
              className="border-slate-700 text-white hover:bg-slate-800 text-lg px-8 bg-transparent flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Play className="fill-blue-400 text-blue-400" size={10} />
              </div>
              Watch Demo
            </Button>''',
    content
)

# Add trust indicators after the button container
content = re.sub(
    r'(<div className="flex flex-col sm:flex-row gap-4 justify-center">.*?</div>)',
    r'\1\n          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 pt-8 text-sm text-slate-500">\n            <div className="flex items-center gap-1.5">\n              <CheckCircle2 className="text-emerald-500" size={16} />\n              No credit card required\n            </div>\n            <div className="flex items-center gap-1.5">\n              <CheckCircle2 className="text-emerald-500" size={16} />\n              Setup in under 10 minutes\n            </div>\n            <div className="flex items-center gap-1.5">\n              <CheckCircle2 className="text-emerald-500" size={16} />\n              Cancel anytime\n            </div>\n          </div>',
    content,
    flags=re.DOTALL
)

# 3. Add necessary imports and state
content = content.replace(
    'import { ArrowRight, Zap, Shield, Users, TrendingUp, Cpu, ShoppingCart, GraduationCap, FileText } from "lucide-react"',
    'import { ArrowRight, Zap, Shield, Users, TrendingUp, Cpu, ShoppingCart, GraduationCap, FileText, Play, CheckCircle2, X } from "lucide-react"\nimport { useState, useEffect } from "react"\nimport { motion, AnimatePresence } from "framer-motion"'
)

content = content.replace(
    'export default function HomePage() {',
    'export default function HomePage() {\n  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)\n\n  useEffect(() => {\n    const observer = new IntersectionObserver((entries) => {\n      entries.forEach(entry => {\n        if (entry.isIntersecting) {\n          entry.target.classList.add(\'visible\');\n        }\n      });\n    }, { threshold: 0.1 });\n    \n    document.querySelectorAll(\'.reveal\').forEach(el => observer.observe(el));\n    \n    return () => observer.disconnect();\n  }, []);'
)

# Add "use client"
if not content.startswith('"use client"'):
    content = '"use client"\n\n' + content

# 4. Add Marquee and AI Terminal (Tasks 1, 4, 5)
marquee_terminal = '''
      {/* Marquee Section */}
      <section className="py-12 border-y border-slate-900 bg-slate-900/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">
            Trusted by agencies & businesses across West Africa
          </p>
          <div className="marquee">
            <div className="marquee__content">
              {["LandBiznes", "Kobtec", "Configure SL", "Wafjed", "TranscendMovement"].map((client, i) => (
                <div key={i} className="flex items-center gap-2 text-xl font-bold text-slate-700 px-8">
                  {client}
                </div>
              ))}
            </div>
            <div className="marquee__content" aria-hidden="true">
              {["LandBiznes", "Kobtec", "Configure SL", "Wafjed", "TranscendMovement"].map((client, i) => (
                <div key={i} className="flex items-center gap-2 text-xl font-bold text-slate-700 px-8">
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Terminal Section */}
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
'''
content = re.sub(r'(</section>\s*){/* Stats Section */}', r'\1' + marquee_terminal + '\n      {/* Stats Section */}', content)

# 5. Add Portfolio Section (Task 6)
portfolio_section = '''
      {/* Portfolio Section */}
      <section className="container mx-auto px-4 py-24 reveal">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest">
              What We Build
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Watchmann builds technology that solves real problems.</h2>
            <p className="text-xl text-slate-400 max-w-3xl">
              Beyond our agency platform, Watchmann develops enterprise-grade technology across industries. Every product credits Watchmann — because quality is non-negotiable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="https://landbiznes.com" target="_blank" className="group block h-full">
              <div className="h-full border border-slate-800 bg-slate-900/40 p-8 rounded-2xl hover:border-blue-500/50 transition-all group-hover:-translate-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-4 block">Blockchain · PropTech</span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">LandBiznes</h3>
                <p className="text-slate-400 leading-relaxed">
                  Sierra Leone's first blockchain-powered land registry and marketplace. Satellite boundary mapping, KYC verification, and trust scores eliminating land fraud.
                </p>
              </div>
            </Link>

            <Link href="/" className="group block h-full">
              <div className="h-full border border-slate-800 bg-slate-900/40 p-8 rounded-2xl hover:border-cyan-500/50 transition-all group-hover:-translate-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-4 block">Agency · SaaS</span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">Watchmann Platform</h3>
                <p className="text-slate-400 leading-relaxed">
                  The AI operating system for agencies. Automate reporting, deploy custom AI tools, and scale client capacity without scaling headcount.
                </p>
              </div>
            </Link>

            <div className="h-full border border-slate-800 border-dashed bg-slate-900/20 p-8 rounded-2xl relative overflow-hidden group">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-4 block">Coming 2026</span>
              <h3 className="text-2xl font-bold text-white mb-4">Jems AI</h3>
              <p className="text-slate-500 leading-relaxed">
                A proprietary AI fusion platform that blends multiple AI models into one unified, emergent intelligence — the metallurgy of artificial minds.
              </p>
              <div className="absolute bottom-8 left-8 text-xs font-medium text-slate-600 italic">In development</div>
            </div>
          </div>
        </div>
      </section>
'''
content = re.sub(r'(</section>\s*){/* CTA Section */}', r'\1' + portfolio_section + '\n      {/* CTA Section */}', content)

# 6. Add Demo Modal (Task 3)
demo_modal = '''
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
'''
content = re.sub(r'(<SiteFooter />\s*)</div>', r'\1' + demo_modal + '\n    </div>', content)

# 7. Add reveal classes to existing sections
content = content.replace('<section id="features"', '<section id="features" className="reveal"')
content = content.replace('<section className="container mx-auto px-4 py-20">', '<section className="container mx-auto px-4 py-20 reveal">')

with open(file_path, 'w') as f:
    f.write(content)
