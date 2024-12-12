"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IntelligenceCategory } from "@/lib/intelligence/types"
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CategoryOverviewProps {
  category: IntelligenceCategory
  trendingUp: string[]
  trendingDown: string[]
  onViewDetails: () => void
}

export function CategoryOverview({ 
  category, 
  trendingUp, 
  trendingDown,
  onViewDetails 
}: CategoryOverviewProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className={`p-2 rounded-lg ${category.color}`}>
            <span className="sr-only">{category.title} icon</span>
            <i className={`${category.icon} h-5 w-5`} aria-hidden="true" />
          </span>
          {category.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{category.description}</p>

        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-green-500">
              <TrendingUp className="h-4 w-4" />
              <span className="font-medium">Trending Up</span>
            </div>
            <ul className="space-y-1 text-sm">
              {trendingUp.map((item, index) => (
                <li key={index} className="text-muted-foreground">{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-red-500">
              <TrendingDown className="h-4 w-4" />
              <span className="font-medium">Trending Down</span>
            </div>
            <ul className="space-y-1 text-sm">
              {trendingDown.map((item, index) => (
                <li key={index} className="text-muted-foreground">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <Button 
          variant="ghost" 
          className="w-full justify-between"
          onClick={onViewDetails}
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}