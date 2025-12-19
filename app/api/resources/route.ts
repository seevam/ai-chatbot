import { NextRequest, NextResponse } from 'next/server'
import { resourcesDatabase } from '@/data/resources'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category') || 'all'
    const language = searchParams.get('language') || 'en'
    const location = searchParams.get('location') || 'andhra-pradesh'

    // Parse location (format: "cityValue|stateSlug" or just "stateSlug")
    const [cityValue, stateSlug] = location.includes('|')
      ? location.split('|')
      : [null, location]

    // Filter resources with priority:
    // 1. City-specific resources (if city is provided)
    // 2. State-level resources
    // 3. National resources
    let filteredResources = resourcesDatabase.filter((resource) => {
      // Always include national resources
      if (resource.isNational) return true

      // If state matches
      if (resource.state === stateSlug) {
        // If we have a city value, prioritize city-specific resources
        if (cityValue && resource.city) {
          return resource.city.toLowerCase() === cityValue.toLowerCase()
        }
        // Otherwise include all state-level resources
        return true
      }

      return false
    })

    // Filter by category if specified
    if (category !== 'all') {
      filteredResources = filteredResources.filter(
        (resource) => resource.category === category
      )
    }

    // Sort resources: city-specific first, then state, then national
    filteredResources.sort((a, b) => {
      // City-specific resources first
      if (cityValue) {
        const aIsCity = a.city?.toLowerCase() === cityValue.toLowerCase()
        const bIsCity = b.city?.toLowerCase() === cityValue.toLowerCase()
        if (aIsCity && !bIsCity) return -1
        if (!aIsCity && bIsCity) return 1
      }

      // State resources before national
      if (!a.isNational && b.isNational) return -1
      if (a.isNational && !b.isNational) return 1

      return 0
    })

    // Translate resource names and descriptions based on language
    // (In production, this would use actual translation API)
    const translatedResources = filteredResources.map((resource) => ({
      ...resource,
      name: resource.name, // Keep original for MVP
      description: resource.description, // Keep original for MVP
    }))

    return NextResponse.json({
      resources: translatedResources,
      count: translatedResources.length,
      location: { city: cityValue, state: stateSlug }, // For debugging
    })

  } catch (error) {
    console.error('Error in resources API:', error)
    return NextResponse.json(
      { error: 'Failed to fetch resources' },
      { status: 500 }
    )
  }
}
