"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Newspaper, Globe, FileText } from "lucide-react"

export function ResourcesPanel() {
  const recommendations = [
    {
      type: "Book",
      title: "World Order",
      author: "Henry Kissinger",
      icon: BookOpen,
      relevance: 98
    },
    {
      type: "Article",
      title: "The Indo-Pacific Strategy",
      author: "Foreign Affairs",
      icon: FileText,
      relevance: 95
    },
    {
      type: "Journal",
      title: "Strategic Analysis",
      author: "IDSA",
      icon: Newspaper,
      relevance: 92
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5" />
          Recommended Resources
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="p-3 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Icon className="h-5 w-5 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{item.type}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {item.relevance}% relevant
                      </span>
                    </div>
                    <h3 className="font-medium mt-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.author}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}