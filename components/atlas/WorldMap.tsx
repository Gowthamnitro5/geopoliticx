"use client"

import { useEffect, useRef, useState } from 'react'
import { geoPath, geoMercator } from 'd3-geo'
import { feature } from 'topojson-client'
import { useSpring, animated } from '@react-spring/web'
import { Card } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'

interface CountryData {
  type: string
  properties: {
    name: string
  }
  geometry: any
}

interface WorldMapProps {
  selectedCountry: string
  onCountryClick: (country: string) => void
}

export function WorldMap({ selectedCountry, onCountryClick }: WorldMapProps) {
  const [worldData, setWorldData] = useState<{ features: CountryData[] } | null>(null)
  const [loading, setLoading] = useState(true)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    fetch('/world-atlas.json')
      .then(response => response.json())
      .then(topology => {
        const geojson = feature(topology, topology.objects.countries)
        setWorldData(geojson)
        setLoading(false)
      })
  }, [])

  const projection = geoMercator()
    .scale(150)
    .translate([480, 300])

  const pathGenerator = geoPath().projection(projection)

  if (loading) {
    return (
      <Card className="w-full h-[600px] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </Card>
    )
  }

  return (
    <Card className="w-full overflow-hidden">
      <svg
        ref={svgRef}
        viewBox="0 0 960 600"
        className="w-full h-auto"
      >
        <g>
          {worldData?.features.map((country, i) => {
            const isSelected = country.properties.name === selectedCountry

            return (
              <path
                key={`${country.properties.name}-${i}`}
                d={pathGenerator(country.geometry) || ''}
                fill={isSelected ? 'hsl(var(--primary))' : 'hsl(var(--muted))'}
                stroke="hsl(var(--border))"
                strokeWidth={isSelected ? 2 : 1}
                className={`transition-colors cursor-pointer hover:fill-primary/50 ${
                  isSelected ? 'z-10' : ''
                }`}
                onClick={() => onCountryClick(country.properties.name)}
              />
            )
          })}
        </g>
      </svg>
    </Card>
  )
}