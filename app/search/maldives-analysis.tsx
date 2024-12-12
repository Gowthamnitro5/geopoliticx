"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe2, Anchor, Building2, Users } from "lucide-react"

const analysisCategories = [
  {
    id: "diplomatic",
    icon: Globe2,
    title: "Diplomatic Relations",
    content: "Recent shift in Maldives' foreign policy stance, particularly regarding India-China relations. Analysis of diplomatic engagements and their implications for regional stability."
  },
  {
    id: "maritime",
    icon: Anchor,
    title: "Maritime Security",
    content: "Strategic importance of Maldives in Indian Ocean maritime routes. Impact on India's maritime security framework and regional naval presence."
  },
  {
    id: "economic",
    icon: Building2,
    title: "Economic Ties",
    content: "Assessment of trade relationships, tourism dependencies, and infrastructure development projects. Evaluation of economic leverage points and vulnerabilities."
  },
  {
    id: "social",
    icon: Users,
    title: "Social Dynamics",
    content: "Analysis of people-to-people connections, cultural ties, and social influences affecting bilateral relations."
  }
]

export default function MaldivesAnalysis() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Maldives Strategic Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="diplomatic" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              {analysisCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {analysisCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <category.icon className="h-5 w-5" />
                        <h3 className="font-semibold">{category.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{category.content}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}