"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Loader2 } from 'lucide-react'
import { getTrendingTopics } from '@/lib/services/trending'
import { TrendingTopic } from '@/lib/intelligence/types'
import { formatDistanceToNow } from 'date-fns'

export function TrendingTopics() {
  const [trends, setTrends] = useState<TrendingTopic[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTrends() {
      try {
        const data = await getTrendingTopics()
        setTrends(data)
      } catch (error) {
        console.error('Error fetching trends:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTrends()
    // Refresh trends every 5 minutes
    const interval = setInterval(fetchTrends, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'military': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      case 'economics': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'diplomatic': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'trade': return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Trending Topics
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Trending Topics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trends.map((trend) => (
            <div
              key={trend.id}
              className="p-3 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="font-medium">{trend.topic}</p>
                  <Badge className={getCategoryColor(trend.category)}>
                    {trend.category}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {trend.momentum}% momentum
                </div>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Updated {formatDistanceToNow(new Date(trend.lastUpdated))} ago
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}