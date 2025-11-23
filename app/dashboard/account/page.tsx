import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/server"
import { Mail, Briefcase, Calendar } from "lucide-react"

export default async function AccountPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: profile } = await supabase.from("profiles").select("*, organizations(*)").eq("id", user!.id).single()

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Account Settings</h1>
        <p className="text-slate-400">Manage your account information</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">Profile Information</CardTitle>
            <CardDescription className="text-slate-400">Your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              {profile?.avatar_url ? (
                <img
                  src={profile.avatar_url || "/placeholder.svg"}
                  alt={profile.full_name || "User"}
                  className="h-20 w-20 rounded-full object-cover"
                />
              ) : (
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                  {profile?.full_name?.charAt(0) || "U"}
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-white">{profile?.full_name || "User"}</h3>
                <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mt-1">
                  {profile?.role || "Client"}
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="h-5 w-5 text-slate-400" />
                <span>{profile?.email || user?.email}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Calendar className="h-5 w-5 text-slate-400" />
                <span>Joined {new Date(profile?.created_at || "").toLocaleDateString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {profile?.organizations && (
          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">Organization</CardTitle>
              <CardDescription className="text-slate-400">Your organization details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                {profile.organizations.logo_url ? (
                  <img
                    src={profile.organizations.logo_url || "/placeholder.svg"}
                    alt={profile.organizations.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                ) : (
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-500 flex items-center justify-center text-white text-xl font-bold">
                    {profile.organizations.name?.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-white">{profile.organizations.name}</h3>
                  <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 mt-1">
                    {profile.organizations.plan}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Briefcase className="h-5 w-5 text-slate-400" />
                <span>/{profile.organizations.slug}</span>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
