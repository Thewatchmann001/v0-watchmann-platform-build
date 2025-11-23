import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Clock, Users, Star, Play } from "lucide-react"

export default async function AcademyPage() {
  const supabase = await createClient()

  const { data: courses } = await supabase
    .from("courses")
    .select("*, profiles!courses_instructor_id_fkey(full_name)")
    .eq("is_published", true)
    .order("created_at", { ascending: false })

  const levels = ["beginner", "intermediate", "advanced"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
              Academy
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white text-balance">
            Learn From{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Industry Experts
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Master AI, machine learning, and cutting-edge technologies with comprehensive courses designed for all skill
            levels
          </p>
        </div>
      </section>

      {/* Level Filter */}
      <section className="container mx-auto px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="outline" className="border-blue-500 bg-blue-500/10 text-blue-400 cursor-pointer px-4 py-2">
              All Levels
            </Badge>
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

      {/* Courses Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {courses && courses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card
                  key={course.id}
                  className="border-slate-800 bg-slate-900/50 backdrop-blur hover:border-blue-500/50 transition-all group flex flex-col"
                >
                  <CardHeader>
                    {course.thumbnail_url && (
                      <div className="w-full h-48 rounded-lg bg-slate-800 mb-4 overflow-hidden relative group">
                        <img
                          src={course.thumbnail_url || "/placeholder.svg"}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center">
                            <Play className="h-6 w-6 text-slate-900 ml-1" />
                          </div>
                        </div>
                      </div>
                    )}
                    {!course.thumbnail_url && (
                      <div className="w-full h-48 rounded-lg bg-gradient-to-br from-blue-900/30 to-cyan-900/30 mb-4 flex items-center justify-center">
                        <Play className="h-16 w-16 text-slate-600" />
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">{course.level}</Badge>
                      <div className="flex items-center text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm font-semibold">4.9</span>
                      </div>
                    </div>
                    <CardTitle className="text-white">{course.title}</CardTitle>
                    <CardDescription className="text-slate-400">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-3">
                    <div className="flex items-center text-sm text-slate-400">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{course.profiles?.full_name || "Instructor"}</span>
                    </div>
                    {course.duration_hours && (
                      <div className="flex items-center text-sm text-slate-400">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{course.duration_hours} hours</span>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div>
                      {course.price === 0 ? (
                        <span className="text-xl font-bold text-cyan-400">Free</span>
                      ) : (
                        <span className="text-2xl font-bold text-white">${course.price}</span>
                      )}
                    </div>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link href={`/academy/${course.id}`}>View Course</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
              <CardContent className="p-12 text-center space-y-4">
                <Play className="h-16 w-16 text-slate-600 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Courses Coming Soon</h3>
                <p className="text-slate-400 max-w-md mx-auto">
                  We're preparing comprehensive courses taught by industry experts. Sign up to get notified when they
                  launch!
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/auth/sign-up">Get Early Access</Link>
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
