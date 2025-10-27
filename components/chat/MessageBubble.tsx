'use client'

import { AlertCircle } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  urgency?: 'low' | 'medium' | 'high' | 'crisis'
}

interface MessageBubbleProps {
  message: Message
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user'

  const getUrgencyColor = (urgency?: string) => {
    switch (urgency) {
      case 'crisis':
        return 'bg-danger-500'
      case 'high':
        return 'bg-warning-500'
      case 'medium':
        return 'bg-warning-300'
      default:
        return 'bg-safe-500'
    }
  }

  const getUrgencyBorder = (urgency?: string) => {
    switch (urgency) {
      case 'crisis':
        return 'border-l-4 border-danger-500 bg-danger-50'
      case 'high':
        return 'border-l-4 border-warning-500 bg-warning-50'
      case 'medium':
        return 'border-l-4 border-warning-300'
      default:
        return ''
    }
  }

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`relative ${isUser ? 'message-user' : 'message-bot'} ${!isUser ? getUrgencyBorder(message.urgency) : ''}`}>
        {!isUser && message.urgency && message.urgency !== 'low' && (
          <div className={`urgency-indicator ${getUrgencyColor(message.urgency)}`} title={`Urgency: ${message.urgency}`} />
        )}
        
        {message.urgency === 'crisis' && !isUser && (
          <div className="flex items-center gap-2 mb-2 text-danger-600 font-semibold">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">Crisis Detected</span>
          </div>
        )}
        
        <div className="whitespace-pre-wrap break-words">{message.content}</div>
        
        <div className={`text-xs mt-2 ${isUser ? 'text-primary-100' : 'text-gray-400'}`}>
          {message.timestamp.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </div>
  )
}
