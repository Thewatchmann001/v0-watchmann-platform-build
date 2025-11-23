import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/server"
import { Briefcase, Calendar, DollarSign } from "lucide-react"

export default async function AdminProjectsPage() {
  const supabase = await createClient()

  const { data: projects } = await supabase
    .from("projects")
    .select("*, organizations(name), profiles!projects_created_by_fkey(full_name)")
    .order("created_at", { ascending: false })

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      planning: "bg-slate-500/10 text-slate-400 border-slate-500/20",
      in_progress: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      review: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      completed: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      on_hold: "bg-red-500/10 text-red-400 border-red-500/20",
    }
    return colors[status] || colors.planning
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Projects</h1>
          <p className="text-slate-400">Manage all projects across organizations</p>
        </div>
        <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2">
          {projects?.length || 0} Total Projects
        </Badge>
      </div>

      {projects && projects.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="border-slate-800 bg-slate-900/50 backdrop-blur hover:border-blue-500/50 transition-colors"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-blue-400" />
                  </div>
                  <Badge className={getStatusBadge(project.status)}>{project.status.replace("_", " ")}</Badge>
                </div>
                <CardTitle className="text-white">{project.name}</CardTitle>
                <CardDescription className="text-slate-400">
                  {project.organizations?.name || "No organization"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-slate-300">{project.description || "No description"}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-slate-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(project.created_at).toLocaleDateString()}</span>
                  </div>
                  {project.budget && (
                    <div className="flex items-center text-slate-400">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span>{project.budget.toLocaleString()}</span>
                    </div>
                  )}
                </div>
                <div className="text-xs text-slate-500">Created by: {project.profiles?.full_name || "Unknown"}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardContent className="p-12 text-center">
            <Briefcase className="h-16 w-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No Projects</h3>
            <p className="text-slate-400">No projects have been created yet.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
