import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/server"

export default async function AdminAILabsPage() {
  const supabase = await createClient()
  const { data: projects } = await supabase.from("ai_labs_projects").select("*").order("updated_at", { ascending: false })

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">AI Labs</h1>
        <p className="text-slate-400">Manage AI Labs projects</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <Card key={project.id} className="border-slate-800 bg-slate-900/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">{project.name}</CardTitle>
                <CardDescription className="text-slate-400">{project.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">Active: {project.is_active ? "Yes" : "No"}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
            <CardContent className="p-6 text-slate-400">No AI Labs projects found</CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
