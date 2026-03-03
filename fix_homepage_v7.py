import re
import os

file_path = 'app/page.tsx'
with open(file_path, 'r') as f:
    content = f.read()

# 1. Clean up potential duplicate AI Terminal and fix Hero section double link
content = content.replace('      \n      {/* AI Terminal Section */}', '      {/* AI Terminal Section %}')
content = content.replace('{/* AI Terminal Section */}', '')
content = content.replace('{/* AI Terminal Section %}', '{/* AI Terminal Section %}')

# Re-insert cleanly
terminal_html = '''
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

# Find the end of Hero Section to insert Terminal after it
content = re.sub(r'\{/\* Hero Section \*/\}.*?\{/\* Stats Section \*/\}', '''
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      </section>''' + terminal_html + '\n      {/* Stats Section */}', content, flags=re.DOTALL)

# Cleanup
content = content.replace('{/* AI Terminal Section %}', '')

with open(file_path, 'w') as f:
    f.write(content)
