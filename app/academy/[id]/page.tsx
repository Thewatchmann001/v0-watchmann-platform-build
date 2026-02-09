import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock } from "lucide-react"
import { EnrollButton } from "@/components/enroll-button"
import type { Metadata } from "next"

export default async function CourseDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data: course } = await supabase.from("courses").select("*").eq("id", params.id).single()
  if (!course) return notFound()

  const { data: lessons } = await supabase
    .from("lessons")
    .select("*")
    .eq("course_id", course.id)
    .order("order_index", { ascending: true })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 capitalize">{course.level}</Badge>
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
            <CardContent className="space-y-6">
              {course.thumbnail_url && (
                <div className="w-full h-64 rounded-lg bg-slate-800 overflow-hidden">
                  <img src={course.thumbnail_url} alt={course.title} className="w-full h-full object-cover" />
                </div>
              )}
              {course.long_description && (
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300">{course.long_description}</p>
                </div>
              )}
              {lessons && lessons.length > 0 && (
                <div>
                  <h3 className="text-white font-semibold mb-2 text-sm">Curriculum</h3>
                  <div className="space-y-2">
                    {lessons.map((lesson) => (
                      <div key={lesson.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                        <span className="text-slate-200 text-sm">{lesson.order_index}. {lesson.title}</span>
                        {lesson.duration_minutes && (
                          <span className="text-slate-400 text-xs">{lesson.duration_minutes}m</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex gap-3">
                <EnrollButton courseId={course.id} />
                <Button variant="outline" asChild className="border-slate-700 text-white hover:bg-slate-800">
                  <Link href="/academy">Back to Academy</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const supabase = await createClient()
  const { data: course } = await supabase
    .from("courses")
    .select("title, description, thumbnail_url")
    .eq("id", params.id)
    .single()
  if (!course) {
    return { title: "Academy – Watchmann", description: "Learn AI and modern engineering." }
  }
  return {
    title: `${course.title} – Academy`,
    description: course.description || "Learn AI and modern engineering.",
    openGraph: {
      images: course.thumbnail_url ? [course.thumbnail_url] : undefined,
    },
  }
}
