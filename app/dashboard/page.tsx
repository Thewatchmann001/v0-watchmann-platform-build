import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/server"
import { Briefcase, BookOpen, ShoppingBag, TrendingUp } from "lucide-react"

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user!.id).single()

  const { data: projects, count: projectsCount } = await supabase
    .from("projects")
    .select("*", { count: "exact" })
    .or(`client_id.eq.${user!.id},organization_id.eq.${profile?.organization_id}`)
    .limit(5)

  const { data: enrollments, count: enrollmentsCount } = await supabase
    .from("enrollments")
    .select("*, courses(*)", { count: "exact" })
    .eq("user_id", user!.id)
    .limit(5)

  const { data: orders, count: ordersCount } = await supabase
    .from("orders")
    .select("*", { count: "exact" })
    .eq("user_id", user!.id)

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {profile?.full_name || "User"}</h1>
        <p className="text-slate-400">Here's what's happening with your account</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardHeader className="pb-3">
            <CardDescription className="text-slate-400">Active Projects</CardDescription>
            <CardTitle className="text-3xl text-white">{projectsCount || 0}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-cyan-400">
              <TrendingUp className="h-4 w-4 mr-1" />
              View all
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardHeader className="pb-3">
            <CardDescription className="text-slate-400">Enrolled Courses</CardDescription>
            <CardTitle className="text-3xl text-white">{enrollmentsCount || 0}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-cyan-400">
              <BookOpen className="h-4 w-4 mr-1" />
              Continue learning
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardHeader className="pb-3">
            <CardDescription className="text-slate-400">Total Purchases</CardDescription>
            <CardTitle className="text-3xl text-white">{ordersCount || 0}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-cyan-400">
              <ShoppingBag className="h-4 w-4 mr-1" />
              View orders
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardHeader className="pb-3">
            <CardDescription className="text-slate-400">Account Type</CardDescription>
            <CardTitle className="text-3xl text-white capitalize">{profile?.role || "Client"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-cyan-400">View details</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Projects */}
      {projects && projects.length > 0 && (
        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">Recent Projects</CardTitle>
            <CardDescription className="text-slate-400">Your latest project activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{project.name}</h3>
                      <p className="text-sm text-slate-400">{project.status}</p>
                    </div>
                  </div>
                  <div className="text-sm text-slate-400">{new Date(project.created_at).toLocaleDateString()}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Courses */}
      {enrollments && enrollments.length > 0 && (
        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">Continue Learning</CardTitle>
            <CardDescription className="text-slate-400">Pick up where you left off</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {enrollments.map((enrollment) => (
                <div key={enrollment.id} className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{enrollment.courses?.title}</h3>
                      <p className="text-sm text-slate-400">{enrollment.progress}% complete</p>
                    </div>
                  </div>
                  <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cyan-400 rounded-full transition-all"
                      style={{ width: `${enrollment.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
