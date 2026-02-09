import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Eye, Github } from "lucide-react"
import type { Metadata } from "next"

export default async function AILabDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data: project } = await supabase.from("ai_labs_projects").select("*").eq("id", params.id).single()
  if (!project) return notFound()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
            <CardHeader>
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
            <CardContent className="space-y-6">
              {project.thumbnail_url && (
                <div className="w-full h-64 rounded-lg bg-slate-800 overflow-hidden">
                  <img src={project.thumbnail_url} alt={project.name} className="w-full h-full object-cover" />
                </div>
              )}
              {project.long_description && (
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300">{project.long_description}</p>
                </div>
              )}
              {project.tech_stack && project.tech_stack.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.map((tech: string, idx: number) => (
                    <Badge key={idx} variant="secondary" className="text-xs bg-slate-800 text-slate-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
              <div className="flex gap-3">
                {project.demo_url && (
                  <Button variant="outline" asChild className="border-slate-700 text-white hover:bg-slate-800">
                    <Link href={project.demo_url} target="_blank">
                      <Eye className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                )}
                {project.github_url && (
                  <Button variant="outline" asChild className="border-slate-700 text-white hover:bg-slate-800">
                    <Link href={project.github_url} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                )}
                <Button variant="outline" asChild className="border-slate-700 text-white hover:bg-slate-800">
                  <Link href="/ai-labs">Back to AI Labs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const supabase = await createClient()
  const { data: project } = await supabase
    .from("ai_labs_projects")
    .select("name, description, thumbnail_url")
    .eq("id", params.id)
    .single()
  if (!project) {
    return { title: "AI Labs – Watchmann", description: "Showcase of AI projects and innovations." }
  }
  return {
    title: `${project.name} – AI Labs`,
    description: project.description || "Showcase of AI projects and innovations.",
    openGraph: {
      images: project.thumbnail_url ? [project.thumbnail_url] : undefined,
    },
  }
}
