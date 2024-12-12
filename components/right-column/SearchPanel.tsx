"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bookmark, Clock, TrendingUp } from "lucide-react"

interface SearchPanelProps {
  onBookmarkClick: (id: string) => void
}

export function SearchPanel({ onBookmarkClick }: SearchPanelProps) {
  const trendingSearches = [
    "Maritime Security South China Sea",
    "ASEAN Trade Relations",
    "Defense Cooperation Indo-Pacific"
  ]

  const bookmarks = [
    { id: "1", title: "Strategic Analysis 2024" },
    { id: "2", title: "Defense Partnerships" },
    { id: "3", title: "Economic Corridors" }
  ]

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Trending Searches
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {trendingSearches.map((search, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start text-sm"
              >
                <Clock className="h-4 w-4 mr-2" />
                {search}
              </Button>
            ))}
          </div>
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
            {bookmarks.map((bookmark) => (
              <Button
                key={bookmark.id}
                variant="ghost"
                className="w-full justify-start text-sm"
                onClick={() => onBookmarkClick(bookmark.id)}
              >
                {bookmark.title}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}