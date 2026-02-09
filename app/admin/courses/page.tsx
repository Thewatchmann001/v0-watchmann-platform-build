import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"

export default async function AdminCoursesPage() {
  const supabase = await createClient()
  const { data: courses } = await supabase.from("courses").select("*").order("updated_at", { ascending: false })

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Courses</h1>
        <p className="text-slate-400">Manage academy courses</p>
      </div>
      <CreateCourseForm />
      <div className="grid md:grid-cols-2 gap-6">
        {courses && courses.length > 0 ? (
          courses.map((course) => (
            <Card key={course.id} className="border-slate-800 bg-slate-900/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">{course.title}</CardTitle>
                <CardDescription className="text-slate-400">{course.level}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">Published: {course.is_published ? "Yes" : "No"}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
            <CardContent className="p-6 text-slate-400">No courses found</CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

async function createCourse(formData: FormData) {
  "use server"
  const supabase = await createClient()
  const payload = {
    title: String(formData.get("title") || ""),
    description: String(formData.get("description") || ""),
    long_description: "",
    instructor_id: (await supabase.auth.getUser()).data.user?.id,
    thumbnail_url: String(formData.get("thumbnail_url") || ""),
    price: Number(formData.get("price") || 0),
    duration_hours: Number(formData.get("duration_hours") || 0),
    level: String(formData.get("level") || "beginner"),
    is_published: true,
  }
  await supabase.from("courses").insert(payload)
  revalidatePath("/admin/courses")
}

function CreateCourseForm() {
  return (
    <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-white">Create Course</CardTitle>
        <CardDescription className="text-slate-400">Add a new academy course</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={createCourse} className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="title" className="text-slate-200">Title</Label>
            <Input id="title" name="title" className="border-slate-700 bg-slate-800/50 text-white" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="level" className="text-slate-200">Level</Label>
            <Input id="level" name="level" placeholder="beginner|intermediate|advanced" className="border-slate-700 bg-slate-800/50 text-white" required />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <Label htmlFor="description" className="text-slate-200">Description</Label>
            <Input id="description" name="description" className="border-slate-700 bg-slate-800/50 text-white" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price" className="text-slate-200">Price</Label>
            <Input id="price" name="price" type="number" step="0.01" className="border-slate-700 bg-slate-800/50 text-white" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="duration_hours" className="text-slate-200">Duration (hours)</Label>
            <Input id="duration_hours" name="duration_hours" type="number" className="border-slate-700 bg-slate-800/50 text-white" />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <Label htmlFor="thumbnail_url" className="text-slate-200">Thumbnail URL</Label>
            <Input id="thumbnail_url" name="thumbnail_url" className="border-slate-700 bg-slate-800/50 text-white" />
          </div>
          <div className="md:col-span-2">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Create</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
