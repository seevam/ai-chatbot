'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Shield, Heart, Lock, CheckCircle } from 'lucide-react'

type Language = 'en' | 'hi' | 'te'

export default function HomePage() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null)
  const router = useRouter()

  const handleLanguageSelect = (lang: Language) => {
    setSelectedLanguage(lang)
    // Store language preference in sessionStorage
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('preferredLanguage', lang)
    }
    // Redirect to chat
    setTimeout(() => {
      router.push('/chat')
    }, 500)
  }

  const languages = [
    { code: 'te' as Language, name: 'తెలుగు', nameEn: 'Telugu' },
    { code: 'hi' as Language, name: 'हिंदी', nameEn: 'Hindi' },
    { code: 'en' as Language, name: 'English', nameEn: 'English' },
  ]

  return (
    <div className="min-h-screen bg-wa-bg flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header with WhatsApp-style branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-full mb-4 shadow-lg">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-wa-header mb-2">Sahayata</h1>
          <p className="text-lg text-gray-600">सहायता | సహాయత | Support</p>
        </div>

        {/* Welcome Card - WhatsApp style */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Welcome • स्वागत है • స్వాగతం
          </h2>
          
          {/* Features with WhatsApp-style icons */}
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-3 bg-primary-50 rounded-lg">
              <Lock className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">100% Anonymous</h3>
                <p className="text-xs text-gray-600">No registration, completely private</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-safe-50 rounded-lg">
              <Shield className="w-5 h-5 text-safe-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Safe & Confidential</h3>
                <p className="text-xs text-gray-600">Your conversation is secure</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-primary-50 rounded-lg">
              <Heart className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">24/7 Support</h3>
                <p className="text-xs text-gray-600">Get help anytime, anywhere</p>
              </div>
            </div>
          </div>

          {/* Language Selection - Mobile First */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-3 text-center">
              Choose Your Language
            </h3>
            <div className="space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={`language-btn ${
                    selectedLanguage === lang.code
                      ? 'bg-primary-500 text-white border-primary-500'
                      : 'bg-white text-gray-900 hover:bg-primary-50 hover:border-primary-500'
                  } active:bg-primary-600 active:text-white`}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-lg font-bold">{lang.name}</div>
                      <div className="text-sm opacity-80">{lang.nameEn}</div>
                    </div>
                    {selectedLanguage === lang.code && (
                      <CheckCircle className="w-6 h-6" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Disclaimer - Compact for mobile */}
        <div className="text-center text-xs text-gray-600 space-y-2 px-4">
          <p className="flex items-center justify-center gap-2">
            <AlertTriangle className="w-4 h-4 text-warning-500" />
            <span>Support tool, not a substitute for professional help</span>
          </p>
          <p className="font-semibold text-danger-600">
            Emergency: <a href="tel:181" className="underline">181</a> (Women Helpline) | <a href="tel:112" className="underline">112</a> (Emergency)
          </p>
        </div>
      </div>
    </div>
  )
}

function AlertTriangle({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
      />
    </svg>
  )
}
