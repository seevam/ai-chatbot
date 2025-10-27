export const conversationFlows = {
  en: {
    welcome: {
      id: 'welcome',
      message: "Hello! I'm Sahayata, here to provide you with support and resources. Everything you share here is completely anonymous and confidential.\n\nHow can I help you today?",
      options: [
        { text: "I'm experiencing domestic violence", nextStep: 'victim_support', action: 'setUserType' },
        { text: "I want to help someone", nextStep: 'helper_support', action: 'setUserType' },
        { text: "I'm a professional offering services", nextStep: 'professional_support', action: 'setUserType' },
        { text: "I want to learn about domestic violence", nextStep: 'education', action: 'setUserType' },
      ],
    },
    victim_support: {
      id: 'victim_support',
      message: "Thank you for trusting me. You've taken a brave step. Your safety and wellbeing matter.\n\nWhat would you like to know about?",
      options: [
        { text: "Am I experiencing abuse?", nextStep: 'abuse_assessment' },
        { text: "What are my legal rights?", nextStep: 'legal_rights' },
        { text: "I need immediate help", nextStep: 'crisis_help' },
        { text: "Find local resources", action: 'showResources' },
        { text: "Safety planning", nextStep: 'safety_planning' },
      ],
    },
    abuse_assessment: {
      id: 'abuse_assessment',
      message: "Domestic violence can take many forms:\n\n• Physical harm or threats\n• Emotional abuse and constant criticism\n• Financial control\n• Isolation from friends and family\n• Sexual coercion\n• Digital harassment\n\nIf you're experiencing any of these, it's not your fault. You deserve safety and respect.\n\nWould you like to:",
      options: [
        { text: "Learn about legal protections", nextStep: 'legal_rights' },
        { text: "Find support resources", action: 'showResources' },
        { text: "Create a safety plan", nextStep: 'safety_planning' },
        { text: "Talk to someone about my situation", action: 'aiResponse' },
      ],
    },
    legal_rights: {
      id: 'legal_rights',
      message: "Under the Protection of Women from Domestic Violence Act (PWDVA) 2005, you have the right to:\n\n✓ Protection orders to prevent further violence\n✓ Residence orders to stay in your home\n✓ Monetary relief for medical expenses and maintenance\n✓ Custody of children\n✓ File complaints at police stations\n\nYou can approach:\n• Protection Officers (appointed by govt)\n• Service Providers (NGOs)\n• Magistrate courts\n• Police stations\n\nWould you like to:",
      options: [
        { text: "Find legal aid services", action: 'showResources' },
        { text: "Learn how to file a complaint", nextStep: 'filing_complaint' },
        { text: "Talk about my specific situation", action: 'aiResponse' },
      ],
    },
    crisis_help: {
      id: 'crisis_help',
      message: "🚨 IMMEDIATE HELP:\n\n• Women Helpline: 181 (24/7)\n• Emergency Services: 112\n• National Commission for Women: 7827-170-170\n\nIf you're in immediate danger:\n1. Go to a safe place\n2. Call the numbers above\n3. Go to the nearest police station\n4. Seek medical help if injured\n\nWould you like to:",
      options: [
        { text: "Find nearest shelter", action: 'showResources' },
        { text: "Learn about emergency procedures", action: 'aiResponse' },
        { text: "Create a safety plan", nextStep: 'safety_planning' },
      ],
    },
    safety_planning: {
      id: 'safety_planning',
      message: "A safety plan can help you prepare:\n\n📱 Keep important numbers saved\n🎒 Pack an emergency bag (documents, clothes, money)\n🏠 Identify safe places to go\n👥 Tell trusted people about your situation\n💰 Keep some money accessible\n📄 Copy important documents\n\nRemember: Your safety comes first. You don't have to do everything at once.\n\nWhat would help you most?",
      options: [
        { text: "Find safe shelters", action: 'showResources' },
        { text: "Legal protection options", nextStep: 'legal_rights' },
        { text: "Talk about my plan", action: 'aiResponse' },
      ],
    },
    helper_support: {
      id: 'helper_support',
      message: "Thank you for wanting to help. Supporting someone facing domestic violence requires care and sensitivity.\n\nWhat would you like to know?",
      options: [
        { text: "How to support someone safely", action: 'aiResponse' },
        { text: "Warning signs of abuse", action: 'aiResponse' },
        { text: "Resources I can share", action: 'showResources' },
        { text: "When to intervene", action: 'aiResponse' },
      ],
    },
    professional_support: {
      id: 'professional_support',
      message: "Thank you for offering your professional services. We need more people like you.\n\nWhat type of services do you provide?",
      options: [
        { text: "Legal services", action: 'aiResponse' },
        { text: "Counseling/Therapy", action: 'aiResponse' },
        { text: "Medical services", action: 'aiResponse' },
        { text: "Shelter/Housing", action: 'aiResponse' },
      ],
    },
    education: {
      id: 'education',
      message: "Understanding domestic violence helps us prevent it and support survivors.\n\nWhat would you like to learn about?",
      options: [
        { text: "Types of domestic violence", action: 'aiResponse' },
        { text: "Legal framework in India", nextStep: 'legal_rights' },
        { text: "How to help survivors", nextStep: 'helper_support' },
        { text: "Prevention and awareness", action: 'aiResponse' },
      ],
    },
  },
  hi: {
    welcome: {
      id: 'welcome',
      message: "नमस्ते! मैं सहायता हूँ, आपको समर्थन और संसाधन प्रदान करने के लिए यहाँ हूँ। आप यहाँ जो भी साझा करते हैं वह पूरी तरह से गुमनाम और गोपनीय है।\n\nआज मैं आपकी कैसे मदद कर सकता हूँ?",
      options: [
        { text: "मैं घरेलू हिंसा का अनुभव कर रहा हूँ", nextStep: 'victim_support', action: 'setUserType' },
        { text: "मैं किसी की मदद करना चाहता हूँ", nextStep: 'helper_support', action: 'setUserType' },
        { text: "मैं सेवाएं प्रदान करने वाला पेशेवर हूँ", nextStep: 'professional_support', action: 'setUserType' },
        { text: "मैं घरेलू हिंसा के बारे में जानना चाहता हूँ", nextStep: 'education', action: 'setUserType' },
      ],
    },
    victim_support: {
      id: 'victim_support',
      message: "मुझ पर विश्वास करने के लिए धन्यवाद। आपने एक साहसिक कदम उठाया है। आपकी सुरक्षा और भलाई महत्वपूर्ण है।\n\nआप किस बारे में जानना चाहेंगे?",
      options: [
        { text: "क्या मैं दुर्व्यवहार का अनुभव कर रहा हूँ?", nextStep: 'abuse_assessment' },
        { text: "मेरे कानूनी अधिकार क्या हैं?", nextStep: 'legal_rights' },
        { text: "मुझे तुरंत मदद चाहिए", nextStep: 'crisis_help' },
        { text: "स्थानीय संसाधन खोजें", action: 'showResources' },
        { text: "सुरक्षा योजना", nextStep: 'safety_planning' },
      ],
    },
    abuse_assessment: {
      id: 'abuse_assessment',
      message: "घरेलू हिंसा कई रूप ले सकती है:\n\n• शारीरिक नुकसान या धमकी\n• भावनात्मक दुर्व्यवहार और निरंतर आलोचना\n• वित्तीय नियंत्रण\n• दोस्तों और परिवार से अलगाव\n• यौन जबरदस्ती\n• डिजिटल उत्पीड़न\n\nयदि आप इनमें से किसी का अनुभव कर रहे हैं, तो यह आपकी गलती नहीं है। आप सुरक्षा और सम्मान के योग्य हैं।\n\nक्या आप चाहेंगे:",
      options: [
        { text: "कानूनी सुरक्षा के बारे में जानें", nextStep: 'legal_rights' },
        { text: "सहायता संसाधन खोजें", action: 'showResources' },
        { text: "सुरक्षा योजना बनाएं", nextStep: 'safety_planning' },
        { text: "अपनी स्थिति के बारे में किसी से बात करें", action: 'aiResponse' },
      ],
    },
    legal_rights: {
      id: 'legal_rights',
      message: "घरेलू हिंसा से महिलाओं की सुरक्षा अधिनियम (PWDVA) 2005 के तहत, आपको अधिकार है:\n\n✓ आगे की हिंसा को रोकने के लिए सुरक्षा आदेश\n✓ अपने घर में रहने के लिए निवास आदेश\n✓ चिकित्सा खर्च और रखरखाव के लिए मौद्रिक राहत\n✓ बच्चों की हिरासत\n✓ पुलिस स्टेशनों में शिकायत दर्ज करें\n\nआप संपर्क कर सकते हैं:\n• सुरक्षा अधिकारी (सरकार द्वारा नियुक्त)\n• सेवा प्रदाता (NGO)\n• मजिस्ट्रेट अदालतें\n• पुलिस स्टेशन\n\nक्या आप चाहेंगे:",
      options: [
        { text: "कानूनी सहायता सेवाएं खोजें", action: 'showResources' },
        { text: "शिकायत दर्ज करने का तरीका जानें", nextStep: 'filing_complaint' },
        { text: "अपनी विशिष्ट स्थिति के बारे में बात करें", action: 'aiResponse' },
      ],
    },
    crisis_help: {
      id: 'crisis_help',
      message: "🚨 तत्काल मदद:\n\n• महिला हेल्पलाइन: 181 (24/7)\n• आपातकालीन सेवाएं: 112\n• राष्ट्रीय महिला आयोग: 7827-170-170\n\nयदि आप तत्काल खतरे में हैं:\n1. सुरक्षित स्थान पर जाएं\n2. ऊपर दिए गए नंबरों पर कॉल करें\n3. निकटतम पुलिस स्टेशन जाएं\n4. घायल होने पर चिकित्सा सहायता लें\n\nक्या आप चाहेंगे:",
      options: [
        { text: "निकटतम आश्रय खोजें", action: 'showResources' },
        { text: "आपातकालीन प्रक्रियाओं के बारे में जानें", action: 'aiResponse' },
        { text: "सुरक्षा योजना बनाएं", nextStep: 'safety_planning' },
      ],
    },
    safety_planning: {
      id: 'safety_planning',
      message: "एक सुरक्षा योजना आपको तैयार करने में मदद कर सकती है:\n\n📱 महत्वपूर्ण नंबर सहेजें\n🎒 आपातकालीन बैग पैक करें (दस्तावेज़, कपड़े, पैसे)\n🏠 जाने के लिए सुरक्षित स्थान पहचानें\n👥 विश्वसनीय लोगों को अपनी स्थिति के बारे में बताएं\n💰 कुछ पैसे सुलभ रखें\n📄 महत्वपूर्ण दस्तावेज़ों की प्रतियां बनाएं\n\nयाद रखें: आपकी सुरक्षा पहले आती है। आपको सब कुछ एक साथ करने की ज़रूरत नहीं है।\n\nआपको सबसे अधिक क्या मदद करेगा?",
      options: [
        { text: "सुरक्षित आश्रय खोजें", action: 'showResources' },
        { text: "कानूनी सुरक्षा विकल्प", nextStep: 'legal_rights' },
        { text: "अपनी योजना के बारे में बात करें", action: 'aiResponse' },
      ],
    },
    helper_support: {
      id: 'helper_support',
      message: "मदद करने की इच्छा के लिए धन्यवाद। घरेलू हिंसा का सामना कर रहे किसी व्यक्ति का समर्थन करने के लिए देखभाल और संवेदनशीलता की आवश्यकता होती है।\n\nआप क्या जानना चाहेंगे?",
      options: [
        { text: "किसी का सुरक्षित रूप से समर्थन कैसे करें", action: 'aiResponse' },
        { text: "दुर्व्यवहार के चेतावनी संकेत", action: 'aiResponse' },
        { text: "संसाधन जो मैं साझा कर सकता हूँ", action: 'showResources' },
        { text: "कब हस्तक्षेप करें", action: 'aiResponse' },
      ],
    },
    professional_support: {
      id: 'professional_support',
      message: "अपनी पेशेवर सेवाएं देने के लिए धन्यवाद। हमें आप जैसे और लोगों की ज़रूरत है।\n\nआप किस प्रकार की सेवाएं प्रदान करते हैं?",
      options: [
        { text: "कानूनी सेवाएं", action: 'aiResponse' },
        { text: "परामर्श/थेरेपी", action: 'aiResponse' },
        { text: "चिकित्सा सेवाएं", action: 'aiResponse' },
        { text: "आश्रय/आवास", action: 'aiResponse' },
      ],
    },
    education: {
      id: 'education',
      message: "घरेलू हिंसा को समझना हमें इसे रोकने और बचे लोगों का समर्थन करने में मदद करता है।\n\nआप किस बारे में जानना चाहेंगे?",
      options: [
        { text: "घरेलू हिंसा के प्रकार", action: 'aiResponse' },
        { text: "भारत में कानूनी ढांचा", nextStep: 'legal_rights' },
        { text: "बचे लोगों की मदद कैसे करें", nextStep: 'helper_support' },
        { text: "रोकथाम और जागरूकता", action: 'aiResponse' },
      ],
    },
  },
  te: {
    welcome: {
      id: 'welcome',
      message: "నమస్కారం! నేను సహాయత, మీకు మద్దతు మరియు వనరులను అందించడానికి ఇక్కడ ఉన్నాను. మీరు ఇక్కడ పంచుకునే ప్రతిదీ పూర్తిగా అనామకం మరియు రహస్యంగా ఉంటుంది।\n\nఈ రోజు నేను మీకు ఎలా సహాయం చేయగలను?",
      options: [
        { text: "నేను గృహ హింసను అనుభవిస్తున్నాను", nextStep: 'victim_support', action: 'setUserType' },
        { text: "నేను ఎవరికైనా సహాయం చేయాలనుకుంటున్నాను", nextStep: 'helper_support', action: 'setUserType' },
        { text: "నేను సేవలను అందించే నిపుణుడిని", nextStep: 'professional_support', action: 'setUserType' },
        { text: "నేను గృహ హింస గురించి తెలుసుకోవాలనుకుంటున్నాను", nextStep: 'education', action: 'setUserType' },
      ],
    },
    victim_support: {
      id: 'victim_support',
      message: "నన్ను విశ్వసించినందుకు ధన్యవాదాలు. మీరు ధైర్యవంతమైన అడుగు వేశారు. మీ భద్రత మరియు శ్రేయస్సు ముఖ్యం।\n\nమీరు దేని గురించి తెలుసుకోవాలనుకుంటున్నారు?",
      options: [
        { text: "నేను దుర్వినియోగాన్ని అనుభవిస్తున్నానా?", nextStep: 'abuse_assessment' },
        { text: "నా చట్టపరమైన హక్కులు ఏమిటి?", nextStep: 'legal_rights' },
        { text: "నాకు తక్షణ సహాయం కావాలి", nextStep: 'crisis_help' },
        { text: "స్థానిక వనరులను కనుగొనండి", action: 'showResources' },
        { text: "భద్రతా ప్రణాళిక", nextStep: 'safety_planning' },
      ],
    },
    abuse_assessment: {
      id: 'abuse_assessment',
      message: "గృహ హింస అనేక రూపాల్లో ఉండవచ్చు:\n\n• శారీరక హాని లేదా బెదిరింపులు\n• భావోద్వేగ దుర్వినియోగం మరియు నిరంతర విమర్శ\n• ఆర్థిక నియంత్రణ\n• స్నేహితులు మరియు కుటుంబం నుండి వేరుచేయడం\n• లైంగిక బలవంతం\n• డిజిటల్ వేధింపు\n\nమీరు వీటిలో దేనినైనా అనుభవిస్తుంటే, అది మీ తప్పు కాదు. మీరు భద్రత మరియు గౌరవానికి అర్హులు।\n\nమీరు కావాలనుకుంటున్నారా:",
      options: [
        { text: "చట్టపరమైన రక్షణల గురించి తెలుసుకోండి", nextStep: 'legal_rights' },
        { text: "మద్దతు వనరులను కనుగొనండి", action: 'showResources' },
        { text: "భద్రతా ప్రణాళిక సృష్టించండి", nextStep: 'safety_planning' },
        { text: "నా పరిస్థితి గురించి ఎవరితోనైనా మాట్లాడండి", action: 'aiResponse' },
      ],
    },
    legal_rights: {
      id: 'legal_rights',
      message: "గృహ హింస నుండి మహిళల రక్షణ చట్టం (PWDVA) 2005 క్రింద, మీకు హక్కు ఉంది:\n\n✓ మరింత హింసను నిరోధించడానికి రక్షణ ఆదేశాలు\n✓ మీ ఇంటిలో ఉండటానికి నివాస ఆదేశాలు\n✓ వైద్య ఖర్చులు మరియు నిర్వహణ కోసం ద్రవ్య ఉపశమనం\n✓ పిల్లల కస్టడీ\n✓ పోలీస్ స్టేషన్లలో ఫిర్యాదులు దాఖలు చేయండి\n\nమీరు సంప్రదించవచ్చు:\n• రక్షణ అధికారులు (ప్రభుత్వం నియమించినవారు)\n• సేవా ప్రదాతలు (NGOలు)\n• మేజిస్ట్రేట్ కోర్టులు\n• పోలీస్ స్టేషన్లు\n\nమీరు కావాలనుకుంటున్నారా:",
      options: [
        { text: "చట్టపరమైన సహాయ సేవలను కనుగొనండి", action: 'showResources' },
        { text: "ఫిర్యాదు దాఖలు చేయడం ఎలా తెలుసుకోండి", nextStep: 'filing_complaint' },
        { text: "నా నిర్దిష్ట పరిస్థితి గురించి మాట్లాడండి", action: 'aiResponse' },
      ],
    },
    crisis_help: {
      id: 'crisis_help',
      message: "🚨 తక్షణ సహాయం:\n\n• మహిళా హెల్ప్‌లైన్: 181 (24/7)\n• అత్యవసర సేవలు: 112\n• జాతీయ మహిళా కమిషన్: 7827-170-170\n\nమీరు తక్షణ ప్రమాదంలో ఉంటే:\n1. సురక్షితమైన ప్రదేశానికి వెళ్లండి\n2. పైన ఉన్న నంబర్‌లకు కాల్ చేయండి\n3. సమీప పోలీస్ స్టేషన్‌కు వెళ్లండి\n4. గాయపడితే వైద్య సహాయం పొందండి\n\nమీరు కావాలనుకుంటున్నారా:",
      options: [
        { text: "సమీప ఆశ్రయాన్ని కనుగొనండి", action: 'showResources' },
        { text: "అత్యవసర విధానాల గురించి తెలుసుకోండి", action: 'aiResponse' },
        { text: "భద్రతా ప్రణాళిక సృష్టించండి", nextStep: 'safety_planning' },
      ],
    },
    safety_planning: {
      id: 'safety_planning',
      message: "భద్రతా ప్రణాళిక మిమ్మల్ని సిద్ధం చేయడంలో సహాయపడుతుంది:\n\n📱 ముఖ్యమైన నంబర్‌లను సేవ్ చేయండి\n🎒 అత్యవసర బ్యాగ్ ప్యాక్ చేయండి (పత్రాలు, బట్టలు, డబ్బు)\n🏠 వెళ్లడానికి సురక్షితమైన ప్రదేశాలను గుర్తించండి\n👥 విశ్వసనీయ వ్యక్తులకు మీ పరిస్థితి గురించి చెప్పండి\n💰 కొంత డబ్బును అందుబాటులో ఉంచండి\n📄 ముఖ్యమైన పత్రాల కాపీలు తీయండి\n\nగుర్తుంచుకోండి: మీ భద్రత మొదట వస్తుంది. మీరు అన్నింటినీ ఒకేసారి చేయవలసిన అవసరం లేదు।\n\nమీకు ఏది ఎక్కువగా సహాయపడుతుంది?",
      options: [
        { text: "సురక్షితమైన ఆశ్రయాలను కనుగొనండి", action: 'showResources' },
        { text: "చట్టపరమైన రక్షణ ఎంపికలు", nextStep: 'legal_rights' },
        { text: "నా ప్రణాళిక గురించి మాట్లాడండి", action: 'aiResponse' },
      ],
    },
    helper_support: {
      id: 'helper_support',
      message: "సహాయం చేయాలనుకున్నందుకు ధన్యవాదాలు. గృహ హింసను ఎదుర్కొంటున్న వారికి మద్దతు ఇవ్వడానికి శ్రద్ధ మరియు సున్నితత్వం అవసరం।\n\nమీరు ఏమి తెలుసుకోవాలనుకుంటున్నారు?",
      options: [
        { text: "ఎవరికైనా సురక్షితంగా ఎలా మద్దతు ఇవ్వాలి", action: 'aiResponse' },
        { text: "దుర్వినియోగం యొక్క హెచ్చరిక సంకేతాలు", action: 'aiResponse' },
        { text: "నేను పంచుకోగల వనరులు", action: 'showResources' },
        { text: "ఎప్పుడు జోక్యం చేసుకోవాలి", action: 'aiResponse' },
      ],
    },
    professional_support: {
      id: 'professional_support',
      message: "మీ వృత్తిపరమైన సేవలను అందించినందుకు ధన్యవాదాలు। మాకు మీలాంటి మరిన్ని వ్యక్తులు కావాలి।\n\nమీరు ఏ రకమైన సేవలను అందిస్తారు?",
      options: [
        { text: "చట్టపరమైన సేవలు", action: 'aiResponse' },
        { text: "కౌన్సెలింగ్/థెరపీ", action: 'aiResponse' },
        { text: "వైద్య సేవలు", action: 'aiResponse' },
        { text: "ఆశ్రయం/గృహనిర్మాణం", action: 'aiResponse' },
      ],
    },
    education: {
      id: 'education',
      message: "గృహ హింసను అర్థం చేసుకోవడం మనం దానిని నిరోధించడానికి మరియు ప్రాణాలతో బయటపడిన వారికి మద్దతు ఇవ్వడానికి సహాయపడుతుంది।\n\nమీరు దేని గురించి తెలుసుకోవాలనుకుంటున్నారు?",
      options: [
        { text: "గృహ హింస రకాలు", action: 'aiResponse' },
        { text: "భారతదేశంలో చట్టపరమైన ఫ్రేమ్‌వర్క్", nextStep: 'legal_rights' },
        { text: "ప్రాణాలతో బయటపడిన వారికి ఎలా సహాయం చేయాలి", nextStep: 'helper_support' },
        { text: "నివారణ మరియు అవగాహన", action: 'aiResponse' },
      ],
    },
  },
}
