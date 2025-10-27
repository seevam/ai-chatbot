import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { message, language, context, conversationHistory } = await request.json()

    // Create system prompt based on context
    const systemPrompt = `You are Sahayata, a compassionate and knowledgeable AI assistant helping victims of domestic violence in India. Your role is to:

1. Provide empathetic, non-judgmental support
2. Share accurate information about legal rights (PWDVA 2005)
3. Suggest local resources and helplines
4. Help users assess their situation safely
5. Prioritize user safety at all times

Guidelines:
- Be warm, supportive, and respectful
- Use simple, clear language
- Never blame the victim
- Respect cultural context of India
- Always emphasize safety and privacy
- Avoid medical diagnosis or legal advice - only provide general information
- For crisis situations, immediately direct to emergency services (181, 112)

Current user context:
- Language preference: ${language === 'te' ? 'Telugu' : language === 'hi' ? 'Hindi' : 'English'}
- User type: ${context.userType || 'unknown'}
- Category: ${context.category || 'general'}

Respond in ${language === 'te' ? 'Telugu' : language === 'hi' ? 'Hindi' : 'English'} language. Keep responses concise (2-3 paragraphs max) and actionable.`

    // Build conversation history
    const messages: any[] = [
      { role: 'system', content: systemPrompt },
    ]

    // Add recent conversation history
    if (conversationHistory && conversationHistory.length > 0) {
      conversationHistory.forEach((msg: any) => {
        messages.push({
          role: msg.role === 'user' ? 'user' : 'assistant',
          content: msg.content,
        })
      })
    }

    // Add current message
    messages.push({ role: 'user', content: message })

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages,
      temperature: 0.7,
      max_tokens: 500,
    })

    const response = completion.choices[0]?.message?.content || 'I apologize, but I could not generate a response. Please try again.'

    // Suggest follow-up actions based on context
    const suggestedActions = []
    if (context.userType === 'victim') {
      suggestedActions.push(
        { text: 'Find local resources', action: 'showResources' },
        { text: 'Learn about legal rights', nextStep: 'legalInfo' }
      )
    }

    return NextResponse.json({
      response,
      suggestedActions,
    })

  } catch (error: any) {
    console.error('Error in chat API:', error)
    
    // Return simple error message
    return NextResponse.json(
      { 
        error: 'Failed to generate response',
        response: 'I apologize, but I encountered an error. Please try again or contact emergency helpline 181.'
      },
      { status: 500 }
    )
  }
}
