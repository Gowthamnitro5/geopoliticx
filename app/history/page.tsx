import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, FileText } from "lucide-react"

export default function HistoryPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">History</h1>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Searches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Indo-Pacific Strategy", "Belt and Road Initiative", "QUAD Summit"].map((search) => (
                <div key={search} className="p-3 hover:bg-muted rounded-md cursor-pointer">
                  {search}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Strategic Drafts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                "Maritime Security Analysis 2024",
                "Economic Cooperation Framework",
                "Defense Partnership Strategy"
              ].map((draft) => (
                <div key={draft} className="p-4 border rounded-lg">
                  <h3 className="font-semibold">{draft}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Last modified: March 15, 2024
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}