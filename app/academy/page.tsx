import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { GraduationCap, Clock, ArrowRight } from "lucide-react"
export const metadata = {
  title: "Academy – Watchmann",
  description: "Structured courses to upskill teams in AI, data platforms, cloud, and software delivery.",
}

export default async function AcademyPage() {
  const supabase = await createClient()

  const { data: courses } = await supabase
    .from("courses")
    .select("*")
    .eq("is_published", true)
    .order("updated_at", { ascending: false })

  const levels = ["beginner", "intermediate", "advanced"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
              Academy
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white text-balance">
            Learn{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI & Modern Engineering
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Structured courses to upskill teams in AI, data platforms, cloud, and modern software delivery
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {levels.map((level) => (
              <Badge
                key={level}
                variant="outline"
                className="border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800 cursor-pointer px-4 py-2"
              >
                {level.toUpperCase()}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {courses && courses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card
                  key={course.id}
                  className="border-slate-800 bg-slate-900/50 backdrop-blur hover:border-blue-500/50 transition-all group"
                >
                  <CardHeader>
                    {course.thumbnail_url && (
                      <div className="w-full h-48 rounded-lg bg-slate-800 mb-4 overflow-hidden">
                        <img
                          src={course.thumbnail_url || "/placeholder.svg"}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    {!course.thumbnail_url && (
                      <div className="w-full h-48 rounded-lg bg-gradient-to-br from-blue-900/30 to-cyan-900/30 mb-4 flex items-center justify-center">
                        <GraduationCap className="h-8 w-8 text-blue-400" />
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 capitalize">
                        {course.level}
                      </Badge>
                      {course.duration_hours && (
                        <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {course.duration_hours}h
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-white">{course.title}</CardTitle>
                    <CardDescription className="text-slate-400">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Button variant="link" asChild className="text-blue-400 p-0">
                        <Link href={`/academy/${course.id}`}>
                          View Details <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
              <CardContent className="p-12 text-center space-y-4">
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-white">Courses Coming Soon</h3>
                <p className="text-slate-400 max-w-md mx-auto">
                  We&apos;re preparing curricula. Check back soon to enroll in AI and engineering programs.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
