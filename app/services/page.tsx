import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Laptop, Palette, Bot, Database, Cog, Lightbulb } from "lucide-react"

export default function ServicesPage() {
  const services = [
    { title: "Web & Mobile Apps", description: "Corporate sites, portals, dashboards, native/hybrid apps.", icon: Laptop },
    { title: "Custom Software & APIs", description: "Business systems, microservices, integrations, API design.", icon: Laptop },
    { title: "AI Solutions", description: "Chatbots, NLP, computer vision, recommendations, predictive analytics.", icon: Bot },
    { title: "Data Platforms", description: "Warehouses, lakehouse, ETL/ELT, real-time pipelines, BI.", icon: Database },
    { title: "Cloud & DevOps", description: "Cloud architecture, containers, CI/CD, IaC, observability.", icon: Database },
    { title: "MLOps", description: "Training, deployment, monitoring, drift, feature stores, governance.", icon: Bot },
    { title: "Automation & RPA", description: "Workflow automation, bots, orchestration across business tools.", icon: Cog },
    { title: "IoT & Edge", description: "Device integration, telemetry, industrial systems, edge inference.", icon: Cog },
    { title: "Security & Compliance", description: "Hardening, identity, data protection, governance, regulatory.", icon: Lightbulb },
    { title: "Design & UX", description: "Product strategy, UX research, UI design systems, prototyping.", icon: Palette },
    { title: "Testing & QA", description: "Automated tests, performance, reliability, quality processes.", icon: Cog },
    { title: "Managed Services", description: "SLAs, monitoring, incident response, lifecycle management.", icon: Database },
    { title: "Training & Enablement", description: "Workshops, academies, internal upskilling for teams.", icon: Lightbulb },
    { title: "Consulting & Strategy", description: "Discovery, solution architecture, roadmaps, transformations.", icon: Lightbulb },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20 transition-all duration-300 ease-out hover:bg-cyan-500/20">
              Services
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white text-balance">
            Full-Spectrum{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technology Solutions
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Strategy, design, build, deploy, and operate across software, AI, data, and cloud
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Card
                key={idx}
                className="group relative border-slate-800 bg-slate-900/40 backdrop-blur-md transition-all duration-500 ease-out hover:border-blue-500/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-blue-500/20 shadow-lg shadow-blue-500/5">
                      <Icon className="h-7 w-7 text-blue-400" />
                    </div>
                    <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                      {idx < 6 ? "Core Pillar" : "Enterprise"}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-base leading-relaxed mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10" />
              </Card>
            )
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
