'use client'

import { X } from 'lucide-react'

interface QuickExitButtonProps {
  language: 'en' | 'hi' | 'te'
}

export default function QuickExitButton({ language }: QuickExitButtonProps) {
  const labels = {
    en: 'Quick Exit',
    hi: 'तुरंत बाहर निकलें',
    te: 'త్వరగా నిష్క్రమించండి',
  }

  const handleQuickExit = () => {
    // Clear session storage
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.clear()
    }
    
    // Clear conversation history
    if (typeof window !== 'undefined') {
      window.history.replaceState({}, '', '/')
    }
    
    // Redirect to a safe website
    window.location.replace('https://www.google.com/search?q=weather')
  }

  return (
    <button
      onClick={handleQuickExit}
      className="quick-exit-btn"
      title="Emergency Exit - Redirects to weather site"
    >
      <X className="w-4 h-4" />
      <span className="text-xs">{labels[language]}</span>
    </button>
  )
}
