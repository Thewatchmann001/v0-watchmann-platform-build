import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Tag } from "lucide-react"
import type { Metadata } from "next"
import { PurchaseButton } from "@/components/purchase-button"

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data: product } = await supabase.from("products").select("*").eq("id", params.id).single()
  if (!product) return notFound()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
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
            <CardContent className="space-y-6">
              {product.image_url && (
                <div className="w-full h-64 rounded-lg bg-slate-800 overflow-hidden">
                  <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                </div>
              )}
              {product.long_description && (
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300">{product.long_description}</p>
                </div>
              )}
              {Array.isArray(product.features) && product.features.length > 0 && (
                <div>
                  <h3 className="text-white font-semibold mb-2 text-sm">Key Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feat: string, idx: number) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-slate-800 text-slate-300">
                        {feat}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex gap-3">
                <PurchaseButton productId={product.id} amount={Number(product.price)} />
                <Button variant="outline" asChild className="border-slate-700 text-white hover:bg-slate-800">
                  <Link href="/marketplace">Back to Marketplace</Link>
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
  const { data: product } = await supabase
    .from("products")
    .select("name, description, image_url")
    .eq("id", params.id)
    .single()
  if (!product) {
    return { title: "Marketplace – Watchmann", description: "Discover AI tools and services." }
  }
  return {
    title: `${product.name} – Marketplace`,
    description: product.description || "Discover AI tools and services.",
    openGraph: {
      images: product.image_url ? [product.image_url] : undefined,
    },
  }
}
