import { NextRequest, NextResponse } from 'next/server'
import { resourcesDatabase } from '@/data/resources'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category') || 'all'
    const language = searchParams.get('language') || 'en'
    const location = searchParams.get('location') || 'andhra-pradesh'

    // Filter resources based on criteria
    let filteredResources = resourcesDatabase.filter(
      (resource) => resource.state === location || resource.isNational
    )

    if (category !== 'all') {
      filteredResources = filteredResources.filter(
        (resource) => resource.category === category
      )
    }

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
    })

  } catch (error) {
    console.error('Error in resources API:', error)
    return NextResponse.json(
      { error: 'Failed to fetch resources' },
      { status: 500 }
    )
  }
}
