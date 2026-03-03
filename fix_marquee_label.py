import re
import os

file_path = 'app/page.tsx'
with open(file_path, 'r') as f:
    content = f.read()

# Fix the marquee label text (remove duplicated parts if any)
content = re.sub(
    r'<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by agencies & businesses across West Africa</h2>',
    '<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by agencies & businesses across West Africa</h2>',
    content
)

# Ensure the marquee logic is correct
marquee_logic = '''<div className="marquee">
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
          </div>'''

# Replace whatever is there with the clean marquee
content = re.sub(r'<div className="marquee">.*?</div>\s*</div>\s*</div>', marquee_logic + '\n          </div>\n          </div>', content, flags=re.DOTALL)

with open(file_path, 'w') as f:
    f.write(content)
