import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      price: "$49",
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
      price: "$199",
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
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose the plan that's right for your agency and start scaling with AI today.
          </p>
        </section>

        {/* Pricing Tiers */}
        <section className="container mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={`flex flex-col border-slate-800 bg-slate-900/50 backdrop-blur transition-all duration-300 ${
                  tier.highlighted ? "ring-2 ring-blue-500 scale-105 md:z-10" : "hover:border-slate-700"
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{tier.name}</CardTitle>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight text-white">{tier.price}</span>
                    {tier.price !== "Custom" && <span className="ml-1 text-xl font-semibold text-slate-400">/mo</span>}
                  </div>
                  <CardDescription className="mt-2 text-slate-400">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 shrink-0 mr-3" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className={`w-full py-6 text-lg ${
                      tier.highlighted ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-800 hover:bg-slate-700"
                    }`}
                  >
                    <Link href={tier.href}>{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
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
