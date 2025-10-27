'use client'

import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface QuickExitButtonProps {
  language: 'en' | 'hi' | 'te'
}

export default function QuickExitButton({ language }: QuickExitButtonProps) {
  const router = useRouter()

  const labels = {
    en: 'Quick Exit',
    hi: 'तुरंत बाहर निकलें',
    te: 'త్వరగా నిష్క్రమించండి',
  }

  const handleQuickExit = () => {
    // Clear session storage
    sessionStorage.clear()
    
    // Clear conversation history
    if (typeof window !== 'undefined') {
      window.history.replaceState({}, '', '/')
    }
    
    // Redirect to a safe website (weather or news)
    window.location.replace('https://www.google.com/search?q=weather')
  }

  return (
    <button
      onClick={handleQuickExit}
      className="quick-exit-btn"
      title="Emergency Exit - Redirects to weather site"
    >
      <X className="w-4 h-4" />
      <span className="hidden sm:inline">{labels[language]}</span>
    </button>
  )
}
```

---

## 📂 Complete Components Directory Structure
```
components/
└── chat/
    ├── ChatInterface.tsx       ✅ (11 KB) - Main chat logic
    ├── MessageBubble.tsx       ✅ (2.1 KB) - Message display
    ├── QuickReplyButtons.tsx   ✅ (833 bytes) - Quick replies
    └── QuickExitButton.tsx     ✅ (1.1 KB) - Emergency exit
