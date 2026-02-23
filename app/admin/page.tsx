import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/server"
import { Users, Briefcase, ShoppingCart, BookOpen, ArrowUpRight, MessageSquare, ShieldCheck } from "lucide-react"

export default async function AdminPage() {
  const supabase = await createClient()

  const { count: usersCount } = await supabase.from("profiles").select("*", { count: "exact", head: true })

  const { count: projectsCount } = await supabase.from("projects").select("*", { count: "exact", head: true })

  const { count: messagesCount } = await supabase.from("contact_requests").select("*", { count: "exact", head: true })

  const { count: coursesCount } = await supabase.from("courses").select("*", { count: "exact", head: true })

  const { data: userDetails } = await supabase
    .from("profiles")
    .select("*, projects(name), enrollments(courses(title)), orders(products(name))")
    .limit(10)

  const { data: recentOrders } = await supabase
    .from("orders")
    .select("*, products(name), profiles(full_name)")
    .order("created_at", { ascending: false })
    .limit(5)

  const { data: recentEnrollments } = await supabase
    .from("enrollments")
    .select("*, courses(title), profiles(full_name)")
    .order("created_at", { ascending: false })
    .limit(5)

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">SuperAdmin Command Center</h1>
          <p className="text-slate-400">Comprehensive platform oversight for Watchmann Technologies</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
          <ShieldCheck className="h-5 w-5" />
          <span className="font-bold">info@watchmann.dev</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-slate-400">Registered Clients</CardDescription>
              <Users className="h-5 w-5 text-slate-400" />
            </div>
            <CardTitle className="text-3xl text-white">{usersCount || 0}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-cyan-400">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>12% growth</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur border-l-blue-500/50">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-slate-400">Contact Messages</CardDescription>
              <MessageSquare className="h-5 w-5 text-blue-400" />
            </div>
            <CardTitle className="text-3xl text-white">{messagesCount || 0}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-blue-400">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>New inquiries today</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-slate-400">Active Agency Projects</CardDescription>
              <Briefcase className="h-5 w-5 text-slate-400" />
            </div>
            <CardTitle className="text-3xl text-white">{projectsCount || 0}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-cyan-400">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>8% active</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-slate-400">Academy Courses</CardDescription>
              <BookOpen className="h-5 w-5 text-slate-400" />
            </div>
            <CardTitle className="text-3xl text-white">{coursesCount || 0}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-cyan-400">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>15% completion rate</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Client Activity */}
      <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-white">Client Service Enrollment</CardTitle>
          <CardDescription className="text-slate-400">Detailed breakdown of what services exactly clients are registered for</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-800/50 text-slate-100 font-medium">
                <tr>
                  <th className="p-3">Client</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Projects/Services</th>
                  <th className="p-3">Academy Courses</th>
                  <th className="p-3">Marketplace Purchases</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {userDetails?.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-3">
                      <div className="font-medium text-white">{user.full_name || "N/A"}</div>
                      <div className="text-xs text-slate-500">{user.email}</div>
                    </td>
                    <td className="p-3 capitalize">{user.role}</td>
                    <td className="p-3">
                      {user.projects?.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {user.projects.map((p: any, i: number) => (
                            <span key={i} className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px]">
                              {p.name}
                            </span>
                          ))}
                        </div>
                      ) : <span className="text-slate-600">No active projects</span>}
                    </td>
                    <td className="p-3">
                      {user.enrollments?.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {user.enrollments.map((e: any, i: number) => (
                            <span key={i} className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px]">
                              {e.courses?.title}
                            </span>
                          ))}
                        </div>
                      ) : <span className="text-slate-600">No enrollments</span>}
                    </td>
                    <td className="p-3">
                      {user.orders?.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {user.orders.map((o: any, i: number) => (
                            <span key={i} className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px]">
                              {o.products?.name}
                            </span>
                          ))}
                        </div>
                      ) : <span className="text-slate-600">No purchases</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">Recent Orders</CardTitle>
            <CardDescription className="text-slate-400">Latest marketplace transactions</CardDescription>
          </CardHeader>
          <CardContent>
            {recentOrders && recentOrders.length > 0 ? (
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                    <div>
                      <p className="font-medium text-white text-sm">{order.products?.name}</p>
                      <p className="text-xs text-slate-400">{order.profiles?.full_name}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-white text-sm">${order.amount}</p>
                      <p className="text-xs text-slate-400">{order.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-slate-400 py-8">No orders yet</p>
            )}
          </CardContent>
        </Card>

        {/* Recent Enrollments */}
        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">Recent Enrollments</CardTitle>
            <CardDescription className="text-slate-400">Latest course sign-ups</CardDescription>
          </CardHeader>
          <CardContent>
            {recentEnrollments && recentEnrollments.length > 0 ? (
              <div className="space-y-4">
                {recentEnrollments.map((enrollment) => (
                  <div key={enrollment.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                    <div>
                      <p className="font-medium text-white text-sm">{enrollment.courses?.title}</p>
                      <p className="text-xs text-slate-400">{enrollment.profiles?.full_name}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-white text-sm">{enrollment.progress}%</p>
                      <p className="text-xs text-slate-400">Progress</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-slate-400 py-8">No enrollments yet</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
