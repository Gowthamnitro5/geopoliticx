"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Globe, AlertTriangle, Star } from "lucide-react"

export function HomePanel() {
  const highlights = [
    { title: "Indo-Pacific Strategy", type: "Critical", icon: AlertTriangle },
    { title: "Belt and Road Updates", type: "Strategic", icon: Globe },
    { title: "QUAD Summit Analysis", type: "Important", icon: Star }
  ]

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Key Highlights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start gap-3 h-auto py-3"
                >
                  <Icon className="h-4 w-4" />
                  <div className="flex flex-col items-start">
                    <span>{item.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.type}
                    </span>
                  </div>
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}