import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function AdminSettingsPage() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-slate-400">Configure platform settings</p>
      </div>
      <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-white">Coming Soon</CardTitle>
          <CardDescription className="text-slate-400">Settings management UI will be added here</CardDescription>
        </CardHeader>
        <CardContent />
      </Card>
    </div>
  )
}
