"use client"

import { motion } from "framer-motion"
import { Check, X, ArrowRight } from "lucide-react"

export function TransformationSection() {
  return (
    <section className="container mx-auto px-4 py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Agency Transformation</h2>
          <p className="text-xl text-slate-400">Stop fighting your tools. Start scaling your output.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-slate-900/30 border border-red-500/10 relative group"
          >
            <div className="absolute top-6 right-8 text-red-500/20 group-hover:text-red-500/40 transition-colors">
              <X size={48} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="text-red-500">Before</span> Watchmann
            </h3>
            <ul className="space-y-6">
              {[
                "40% of time spent on manual reporting",
                "Fragmented data across 12+ spreadsheets",
                "Slow, error-prone client onboarding",
                "Limited visibility into real-time performance",
                "High overhead prevents aggressive scaling",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-slate-400">
                  <X className="text-red-500 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-blue-600/5 border border-blue-500/20 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="absolute top-6 right-8 text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
              <Check size={48} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="text-blue-500">After</span> Watchmann
            </h3>
            <ul className="space-y-6">
              {[
                "90% of reporting fully automated via AI",
                "Unified dashboard for all client data",
                "Instant onboarding with AI-audit tools",
                "Real-time alerts and predictive insights",
                "3x client capacity with the same team",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-slate-200">
                  <Check className="text-blue-500 shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between">
               <div className="text-sm font-bold text-blue-400 uppercase tracking-widest">Efficiency Gain</div>
               <div className="text-2xl font-bold text-white">+240%</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
