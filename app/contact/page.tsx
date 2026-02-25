 "use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { TrackLink } from "@/components/track-link"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  async function submitPayload(payload: any, form?: HTMLFormElement | null) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.error || "Submission failed")
    if (data?.stored === false) {
      setMessage("Submitted to admin via email.")
    } else {
      setMessage("Submitted to admin successfully.")
    }
    form?.reset()
    try {
      await fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact_form_submit", source_path: window.location.pathname }),
      })
    } catch {}
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setMessage(null)
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      organization: formData.get("org"),
      description: formData.get("desc"),
    }
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) {
        sessionStorage.setItem("pending-contact", JSON.stringify(payload))
        router.push("/auth/login?next=/contact&intent=contact")
        return
      }
      await submitPayload(payload, form)
    } catch (err: any) {
      setMessage(err.message || "Something went wrong")
    } finally {
      setSubmitting(false)
    }
  }
  useEffect(() => {
    const tryResume = async () => {
      const pending = sessionStorage.getItem("pending-contact")
      if (!pending) return
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return
      setSubmitting(true)
      setMessage(null)
      try {
        await submitPayload(JSON.parse(pending))
        sessionStorage.removeItem("pending-contact")
      } catch (err: any) {
        setMessage(err.message || "Something went wrong resuming submission")
      } finally {
        setSubmitting(false)
      }
    }
    tryResume()
  }, [])
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">Contact Us</CardTitle>
              <CardDescription className="text-slate-400">
                Share a few details and we&apos;ll get back to you promptly
              </CardDescription>
              <div className="flex gap-3 pt-4">
                <Button variant="outline" asChild className="border-slate-700 text-white hover:bg-slate-800">
                  <TrackLink
                    href="mailto:info@watchmann.dev?subject=Project%20Inquiry&body=Hello%20Watchmann%20Technologies%2C%20I%27d%20like%20to%20discuss%20a%20project.%0A%0APlease%20reply%20via%20email%20or%20WhatsApp."
                    event="contact_email_click"
                    ariaLabel="Email Watchmann"
                  >
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </>
                  </TrackLink>
                </Button>
                <Button variant="outline" asChild className="border-slate-700 text-white hover:bg-slate-800">
                  <TrackLink
                    href="https://wa.me/23280730048?text=Hello%20Watchmann%2C%20I%27d%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    event="contact_whatsapp_click"
                    ariaLabel="WhatsApp Watchmann"
                  >
                    <>
                      <FaWhatsapp className="mr-2 h-4 w-4" />
                      WhatsApp
                    </>
                  </TrackLink>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-slate-200">
                    Name
                  </Label>
                  <Input id="name" name="name" type="text" placeholder="Jane Doe" className="border-slate-700 bg-slate-800/50 text-white" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-slate-200">
                    Email
                  </Label>
                  <Input id="email" name="email" type="email" placeholder="jane@example.com" className="border-slate-700 bg-slate-800/50 text-white" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone" className="text-slate-200">
                    Phone
                  </Label>
                  <Input id="phone" name="phone" type="text" placeholder="+232 80730048" className="border-slate-700 bg-slate-800/50 text-white" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="org" className="text-slate-200">
                    Company / Organization
                  </Label>
                  <Input id="org" name="org" type="text" placeholder="Acme Corp" className="border-slate-700 bg-slate-800/50 text-white" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="desc" className="text-slate-200">
                    Project Description
                  </Label>
                  <textarea
                    id="desc"
                    name="desc"
                    className="w-full rounded-md border border-slate-700 bg-slate-800/50 text-white p-3"
                    rows={5}
                    placeholder="Briefly describe your goals and timeline"
                  />
                </div>
                {message && <p className="text-sm text-slate-300">{message}</p>}
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
