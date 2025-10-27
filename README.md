# Sahayata MVP - Domestic Violence Support Platform

> Anonymous, multilingual AI-powered chatbot providing support to domestic violence victims in India

## 🌟 Features

- **100% Anonymous** - No login, no registration, no data storage
- **Multi-language Support** - Telugu, Hindi, and English
- **Hybrid Conversation** - Rule-based flows + AI-powered responses
- **Crisis Detection** - Automatic keyword detection with emergency escalation
- **Resource Database** - Comprehensive local resources (shelters, legal aid, helplines)
- **Quick Exit** - Emergency exit button for user safety
- **Mobile-First Design** - Responsive and accessible on all devices
- **Privacy-First** - Session clearing and no data retention

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI GPT-4
- **Deployment**: Vercel
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18+ installed
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))
- GitHub account
- Vercel account (free tier works)

## 🛠️ Local Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd sahayata-mvp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your OpenAI API key:

```env
OPENAI_API_KEY=sk-your-actual-api-key-here
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deploy to Vercel

### Method 1: Deploy via GitHub (Recommended)

1. **Push your code to GitHub**:

```bash
git init
git add .
git commit -m "Initial commit - Sahayata MVP"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Add Environment Variables in Vercel**:
   - In Vercel project settings → Environment Variables
   - Add: `OPENAI_API_KEY` with your API key
   - Add to: Production, Preview, and Development

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your app
   - You'll get a URL like `https://sahayata-mvp.vercel.app`

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts and add environment variables when asked
```

## 📁 Project Structure

```
sahayata-mvp/
├── app/
│   ├── api/
│   │   ├── chat/          # AI chat endpoint
│   │   └── resources/     # Resources API
│   ├── chat/              # Chat page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/
│   └── chat/              # Chat interface components
├── data/
│   └── resources.ts       # Resources database
├── lib/
│   ├── conversationFlows.ts  # Rule-based conversation flows
│   ├── crisisKeywords.ts     # Crisis detection keywords
│   └── translations.ts       # Multi-language translations
├── public/                # Static assets
├── .env.example           # Environment variables template
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Configuration

### Adding New Resources

Edit `data/resources.ts` to add new shelters, helplines, or support services:

```typescript
{
  id: 'unique-id',
  name: 'Resource Name',
  category: 'shelter' | 'helpline' | 'legal' | 'medical' | 'counseling' | 'police',
  contact: 'Phone number',
  address: 'Full address',
  description: 'Description of services',
  state: 'andhra-pradesh',
  city: 'City name',
  isNational: false,
  available24x7: true,
  languages: ['Telugu', 'English', 'Hindi'],
}
```

### Modifying Conversation Flows

Edit `lib/conversationFlows.ts` to customize the chatbot's rule-based responses in each language.

### Adding Crisis Keywords

Edit `lib/crisisKeywords.ts` to add more crisis detection keywords in Telugu, Hindi, or English.

### Customizing Translations

Edit `lib/translations.ts` to modify UI text translations.

## 🔒 Security & Privacy

- **No User Data Storage**: No conversation history or personal information is stored
- **Session Clearing**: Sessions are cleared automatically
- **Quick Exit**: Emergency exit button redirects to safe website
- **HTTPS**: All traffic encrypted (handled by Vercel)
- **API Keys**: Stored securely in environment variables

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { ... },  // Main brand color
  safe: { ... },     // Success/safe indicators
  warning: { ... },  // Warning indicators
  danger: { ... },   // Crisis/danger indicators
}
```

### Modifying AI Behavior

Edit `app/api/chat/route.ts` to customize the AI system prompt and behavior.

## 📊 Monitoring & Analytics

For production deployment, consider adding:
- Error monitoring (Sentry)
- Analytics (privacy-focused like Plausible)
- API usage monitoring (OpenAI dashboard)

## 🧪 Testing

```bash
# Run linter
npm run lint

# Build for production
npm run build

# Run production build locally
npm run start
```

## 💰 Cost Estimates

**OpenAI API Costs** (for 500 conversations/month):
- GPT-4: ~$20-50/month
- Can switch to GPT-3.5-turbo for lower costs (~$5-10/month)

**Vercel Hosting**: Free tier sufficient for MVP

## 🔄 Future Enhancements (Phase 2+)

- [ ] WhatsApp integration
- [ ] Voice response capability
- [ ] Admin dashboard
- [ ] Advanced analytics
- [ ] More languages (Tamil, Kannada, Bengali)
- [ ] SMS chatbot
- [ ] NGO portal

## 📞 Emergency Contacts

- **Women Helpline**: 181
- **Emergency Services**: 112
- **National Commission for Women**: 7827-170-170

## 📝 License

This project is created for social impact. Please use responsibly.

## 🤝 Contributing

To contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Support

For questions or issues:
- Open a GitHub issue
- Contact: [Your email]

---

**Important**: This is a support tool and not a substitute for professional help. Always prioritize user safety and encourage contacting emergency services in crisis situations.
