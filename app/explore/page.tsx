"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IntelligenceCard } from "@/components/explore/IntelligenceCard"
import { CategoryOverview } from "@/components/explore/CategoryOverview"
import { TrendingInsights } from "@/components/explore/TrendingInsights"
import { IntelligenceCategory, IntelligenceReport, TrendingTopic } from "@/lib/intelligence/types"
import { Globe2, TrendingUp, Shield, Building2 } from "lucide-react"

const categories: IntelligenceCategory[] = [
  {
    id: "economics",
    title: "Economic Intelligence",
    description: "Analysis of global economic trends, trade patterns, and financial markets",
    icon: "lucide-trending-up",
    color: "bg-emerald-100 dark:bg-emerald-900",
  },
  {
    id: "military",
    title: "Military Intelligence",
    description: "Strategic defense capabilities, military deployments, and security threats",
    icon: "lucide-shield",
    color: "bg-red-100 dark:bg-red-900",
  },
  {
    id: "diplomatic",
    title: "Diplomatic Relations",
    description: "International relations, diplomatic initiatives, and geopolitical alliances",
    icon: "lucide-globe",
    color: "bg-blue-100 dark:bg-blue-900",
  },
  {
    id: "trade",
    title: "Trade Analysis",
    description: "Global trade flows, supply chains, and market access",
    icon: "lucide-building",
    color: "bg-amber-100 dark:bg-amber-900",
  },
]

const mockReports: IntelligenceReport[] = [
  {
    id: "1",
    title: "Indo-Pacific Economic Framework Analysis",
    summary: "Comprehensive analysis of the IPEF's impact on regional trade dynamics",
    content: "Detailed analysis...",
    category: "economics",
    confidence: 85,
    sources: ["World Bank", "IMF", "Asian Development Bank"],
    timestamp: new Date().toISOString(),
    region: "Indo-Pacific",
    impact: {
      economic: 75,
      diplomatic: 60,
      military: 30,
      social: 45,
    },
  },
  // Add more mock reports...
]

const mockTrends: TrendingTopic[] = [
  {
    id: "1",
    topic: "QUAD Maritime Security Initiative",
    category: "military",
    momentum: 85,
    lastUpdated: new Date().toISOString(),
  },
  // Add more trending topics...
]

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState("economics")
  
  const filteredReports = mockReports.filter(
    report => report.category === selectedCategory
  )

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Strategic Intelligence</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid grid-cols-4">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid gap-6">
                  <CategoryOverview
                    category={category}
                    trendingUp={["Topic 1", "Topic 2"]}
                    trendingDown={["Topic 3", "Topic 4"]}
                    onViewDetails={() => {}}
                  />
                  {filteredReports.map((report) => (
                    <IntelligenceCard key={report.id} report={report} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div>
          <TrendingInsights 
            topics={mockTrends}
            onTopicClick={() => {}}
          />
        </div>
      </div>
    </div>
  )
}