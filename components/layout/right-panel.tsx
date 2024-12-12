"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"

export default function RightPanel() {
  const trendingTopics = [
    { topic: "Indo-Pacific Strategy", count: 1234 },
    { topic: "Belt and Road Initiative", count: 856 },
    { topic: "Semiconductor Supply Chain", count: 654 },
    { topic: "Arctic Trade Routes", count: 432 },
    { topic: "QUAD Alliance", count: 321 }
  ]

  const bookmarks = [
    "Maritime Security in South China Sea",
    "Digital Silk Road Analysis",
    "Space Technology Cooperation"
  ]

  return (
    <div className="w-80 p-4 hidden lg:flex lg:flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Trending Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {trendingTopics.map(({ topic, count }, index) => (
              <li key={index} className="flex items-center justify-between p-2 hover:bg-muted rounded-md cursor-pointer">
                <span>#{topic.replace(/\s+/g, '')}</span>
                <span className="text-sm text-muted-foreground">{count}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bookmark className="h-5 w-5" />
            Bookmarks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {bookmarks.map((bookmark, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start text-left font-normal"
              >
                {bookmark}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}