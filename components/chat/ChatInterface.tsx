'use client'

import { useState, useEffect, useRef } from 'react'
import { Send, AlertTriangle, Menu, ArrowLeft, MoreVertical, Phone, Video, Search } from 'lucide-react'
import { translations } from '@/lib/translations'
import { conversationFlows } from '@/lib/conversationFlows'
import { crisisKeywords } from '@/lib/crisisKeywords'
import QuickExitButton from './QuickExitButton'
import MessageBubble from './MessageBubble'
import QuickReplyButtons from './QuickReplyButtons'
import LocationSelector from './LocationSelector'

type Language = 'en' | 'hi' | 'te'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  urgency?: 'low' | 'medium' | 'high' | 'crisis'
}

interface ConversationStep {
  id: string
  message: string
  options?: Array<{ text: string; nextStep?: string; action?: string }>
  aiEnabled?: boolean
  category?: string
}

export default function ChatInterface() {
  const [language, setLanguage] = useState<Language>('en')
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState<string>('welcome')
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const [conversationContext, setConversationContext] = useState({
    userType: '',
    category: '',
    crisisDetected: false,
  })
  const [waitingForLocation, setWaitingForLocation] = useState(false)
  const [showLocationSelector, setShowLocationSelector] = useState(false)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const t = translations[language]
  const [isBrowser, setIsBrowser] = useState(false)

  // Check if we're in the browser
  useEffect(() => {
    setIsBrowser(true)
  }, [])

  useEffect(() => {
    // Get language from sessionStorage only in browser
    if (isBrowser && typeof window !== 'undefined' && window.sessionStorage) {
      const storedLang = sessionStorage.getItem('preferredLanguage') as Language
      if (storedLang) {
        setLanguage(storedLang)
      }

      // Send welcome message
      const welcomeFlow = conversationFlows[storedLang || 'en']
      const welcomeStep = welcomeFlow.welcome
      addBotMessage(welcomeStep.message, 'low')
    }
  }, [isBrowser])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto'
      inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, 120) + 'px'
    }
  }, [inputValue])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const addBotMessage = (content: string, urgency: Message['urgency'] = 'low') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'assistant',
      content,
      timestamp: new Date(),
      urgency,
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const addUserMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const detectCrisis = (text: string): boolean => {
    const lowerText = text.toLowerCase()
    const keywords = crisisKeywords[language]
    
    return keywords.some((keyword) => lowerText.includes(keyword.toLowerCase()))
  }

  const handleQuickReply = async (option: { text: string; nextStep?: string; action?: string }) => {
    addUserMessage(option.text)
    setShowQuickReplies(false)

    // Handle special actions
    if (option.action === 'setUserType') {
      setConversationContext((prev) => ({ ...prev, userType: option.nextStep || '' }))
    }

    if (option.nextStep) {
      const flow = conversationFlows[language]
      const nextStepData = flow[option.nextStep as keyof typeof flow] as ConversationStep

      if (nextStepData) {
        setTimeout(() => {
          addBotMessage(nextStepData.message)
          setCurrentStep(option.nextStep!)
          
          if (nextStepData.options && nextStepData.options.length > 0) {
            setShowQuickReplies(true)
          } else {
            setShowQuickReplies(false)
          }
        }, 800)
      }
    } else if (option.action === 'aiResponse') {
      await handleAIResponse(option.text)
    } else if (option.action === 'showResources') {
      // Show location selector instead of text input
      setTimeout(() => {
        addBotMessage(t.locationPrompt)
        setShowLocationSelector(true)
        setShowQuickReplies(false)
      }, 500)
    }
  }

  const handleAIResponse = async (userMessage: string) => {
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          language,
          context: conversationContext,
          conversationHistory: messages.slice(-5),
        }),
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()

      if (data.response) {
        addBotMessage(data.response)

        // Show quick replies if available instead of generic follow-up
        if (data.suggestedActions && data.suggestedActions.length > 0) {
          setShowQuickReplies(true)
        }
      }
    } catch (error) {
      console.error('Error getting AI response:', error)
      addBotMessage(t.errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchResources = async (category: string, location?: string) => {
    setIsLoading(true)

    try {
      const locationParam = location ? `&location=${encodeURIComponent(location)}` : ''
      const response = await fetch(`/api/resources?category=${category}&language=${language}${locationParam}`)

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()

      if (data.resources && data.resources.length > 0) {
        const resourceText = data.resources
          .map((r: any) => `📍 ${r.name}\n📞 ${r.contact}\n${r.description}`)
          .join('\n\n')

        addBotMessage(`${t.resourcesFound}\n\n${resourceText}`)
      } else {
        addBotMessage(t.noResources)
      }
    } catch (error) {
      console.error('Error fetching resources:', error)
      addBotMessage(t.errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage = inputValue.trim()
    addUserMessage(userMessage)
    setInputValue('')
    setShowQuickReplies(false)

    // Check if waiting for location input (manual text entry as fallback)
    if (waitingForLocation) {
      setWaitingForLocation(false)
      setShowLocationSelector(false)
      await fetchResources(conversationContext.category, userMessage)
      return
    }

    // Check for crisis keywords
    const isCrisis = detectCrisis(userMessage)
    if (isCrisis && !conversationContext.crisisDetected) {
      setConversationContext((prev) => ({ ...prev, crisisDetected: true }))
      setTimeout(() => {
        addBotMessage(t.crisisDetected, 'crisis')
        addBotMessage(t.emergencyContacts, 'crisis')
      }, 500)
      return
    }

    // Get AI response
    await handleAIResponse(userMessage)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const getCurrentStepOptions = () => {
    const flow = conversationFlows[language]
    const stepData = flow[currentStep as keyof typeof flow] as ConversationStep
    return stepData?.options || []
  }

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang)
    if (isBrowser && typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem('preferredLanguage', newLang)
    }
  }

  const handleLocationSelect = async (location: string, cityValue: string, stateSlug: string) => {
    setShowLocationSelector(false)
    addUserMessage(location)
    // Pass both city and state to fetchResources
    await fetchResources(conversationContext.category, `${cityValue}|${stateSlug}`)
  }

  const handleBackToMainMenu = () => {
    setCurrentStep('welcome')
    setShowQuickReplies(true)
    setShowLocationSelector(false)
    setWaitingForLocation(false)
    addBotMessage(t.welcomeMessage)
  }

  return (
    <div className="chat-container">
      <QuickExitButton language={language} />

      {/* WhatsApp-style Header */}
      <div className="wa-header">
        <div className="flex items-center gap-3 flex-1">
          <button className="hover:bg-wa-dark p-3 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
            S
          </div>
          
          <div className="flex-1">
            <h1 className="text-base font-medium">Sahayata</h1>
            <p className="text-xs opacity-80">
              {language === 'te' ? 'ఆన్‌లైన్' : language === 'hi' ? 'ऑनलाइन' : 'Online'}
            </p>
          </div>
        </div>
        
        {/* Header actions */}
        <div className="flex items-center gap-4">
          {/* Language Switcher as dropdown */}
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value as Language)}
            className="bg-wa-dark text-white px-2 py-1 rounded text-xs border-none focus:outline-none cursor-pointer"
          >
            <option value="te">తెలుగు</option>
            <option value="hi">हिंदी</option>
            <option value="en">English</option>
          </select>
          
          <button className="hover:bg-wa-dark p-2 rounded-full transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Crisis Banner */}
      {conversationContext.crisisDetected && (
        <div className="crisis-banner">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-4 h-4 text-danger-600 flex-shrink-0" />
            <p className="text-danger-800 font-semibold text-xs">{t.crisisMode}</p>
          </div>
        </div>
      )}

      {/* Messages Area - WhatsApp style */}
      <div className="flex-1 overflow-y-auto py-4 messages-scroll">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          
          {/* Typing Indicator */}
          {isLoading && (
            <div className="flex justify-start px-2 mb-2">
              <div className="message-bot">
                <div className="typing-indicator">
                  <div className="typing-dot" style={{ animationDelay: '0ms' }}></div>
                  <div className="typing-dot" style={{ animationDelay: '150ms' }}></div>
                  <div className="typing-dot" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Reply Buttons */}
          {showQuickReplies && !isLoading && getCurrentStepOptions().length > 0 && (
            <div className="px-2 my-3">
              <QuickReplyButtons
                options={getCurrentStepOptions()}
                onSelect={handleQuickReply}
              />
            </div>
          )}

          {/* Location Selector */}
          {showLocationSelector && (
            <div className="px-2 my-3">
              <LocationSelector
                language={language}
                onLocationSelect={handleLocationSelect}
                onCancel={() => {
                  setShowLocationSelector(false)
                  setWaitingForLocation(true)
                }}
              />
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* WhatsApp-style Input Area */}
      <div className="bg-wa-bg border-t border-gray-300 px-2 py-2">
        <div className="max-w-4xl mx-auto">
          {/* Main Menu Button - Always visible */}
          {currentStep !== 'welcome' && (
            <div className="mb-2 flex justify-center">
              <button
                onClick={handleBackToMainMenu}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium px-4 py-1 rounded-full hover:bg-primary-50 transition-all"
              >
                ↩️ {language === 'te' ? 'ప్రధాన మెను' : language === 'hi' ? 'मुख्य मेनू' : 'Main Menu'}
              </button>
            </div>
          )}

          <div className="flex gap-2 items-end">
            {/* Input field */}
            <div className="flex-1">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t.inputPlaceholder}
                rows={1}
                className="wa-input"
                style={{ maxHeight: '120px' }}
              />
            </div>

            {/* Send button */}
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="wa-send-btn"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
