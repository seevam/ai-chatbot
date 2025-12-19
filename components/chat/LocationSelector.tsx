'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { indianLocations } from '@/lib/locations'

type Language = 'en' | 'hi' | 'te'

interface LocationSelectorProps {
  language: Language
  onLocationSelect: (location: string, cityValue: string, stateSlug: string) => void
  onCancel?: () => void
}

export default function LocationSelector({ language, onLocationSelect, onCancel }: LocationSelectorProps) {
  const [selectedLocation, setSelectedLocation] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const labels = {
    en: {
      title: 'Select Your Location',
      search: 'Search city or district...',
      selectButton: 'Confirm Location',
      cancel: 'Cancel',
      placeholder: 'Choose a location',
    },
    hi: {
      title: 'अपना स्थान चुनें',
      search: 'शहर या जिला खोजें...',
      selectButton: 'स्थान की पुष्टि करें',
      cancel: 'रद्द करें',
      placeholder: 'एक स्थान चुनें',
    },
    te: {
      title: 'మీ స్థానాన్ని ఎంచుకోండి',
      search: 'నగరం లేదా జిల్లాను శోధించండి...',
      selectButton: 'స్థానాన్ని నిర్ధారించండి',
      cancel: 'రద్దు చేయండి',
      placeholder: 'ఒక స్థానాన్ని ఎంచుకోండి',
    },
  }

  const t = labels[language]

  // Filter locations based on search query
  const filteredLocations = searchQuery
    ? indianLocations.filter(
        (loc) =>
          loc.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          loc.state.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : indianLocations

  const handleConfirm = () => {
    if (selectedLocation) {
      const location = indianLocations.find(loc => loc.value === selectedLocation)
      if (location) {
        onLocationSelect(location.label, location.value, location.stateSlug)
      }
    }
  }

  return (
    <div className="location-selector">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-md mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-primary-500" />
          <h3 className="text-lg font-semibold text-gray-900">{t.title}</h3>
        </div>

        {/* Search input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t.search}
          className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />

        {/* Location dropdown */}
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 bg-white"
          size={10}
        >
          <option value="" disabled>
            {t.placeholder}
          </option>
          {filteredLocations.map((location) => (
            <option key={location.value} value={location.value}>
              {location.label}, {location.state}
            </option>
          ))}
        </select>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleConfirm}
            disabled={!selectedLocation}
            className="flex-1 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
          >
            {t.selectButton}
          </button>
          {onCancel && (
            <button
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
            >
              {t.cancel}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
