"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingTopic } from "@/lib/intelligence/types"
import { TrendingUp, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TrendingInsightsProps {
  topics: TrendingTopic[]
  onTopicClick: (topic: TrendingTopic) => void
}

export function TrendingInsights({ topics, onTopicClick }: TrendingInsightsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Trending Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topics.map((topic) => (
            <Button
              key={topic.id}
              variant="ghost"
              className="w-full justify-between p-4 h-auto"
              onClick={() => onTopicClick(topic)}
            >
              <div className="flex flex-col items-start gap-1">
                <span className="font-medium">{topic.topic}</span>
                <span className="text-sm text-muted-foreground">
                  Momentum: {topic.momentum}%
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}