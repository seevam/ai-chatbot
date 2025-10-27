# 📋 Deployment Checklist

Use this checklist to deploy Sahayata MVP step-by-step.

---

## ✅ Pre-Deployment Checklist

### Account Setup
- [ ] GitHub account created
- [ ] Vercel account created (free)
- [ ] OpenAI account created
- [ ] OpenAI API key obtained
- [ ] Payment method added to OpenAI (to avoid rate limits)
- [ ] Spending limit set in OpenAI dashboard ($50 recommended)

### Local Setup (Optional, for testing first)
- [ ] Node.js 18+ installed
- [ ] Git installed
- [ ] Code downloaded/extracted
- [ ] Dependencies installed (`npm install`)
- [ ] `.env.local` created with API key
- [ ] Local server tested (`npm run dev`)
- [ ] All features tested locally

---

## 📤 GitHub Upload Checklist

### Repository Creation
- [ ] Logged into GitHub
- [ ] New repository created: `sahayata-mvp`
- [ ] Set to Private (initially)
- [ ] Repository URL copied

### Code Upload
Open terminal in project folder:

- [ ] Run: `git init`
- [ ] Run: `git add .`
- [ ] Run: `git commit -m "Initial commit: Sahayata MVP"`
- [ ] Run: `git branch -M main`
- [ ] Run: `git remote add origin <YOUR-REPO-URL>`
- [ ] Run: `git push -u origin main`
- [ ] Verify: Check GitHub - all files uploaded

---

## 🚀 Vercel Deployment Checklist

### Initial Setup
- [ ] Logged into Vercel
- [ ] Clicked "New Project"
- [ ] Selected "Import Git Repository"
- [ ] Connected GitHub account
- [ ] Found and selected `sahayata-mvp` repository

### Configuration
- [ ] Framework detected: Next.js ✓
- [ ] Root directory: `./` ✓
- [ ] Build command: `npm run build` ✓
- [ ] Output directory: `.next` ✓

### Environment Variables
- [ ] Clicked "Environment Variables"
- [ ] Added variable name: `OPENAI_API_KEY`
- [ ] Pasted API key value (starts with `sk-`)
- [ ] Selected all environments: Production, Preview, Development
- [ ] Clicked "Add"

### Deployment
- [ ] Clicked "Deploy" button
- [ ] Waited 2-3 minutes for build
- [ ] Deployment succeeded ✓
- [ ] Production URL generated (e.g., `sahayata-mvp.vercel.app`)

---

## 🧪 Testing Checklist

### Visit Your Live Site
URL: `https://sahayata-mvp.vercel.app` (yours will be different)

### Landing Page Tests
- [ ] Page loads correctly
- [ ] Logo/header displays
- [ ] Privacy features listed
- [ ] All 3 language buttons visible:
  - [ ] తెలుగు (Telugu)
  - [ ] हिंदी (Hindi)
  - [ ] English
- [ ] Emergency numbers shown at bottom

### Chat Interface Tests
- [ ] Click Telugu → redirects to chat
- [ ] Chat interface loads
- [ ] Welcome message appears
- [ ] Quick reply buttons work
- [ ] Language switcher works (top-right)

### Message Tests
- [ ] Type a message → send button works
- [ ] Bot responds within 5-10 seconds
- [ ] Message appears in chat bubble
- [ ] Timestamp shows on message
- [ ] Can scroll through conversation

### Crisis Detection Test
- [ ] Type: "I need help urgently"
- [ ] Crisis banner appears (red)
- [ ] Emergency numbers display
- [ ] Crisis indicator shows (red dot)

### Resource Tests
- [ ] Click "Find local resources"
- [ ] Resources list appears
- [ ] Shows phone numbers
- [ ] Shows addresses
- [ ] Multiple resources displayed

### Quick Exit Test
- [ ] Click red "Quick Exit" button (top-right)
- [ ] Page redirects immediately
- [ ] Redirects to safe site (Google)
- [ ] Session cleared (go back → fresh start)

### Multi-Language Tests
- [ ] Switch to Hindi
- [ ] Interface text changes
- [ ] Welcome message in Hindi
- [ ] Quick replies in Hindi
- [ ] Switch to Telugu
- [ ] Everything works in Telugu

### Mobile Tests
- [ ] Open on phone/tablet
- [ ] Layout responsive
- [ ] Buttons accessible
- [ ] Text readable
- [ ] Quick exit visible

---

## 🐛 Troubleshooting Checklist

### If Build Fails
- [ ] Check Vercel logs for error
- [ ] Verify `package.json` pushed to GitHub
- [ ] Check environment variable added
- [ ] Try redeploying
- [ ] Check Node.js version (18+)

### If Chat Doesn't Work
- [ ] Verify OpenAI API key is correct
- [ ] Check OpenAI account has credits
- [ ] Look at Vercel function logs
- [ ] Check browser console (F12)
- [ ] Try incognito/private window

### If Resources Don't Load
- [ ] Check browser console for errors
- [ ] Verify API route exists: `/api/resources`
- [ ] Check Vercel function logs
- [ ] Try hard refresh (Ctrl+F5)

### If AI Responses Are Slow
- [ ] OpenAI servers may be busy (normal)
- [ ] Consider switching to GPT-3.5-turbo
- [ ] Check OpenAI status page

---

## 📊 Post-Deployment Checklist

### Monitoring Setup
- [ ] OpenAI dashboard bookmarked
- [ ] Vercel dashboard bookmarked
- [ ] Email alerts configured for OpenAI spending
- [ ] Vercel analytics enabled (optional)

### Documentation
- [ ] Production URL saved
- [ ] Deployment date noted
- [ ] Team members notified
- [ ] Testing plan created

### User Testing
- [ ] 5-10 test users identified
- [ ] Feedback form created (Google Forms)
- [ ] Testing instructions prepared
- [ ] Feedback collection period set (1-2 weeks)

### Partnership Preparation
- [ ] NGO contact list ready
- [ ] Demo prepared for partners
- [ ] QR codes generated (future)
- [ ] Workshop materials planned

---

## 🔒 Security Checklist

### Before Going Live
- [ ] `.env.local` NOT in GitHub (check `.gitignore`)
- [ ] API key only in Vercel dashboard
- [ ] No sensitive data in code
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] OpenAI spending limit set
- [ ] Rate limiting considered (future)

### Privacy Compliance
- [ ] No user data stored
- [ ] Session clearing works
- [ ] Quick exit tested
- [ ] Privacy policy drafted (future)
- [ ] Terms of service drafted (future)

---

## 💰 Cost Monitoring Checklist

### Weekly Checks
- [ ] Check OpenAI usage dashboard
- [ ] Current spend: $______
- [ ] Projected monthly: $______
- [ ] Within budget? Yes/No

### Monthly Review
- [ ] Total OpenAI cost: $______
- [ ] Number of conversations: ______
- [ ] Cost per conversation: $______
- [ ] Vercel bandwidth used: _____ GB
- [ ] Optimization needed? Yes/No

---

## 📈 Success Metrics Checklist

### Week 1
- [ ] Total visits: ______
- [ ] Conversations started: ______
- [ ] Crisis detections: ______
- [ ] Quick exits used: ______
- [ ] Resources viewed: ______

### Month 1
- [ ] Target: 500 conversations
- [ ] Actual: ______ conversations
- [ ] User satisfaction: ______%
- [ ] Crisis escalations: ______
- [ ] NGO partnerships: ______

---

## 🔄 Continuous Deployment Checklist

### For Each Update
- [ ] Changes tested locally
- [ ] Code committed: `git commit -m "description"`
- [ ] Pushed to GitHub: `git push`
- [ ] Auto-deploy triggered in Vercel
- [ ] Deployment succeeded
- [ ] Changes verified on live site
- [ ] Team notified of changes

---

## 📞 Emergency Contacts Verification

### Double-Check These Numbers Work
- [ ] 181 - Women Helpline (call to verify)
- [ ] 112 - Emergency Services
- [ ] 7827-170-170 - NCW
- [ ] 1098 - Childline

### State Resources (Andhra Pradesh)
- [ ] Verify Disha police numbers
- [ ] Verify Bharosa center contacts
- [ ] Verify shelter contacts
- [ ] Update if any changed

---

## ✅ Final Go-Live Checklist

Before announcing to public:
- [ ] All tests passed
- [ ] 5+ people tested successfully
- [ ] Critical bugs fixed
- [ ] Resources verified with NGOs
- [ ] Legal disclaimer added
- [ ] Privacy policy ready
- [ ] Social media ready (if applicable)
- [ ] NGO partners informed
- [ ] Monitoring systems active
- [ ] Support plan in place

---

## 🎉 Launch Day Checklist

- [ ] Final smoke test
- [ ] Team ready for monitoring
- [ ] Social media posts scheduled
- [ ] NGO partners notified
- [ ] QR codes distributed (if ready)
- [ ] Feedback channels open
- [ ] Celebrate! 🎊

---

## 📝 Notes Section

**Deployment Date**: _________________

**Production URL**: _________________

**Team Members**:
- _________________
- _________________
- _________________

**Partner NGOs**:
- _________________
- _________________
- _________________

**Issues/Concerns**:
- _________________
- _________________
- _________________

**Next Steps**:
- _________________
- _________________
- _________________

---

## 🆘 Need Help?

**Documentation**:
- [ ] Read `QUICKSTART.md`
- [ ] Read `DEPLOYMENT.md`
- [ ] Read `README.md`

**Support**:
- [ ] Check Vercel docs
- [ ] Check OpenAI docs
- [ ] Create GitHub issue
- [ ] Contact team

---

**🎯 When all boxes are checked, you're LIVE!** 🚀

Good luck with your deployment! You're doing important work. 💜
