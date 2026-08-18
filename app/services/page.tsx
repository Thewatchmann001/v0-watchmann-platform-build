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
            <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
              Services
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold text-white text-balance tracking-tight">
            Full-Spectrum <span className="text-blue-400">Technology Solutions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Strategy, design, build, deploy, and operate across software, AI, data, and cloud
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Card
                key={idx}
                className="group border-slate-800 bg-slate-900/50 backdrop-blur transition-all duration-300 ease-out hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                      {idx < 6 ? "Core" : "Advanced"}
                    </Badge>
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-slate-400">{service.description}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            )
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
