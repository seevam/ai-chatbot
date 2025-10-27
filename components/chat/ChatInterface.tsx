'use client'

import { useState, useEffect, useRef } from 'react'
import { Send, AlertTriangle, MessageCircle } from 'lucide-react'
import { translations } from '@/lib/translations'
import { conversationFlows } from '@/lib/conversationFlows'
import { crisisKeywords } from '@/lib/crisisKeywords'
import QuickExitButton from './QuickExitButton'
import MessageBubble from './MessageBubble'
import QuickReplyButtons from './QuickReplyButtons'

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
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
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
      // Trigger AI response
      await handleAIResponse(option.text)
    } else if (option.action === 'showResources') {
      await fetchResources(conversationContext.category)
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
          conversationHistory: messages.slice(-5), // Last 5 messages for context
        }),
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()

      if (data.response) {
        addBotMessage(data.response)
        
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

  const fetchResources = async (category: string) => {
    setIsLoading(true)

    try {
      const response = await fetch(`/api/resources?category=${category}&language=${language}`)
      
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

  return (
    <div className="chat-container">
      <QuickExitButton language={language} />

      {/* Header */}
      <div className="bg-primary-500 text-white p-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-6 h-6" />
            <div>
              <h1 className="text-xl font-bold">Sahayata</h1>
              <p className="text-sm opacity-90">{t.subtitle}</p>
            </div>
          </div>
          
          {/* Language Switcher */}
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value as Language)}
            className="bg-primary-600 text-white px-3 py-1 rounded-lg text-sm border border-primary-400 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="te">తెలుగు</option>
            <option value="hi">हिंदी</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      {/* Crisis Banner */}
      {conversationContext.crisisDetected && (
        <div className="bg-danger-50 border-l-4 border-danger-500 p-4">
          <div className="max-w-4xl mx-auto flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-danger-600 flex-shrink-0" />
            <p className="text-sm text-danger-800 font-semibold">{t.crisisMode}</p>
          </div>
        </div>
      )}

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          
          {isLoading && (
            <div className="message-bot">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}

          {showQuickReplies && !isLoading && getCurrentStepOptions().length > 0 && (
            <QuickReplyButtons
              options={getCurrentStepOptions()}
              onSelect={handleQuickReply}
            />
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2 items-end">
            <div className="flex-1 relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t.inputPlaceholder}
                rows={1}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                style={{ maxHeight: '120px' }}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="bg-primary-500 text-white p-3 rounded-full hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">{t.privacyNote}</p>
        </div>
      </div>
    </div>
  )
}
