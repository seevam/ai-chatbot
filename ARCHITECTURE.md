# 🏗️ Sahayata MVP - Technical Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         USER DEVICE                          │
│  (Mobile/Desktop Browser - Chrome, Safari, Firefox, etc.)   │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTPS
                         │
┌────────────────────────▼────────────────────────────────────┐
│                    VERCEL CDN/HOSTING                        │
│                   (Edge Network - Global)                    │
└────────────────────────┬────────────────────────────────────┘
                         │
         ┌───────────────┴───────────────┐
         │                               │
         ▼                               ▼
┌────────────────────┐        ┌────────────────────┐
│   STATIC ASSETS    │        │   NEXT.JS SERVER   │
│  (CSS, JS, Images) │        │  (Server Functions)│
└────────────────────┘        └─────────┬──────────┘
                                        │
                    ┌───────────────────┼───────────────────┐
                    │                   │                   │
                    ▼                   ▼                   ▼
           ┌────────────────┐  ┌────────────────┐  ┌────────────────┐
           │  API: /chat    │  │ API: /resources│  │  Static Pages  │
           │  (OpenAI GPT)  │  │  (JSON Data)   │  │  (Landing/Chat)│
           └────────┬───────┘  └────────────────┘  └────────────────┘
                    │
                    │ API Call
                    │
           ┌────────▼───────┐
           │   OPENAI API   │
           │   (GPT-4/3.5)  │
           └────────────────┘
```

---

## Component Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        APP STRUCTURE                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌────────────────┐                                             │
│  │  Landing Page  │  (Language Selection)                       │
│  │  (page.tsx)    │────────────────────┐                        │
│  └────────────────┘                    │                        │
│                                         ▼                        │
│                              ┌──────────────────┐               │
│                              │   Chat Page      │               │
│                              │   (chat/page.tsx)│               │
│                              └────────┬─────────┘               │
│                                       │                         │
│                                       ▼                         │
│                        ┌──────────────────────────┐            │
│                        │   ChatInterface          │            │
│                        │   (Main Component)       │            │
│                        └──────────┬───────────────┘            │
│                                   │                            │
│      ┌────────────────────────────┼────────────────────────┐  │
│      │                            │                        │  │
│      ▼                            ▼                        ▼  │
│  ┌──────────┐            ┌──────────────┐        ┌──────────┐│
│  │ Message  │            │ QuickReply   │        │  Quick   ││
│  │ Bubble   │            │   Buttons    │        │  Exit    ││
│  └──────────┘            └──────────────┘        └──────────┘│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagram

### User Message Flow

```
┌──────────┐
│   User   │
└────┬─────┘
     │ 1. Types message
     ▼
┌──────────────────┐
│  Chat Interface  │
└────┬─────────────┘
     │ 2. Check for crisis keywords
     ▼
┌──────────────────┐
│ Crisis Detection │──No──┐
└────┬─────────────┘      │
     │ Yes                │
     ▼                    │
┌──────────────────┐      │
│ Show Crisis      │      │
│ Alert + Emergency│      │
└──────────────────┘      │
                          ▼
                    3. Determine response type
                          │
            ┌─────────────┴─────────────┐
            │                           │
            ▼                           ▼
    ┌──────────────┐          ┌──────────────────┐
    │ Rule-based   │          │   AI Response    │
    │ Quick Reply  │          │  (OpenAI API)    │
    └──────┬───────┘          └────────┬─────────┘
           │                           │
           └───────────┬───────────────┘
                       │
                       ▼ 4. Display response
                 ┌──────────┐
                 │   User   │
                 └──────────┘
```

---

## File Structure & Responsibilities

```
sahayata-mvp/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx               # 🏠 Root layout, metadata, global setup
│   ├── page.tsx                 # 🌐 Landing page with language selection
│   ├── globals.css              # 🎨 Global styles & Tailwind utilities
│   │
│   ├── chat/
│   │   └── page.tsx             # 💬 Chat page wrapper
│   │
│   └── api/                     # 🔌 API Routes (serverless functions)
│       ├── chat/
│       │   └── route.ts         # 🤖 OpenAI integration for AI responses
│       └── resources/
│           └── route.ts         # 📚 Resource fetching & filtering
│
├── components/                   # ⚛️ React Components
│   └── chat/
│       ├── ChatInterface.tsx    # 💬 Main chat component
│       ├── MessageBubble.tsx    # 💭 Message display with urgency
│       ├── QuickReplyButtons.tsx# 🔘 Conversation option buttons
│       └── QuickExitButton.tsx  # 🚨 Emergency exit
│
├── lib/                         # 📚 Utilities & Logic
│   ├── conversationFlows.ts    # 🌳 Rule-based conversation trees
│   ├── crisisKeywords.ts       # ⚠️ Crisis detection keywords
│   └── translations.ts         # 🌍 Multi-language UI text
│
├── data/                        # 📊 Static Data
│   └── resources.ts            # 📖 Resources database (shelters, helplines)
│
├── public/                      # 🖼️ Static Assets
│   └── (images, icons, etc.)
│
└── Configuration Files
    ├── package.json            # 📦 Dependencies
    ├── tsconfig.json           # 🔧 TypeScript config
    ├── tailwind.config.js      # 🎨 Tailwind CSS config
    ├── next.config.js          # ⚙️ Next.js config
    ├── .env.example            # 🔑 Environment variables template
    └── .gitignore              # 🚫 Git ignore rules
```

---

## Technology Stack Details

### Frontend
- **Framework**: Next.js 14 (App Router)
  - Server-side rendering
  - API routes
  - File-based routing
  
- **Language**: TypeScript
  - Type safety
  - Better IDE support
  - Fewer runtime errors

- **Styling**: Tailwind CSS
  - Utility-first CSS
  - Custom color theme
  - Responsive design utilities

- **Icons**: Lucide React
  - Beautiful, consistent icons
  - Lightweight
  - Tree-shakeable

### Backend
- **Runtime**: Node.js 18+
- **Functions**: Serverless (Vercel Functions)
- **AI**: OpenAI API (GPT-4)
  - Chat completions
  - Context-aware responses
  - Multi-language support

### Deployment
- **Hosting**: Vercel
  - Auto-deploy from Git
  - Edge network (global CDN)
  - Serverless functions
  - HTTPS automatic

---

## Key Features Implementation

### 1. Multi-Language Support

```typescript
// Implementation: lib/translations.ts
export const translations = {
  en: { /* English text */ },
  hi: { /* Hindi text */ },
  te: { /* Telugu text */ }
}

// Usage in components:
const t = translations[language]
<p>{t.welcomeMessage}</p>
```

### 2. Conversation Flow Engine

```typescript
// Implementation: lib/conversationFlows.ts
export const conversationFlows = {
  en: {
    welcome: {
      message: "...",
      options: [
        { text: "...", nextStep: "victim_support" }
      ]
    }
  }
}
```

### 3. Crisis Detection

```typescript
// Implementation: components/chat/ChatInterface.tsx
const detectCrisis = (text: string): boolean => {
  const keywords = crisisKeywords[language]
  return keywords.some(keyword => 
    text.toLowerCase().includes(keyword)
  )
}
```

### 4. AI Integration

```typescript
// Implementation: app/api/chat/route.ts
const completion = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [
    { role: 'system', content: systemPrompt },
    ...conversationHistory,
    { role: 'user', content: userMessage }
  ]
})
```

---

## Security & Privacy Implementation

### 1. No Data Storage
- ✅ No database used
- ✅ No localStorage/sessionStorage for conversation history
- ✅ Session data cleared on exit

### 2. Environment Variables
```bash
# Sensitive data in environment variables
OPENAI_API_KEY=sk-xxx  # Never in code
```

### 3. HTTPS
- ✅ Automatic with Vercel
- ✅ All traffic encrypted

### 4. Quick Exit
```typescript
// Clears session and redirects
window.location.replace('https://www.google.com/search?q=weather')
```

---

## Performance Optimizations

### 1. Code Splitting
- Next.js automatically splits code per route
- Components loaded on demand

### 2. Server-Side Rendering
- Initial page render on server
- Faster first contentful paint

### 3. Edge Caching
- Static assets cached on Vercel Edge Network
- Global CDN for fast loading

### 4. Image Optimization
- Next.js automatic image optimization
- Lazy loading for images

---

## API Rate Limits & Costs

### OpenAI API
**Limits**:
- Free tier: Limited requests
- Paid tier: 3,500 requests/minute (GPT-4)

**Costs** (as of Oct 2025):
- GPT-4: $0.03 per 1K tokens (input), $0.06 per 1K tokens (output)
- GPT-3.5-turbo: $0.0015 per 1K tokens (much cheaper)

**Estimated Monthly Cost** (500 conversations):
- Average conversation: 10 messages
- Average message: 100 tokens
- GPT-4: ~$30-50/month
- GPT-3.5-turbo: ~$5-10/month

### Vercel
**Free Tier**:
- 100 GB bandwidth/month
- Unlimited projects
- 100 GB-hours serverless function execution

**More than enough for MVP**

---

## Monitoring & Debugging

### Vercel Dashboard
- Real-time logs
- Function execution time
- Error tracking
- Build logs

### OpenAI Dashboard
- API usage
- Cost tracking
- Rate limits
- Error logs

### Browser DevTools
- Console for client-side errors
- Network tab for API calls
- Application tab for storage

---

## Scalability Considerations

### Current Capacity
- **Concurrent Users**: ~100-500
- **Messages/Day**: ~5,000-10,000
- **Database**: Not needed (stateless)

### To Scale Beyond MVP
1. Add Redis for caching
2. Add rate limiting per IP
3. Use CDN for static assets
4. Consider message queue for high traffic
5. Add load balancer (if self-hosting)

---

## Future Architecture Enhancements

### Phase 2
- [ ] PostgreSQL database (user preferences, not chat history)
- [ ] Admin dashboard (separate app)
- [ ] Analytics integration
- [ ] WhatsApp Business API
- [ ] SMS gateway integration

### Phase 3
- [ ] Real-time features (WebSockets)
- [ ] Live chat with human operators
- [ ] Video call integration
- [ ] Mobile apps (React Native)

---

## Testing Strategy

### Unit Tests (Future)
- Component testing with Jest
- API route testing
- Utility function testing

### Integration Tests (Future)
- End-to-end with Playwright
- User journey testing
- Crisis detection testing

### Manual Testing (MVP)
- Feature checklist
- Cross-browser testing
- Mobile device testing
- Multi-language testing

---

## Common Development Commands

```bash
# Development
npm run dev           # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Run production build locally
npm run lint         # Run ESLint

# Git
git add .            # Stage changes
git commit -m "msg"  # Commit changes
git push            # Push to GitHub

# Vercel
vercel              # Deploy to preview
vercel --prod       # Deploy to production
vercel logs         # View logs
vercel env ls       # List environment variables
```

---

## Troubleshooting Common Issues

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript Errors
```bash
# Check types
npx tsc --noEmit
```

### API Errors
```bash
# Check environment variables
vercel env ls

# View function logs
vercel logs --follow
```

---

## Best Practices Implemented

✅ **Code Organization**: Clear separation of concerns
✅ **Type Safety**: TypeScript throughout
✅ **Accessibility**: Semantic HTML, ARIA labels
✅ **Responsive Design**: Mobile-first approach
✅ **Security**: Environment variables, no data storage
✅ **Performance**: Code splitting, caching
✅ **Error Handling**: Try-catch blocks, user-friendly messages
✅ **Documentation**: Comprehensive docs included

---

## Quick Reference: File Purposes

| File | Purpose |
|------|---------|
| `app/page.tsx` | Landing page with language selection |
| `app/chat/page.tsx` | Chat page wrapper |
| `components/chat/ChatInterface.tsx` | Main chat logic & UI |
| `app/api/chat/route.ts` | AI response handler |
| `app/api/resources/route.ts` | Resource fetching API |
| `lib/conversationFlows.ts` | Rule-based conversation logic |
| `lib/crisisKeywords.ts` | Crisis detection words |
| `lib/translations.ts` | UI text in 3 languages |
| `data/resources.ts` | Database of helplines/resources |

---

This architecture is designed for:
- ✅ Quick deployment
- ✅ Easy maintenance
- ✅ Scalability
- ✅ Security & privacy
- ✅ Multi-language support
- ✅ Cost-effectiveness

**Ready to deploy!** 🚀
