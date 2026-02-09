import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { ShoppingCart, Tag, ArrowRight } from "lucide-react"
export const metadata = {
  title: "Marketplace – Watchmann",
  description: "Discover AI tools, templates, and services in the Watchmann marketplace.",
}

export default async function MarketplacePage() {
  const supabase = await createClient()

  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("updated_at", { ascending: false })

  const categories = ["ai_tool", "template", "service", "course"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
              Marketplace
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white text-balance">
            Discover{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Tools, Templates & Services
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Browse ready-to-use AI tools, implementation services, and learning products to accelerate delivery
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800 cursor-pointer px-4 py-2"
              >
                {category.replace("_", " ").toUpperCase()}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {products && products.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="border-slate-800 bg-slate-900/50 backdrop-blur hover:border-blue-500/50 transition-all group"
                >
                  <CardHeader>
                    {product.image_url && (
                      <div className="w-full h-48 rounded-lg bg-slate-800 mb-4 overflow-hidden">
                        <img
                          src={product.image_url || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    {!product.image_url && (
                      <div className="w-full h-48 rounded-lg bg-gradient-to-br from-blue-900/30 to-cyan-900/30 mb-4 flex items-center justify-center">
                        <ShoppingCart className="h-8 w-8 text-blue-400" />
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                        {product.category.replace("_", " ")}
                      </Badge>
                      <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        ${Number(product.price).toFixed(2)}
                      </Badge>
                    </div>
                    <CardTitle className="text-white">{product.name}</CardTitle>
                    <CardDescription className="text-slate-400">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Array.isArray(product.features) && product.features.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {product.features.slice(0, 3).map((feat: string, idx: number) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-slate-800 text-slate-300">
                            {feat}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-2">
                      <Button variant="link" asChild className="text-blue-400 p-0">
                        <Link href={`/marketplace/${product.id}`}>
                          Learn More <ArrowRight className="ml-1 h-4 w-4" />
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
                <div className="text-6xl mb-4">🛍️</div>
                <h3 className="text-2xl font-bold text-white">No Products Yet</h3>
                <p className="text-slate-400 max-w-md mx-auto">
                  We&apos;re preparing offerings. Check back soon to discover tools, templates, and services.
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
