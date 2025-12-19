// Major cities and districts in India for location selection
// Organized by state/region for better UX

export interface LocationOption {
  value: string
  label: string
  state: string
  stateSlug: string // For API matching
}

export const indianLocations: LocationOption[] = [
  // Telangana
  { value: 'hyderabad', label: 'Hyderabad', state: 'Telangana', stateSlug: 'telangana' },
  { value: 'warangal', label: 'Warangal', state: 'Telangana', stateSlug: 'telangana' },
  { value: 'nizamabad', label: 'Nizamabad', state: 'Telangana', stateSlug: 'telangana' },
  { value: 'khammam', label: 'Khammam', state: 'Telangana', stateSlug: 'telangana' },
  { value: 'karimnagar', label: 'Karimnagar', state: 'Telangana', stateSlug: 'telangana' },

  // Andhra Pradesh
  { value: 'vijayawada', label: 'Vijayawada', state: 'Andhra Pradesh', stateSlug: 'andhra-pradesh' },
  { value: 'visakhapatnam', label: 'Visakhapatnam', state: 'Andhra Pradesh', stateSlug: 'andhra-pradesh' },
  { value: 'guntur', label: 'Guntur', state: 'Andhra Pradesh', stateSlug: 'andhra-pradesh' },
  { value: 'tirupati', label: 'Tirupati', state: 'Andhra Pradesh', stateSlug: 'andhra-pradesh' },
  { value: 'nellore', label: 'Nellore', state: 'Andhra Pradesh', stateSlug: 'andhra-pradesh' },

  // Delhi NCR
  { value: 'delhi', label: 'Delhi', state: 'Delhi', stateSlug: 'delhi' },
  { value: 'noida', label: 'Noida', state: 'Uttar Pradesh', stateSlug: 'uttar-pradesh' },
  { value: 'gurgaon', label: 'Gurgaon', state: 'Haryana', stateSlug: 'haryana' },
  { value: 'faridabad', label: 'Faridabad', state: 'Haryana', stateSlug: 'haryana' },
  { value: 'ghaziabad', label: 'Ghaziabad', state: 'Uttar Pradesh', stateSlug: 'uttar-pradesh' },

  // Maharashtra
  { value: 'mumbai', label: 'Mumbai', state: 'Maharashtra', stateSlug: 'maharashtra' },
  { value: 'pune', label: 'Pune', state: 'Maharashtra', stateSlug: 'maharashtra' },
  { value: 'nagpur', label: 'Nagpur', state: 'Maharashtra', stateSlug: 'maharashtra' },
  { value: 'nashik', label: 'Nashik', state: 'Maharashtra', stateSlug: 'maharashtra' },
  { value: 'aurangabad', label: 'Aurangabad', state: 'Maharashtra', stateSlug: 'maharashtra' },

  // Karnataka
  { value: 'bangalore', label: 'Bangalore', state: 'Karnataka', stateSlug: 'karnataka' },
  { value: 'mysore', label: 'Mysore', state: 'Karnataka', stateSlug: 'karnataka' },
  { value: 'hubli', label: 'Hubli', state: 'Karnataka', stateSlug: 'karnataka' },
  { value: 'mangalore', label: 'Mangalore', state: 'Karnataka', stateSlug: 'karnataka' },

  // Tamil Nadu
  { value: 'chennai', label: 'Chennai', state: 'Tamil Nadu', stateSlug: 'tamil-nadu' },
  { value: 'coimbatore', label: 'Coimbatore', state: 'Tamil Nadu', stateSlug: 'tamil-nadu' },
  { value: 'madurai', label: 'Madurai', state: 'Tamil Nadu', stateSlug: 'tamil-nadu' },
  { value: 'tiruchirappalli', label: 'Tiruchirappalli', state: 'Tamil Nadu', stateSlug: 'tamil-nadu' },

  // Gujarat
  { value: 'ahmedabad', label: 'Ahmedabad', state: 'Gujarat', stateSlug: 'gujarat' },
  { value: 'surat', label: 'Surat', state: 'Gujarat', stateSlug: 'gujarat' },
  { value: 'vadodara', label: 'Vadodara', state: 'Gujarat', stateSlug: 'gujarat' },
  { value: 'rajkot', label: 'Rajkot', state: 'Gujarat', stateSlug: 'gujarat' },

  // Uttar Pradesh
  { value: 'lucknow', label: 'Lucknow', state: 'Uttar Pradesh', stateSlug: 'uttar-pradesh' },
  { value: 'kanpur', label: 'Kanpur', state: 'Uttar Pradesh', stateSlug: 'uttar-pradesh' },
  { value: 'agra', label: 'Agra', state: 'Uttar Pradesh', stateSlug: 'uttar-pradesh' },
  { value: 'varanasi', label: 'Varanasi', state: 'Uttar Pradesh', stateSlug: 'uttar-pradesh' },

  // Rajasthan
  { value: 'jaipur', label: 'Jaipur', state: 'Rajasthan', stateSlug: 'rajasthan' },
  { value: 'jodhpur', label: 'Jodhpur', state: 'Rajasthan', stateSlug: 'rajasthan' },
  { value: 'udaipur', label: 'Udaipur', state: 'Rajasthan', stateSlug: 'rajasthan' },
  { value: 'kota', label: 'Kota', state: 'Rajasthan', stateSlug: 'rajasthan' },

  // West Bengal
  { value: 'kolkata', label: 'Kolkata', state: 'West Bengal', stateSlug: 'west-bengal' },
  { value: 'howrah', label: 'Howrah', state: 'West Bengal', stateSlug: 'west-bengal' },
  { value: 'durgapur', label: 'Durgapur', state: 'West Bengal', stateSlug: 'west-bengal' },

  // Kerala
  { value: 'thiruvananthapuram', label: 'Thiruvananthapuram', state: 'Kerala', stateSlug: 'kerala' },
  { value: 'kochi', label: 'Kochi', state: 'Kerala', stateSlug: 'kerala' },
  { value: 'kozhikode', label: 'Kozhikode', state: 'Kerala', stateSlug: 'kerala' },

  // Punjab
  { value: 'chandigarh', label: 'Chandigarh', state: 'Punjab/Haryana', stateSlug: 'punjab' },
  { value: 'ludhiana', label: 'Ludhiana', state: 'Punjab', stateSlug: 'punjab' },
  { value: 'amritsar', label: 'Amritsar', state: 'Punjab', stateSlug: 'punjab' },
  { value: 'jalandhar', label: 'Jalandhar', state: 'Punjab', stateSlug: 'punjab' },

  // Bihar
  { value: 'patna', label: 'Patna', state: 'Bihar', stateSlug: 'bihar' },
  { value: 'gaya', label: 'Gaya', state: 'Bihar', stateSlug: 'bihar' },
  { value: 'bhagalpur', label: 'Bhagalpur', state: 'Bihar', stateSlug: 'bihar' },

  // Madhya Pradesh
  { value: 'bhopal', label: 'Bhopal', state: 'Madhya Pradesh', stateSlug: 'madhya-pradesh' },
  { value: 'indore', label: 'Indore', state: 'Madhya Pradesh', stateSlug: 'madhya-pradesh' },
  { value: 'gwalior', label: 'Gwalior', state: 'Madhya Pradesh', stateSlug: 'madhya-pradesh' },
  { value: 'jabalpur', label: 'Jabalpur', state: 'Madhya Pradesh', stateSlug: 'madhya-pradesh' },

  // Other major cities
  { value: 'bhubaneswar', label: 'Bhubaneswar', state: 'Odisha', stateSlug: 'odisha' },
  { value: 'raipur', label: 'Raipur', state: 'Chhattisgarh', stateSlug: 'chhattisgarh' },
  { value: 'ranchi', label: 'Ranchi', state: 'Jharkhand', stateSlug: 'jharkhand' },
  { value: 'dehradun', label: 'Dehradun', state: 'Uttarakhand', stateSlug: 'uttarakhand' },
  { value: 'guwahati', label: 'Guwahati', state: 'Assam', stateSlug: 'assam' },
]

// Group locations by state for better UI organization
export const locationsByState = indianLocations.reduce((acc, location) => {
  if (!acc[location.state]) {
    acc[location.state] = []
  }
  acc[location.state].push(location)
  return acc
}, {} as Record<string, LocationOption[]>)
