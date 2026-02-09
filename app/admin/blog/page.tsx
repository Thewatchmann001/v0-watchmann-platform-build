import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/server"

export default async function AdminBlogPage() {
  const supabase = await createClient()
  const { data: posts } = await supabase.from("blog_posts").select("*").order("updated_at", { ascending: false })

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Blog</h1>
        <p className="text-slate-400">Manage blog posts</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Card key={post.id} className="border-slate-800 bg-slate-900/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">{post.title}</CardTitle>
                <CardDescription className="text-slate-400">{post.slug}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">Published: {post.is_published ? "Yes" : "No"}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
            <CardContent className="p-6 text-slate-400">No posts found</CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
