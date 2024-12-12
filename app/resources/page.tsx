import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Newspaper, BookOpen, Globe, FileText } from "lucide-react"

const resources = [
  {
    category: "Newspapers",
    icon: Newspaper,
    items: [
      "The Diplomat",
      "Foreign Policy",
      "Foreign Affairs",
      "The Economic Times"
    ]
  },
  {
    category: "Books",
    icon: BookOpen,
    items: [
      "World Order by Henry Kissinger",
      "The Grand Chessboard by Zbigniew Brzezinski",
      "Prisoners of Geography by Tim Marshall"
    ]
  },
  {
    category: "Blogs",
    icon: Globe,
    items: [
      "War on the Rocks",
      "The Interpreter",
      "Strategic Culture Foundation",
      "South Asian Voices"
    ]
  },
  {
    category: "Articles",
    icon: FileText,
    items: [
      "Latest Research Papers",
      "Think Tank Publications",
      "Academic Journals",
      "Policy Briefs"
    ]
  }
]

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((section) => {
          const Icon = section.icon
          return (
            <Card key={section.category}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  <CardTitle>{section.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="p-2 hover:bg-muted rounded-md cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}