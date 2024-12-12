import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe2, TrendingUp, Shield, Building2 } from "lucide-react"

export default function Home() {
  const categories = [
    { name: "Global Politics", icon: Globe2, count: 128 },
    { name: "Economics", icon: TrendingUp, count: 85 },
    { name: "Military", icon: Shield, count: 64 },
    { name: "Trade", icon: Building2, count: 92 }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Global Insights</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Card key={category.name}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Icon className="h-8 w-8" />
                <div>
                  <CardTitle>{category.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {category.count} active discussions
                  </p>
                </div>
              </CardHeader>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Trending Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 rounded-lg border">
                <h3 className="font-semibold mb-2">
                  Impact of QUAD on Indo-Pacific Maritime Security
                </h3>
                <p className="text-sm text-muted-foreground">
                  Analysis of recent developments in maritime cooperation between 
                  QUAD nations and their implications for regional stability...
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}