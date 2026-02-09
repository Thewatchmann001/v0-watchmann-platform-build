"use client"
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function CreateOrganizationForm() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch("/api/organizations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          slug: data.get("slug"),
          plan: data.get("plan") || "free",
        }),
      })
      const payload = await res.json()
      if (!res.ok) throw new Error(payload.error || "Failed to create organization")
      setMessage("Organization created and linked to your profile.")
      form.reset()
    } catch (e: any) {
      setMessage(e.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-white">Create Organization</CardTitle>
        <CardDescription className="text-slate-400">
          Establish your company workspace for marketplace and academy
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-slate-200">Organization Name</Label>
            <Input id="name" name="name" placeholder="Watchmann Agency" className="border-slate-700 bg-slate-800/50 text-white" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="slug" className="text-slate-200">Slug</Label>
            <Input id="slug" name="slug" placeholder="watchmann" className="border-slate-700 bg-slate-800/50 text-white" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="plan" className="text-slate-200">Plan</Label>
            <Input id="plan" name="plan" placeholder="free" className="border-slate-700 bg-slate-800/50 text-white" />
          </div>
          {message && <p className="text-sm text-slate-300">{message}</p>}
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={loading}>
            {loading ? "Creating..." : "Create"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
