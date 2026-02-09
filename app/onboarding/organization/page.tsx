import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreateOrganizationForm } from "@/components/create-organization-form"

export default function OrganizationOnboardingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <SiteHeader />
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <CreateOrganizationForm />
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
