import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/server"
import { Users, Briefcase, ShoppingCart, BookOpen, ArrowUpRight } from "lucide-react"

export default async function AdminPage() {
  const supabase = await createClient()

  const { count: usersCount } = await supabase.from("profiles").select("*", { count: "exact", head: true })

  const { count: projectsCount } = await supabase.from("projects").select("*", { count: "exact", head: true })

  const { count: productsCount } = await supabase.from("products").select("*", { count: "exact", head: true })

  const { count: coursesCount } = await supabase.from("courses").select("*", { count: "exact", head: true })

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
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
        <p className="text-slate-400">Platform overview and key metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-slate-400">Total Users</CardDescription>
              <Users className="h-5 w-5 text-slate-400" />
            </div>
            <CardTitle className="text-3xl text-white">{usersCount || 0}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-cyan-400">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>12% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-slate-400">Active Projects</CardDescription>
              <Briefcase className="h-5 w-5 text-slate-400" />
            </div>
            <CardTitle className="text-3xl text-white">{projectsCount || 0}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-cyan-400">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>8% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-slate-400">Products Listed</CardDescription>
              <ShoppingCart className="h-5 w-5 text-slate-400" />
            </div>
            <CardTitle className="text-3xl text-white">{productsCount || 0}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-cyan-400">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>5% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-slate-400">Total Courses</CardDescription>
              <BookOpen className="h-5 w-5 text-slate-400" />
            </div>
            <CardTitle className="text-3xl text-white">{coursesCount || 0}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-cyan-400">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>15% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

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
