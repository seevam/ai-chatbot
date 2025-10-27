# 🚀 Quick Start Guide

Get Sahayata MVP up and running in 5 minutes!

## Prerequisites Checklist

Before starting, make sure you have:

- [ ] Node.js 18+ installed ([Download](https://nodejs.org))
- [ ] Git installed ([Download](https://git-scm.com))
- [ ] GitHub account ([Sign up](https://github.com/signup))
- [ ] Vercel account ([Sign up](https://vercel.com/signup))
- [ ] OpenAI API key ([Get here](https://platform.openai.com/api-keys))

---

## 5-Minute Setup

### 1️⃣ Create GitHub Repository (1 min)

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `sahayata-mvp`
3. Keep it **Private** for now
4. Click "Create repository"

### 2️⃣ Upload Code to GitHub (2 mins)

```bash
# Navigate to your project folder
cd sahayata-mvp

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repo
git remote add origin https://github.com/YOUR_USERNAME/sahayata-mvp.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3️⃣ Deploy to Vercel (2 mins)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your `sahayata-mvp` repo
4. Click "Import"
5. Add environment variable:
   - Name: `OPENAI_API_KEY`
   - Value: Your OpenAI API key (starts with `sk-`)
6. Click "Deploy"

**Done!** ✅ Your app will be live in ~2 minutes at `https://sahayata-mvp.vercel.app`

---

## Local Development Setup

Want to run locally first?

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.example .env.local

# 3. Edit .env.local and add your OpenAI API key
# OPENAI_API_KEY=sk-your-key-here

# 4. Run development server
npm run dev

# 5. Open http://localhost:3000
```

---

## Testing Your Deployment

Once deployed, test these features:

1. **Language Selection**
   - Select Telugu/Hindi/English
   - Should redirect to chat interface

2. **Chat Functionality**
   - Send a test message
   - Should get AI response
   - Try crisis keywords like "help me" → should show emergency numbers

3. **Quick Exit Button**
   - Click red button in top-right
   - Should redirect to safe website

4. **Resources**
   - Select "I'm experiencing domestic violence"
   - Then "Find local resources"
   - Should display resources list

5. **Multi-language**
   - Switch language in chat header
   - Interface text should change

---

## Common Issues & Fixes

### "Module not found" error
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build fails on Vercel
- Make sure `package.json` is committed to GitHub
- Check you added environment variable correctly
- Try redeploying

### AI not responding
- Verify OpenAI API key is correct
- Check you have credits in OpenAI account
- Check Vercel function logs for errors

### Chat UI not loading
- Clear browser cache
- Try incognito/private window
- Check browser console for errors (F12)

---

## Getting OpenAI API Key

1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up / Log in
3. Click on your profile (top-right) → "View API keys"
4. Click "Create new secret key"
5. Copy the key (starts with `sk-`)
6. **Important**: Add payment method to avoid rate limits

### Setting Spending Limits

1. Go to Settings → Billing
2. Set monthly budget (e.g., $50)
3. Add email alert at 75% usage

---

## Project Structure Overview

```
sahayata-mvp/
│
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── chat/         # AI chat endpoint
│   │   └── resources/    # Resources API
│   ├── chat/             # Chat page
│   ├── page.tsx          # Landing page
│   └── layout.tsx        # Root layout
│
├── components/            # React components
│   └── chat/             # Chat UI components
│
├── lib/                   # Utility functions & data
│   ├── conversationFlows.ts  # Chat flows
│   ├── crisisKeywords.ts     # Crisis detection
│   └── translations.ts       # Language translations
│
├── data/                  # Static data
│   └── resources.ts      # Resources database
│
└── public/               # Static files
```

---

## Customization Quick Reference

### Change Colors
Edit `tailwind.config.js` → `colors` section

### Add Resources
Edit `data/resources.ts` → add new entries to array

### Modify Chat Flows
Edit `lib/conversationFlows.ts` → update conversation steps

### Add Crisis Keywords
Edit `lib/crisisKeywords.ts` → add to keyword arrays

### Change AI Behavior
Edit `app/api/chat/route.ts` → modify system prompt

---

## Next Steps

After deployment:

1. ✅ Test all features thoroughly
2. 📝 Customize resources for your region
3. 🎨 Add your logo/branding
4. 👥 Get 5-10 people to test
5. 📊 Monitor OpenAI usage and costs
6. 🔄 Iterate based on feedback

---

## Support & Resources

- 📖 Full README: `README.md`
- 🚀 Deployment Guide: `DEPLOYMENT.md`
- 💬 Create GitHub issue for bugs
- 📧 Contact: [your-email]

---

## Emergency Contacts (India)

Always have these ready:

- **Women Helpline**: 181 (24/7)
- **Emergency**: 112
- **National Commission for Women**: 7827-170-170
- **Childline**: 1098

---

**Remember**: This is a support tool, not a substitute for professional help. Always prioritize user safety! 💜

---

Made with ❤️ for social impact
