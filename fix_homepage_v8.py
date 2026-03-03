import re
import os

file_path = 'app/page.tsx'
with open(file_path, 'r') as f:
    content = f.read()

# Fix the duplicate div in marquee section
content = content.replace(
    '<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by agencies & businesses across West Africa</h2>',
    '<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by agencies & businesses across West Africa</h2>'
)

# The content has:
# <h2 ...>...</h2>
# <div className="marquee">...</div>
# </div>
# </div>

# Let's fix the nesting around social proof
social_proof_start = '<section className="container mx-auto px-4 py-32 relative overflow-hidden">'
social_proof_content = '''
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
                quote: "Watchmann has fundamentally changed how we handle client reporting. We\'ve reclaimed 15 hours a week per account manager.",
                author: "Daniel Moseray",
                role: "LandBiznes",
              },
              {
                quote: "The AI Labs pillar is a game-changer. We can now offer custom AI solutions to our clients that were previously impossible.",
                author: "Thomas Kobba",
                role: "Kobtec Company",
              },
              {
                quote: "Scaling from 20 to 60 clients was seamless. The automation tools are the most robust we\'ve found in the market.",
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
'''

# Use regex to find and replace the whole block from social_proof_start to portfolio_section_start
content = re.sub(
    re.escape(social_proof_start) + r'.*?\{/\* Portfolio Section \*/\}',
    social_proof_start + social_proof_content + '\n\n          {/* Portfolio Section */}',
    content,
    flags=re.DOTALL
)

with open(file_path, 'w') as f:
    f.write(content)
