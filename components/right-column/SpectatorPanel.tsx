"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"

interface CountryAlert {
  type: "diplomatic" | "economic" | "military"
  title: string
  impact: "high" | "medium" | "low"
  trend: "up" | "down" | "neutral"
}

interface SpectatorPanelProps {
  countryName: string
  alerts: CountryAlert[]
}

export function SpectatorPanel({ countryName, alerts }: SpectatorPanelProps) {
  const getAlertColor = (type: CountryAlert["type"]) => {
    switch (type) {
      case "diplomatic": return "bg-blue-500/10 text-blue-500"
      case "economic": return "bg-green-500/10 text-green-500"
      case "military": return "bg-red-500/10 text-red-500"
    }
  }

  const getTrendIcon = (trend: CountryAlert["trend"]) => {
    switch (trend) {
      case "up": return ArrowUpRight
      case "down": return ArrowDownRight
      default: return TrendingUp
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          Critical Updates: {countryName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert, index) => {
            const TrendIcon = getTrendIcon(alert.trend)
            return (
              <div
                key={index}
                className="p-3 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <Badge className={getAlertColor(alert.type)}>
                      {alert.type}
                    </Badge>
                    <p className="mt-2 text-sm font-medium">{alert.title}</p>
                  </div>
                  <TrendIcon className={`h-5 w-5 ${
                    alert.trend === "up" ? "text-green-500" : 
                    alert.trend === "down" ? "text-red-500" : 
                    "text-yellow-500"
                  }`} />
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}