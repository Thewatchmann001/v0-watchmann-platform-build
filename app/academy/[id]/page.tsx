import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, Users, Star, Play, Check, Lock } from "lucide-react"
import Link from "next/link"

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: course } = await supabase
    .from("courses")
    .select("*, profiles!courses_instructor_id_fkey(full_name, avatar_url)")
    .eq("id", id)
    .single()

  if (!course) {
    notFound()
  }

  const { data: lessons } = await supabase
    .from("lessons")
    .select("*")
    .eq("course_id", id)
    .order("order_index", { ascending: true })

  let enrollment = null
  if (user) {
    const { data: enrollmentData } = await supabase
      .from("enrollments")
      .select("*")
      .eq("course_id", id)
      .eq("user_id", user.id)
      .single()
    enrollment = enrollmentData
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <Button variant="ghost" asChild className="mb-8 text-slate-300 hover:text-white hover:bg-slate-800">
            <Link href="/academy">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Academy
            </Link>
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Header */}
              <div>
                {course.thumbnail_url && (
                  <div className="w-full aspect-video rounded-lg bg-slate-800 overflow-hidden mb-6 relative group">
                    <img
                      src={course.thumbnail_url || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-slate-900 ml-1" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">{course.level}</Badge>
                  <div className="flex items-center text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="ml-1 font-semibold">4.9</span>
                    <span className="ml-1 text-slate-400 text-sm">(2,847 reviews)</span>
                  </div>
                </div>

                <h1 className="text-4xl font-bold text-white mb-4">{course.title}</h1>
                <p className="text-lg text-slate-300 mb-6">{course.description}</p>

                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>15,423 students</span>
                  </div>
                  {course.duration_hours && (
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{course.duration_hours} hours</span>
                    </div>
                  )}
                </div>
              </div>

              {/* About Course */}
              {course.long_description && (
                <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-4">About this course</h2>
                    <p className="text-slate-300 leading-relaxed whitespace-pre-line">{course.long_description}</p>
                  </CardContent>
                </Card>
              )}

              {/* Course Content */}
              {lessons && lessons.length > 0 && (
                <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Course Content</h2>
                    <div className="space-y-2">
                      {lessons.map((lesson, idx) => (
                        <div key={lesson.id}>
                          <div className="flex items-center justify-between p-4 rounded-lg hover:bg-slate-800/50 transition-colors cursor-pointer">
                            <div className="flex items-center gap-4 flex-1">
                              <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                                {lesson.is_preview || enrollment ? (
                                  <Play className="h-5 w-5 text-blue-400" />
                                ) : (
                                  <Lock className="h-5 w-5 text-slate-500" />
                                )}
                              </div>
                              <div className="flex-1">
                                <h3 className="text-white font-medium">{lesson.title}</h3>
                                {lesson.description && <p className="text-sm text-slate-400">{lesson.description}</p>}
                              </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-400">
                              {lesson.duration_minutes && <span>{lesson.duration_minutes} min</span>}
                              {lesson.is_preview && (
                                <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10">
                                  Preview
                                </Badge>
                              )}
                            </div>
                          </div>
                          {idx < lessons.length - 1 && <Separator className="bg-slate-800" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Instructor */}
              {course.profiles && (
                <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Instructor</h2>
                    <div className="flex items-center gap-4">
                      {course.profiles.avatar_url ? (
                        <img
                          src={course.profiles.avatar_url || "/placeholder.svg"}
                          alt={course.profiles.full_name}
                          className="h-16 w-16 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xl font-bold">
                          {course.profiles.full_name?.charAt(0) || "I"}
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-semibold text-white">{course.profiles.full_name}</h3>
                        <p className="text-slate-400">Course Instructor</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border-slate-800 bg-slate-900/50 backdrop-blur sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <p className="text-sm text-slate-400 mb-2">Price</p>
                    {course.price === 0 ? (
                      <p className="text-4xl font-bold text-cyan-400">Free</p>
                    ) : (
                      <p className="text-4xl font-bold text-white">${course.price}</p>
                    )}
                  </div>

                  {enrollment ? (
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                        <div className="flex items-center text-cyan-400 mb-2">
                          <Check className="h-5 w-5 mr-2" />
                          <span className="font-semibold">Enrolled</span>
                        </div>
                        <p className="text-sm text-slate-300">Progress: {enrollment.progress}%</p>
                      </div>
                      <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                        Continue Learning
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                        {course.price === 0 ? "Enroll for Free" : "Enroll Now"}
                      </Button>
                      {course.price > 0 && (
                        <p className="text-xs text-slate-400 text-center">30-day money-back guarantee</p>
                      )}
                    </div>
                  )}

                  <Separator className="bg-slate-800" />

                  <div className="space-y-4">
                    <h3 className="font-semibold text-white">This course includes:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start text-slate-300 text-sm">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>Lifetime access</span>
                      </li>
                      <li className="flex items-start text-slate-300 text-sm">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>Certificate of completion</span>
                      </li>
                      <li className="flex items-start text-slate-300 text-sm">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>Access on mobile and desktop</span>
                      </li>
                      {lessons && (
                        <li className="flex items-start text-slate-300 text-sm">
                          <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                          <span>{lessons.length} video lessons</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
