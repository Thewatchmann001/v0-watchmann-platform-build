import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, ShoppingCart, Star } from "lucide-react"
import Link from "next/link"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: product } = await supabase.from("products").select("*").eq("id", id).single()

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <Button variant="ghost" asChild className="mb-8 text-slate-300 hover:text-white hover:bg-slate-800">
            <Link href="/marketplace">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Marketplace
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              {product.image_url ? (
                <div className="w-full aspect-video rounded-lg bg-slate-800 overflow-hidden">
                  <img
                    src={product.image_url || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full aspect-video rounded-lg bg-gradient-to-br from-blue-900/30 to-cyan-900/30 flex items-center justify-center">
                  <ShoppingCart className="h-24 w-24 text-slate-600" />
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                    {product.category.replace("_", " ")}
                  </Badge>
                  <div className="flex items-center text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="ml-1 font-semibold">4.8</span>
                    <span className="ml-1 text-slate-400 text-sm">(124 reviews)</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
                <p className="text-lg text-slate-300">{product.description}</p>
              </div>

              <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Price</p>
                      <p className="text-4xl font-bold text-white">${product.price}</p>
                    </div>
                  </div>

                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Purchase Now
                  </Button>

                  <p className="text-xs text-slate-400 text-center">30-day money-back guarantee</p>
                </CardContent>
              </Card>

              {product.features && Array.isArray(product.features) && product.features.length > 0 && (
                <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start text-slate-300">
                          <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Long Description */}
          {product.long_description && (
            <div className="mt-12">
              <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">About this product</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 leading-relaxed whitespace-pre-line">{product.long_description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
