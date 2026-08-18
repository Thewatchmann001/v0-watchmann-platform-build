import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export default async function BlogPage() {
  const supabase = await createClient()

  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*, profiles(full_name, avatar_url)")
    .eq("is_published", true)
    .order("published_at", { ascending: false })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
              Blog & Insights
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold text-white text-balance tracking-tight">
            Latest <span className="text-blue-400">Insights & Updates</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Stay informed with the latest trends, best practices, and updates from the Watchmann team
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className="border-slate-800 bg-slate-900/50 backdrop-blur hover:border-blue-500/50 transition-all group flex flex-col"
                >
                  <CardHeader>
                    {post.cover_image_url && (
                      <div className="w-full h-48 rounded-lg bg-slate-800 mb-4 overflow-hidden">
                        <img
                          src={post.cover_image_url || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    {!post.cover_image_url && (
                      <div className="w-full h-48 rounded-lg bg-slate-800/60 mb-4" />
                    )}
                    {post.category && (
                      <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-2 w-fit">
                        {post.category}
                      </Badge>
                    )}
                    <CardTitle className="text-white">{post.title}</CardTitle>
                    <CardDescription className="text-slate-400">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
                      </div>
                      {post.profiles && (
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.profiles.full_name}</span>
                        </div>
                      )}
                    </div>
                    <Button variant="link" asChild className="text-blue-400 p-0 h-auto">
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
              <CardContent className="p-12 text-center space-y-4">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-semibold text-white">No Posts Yet</h3>
                <p className="text-slate-400 max-w-md mx-auto">
                  We're working on amazing content. Check back soon for insightful articles and updates!
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
