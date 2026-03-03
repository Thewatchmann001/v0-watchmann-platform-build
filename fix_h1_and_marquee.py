import re
import os

file_path = 'app/page.tsx'
with open(file_path, 'r') as f:
    content = f.read()

# 1. Restore the Hero H1 (Task Evaluation noted it was changed incorrectly)
# User wants "Transform Your Agency with AI-Powered Solutions" but maybe I changed it?
# Actually, the evaluation said I changed it but looking at current page.tsx:
# <h1 className="text-5xl md:text-7xl font-bold text-white text-balance">
#            Transform Your Agency with{" "}
#            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
#              AI-Powered Solutions
#            </span>
#          </h1>
# This looks like the original. Maybe I changed it in a previous step and restored it.

# 2. Fix the marquee duplicated labels (Task 1)
# The current file has:
# <h2 ...>Trusted by agencies & businesses across West Africa</h2>
# ...
# </div>
# </div>

# Wait, I see I have an extra closing div or something.
# Let's clean up the Social Proof section one more time.

social_proof_block = '''
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

content = re.sub(
    r'\{/\* Social Proof & Testimonials \*/\}.*?\{/\* Portfolio Section \*/\}',
    social_proof_block + '\n\n          {/* Portfolio Section */}',
    content,
    flags=re.DOTALL
)

with open(file_path, 'w') as f:
    f.write(content)
