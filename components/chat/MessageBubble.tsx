'use client'

import { AlertCircle, Check, CheckCheck } from 'lucide-react'

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
        return 'border-l-2 border-danger-500'
      case 'high':
        return 'border-l-2 border-warning-500'
      case 'medium':
        return 'border-l-2 border-warning-300'
      default:
        return ''
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true
    })
  }

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2 px-2 animate-fadeIn`}>
      <div 
        className={`
          relative 
          ${isUser ? 'message-user' : 'message-bot'} 
          ${!isUser && message.urgency ? getUrgencyBorder(message.urgency) : ''}
        `}
      >
        {/* Urgency indicator for bot messages */}
        {!isUser && message.urgency && message.urgency !== 'low' && (
          <div 
            className={`urgency-indicator ${getUrgencyColor(message.urgency)}`} 
            title={`Urgency: ${message.urgency}`} 
          />
        )}
        
        {/* Crisis icon for critical messages */}
        {message.urgency === 'crisis' && !isUser && (
          <div className="flex items-center gap-2 mb-2 text-danger-600 font-semibold text-xs">
            <AlertCircle className="w-3 h-3" />
            <span>Crisis Detected</span>
          </div>
        )}
        
        {/* Message content */}
        <div className="text-sm leading-relaxed whitespace-pre-wrap break-words pr-12">
          {message.content}
        </div>
        
        {/* Timestamp and status */}
        <div className="message-time flex items-center gap-1">
          <span>{formatTime(message.timestamp)}</span>
          {isUser && (
            <CheckCheck className="w-3 h-3 text-primary-600" />
          )}
        </div>
      </div>
    </div>
  )
}
