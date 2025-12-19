// Major cities and districts in India for location selection
// Organized by state/region for better UX

export interface LocationOption {
  value: string
  label: string
  state: string
}

export const indianLocations: LocationOption[] = [
  // Telangana
  { value: 'hyderabad', label: 'Hyderabad', state: 'Telangana' },
  { value: 'warangal', label: 'Warangal', state: 'Telangana' },
  { value: 'nizamabad', label: 'Nizamabad', state: 'Telangana' },
  { value: 'khammam', label: 'Khammam', state: 'Telangana' },
  { value: 'karimnagar', label: 'Karimnagar', state: 'Telangana' },

  // Andhra Pradesh
  { value: 'vijayawada', label: 'Vijayawada', state: 'Andhra Pradesh' },
  { value: 'visakhapatnam', label: 'Visakhapatnam', state: 'Andhra Pradesh' },
  { value: 'guntur', label: 'Guntur', state: 'Andhra Pradesh' },
  { value: 'tirupati', label: 'Tirupati', state: 'Andhra Pradesh' },
  { value: 'nellore', label: 'Nellore', state: 'Andhra Pradesh' },

  // Delhi NCR
  { value: 'delhi', label: 'Delhi', state: 'Delhi' },
  { value: 'noida', label: 'Noida', state: 'Uttar Pradesh' },
  { value: 'gurgaon', label: 'Gurgaon', state: 'Haryana' },
  { value: 'faridabad', label: 'Faridabad', state: 'Haryana' },
  { value: 'ghaziabad', label: 'Ghaziabad', state: 'Uttar Pradesh' },

  // Maharashtra
  { value: 'mumbai', label: 'Mumbai', state: 'Maharashtra' },
  { value: 'pune', label: 'Pune', state: 'Maharashtra' },
  { value: 'nagpur', label: 'Nagpur', state: 'Maharashtra' },
  { value: 'nashik', label: 'Nashik', state: 'Maharashtra' },
  { value: 'aurangabad', label: 'Aurangabad', state: 'Maharashtra' },

  // Karnataka
  { value: 'bangalore', label: 'Bangalore', state: 'Karnataka' },
  { value: 'mysore', label: 'Mysore', state: 'Karnataka' },
  { value: 'hubli', label: 'Hubli', state: 'Karnataka' },
  { value: 'mangalore', label: 'Mangalore', state: 'Karnataka' },

  // Tamil Nadu
  { value: 'chennai', label: 'Chennai', state: 'Tamil Nadu' },
  { value: 'coimbatore', label: 'Coimbatore', state: 'Tamil Nadu' },
  { value: 'madurai', label: 'Madurai', state: 'Tamil Nadu' },
  { value: 'tiruchirappalli', label: 'Tiruchirappalli', state: 'Tamil Nadu' },

  // Gujarat
  { value: 'ahmedabad', label: 'Ahmedabad', state: 'Gujarat' },
  { value: 'surat', label: 'Surat', state: 'Gujarat' },
  { value: 'vadodara', label: 'Vadodara', state: 'Gujarat' },
  { value: 'rajkot', label: 'Rajkot', state: 'Gujarat' },

  // Uttar Pradesh
  { value: 'lucknow', label: 'Lucknow', state: 'Uttar Pradesh' },
  { value: 'kanpur', label: 'Kanpur', state: 'Uttar Pradesh' },
  { value: 'agra', label: 'Agra', state: 'Uttar Pradesh' },
  { value: 'varanasi', label: 'Varanasi', state: 'Uttar Pradesh' },

  // Rajasthan
  { value: 'jaipur', label: 'Jaipur', state: 'Rajasthan' },
  { value: 'jodhpur', label: 'Jodhpur', state: 'Rajasthan' },
  { value: 'udaipur', label: 'Udaipur', state: 'Rajasthan' },
  { value: 'kota', label: 'Kota', state: 'Rajasthan' },

  // West Bengal
  { value: 'kolkata', label: 'Kolkata', state: 'West Bengal' },
  { value: 'howrah', label: 'Howrah', state: 'West Bengal' },
  { value: 'durgapur', label: 'Durgapur', state: 'West Bengal' },

  // Kerala
  { value: 'thiruvananthapuram', label: 'Thiruvananthapuram', state: 'Kerala' },
  { value: 'kochi', label: 'Kochi', state: 'Kerala' },
  { value: 'kozhikode', label: 'Kozhikode', state: 'Kerala' },

  // Punjab
  { value: 'chandigarh', label: 'Chandigarh', state: 'Punjab/Haryana' },
  { value: 'ludhiana', label: 'Ludhiana', state: 'Punjab' },
  { value: 'amritsar', label: 'Amritsar', state: 'Punjab' },
  { value: 'jalandhar', label: 'Jalandhar', state: 'Punjab' },

  // Bihar
  { value: 'patna', label: 'Patna', state: 'Bihar' },
  { value: 'gaya', label: 'Gaya', state: 'Bihar' },
  { value: 'bhagalpur', label: 'Bhagalpur', state: 'Bihar' },

  // Madhya Pradesh
  { value: 'bhopal', label: 'Bhopal', state: 'Madhya Pradesh' },
  { value: 'indore', label: 'Indore', state: 'Madhya Pradesh' },
  { value: 'gwalior', label: 'Gwalior', state: 'Madhya Pradesh' },
  { value: 'jabalpur', label: 'Jabalpur', state: 'Madhya Pradesh' },

  // Other major cities
  { value: 'bhubaneswar', label: 'Bhubaneswar', state: 'Odisha' },
  { value: 'raipur', label: 'Raipur', state: 'Chhattisgarh' },
  { value: 'ranchi', label: 'Ranchi', state: 'Jharkhand' },
  { value: 'dehradun', label: 'Dehradun', state: 'Uttarakhand' },
  { value: 'guwahati', label: 'Guwahati', state: 'Assam' },
]

// Group locations by state for better UI organization
export const locationsByState = indianLocations.reduce((acc, location) => {
  if (!acc[location.state]) {
    acc[location.state] = []
  }
  acc[location.state].push(location)
  return acc
}, {} as Record<string, LocationOption[]>)
