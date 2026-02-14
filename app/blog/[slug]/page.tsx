import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const supabase = await createClient()
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*, profiles(full_name)")
    .eq("slug", params.slug)
    .single()
  if (!post) return notFound()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">{post.title}</CardTitle>
              <CardDescription className="text-slate-400">
                {post.profiles?.full_name} • {new Date(post.published_at || post.created_at).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {post.cover_image_url && (
                <div className="w-full h-64 rounded-lg bg-slate-800 overflow-hidden">
                  <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 whitespace-pre-line">{post.content}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const supabase = await createClient()
  const { data: post } = await supabase
    .from("blog_posts")
    .select("title, description, cover_image_url")
    .eq("slug", params.slug)
    .single()
  if (!post) {
    return {
      title: "Blog – Watchmann Technologies Ltd",
      description: "Insights on AI, software, data, and cloud.",
    }
  }
  return {
    title: `${post.title} – Watchmann Technologies Ltd`,
    description: post.description || "Insights on AI, software, data, and cloud.",
    openGraph: {
      images: post.cover_image_url ? [post.cover_image_url] : undefined,
    },
  }
}
