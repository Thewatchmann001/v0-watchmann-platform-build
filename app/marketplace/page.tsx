import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { ShoppingCart, Star } from "lucide-react"

export default async function MarketplacePage() {
  const supabase = await createClient()

  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false })

  const categories = ["ai_tool", "template", "service", "course"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
              Marketplace
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white text-balance">
            Premium{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Products
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover AI tools, templates, services, and courses to supercharge your business
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="outline" className="border-blue-500 bg-blue-500/10 text-blue-400 cursor-pointer px-4 py-2">
              All Products
            </Badge>
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

      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {products && products.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="border-slate-800 bg-slate-900/50 backdrop-blur hover:border-blue-500/50 transition-all group flex flex-col"
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
                        <ShoppingCart className="h-16 w-16 text-slate-600" />
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                        {product.category.replace("_", " ")}
                      </Badge>
                      <div className="flex items-center text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm font-semibold">4.8</span>
                      </div>
                    </div>
                    <CardTitle className="text-white">{product.name}</CardTitle>
                    <CardDescription className="text-slate-400">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {product.features && Array.isArray(product.features) && product.features.length > 0 && (
                      <ul className="space-y-2">
                        {product.features.slice(0, 3).map((feature: string, idx: number) => (
                          <li key={idx} className="text-sm text-slate-400 flex items-start">
                            <span className="text-cyan-400 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white">${product.price}</span>
                    </div>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link href={`/marketplace/${product.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
              <CardContent className="p-12 text-center space-y-4">
                <ShoppingCart className="h-16 w-16 text-slate-600 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Products Coming Soon</h3>
                <p className="text-slate-400 max-w-md mx-auto">
                  We're curating an amazing collection of AI tools, templates, and services. Check back soon!
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
