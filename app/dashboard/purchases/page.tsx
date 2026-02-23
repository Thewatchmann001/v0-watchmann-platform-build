import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default async function PurchasesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: orders } = await supabase
    .from("orders")
    .select("*, products(*)")
    .eq("user_id", user!.id)
    .order("created_at", { ascending: false })

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">My Purchases</h1>
        <p className="text-slate-400">View and manage your marketplace orders</p>
      </div>

      {orders && orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="border-slate-800 bg-slate-900/50 backdrop-blur">
              <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <ShoppingBag className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{order.products?.name || "Product Name"}</h3>
                    <p className="text-sm text-slate-400">Order ID: {order.id.slice(0, 8)}...</p>
                    <p className="text-xs text-slate-500">{new Date(order.created_at).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="text-xl font-bold text-white">${order.amount}</div>
                  <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    order.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {order.status}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-slate-800 bg-slate-900/50 p-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-slate-800 flex items-center justify-center">
              <ShoppingCart className="h-8 w-8 text-slate-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">No purchases yet</h2>
            <p className="text-slate-400 max-w-sm">You haven't made any purchases in the marketplace yet. Explore our high-quality AI assets.</p>
            <Link
              href="/marketplace"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white h-10 px-6 font-medium transition-colors"
            >
              Explore Marketplace
            </Link>
          </div>
        </Card>
      )}
    </div>
  )
}
