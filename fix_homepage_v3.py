import re
import os

file_path = 'app/page.tsx'
with open(file_path, 'r') as f:
    content = f.read()

# 1. Fix the "Watch Demo" button container layout (it was swallowing content)
# Find the button and fix its structure
content = re.sub(
    r'<Button\s*size="lg"\s*variant="outline"\s*onClick=\{\(\) => setIsDemoModalOpen\(true\)\}\s*className="border-slate-700 text-white hover:bg-slate-800 text-lg px-8 bg-transparent flex items-center gap-2"\s*>\s*<div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">\s*<Play className="fill-blue-400 text-blue-400" size=\{10\} />\s*</div>\s*<div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 pt-8 text-sm text-slate-500">.*?</div>\s*Watch Demo\s*</Button>',
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
    content,
    flags=re.DOTALL
)

# 2. Add the trust indicators properly below the button container
content = re.sub(
    r'(<div className="flex flex-col sm:flex-row gap-4 justify-center">.*?</div>)',
    r'\1\n          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 pt-8 text-sm text-slate-500">\n            <div className="flex items-center gap-1.5">\n              <CheckCircle2 className="text-emerald-500" size={16} />\n              No credit card required\n            </div>\n            <div className="flex items-center gap-1.5">\n              <CheckCircle2 className="text-emerald-500" size={16} />\n              Setup in under 10 minutes\n            </div>\n            <div className="flex items-center gap-1.5">\n              <CheckCircle2 className="text-emerald-500" size={16} />\n              Cancel anytime\n            </div>\n          </div>',
    content,
    flags=re.DOTALL
)

# 3. Insert AI Terminal simulation after Stats
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
content = re.sub(r'(</section>\s*){/* Core Features \*/}', r'\1' + terminal_html + '\n      {/* Core Features */}', content)

# 4. Clean up duplicate "Final CTA" markers
content = content.replace('{/* Final CTA Section */}{/* Final CTA Section */}', '{/* Final CTA Section */}')

# 5. Restore the missing "Everything You Need" section properly (remove double className)
content = content.replace('className="reveal" className="container', 'className="reveal container')

with open(file_path, 'w') as f:
    f.write(content)
