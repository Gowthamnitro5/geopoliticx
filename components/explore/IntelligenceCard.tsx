"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { IntelligenceReport } from "@/lib/intelligence/types"
import { formatDistanceToNow } from "date-fns"
import { ExternalLink, AlertTriangle, CheckCircle } from "lucide-react"

interface IntelligenceCardProps {
  report: IntelligenceReport
}

export function IntelligenceCard({ report }: IntelligenceCardProps) {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return "text-green-500"
    if (confidence >= 60) return "text-yellow-500"
    return "text-red-500"
  }

  const getConfidenceIcon = (confidence: number) => {
    if (confidence >= 80) return CheckCircle
    if (confidence >= 60) return AlertTriangle
    return AlertTriangle
  }

  const ConfidenceIcon = getConfidenceIcon(report.confidence)

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="capitalize">
            {report.category}
          </Badge>
          <span className={`flex items-center gap-1 ${getConfidenceColor(report.confidence)}`}>
            <ConfidenceIcon className="h-4 w-4" />
            {report.confidence}% Confidence
          </span>
        </div>
        <CardTitle className="text-xl">{report.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{report.summary}</p>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Impact Analysis</h4>
          <div className="space-y-3">
            {Object.entries(report.impact).map(([domain, value]) => (
              <div key={domain} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="capitalize">{domain}</span>
                  <span>{value}%</span>
                </div>
                <Progress value={value} className="h-1" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Sources</h4>
          <div className="flex flex-wrap gap-2">
            {report.sources.map((source, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-1">
                {source}
                <ExternalLink className="h-3 w-3" />
              </Badge>
            ))}
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          Last updated {formatDistanceToNow(new Date(report.timestamp))} ago
        </div>
      </CardContent>
    </Card>
  )
}