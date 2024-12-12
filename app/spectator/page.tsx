"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { WorldMap } from "@/components/atlas/WorldMap"
import { CountryInfo } from "@/components/atlas/CountryInfo"

export default function SpectatorPage() {
  const [country, setCountry] = useState("")
  const [keywords, setKeywords] = useState("")

  const handleCountrySelect = (value: string) => {
    setCountry(value)
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Spectator Mode</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WorldMap 
            selectedCountry={country} 
            onCountryClick={handleCountrySelect} 
          />
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Configure Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Country</label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a country" />
                  </SelectTrigger>
                  <SelectContent>
                    {["China", "USA", "Russia", "Japan", "Australia"].map((c) => (
                      <SelectItem key={c} value={c.toLowerCase()}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Keywords (Optional)</label>
                <Input
                  placeholder="e.g., trade, military, diplomacy"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {country && <CountryInfo country={country} keywords={keywords.split(',')} />}
        </div>
      </div>
    </div>
  )
}