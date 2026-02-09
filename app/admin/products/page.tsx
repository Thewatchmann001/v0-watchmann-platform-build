import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"

export default async function AdminProductsPage() {
  const supabase = await createClient()
  const { data: products } = await supabase.from("products").select("*").order("updated_at", { ascending: false })

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Products</h1>
        <p className="text-slate-400">Manage marketplace products</p>
      </div>
      <CreateProductForm />
      <div className="grid md:grid-cols-2 gap-6">
        {products && products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} className="border-slate-800 bg-slate-900/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">{product.name}</CardTitle>
                <CardDescription className="text-slate-400">{product.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">Price: ${Number(product.price).toFixed(2)}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
            <CardContent className="p-6 text-slate-400">No products found</CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

async function createProduct(formData: FormData) {
  "use server"
  const supabase = await createClient()
  const payload = {
    name: String(formData.get("name") || ""),
    description: String(formData.get("description") || ""),
    price: Number(formData.get("price") || 0),
    category: String(formData.get("category") || "service"),
    image_url: String(formData.get("image_url") || ""),
    features: [],
    is_active: true,
  }
  await supabase.from("products").insert(payload)
  revalidatePath("/admin/products")
}

function CreateProductForm() {
  return (
    <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-white">Create Product</CardTitle>
        <CardDescription className="text-slate-400">Add a new marketplace product</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={createProduct} className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-slate-200">Name</Label>
            <Input id="name" name="name" className="border-slate-700 bg-slate-800/50 text-white" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price" className="text-slate-200">Price</Label>
            <Input id="price" name="price" type="number" step="0.01" className="border-slate-700 bg-slate-800/50 text-white" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category" className="text-slate-200">Category</Label>
            <Input id="category" name="category" placeholder="ai_tool|template|service|course" className="border-slate-700 bg-slate-800/50 text-white" required />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <Label htmlFor="description" className="text-slate-200">Description</Label>
            <Input id="description" name="description" className="border-slate-700 bg-slate-800/50 text-white" />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <Label htmlFor="image_url" className="text-slate-200">Image URL</Label>
            <Input id="image_url" name="image_url" className="border-slate-700 bg-slate-800/50 text-white" />
          </div>
          <div className="md:col-span-2">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Create</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
