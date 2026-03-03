import re
import os

file_path = 'app/page.tsx'
recovered_path = 'app/page.tsx.recovered'

# 1. Recover the missing sections from the recovered file
with open(recovered_path, 'r') as f:
    recovered_content = f.read()

# Extract sections
testimonials_match = re.search(r'\{/\* Social Proof & Testimonials \*/\}.*?\{/\* Final CTA Section \*/\}', recovered_content, re.DOTALL)
final_cta_match = re.search(r'\{/\* Final CTA Section \*/\}.*?<SiteFooter />', recovered_content, re.DOTALL)

if not testimonials_match or not final_cta_match:
    print("Failed to extract sections from recovered file")
    exit(1)

testimonials_section = testimonials_match.group(0).replace('<SiteFooter />', '')
final_cta_section = final_cta_match.group(0).replace('<SiteFooter />', '')

# 2. Prepare the new content for app/page.tsx
# Start with a clean base (the current one but we will surgically modify it)
with open(file_path, 'r') as f:
    content = f.read()

# TASKS:
# 1. Trusted Clients Marquee (Task 1) - Inside the recovered testimonials section
# Find the LogoMarquee and replace the title + marquee logic
# Actually, the user wants the marquee to show only: LandBiznes · Kobtec · Configure SL · Wafjed · TranscendMovement
# And the label: "Trusted by agencies & businesses across West Africa"

testimonials_section = re.sub(
    r'<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by the World\'s Best Agencies</h2>',
    '<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by agencies & businesses across West Africa</h2>',
    testimonials_section
)

# Replace <LogoMarquee /> with the custom marquee logic
marquee_html = '''<div className="marquee">
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
          </div>'''
testimonials_section = testimonials_section.replace('<LogoMarquee />', marquee_html)

# 2. Remove GlobalAds Case Study (Task 2)
testimonials_section = re.sub(r'\{/\* Case Study Snippet \*/\}.*?\{/\* Trust Signals \*/\}', '{/* Trust Signals */}', testimonials_section, flags=re.DOTALL)

# 3. Add Portfolio Section (Task 6) - Between Testimonials and Trust/Security
# The recovered file has Trust Signals as part of the same section.
# I will insert "What We Build" before the Trust Signals div.
portfolio_section = '''
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
                    Sierra Leone\'s first blockchain-powered land registry and marketplace. Satellite boundary mapping, KYC verification, and trust scores eliminating land fraud.
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
'''
testimonials_section = testimonials_section.replace('{/* Trust Signals */}', portfolio_section + '\n\n          {/* Trust Signals %}')
testimonials_section = testimonials_section.replace('{/* Trust Signals %}', '{/* Trust Signals */}')

# Now assemble the final page.tsx
# I want to keep the current imports and Hero section but replace everything after Features.
# Current file has:
# Hero
# Stats
# Features (reveal)
# Platform Features (reveal)
# CTA Section (reveal)
# Footer
# Modal

# Replace Platform Features + CTA Section + SiteFooter with our recovered/modified blocks
new_content = content.split('<SiteFooter />')[0]
# I need to find where "Platform Features" starts and remove it + the original CTA
new_content = re.split(r'\{/\* Platform Features \*/\}', new_content)[0]

final_output = new_content + testimonials_section + final_cta_section + '<SiteFooter />' + content.split('<SiteFooter />')[1]

# 4. Insert AI Terminal (Task 5) after Stats section
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
final_output = re.sub(r'(</section>\s*){/* Core Features \*/}', r'\1' + terminal_html + '\n      {/* Core Features */}', final_output)

# 5. Fix the Demo Modal dismissal (Task 3)
# Add handleKeyDown and event listener
final_output = final_output.replace(
    '  useEffect(() => {',
    '''  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsDemoModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {'''
)

# 6. Add " · " separators to marquee (Task 1)
# User wants "LandBiznes · Kobtec · Configure SL · Wafjed · TranscendMovement"
final_output = final_output.replace(
    '{["LandBiznes", "Kobtec", "Configure SL", "Wafjed", "TranscendMovement"].map((client, i) => (',
    '{["LandBiznes", "·", "Kobtec", "·", "Configure SL", "·", "Wafjed", "·", "TranscendMovement"].map((item, i) => ('
)
final_output = final_output.replace('{client}', '{item}')

with open(file_path, 'w') as f:
    f.write(final_output)
