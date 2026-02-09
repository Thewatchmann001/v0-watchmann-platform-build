"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function PurchaseButton({ productId, amount }: { productId: string; amount: number }) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  async function handlePurchase() {
    setLoading(true)
    setMessage(null)
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product_id: productId, amount }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Purchase failed")
      setMessage("Order created. We will confirm your purchase shortly.")
    } catch (e: any) {
      setMessage(e.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="space-y-2">
      <Button className="bg-blue-600 hover:bg-blue-700" onClick={handlePurchase} disabled={loading}>
        {loading ? "Processing..." : "Purchase"}
      </Button>
      {message && <p className="text-sm text-slate-300">{message}</p>}
    </div>
  )
}
