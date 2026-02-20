"use client"

export function LogoMarquee() {
  const logos = [
    "LandBiznes",
    "Kobtec",
    "Configure SL",
    "GlobalAds",
    "Nexus",
    "Apex AI",
    "CloudScale",
    "DataFlow",
    "Quantum",
    "Horizon",
  ]

  return (
    <div className="w-full overflow-hidden py-10">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-16 px-8">
          {logos.map((logo, i) => (
            <span key={i} className="text-2xl md:text-3xl font-bold text-slate-500 hover:text-blue-400 transition-colors tracking-tighter cursor-default">
              {logo}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-16 px-8" aria-hidden="true">
          {logos.map((logo, i) => (
            <span key={i + logos.length} className="text-2xl md:text-3xl font-bold text-slate-500 hover:text-blue-400 transition-colors tracking-tighter cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
