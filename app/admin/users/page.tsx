import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/server"
import { Users, Mail, Calendar } from "lucide-react"

export default async function AdminUsersPage() {
  const supabase = await createClient()

  const { data: users } = await supabase
    .from("profiles")
    .select("*, organizations(name)")
    .order("created_at", { ascending: false })

  const getRoleBadge = (role: string) => {
    const colors: Record<string, string> = {
      admin: "bg-red-500/10 text-red-400 border-red-500/20",
      user: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    }
    return colors[role] || colors.user
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Users</h1>
          <p className="text-slate-400">Manage platform users and permissions</p>
        </div>
        <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2">
          {users?.length || 0} Total Users
        </Badge>
      </div>

      {users && users.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <Card
              key={user.id}
              className="border-slate-800 bg-slate-900/50 backdrop-blur hover:border-blue-500/50 transition-colors"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  {user.avatar_url ? (
                    <img
                      src={user.avatar_url || "/placeholder.svg"}
                      alt={user.full_name || "User"}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
                      {user.full_name?.charAt(0) || "U"}
                    </div>
                  )}
                  <Badge className={getRoleBadge(user.role)}>{user.role}</Badge>
                </div>
                <CardTitle className="text-white">{user.full_name || "Unnamed User"}</CardTitle>
                <CardDescription className="text-slate-400 flex items-center">
                  <Mail className="h-3 w-3 mr-1" />
                  {user.email}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {user.organizations && (
                  <div className="text-sm text-slate-400">
                    <span className="text-slate-500">Organization:</span> {user.organizations.name}
                  </div>
                )}
                <div className="flex items-center text-xs text-slate-500">
                  <Calendar className="h-3 w-3 mr-1" />
                  Joined {new Date(user.created_at).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardContent className="p-12 text-center">
            <Users className="h-16 w-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No Users Found</h3>
            <p className="text-slate-400">No users have registered yet.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
