// Multi-language translations for UI text
// Supports Telugu (te), Hindi (hi), and English (en)

type Language = 'en' | 'hi' | 'te'

interface Translations {
  // Landing page
  welcome: string
  welcomeSubtitle: string
  chooseLanguage: string
  anonymous: string
  anonymousDesc: string
  safe: string
  safeDesc: string
  support247: string
  support247Desc: string
  disclaimer: string
  emergencyNumbers: string
  
  // Chat interface
  subtitle: string
  inputPlaceholder: string
  privacyNote: string
  sendButton: string
  quickExit: string
  quickExitHint: string
  
  // Language names
  languageTelugu: string
  languageHindi: string
  languageEnglish: string
  
  // Crisis detection
  crisisDetected: string
  crisisMode: string
  emergencyContacts: string
  immediateHelp: string
  
  // Messages
  welcomeMessage: string
  errorMessage: string
  loadingMessage: string
  typingIndicator: string
  
  // Resources
  resourcesFound: string
  noResources: string
  findingResources: string
  contactNumber: string
  address: string
  availableNow: string
  
  // Categories
  categoryHelpline: string
  categoryShelter: string
  categoryLegal: string
  categoryMedical: string
  categoryCounseling: string
  categoryPolice: string
  
  // Actions
  needHelp: string
  findResources: string
  learnMore: string
  safetyPlan: string
  legalRights: string
  
  // Time
  available24x7: string
  businessHours: string
  
  // Safety
  safetyFirst: string
  youAreNotAlone: string
  confidential: string
  
  // Footer
  notSubstitute: string
  callEmergency: string
}

export const translations: Record<Language, Translations> = {
  en: {
    // Landing page
    welcome: 'Welcome',
    welcomeSubtitle: 'Anonymous support for domestic violence survivors',
    chooseLanguage: 'Choose Your Language',
    anonymous: '100% Anonymous',
    anonymousDesc: 'No registration, no data storage, completely private',
    safe: 'Safe & Confidential',
    safeDesc: 'Your conversation is secure and protected',
    support247: '24/7 Support',
    support247Desc: 'Get help anytime in your preferred language',
    disclaimer: 'This is a support tool and not a substitute for professional help.',
    emergencyNumbers: 'In case of emergency, please call 181 (Women Helpline) or 112 (Emergency)',
    
    // Chat interface
    subtitle: 'Anonymous Support Chat',
    inputPlaceholder: 'Type your message here...',
    privacyNote: 'Your messages are anonymous and not stored',
    sendButton: 'Send',
    quickExit: 'Quick Exit',
    quickExitHint: 'Click to immediately leave this page',
    
    // Language names
    languageTelugu: 'Telugu',
    languageHindi: 'Hindi',
    languageEnglish: 'English',
    
    // Crisis detection
    crisisDetected: '🚨 CRISIS DETECTED - Immediate help available below',
    crisisMode: 'Crisis mode active - Emergency resources available',
    emergencyContacts: `🚨 EMERGENCY CONTACTS:

📞 Women Helpline: 181 (24/7)
📞 Emergency Services: 112
📞 National Commission for Women: 7827-170-170
📞 Childline India: 1098

If you're in immediate danger:
1. Go to a safe place
2. Call one of the numbers above
3. Go to the nearest police station
4. Seek medical help if injured`,
    immediateHelp: 'I need immediate help',
    
    // Messages
    welcomeMessage: 'Hello! How can I help you today?',
    errorMessage: 'I apologize, but I encountered an error. Please try again or contact emergency helpline 181.',
    loadingMessage: 'Please wait...',
    typingIndicator: 'Typing...',
    
    // Resources
    resourcesFound: 'Here are the resources available for you:',
    noResources: 'I couldn\'t find specific resources at this moment. Please call 181 (Women Helpline) for immediate assistance.',
    findingResources: 'Finding resources near you...',
    contactNumber: 'Contact',
    address: 'Address',
    availableNow: 'Available now',
    
    // Categories
    categoryHelpline: 'Helpline',
    categoryShelter: 'Shelter',
    categoryLegal: 'Legal Aid',
    categoryMedical: 'Medical',
    categoryCounseling: 'Counseling',
    categoryPolice: 'Police',
    
    // Actions
    needHelp: 'I need help',
    findResources: 'Find local resources',
    learnMore: 'Learn more',
    safetyPlan: 'Create safety plan',
    legalRights: 'My legal rights',
    
    // Time
    available24x7: 'Available 24x7',
    businessHours: 'Available during business hours',
    
    // Safety
    safetyFirst: 'Your safety comes first',
    youAreNotAlone: 'You are not alone',
    confidential: 'Completely confidential',
    
    // Footer
    notSubstitute: 'This is a support tool, not a substitute for professional help',
    callEmergency: 'In emergency, call 181 or 112',
  },
  
  hi: {
    // Landing page
    welcome: 'स्वागत है',
    welcomeSubtitle: 'घरेलू हिंसा पीड़ितों के लिए गुमनाम समर्थन',
    chooseLanguage: 'अपनी भाषा चुनें',
    anonymous: '100% गुमनाम',
    anonymousDesc: 'कोई पंजीकरण नहीं, कोई डेटा संग्रहण नहीं, पूरी तरह से निजी',
    safe: 'सुरक्षित और गोपनीय',
    safeDesc: 'आपकी बातचीत सुरक्षित और संरक्षित है',
    support247: '24/7 समर्थन',
    support247Desc: 'अपनी पसंदीदा भाषा में किसी भी समय सहायता प्राप्त करें',
    disclaimer: 'यह एक समर्थन उपकरण है और पेशेवर मदद का विकल्प नहीं है।',
    emergencyNumbers: 'आपातकाल के मामले में, कृपया 181 (महिला हेल्पलाइन) या 112 (आपातकालीन) पर कॉल करें',
    
    // Chat interface
    subtitle: 'गुमनाम समर्थन चैट',
    inputPlaceholder: 'अपना संदेश यहां टाइप करें...',
    privacyNote: 'आपके संदेश गुमनाम हैं और संग्रहीत नहीं किए जाते',
    sendButton: 'भेजें',
    quickExit: 'तुरंत बाहर निकलें',
    quickExitHint: 'इस पेज को तुरंत छोड़ने के लिए क्लिक करें',
    
    // Language names
    languageTelugu: 'तेलुगु',
    languageHindi: 'हिंदी',
    languageEnglish: 'अंग्रेज़ी',
    
    // Crisis detection
    crisisDetected: '🚨 संकट का पता चला - नीचे तत्काल मदद उपलब्ध है',
    crisisMode: 'संकट मोड सक्रिय - आपातकालीन संसाधन उपलब्ध हैं',
    emergencyContacts: `🚨 आपातकालीन संपर्क:

📞 महिला हेल्पलाइन: 181 (24/7)
📞 आपातकालीन सेवाएं: 112
📞 राष्ट्रीय महिला आयोग: 7827-170-170
📞 चाइल्डलाइन इंडिया: 1098

यदि आप तत्काल खतरे में हैं:
1. सुरक्षित स्थान पर जाएं
2. ऊपर दिए गए नंबरों में से किसी एक पर कॉल करें
3. निकटतम पुलिस स्टेशन जाएं
4. घायल होने पर चिकित्सा सहायता लें`,
    immediateHelp: 'मुझे तुरंत मदद चाहिए',
    
    // Messages
    welcomeMessage: 'नमस्ते! आज मैं आपकी कैसे मदद कर सकता हूं?',
    errorMessage: 'मुझे खेद है, लेकिन मुझे एक त्रुटि का सामना करना पड़ा। कृपया पुन: प्रयास करें या आपातकालीन हेल्पलाइन 181 से संपर्क करें।',
    loadingMessage: 'कृपया प्रतीक्षा करें...',
    typingIndicator: 'टाइप कर रहे हैं...',
    
    // Resources
    resourcesFound: 'यहां आपके लिए उपलब्ध संसाधन हैं:',
    noResources: 'मुझे इस समय विशिष्ट संसाधन नहीं मिल सके। तत्काल सहायता के लिए कृपया 181 (महिला हेल्पलाइन) पर कॉल करें।',
    findingResources: 'आपके पास संसाधन खोज रहे हैं...',
    contactNumber: 'संपर्क',
    address: 'पता',
    availableNow: 'अभी उपलब्ध',
    
    // Categories
    categoryHelpline: 'हेल्पलाइन',
    categoryShelter: 'आश्रय',
    categoryLegal: 'कानूनी सहायता',
    categoryMedical: 'चिकित्सा',
    categoryCounseling: 'परामर्श',
    categoryPolice: 'पुलिस',
    
    // Actions
    needHelp: 'मुझे मदद चाहिए',
    findResources: 'स्थानीय संसाधन खोजें',
    learnMore: 'और जानें',
    safetyPlan: 'सुरक्षा योजना बनाएं',
    legalRights: 'मेरे कानूनी अधिकार',
    
    // Time
    available24x7: '24x7 उपलब्ध',
    businessHours: 'व्यावसायिक घंटों के दौरान उपलब्ध',
    
    // Safety
    safetyFirst: 'आपकी सुरक्षा पहले आती है',
    youAreNotAlone: 'आप अकेले नहीं हैं',
    confidential: 'पूरी तरह से गोपनीय',
    
    // Footer
    notSubstitute: 'यह एक समर्थन उपकरण है, पेशेवर मदद का विकल्प नहीं',
    callEmergency: 'आपातकाल में, 181 या 112 पर कॉल करें',
  },
  
  te: {
    // Landing page
    welcome: 'స్వాగతం',
    welcomeSubtitle: 'గృహ హింస బాధితుల కోసం అనామక మద్దతు',
    chooseLanguage: 'మీ భాషను ఎంచుకోండి',
    anonymous: '100% అనామకం',
    anonymousDesc: 'నమోదు లేదు, డేటా నిల్వ లేదు, పూర్తిగా ప్రైవేట్',
    safe: 'సురక్షితం & రహస్యం',
    safeDesc: 'మీ సంభాషణ సురక్షితంగా మరియు రక్షించబడింది',
    support247: '24/7 మద్దతు',
    support247Desc: 'మీ ఇష్టమైన భాషలో ఎప్పుడైనా సహాయం పొందండి',
    disclaimer: 'ఇది మద్దతు సాధనం మరియు వృత్తిపరమైన సహాయానికి ప్రత్యామ్నాయం కాదు।',
    emergencyNumbers: 'అత్యవసర పరిస్థితుల్లో, దయచేసి 181 (మహిళా హెల్ప్‌లైన్) లేదా 112 (అత్యవసరం)కి కాల్ చేయండి',
    
    // Chat interface
    subtitle: 'అనామక మద్దతు చాట్',
    inputPlaceholder: 'మీ సందేశాన్ని ఇక్కడ టైప్ చేయండి...',
    privacyNote: 'మీ సందేశాలు అనామకంగా ఉంటాయి మరియు నిల్వ చేయబడవు',
    sendButton: 'పంపండి',
    quickExit: 'త్వరగా నిష్క్రమించండి',
    quickExitHint: 'ఈ పేజీని వెంటనే వదిలివేయడానికి క్లిక్ చేయండి',
    
    // Language names
    languageTelugu: 'తెలుగు',
    languageHindi: 'హిందీ',
    languageEnglish: 'ఇంగ్లీష్',
    
    // Crisis detection
    crisisDetected: '🚨 సంక్షోభం కనుగొనబడింది - క్రింద తక్షణ సహాయం అందుబాటులో ఉంది',
    crisisMode: 'సంక్షోభ మోడ్ సక్రియంగా ఉంది - అత్యవసర వనరులు అందుబాటులో ఉన్నాయి',
    emergencyContacts: `🚨 అత్యవసర సంప్రదింపులు:

📞 మహిళా హెల్ప్‌లైన్: 181 (24/7)
📞 అత్యవసర సేవలు: 112
📞 జాతీయ మహిళా కమిషన్: 7827-170-170
📞 చైల్డ్‌లైన్ ఇండియా: 1098

మీరు తక్షణ ప్రమాదంలో ఉంటే:
1. సురక్షితమైన ప్రదేశానికి వెళ్లండి
2. పైన ఉన్న నంబర్‌లలో ఒకదానికి కాల్ చేయండి
3. సమీప పోలీస్ స్టేషన్‌కు వెళ్లండి
4. గాయపడితే వైద్య సహాయం పొందండి`,
    immediateHelp: 'నాకు తక్షణ సహాయం కావాలి',
    
    // Messages
    welcomeMessage: 'నమస్కారం! ఈ రోజు నేను మీకు ఎలా సహాయం చేయగలను?',
    errorMessage: 'క్షమించండి, కానీ నాకు లోపం ఎదురైంది। దయచేసి మళ్లీ ప్రయత్నించండి లేదా అత్యవసర హెల్ప్‌లైన్ 181కి సంప్రదించండి।',
    loadingMessage: 'దయచేసి వేచి ఉండండి...',
    typingIndicator: 'టైప్ చేస్తున్నారు...',
    
    // Resources
    resourcesFound: 'మీ కోసం అందుబాటులో ఉన్న వనరులు ఇక్కడ ఉన్నాయి:',
    noResources: 'ఈ సమయంలో నేను నిర్దిష్ట వనరులను కనుగొనలేకపోయాను। తక్షణ సహాయం కోసం దయచేసి 181 (మహిళా హెల్ప్‌లైన్)కి కాల్ చేయండి।',
    findingResources: 'మీ దగ్గర వనరులను కనుగొంటోంది...',
    contactNumber: 'సంప్రదించండి',
    address: 'చిరునామా',
    availableNow: 'ఇప్పుడు అందుబాటులో ఉంది',
    
    // Categories
    categoryHelpline: 'హెల్ప్‌లైన్',
    categoryShelter: 'ఆశ్రయం',
    categoryLegal: 'చట్టపరమైన సహాయం',
    categoryMedical: 'వైద్యం',
    categoryCounseling: 'కౌన్సెలింగ్',
    categoryPolice: 'పోలీసు',
    
    // Actions
    needHelp: 'నాకు సహాయం కావాలి',
    findResources: 'స్థానిక వనరులను కనుగొనండి',
    learnMore: 'మరింత తెలుసుకోండి',
    safetyPlan: 'భద్రతా ప్రణాళిక సృష్టించండి',
    legalRights: 'నా చట్టపరమైన హక్కులు',
    
    // Time
    available24x7: '24x7 అందుబాటులో ఉంది',
    businessHours: 'వ్యాపార సమయాల్లో అందుబాటులో ఉంది',
    
    // Safety
    safetyFirst: 'మీ భద్రత మొదట వస్తుంది',
    youAreNotAlone: 'మీరు ఒంటరిగా లేరు',
    confidential: 'పూర్తిగా రహస్యంగా',
    
    // Footer
    notSubstitute: 'ఇది మద్దతు సాధనం, వృత్తిపరమైన సహాయానికి ప్రత్యామ్నాయం కాదు',
    callEmergency: 'అత్యవసర పరిస్థితుల్లో, 181 లేదా 112కి కాల్ చేయండి',
  },
}

// Helper function to get translation
export const getTranslation = (language: Language, key: keyof Translations): string => {
  return translations[language][key] || translations['en'][key]
}

// Export language type for use in components
export type { Language, Translations }
