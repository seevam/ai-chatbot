// Crisis detection keywords for identifying urgent situations
// These keywords trigger immediate crisis response with emergency contacts

type Language = 'en' | 'hi' | 'te'

export const crisisKeywords: Record<Language, string[]> = {
  en: [
    // Immediate danger
    'kill me',
    'kill myself',
    'going to kill',
    'want to die',
    'end my life',
    'suicide',
    'suicidal',
    'hurt myself',
    'harm myself',
    
    // Physical violence
    'hitting me',
    'beating me',
    'punching me',
    'strangling',
    'choking',
    'weapon',
    'knife',
    'gun',
    'threatening to kill',
    
    // Immediate help needed
    'help me now',
    'urgent help',
    'emergency',
    'right now',
    'immediately',
    'danger',
    'scared for my life',
    'afraid he will kill',
    'afraid she will kill',
    
    // Severe abuse indicators
    'broken bones',
    'bleeding',
    'hospital',
    'severe injury',
    'can\'t escape',
    'locked in',
    'trapped',
    'held hostage',
    
    // Child safety
    'hurting my child',
    'children in danger',
    'kids are scared',
    'threatened children',
    
    // Sexual violence
    'raped',
    'rape',
    'forced sex',
    'sexual assault',
    'molested',
  ],
  
  hi: [
    // तत्काल खतरा
    'मुझे मार देगा',
    'मुझे मार देगी',
    'मरना चाहता हूं',
    'मरना चाहती हूं',
    'आत्महत्या',
    'जान लेना चाहता',
    'खुद को नुकसान',
    'खुद को चोट',
    
    // शारीरिक हिंसा
    'मार रहा है',
    'मार रही है',
    'पीट रहा है',
    'पीट रही है',
    'घूंसा मार रहा',
    'गला घोंट रहा',
    'गला दबा रहा',
    'हथियार',
    'चाकू',
    'बंदूक',
    'मारने की धमकी',
    'जान से मारने की धमकी',
    
    // तत्काल मदद चाहिए
    'मदद चाहिए अभी',
    'तुरंत मदद',
    'आपातकाल',
    'अभी मदद करो',
    'खतरे में हूं',
    'डर लग रहा है',
    'जान का खतरा',
    'मार डालेगा',
    'मार डालेगी',
    
    // गंभीर दुर्व्यवहार संकेतक
    'हड्डी टूट गई',
    'खून बह रहा',
    'अस्पताल जाना है',
    'गंभीर चोट',
    'भाग नहीं सकता',
    'भाग नहीं सकती',
    'बंद कर दिया',
    'फंस गया हूं',
    'फंस गई हूं',
    'बंधक बना लिया',
    
    // बच्चों की सुरक्षा
    'बच्चे को मार रहा',
    'बच्चों को नुकसान',
    'बच्चे खतरे में',
    'बच्चे डर गए',
    'बच्चों को धमकी',
    
    // यौन हिंसा
    'बलात्कार',
    'रेप',
    'जबरदस्ती',
    'यौन उत्पीड़न',
    'छेड़छाड़',
  ],
  
  te: [
    // తక్షణ ప్రమాదం
    'నన్ను చంపేస్తాడు',
    'నన్ను చంపేస్తుంది',
    'చనిపోవాలనుకుంటున్నాను',
    'ఆత్మహత్య',
    'ప్రాణాలు తీసుకుంటాడు',
    'నన్ను నేను గాయపరచుకోవాలి',
    
    // శారీరక హింస
    'కొడుతున్నాడు',
    'కొడుతుంది',
    'కొట్టుకుంటున్నాడు',
    'కొట్టుకుంటుంది',
    'గొంతు పిసుకుతున్నాడు',
    'ఆయుధం',
    'కత్తి',
    'తుపాకీ',
    'చంపుతానని బెదిరించారు',
    'చంపేస్తానని బెదిరించారు',
    
    // తక్షణ సహాయం కావాలి
    'ఇప్పుడే సహాయం కావాలి',
    'అత్యవసర సహాయం',
    'అత్యవసరం',
    'వెంటనే',
    'ప్రమాదంలో ఉన్నాను',
    'భయంగా ఉంది',
    'ప్రాణాలకు ముప్పు',
    'చంపేస్తాడు',
    'చంపేస్తుంది',
    
    // తీవ్రమైన దుర్వినియోగం సూచికలు
    'ఎముక విరిగింది',
    'రక్తం కారుతోంది',
    'ఆసుపత్రికి వెళ్లాలి',
    'తీవ్రమైన గాయం',
    'తప్పించుకోలేను',
    'లాక్ చేసారు',
    'చిక్కుకున్నాను',
    'బందీగా పెట్టారు',
    
    // పిల్లల భద్రత
    'పిల్లలను కొడుతున్నాడు',
    'పిల్లలకు హాని',
    'పిల్లలు ప్రమాదంలో',
    'పిల్లలు భయపడుతున్నారు',
    'పిల్లలను బెదిరించారు',
    
    // లైంగిక హింస
    'అత్యాచారం',
    'రేప్',
    'బలవంతం',
    'లైంగిక దాడి',
    'వేధింపు',
  ],
}

// Helper function to check if a message contains crisis keywords
export const detectCrisisInMessage = (message: string, language: Language): boolean => {
  const keywords = crisisKeywords[language]
  const lowerMessage = message.toLowerCase()
  
  return keywords.some(keyword => lowerMessage.includes(keyword.toLowerCase()))
}

// Get urgency level based on keyword matching
export const getUrgencyLevel = (message: string, language: Language): 'low' | 'medium' | 'high' | 'crisis' => {
  const lowerMessage = message.toLowerCase()
  const keywords = crisisKeywords[language]
  
  // Crisis-level keywords (immediate danger)
  const crisisKeywords_immediate = {
    en: ['kill', 'suicide', 'die', 'weapon', 'knife', 'gun', 'bleeding', 'danger'],
    hi: ['मार', 'आत्महत्या', 'हथियार', 'चाकू', 'बंदूक', 'खून', 'खतरा'],
    te: ['చంపు', 'ఆత్మహత్య', 'ఆయుధం', 'కత్తి', 'తుపాకీ', 'రక్తం', 'ప్రమాదం'],
  }
  
  // Check for crisis-level
  if (crisisKeywords_immediate[language].some(kw => lowerMessage.includes(kw))) {
    return 'crisis'
  }
  
  // Check if any crisis keyword is present
  if (keywords.some(keyword => lowerMessage.includes(keyword.toLowerCase()))) {
    return 'high'
  }
  
  // Default to low
  return 'low'
}
