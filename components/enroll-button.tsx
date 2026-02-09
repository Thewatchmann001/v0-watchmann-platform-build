"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function EnrollButton({ courseId }: { courseId: string }) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  async function handleEnroll() {
    setLoading(true)
    setMessage(null)
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ course_id: courseId }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Enroll failed")
      setMessage("Enrolled successfully. Visit your dashboard to start learning.")
    } catch (e: any) {
      setMessage(e.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="space-y-2">
      <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleEnroll} disabled={loading}>
        {loading ? "Enrolling..." : "Enroll"}
      </Button>
      {message && <p className="text-sm text-slate-300">{message}</p>}
    </div>
  )
}
