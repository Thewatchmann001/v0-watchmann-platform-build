import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap } from "lucide-react"
import Link from "next/link"

export default async function MyCoursesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: enrollments } = await supabase
    .from("enrollments")
    .select("*, courses(*)")
    .eq("user_id", user!.id)

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">My Courses</h1>
        <p className="text-slate-400">Manage your learning progress and certificates</p>
      </div>

      {enrollments && enrollments.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrollments.map((enrollment) => (
            <Card key={enrollment.id} className="border-slate-800 bg-slate-900/50 backdrop-blur overflow-hidden group">
              <div className="aspect-video bg-slate-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-slate-700 group-hover:text-blue-500 transition-colors" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white line-clamp-1">{enrollment.courses?.title}</CardTitle>
                <CardDescription className="text-slate-400">Progress: {enrollment.progress}%</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all"
                    style={{ width: `${enrollment.progress}%` }}
                  />
                </div>
                <Link
                  href={`/academy/${enrollment.course_id}`}
                  className="inline-flex items-center justify-center w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white h-10 px-4 text-sm font-medium transition-colors"
                >
                  Continue Learning
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-slate-800 bg-slate-900/50 p-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-slate-800 flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-slate-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">No courses yet</h2>
            <p className="text-slate-400 max-w-sm">You haven't enrolled in any courses yet. Explore our Academy to start learning.</p>
            <Link
              href="/academy"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white h-10 px-6 font-medium transition-colors"
            >
              Explore Academy
            </Link>
          </div>
        </Card>
      )}
    </div>
  )
}
