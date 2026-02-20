"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Check, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { motion } from "framer-motion"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly")

  const tiers = [
    {
      name: "Starter",
      price: billingCycle === "monthly" ? "$49" : "$39",
      description: "Perfect for solo agency owners just getting started.",
      features: [
        "Up to 5 active clients",
        "Basic AI Labs access",
        "Marketplace access",
        "Academy foundational courses",
        "Email support",
      ],
      cta: "Start Free Trial",
      href: "/auth/sign-up?plan=starter",
      highlighted: false,
    },
    {
      name: "Pro",
      price: billingCycle === "monthly" ? "$199" : "$159",
      description: "Ideal for growing agencies looking to scale with AI.",
      features: [
        "Up to 25 active clients",
        "Full AI Labs access",
        "Priority marketplace support",
        "All Academy courses & certifications",
        "Advanced client reporting",
        "Priority email & chat support",
      ],
      cta: "Start Free Trial",
      href: "/auth/sign-up?plan=pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Advanced features for large-scale agency operations.",
      features: [
        "Unlimited active clients",
        "Custom AI model development",
        "White-label options",
        "Dedicated account manager",
        "SLA & custom security",
        "24/7 phone & priority support",
      ],
      cta: "Contact Sales",
      href: "/contact",
      highlighted: false,
    },
  ]

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time from your dashboard settings.",
    },
    {
      question: "Is there a free trial?",
      answer: "Absolutely! We offer a 14-day free trial on our Starter and Pro plans so you can experience the full power of Watchmann.",
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we support non-profit organizations with special pricing. Contact our sales team to learn more.",
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide email support for all plans, with priority chat and phone support for our Pro and Enterprise tiers.",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Choose the plan that's right for your agency and start scaling with AI today.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={cn("text-sm font-medium", billingCycle === "monthly" ? "text-white" : "text-slate-500")}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative w-14 h-7 bg-slate-800 rounded-full p-1 transition-colors hover:bg-slate-700"
            >
              <motion.div
                animate={{ x: billingCycle === "monthly" ? 0 : 28 }}
                className="w-5 h-5 bg-blue-500 rounded-full shadow-lg"
              />
            </button>
            <span className={cn("text-sm font-medium flex items-center gap-2", billingCycle === "yearly" ? "text-white" : "text-slate-500")}>
              Yearly
              <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-bold">SAVE 20%</span>
            </span>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="container mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  "flex flex-col h-full bg-slate-900 border border-slate-800 rounded-xl p-8 transition-all hover:border-slate-700",
                  tier.highlighted && "ring-2 ring-blue-500"
                )}
              >
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    {tier.price !== "Custom" && <span className="ml-1 text-xl font-semibold text-slate-400">/mo</span>}
                  </div>
                  {billingCycle === "yearly" && tier.price !== "Custom" && (
                    <div className="text-[10px] text-slate-500 mt-1">Billed annually</div>
                  )}
                  <p className="text-slate-400 mt-4 text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Button
                    asChild
                    className={cn(
                      "w-full py-6 text-lg",
                      tier.highlighted ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-800 hover:bg-slate-700"
                    )}
                  >
                    <Link href={tier.href}>
                      {tier.cta}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-20 border-t border-slate-900">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
              <HelpCircle className="text-blue-500" />
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-slate-800">
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-blue-400 text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="container mx-auto px-4 py-20 text-center bg-blue-900/10 rounded-3xl mb-20">
          <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Contact our team to discuss your specific requirements and how we can help you achieve your goals.
          </p>
          <Button size="lg" variant="outline" asChild className="border-slate-700 text-white hover:bg-slate-800 bg-transparent">
            <Link href="/contact">Talk to our Experts</Link>
          </Button>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
