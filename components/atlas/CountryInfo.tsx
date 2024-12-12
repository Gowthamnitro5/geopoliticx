"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

interface CountryInfoProps {
  country: string
  keywords?: string[]
}

interface CountryUpdate {
  title: string
  content: string
  date: string
  source: string
}

export function CountryInfo({ country, keywords = [] }: CountryInfoProps) {
  const [updates, setUpdates] = useState<CountryUpdate[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUpdates() {
      setLoading(true)
      try {
        // In a real app, this would fetch from your API
        const mockUpdates: CountryUpdate[] = [
          {
            title: `Latest developments in ${country}`,
            content: `Analysis of recent political and economic changes in ${country}...`,
            date: new Date().toLocaleDateString(),
            source: "GeoPoliticsX Intelligence"
          },
          {
            title: `${country}'s Strategic Moves`,
            content: `Evaluation of ${country}'s recent diplomatic initiatives...`,
            date: new Date().toLocaleDateString(),
            source: "Strategic Affairs Digest"
          }
        ]
        setUpdates(mockUpdates)
      } catch (error) {
        console.error('Error fetching country updates:', error)
      } finally {
        setLoading(false)
      }
    }

    if (country) {
      fetchUpdates()
    }
  }, [country, keywords])

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center p-8">
          <Loader2 className="h-8 w-8 animate-spin" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Updates for {country}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {updates.map((update, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">{update.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{update.content}</p>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{update.date}</span>
                <span>{update.source}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}