"use client"

import { useState } from "react"
import { Search as SearchIcon, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getGeopoliticalAnalysis } from "@/lib/gemini"
import { getGrokAnalysis } from "@/lib/grok"
import { useToast } from "@/components/ui/use-toast"
import { TrendingTopics } from "@/components/trending/TrendingTopics"
import MaldivesAnalysis from "./maldives-analysis"

export default function SearchPage() {
  const [query, setQuery] = useState("Maldives")
  const [analysis, setAnalysis] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: "Please enter a search query",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    try {
      // Get analysis from both Gemini and Grok
      const [geminiResult, grokResult] = await Promise.all([
        getGeopoliticalAnalysis(query),
        getGrokAnalysis(query)
      ])

      // Combine the analyses
      const combinedAnalysis = `
Gemini Analysis:
${geminiResult}

Grok Analysis:
${grokResult}
      `.trim()

      setAnalysis(combinedAnalysis)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate analysis. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center space-x-2 mb-6">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search geopolitical analysis..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
            aria-label="Search query"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>
        <Button 
          onClick={handleSearch}
          disabled={loading}
          aria-label="Search"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Analyze"
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <MaldivesAnalysis />

          <Card>
            <CardContent className="p-4">
              {loading ? (
                <div className="min-h-[200px] flex items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
              ) : analysis ? (
                <div className="prose dark:prose-invert max-w-none">
                  <div className="whitespace-pre-wrap">{analysis}</div>
                </div>
              ) : (
                <div className="min-h-[200px] flex items-center justify-center text-muted-foreground">
                  Click Analyze to get AI-powered insights
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <TrendingTopics />
        </div>
      </div>
    </div>
  )
}