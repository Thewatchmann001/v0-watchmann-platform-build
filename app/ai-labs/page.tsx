import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Eye, Github, ArrowRight } from "lucide-react"

export default async function AILabsPage() {
  const supabase = await createClient()

  const { data: projects } = await supabase
    .from("ai_labs_projects")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false })

  const categories = ["nlp", "computer_vision", "generative_ai", "ml_ops", "other"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
              AI Labs
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white text-balance">
            Cutting-Edge{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Innovation
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore our latest AI projects, research, and experimental technologies pushing the boundaries of what's
            possible
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800 cursor-pointer px-4 py-2"
              >
                {category.replace("_", " ").toUpperCase()}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {projects && projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="border-slate-800 bg-slate-900/50 backdrop-blur hover:border-blue-500/50 transition-all group"
                >
                  <CardHeader>
                    {project.thumbnail_url && (
                      <div className="w-full h-48 rounded-lg bg-slate-800 mb-4 overflow-hidden">
                        <img
                          src={project.thumbnail_url || "/placeholder.svg"}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    {!project.thumbnail_url && (
                      <div className="w-full h-48 rounded-lg bg-gradient-to-br from-blue-900/30 to-cyan-900/30 mb-4 flex items-center justify-center">
                        <span className="text-6xl">🤖</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                        {project.category.replace("_", " ")}
                      </Badge>
                      {project.is_featured && (
                        <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">Featured</Badge>
                      )}
                    </div>
                    <CardTitle className="text-white">{project.name}</CardTitle>
                    <CardDescription className="text-slate-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {project.tech_stack && project.tech_stack.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tech_stack.slice(0, 3).map((tech: string, idx: number) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-slate-800 text-slate-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-2">
                      {project.demo_url && (
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="flex-1 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 bg-transparent"
                        >
                          <Link href={project.demo_url} target="_blank">
                            <Eye className="mr-2 h-4 w-4" />
                            Demo
                          </Link>
                        </Button>
                      )}
                      {project.github_url && (
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="flex-1 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 bg-transparent"
                        >
                          <Link href={project.github_url} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
              <CardContent className="p-12 text-center space-y-4">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white">Coming Soon</h3>
                <p className="text-slate-400 max-w-md mx-auto">
                  Our AI Labs projects are currently being prepared. Check back soon to explore cutting-edge AI
                  innovations!
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/auth/sign-up">
                    Get Notified
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
