import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/server"
import { BookOpen, Play } from "lucide-react"
import Link from "next/link"

export default async function MyCoursesPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: enrollments } = await supabase
    .from("enrollments")
    .select("*, courses(*)")
    .eq("user_id", user!.id)
    .order("created_at", { ascending: false })

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">My Courses</h1>
        <p className="text-slate-400">Continue your learning journey</p>
      </div>

      {enrollments && enrollments.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrollments.map((enrollment) => (
            <Card
              key={enrollment.id}
              className="border-slate-800 bg-slate-900/50 backdrop-blur hover:border-blue-500/50 transition-colors"
            >
              <CardHeader>
                {enrollment.courses?.thumbnail_url ? (
                  <div className="w-full h-40 rounded-lg bg-slate-800 mb-4 overflow-hidden">
                    <img
                      src={enrollment.courses.thumbnail_url || "/placeholder.svg"}
                      alt={enrollment.courses.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-40 rounded-lg bg-gradient-to-br from-blue-900/30 to-cyan-900/30 mb-4 flex items-center justify-center">
                    <Play className="h-12 w-12 text-slate-600" />
                  </div>
                )}
                <CardTitle className="text-white">{enrollment.courses?.title}</CardTitle>
                <CardDescription className="text-slate-400">{enrollment.progress}% complete</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-400 rounded-full transition-all"
                    style={{ width: `${enrollment.progress}%` }}
                  />
                </div>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={`/academy/${enrollment.course_id}`}>Continue Learning</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardContent className="p-12 text-center space-y-4">
            <BookOpen className="h-16 w-16 text-slate-600 mx-auto" />
            <h3 className="text-2xl font-bold text-white">No Courses Yet</h3>
            <p className="text-slate-400 max-w-md mx-auto">
              You haven't enrolled in any courses yet. Browse our academy to start learning!
            </p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/academy">Browse Courses</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
