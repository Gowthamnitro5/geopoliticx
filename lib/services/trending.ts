import { TrendingTopic } from '@/lib/intelligence/types'

// Mock data for trending topics
const MOCK_TRENDING_TOPICS: TrendingTopic[] = [
  {
    id: "1",
    topic: "Indo-Pacific Maritime Security",
    category: "military",
    momentum: 92,
    lastUpdated: new Date().toISOString()
  },
  {
    id: "2",
    topic: "ASEAN Economic Integration",
    category: "economics",
    momentum: 87,
    lastUpdated: new Date().toISOString()
  },
  {
    id: "3",
    topic: "Belt and Road Initiative",
    category: "trade",
    momentum: 85,
    lastUpdated: new Date().toISOString()
  },
  {
    id: "4",
    topic: "QUAD Strategic Dialogue",
    category: "diplomatic",
    momentum: 83,
    lastUpdated: new Date().toISOString()
  },
  {
    id: "5",
    topic: "Semiconductor Supply Chain",
    category: "trade",
    momentum: 80,
    lastUpdated: new Date().toISOString()
  }
]

export async function getTrendingTopics(): Promise<TrendingTopic[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  return MOCK_TRENDING_TOPICS
}

export async function getTrendingByCategory(category: string): Promise<TrendingTopic[]> {
  const topics = await getTrendingTopics()
  return topics.filter(topic => topic.category === category)
}

export async function searchTrendingTopics(query: string): Promise<TrendingTopic[]> {
  const topics = await getTrendingTopics()
  const lowercaseQuery = query.toLowerCase()
  return topics.filter(topic => 
    topic.topic.toLowerCase().includes(lowercaseQuery) ||
    topic.category.toLowerCase().includes(lowercaseQuery)
  )
}