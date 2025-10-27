# Vercel Deployment Guide for Sahayata MVP

## Step-by-Step Deployment Instructions

### Prerequisites
1. ✅ GitHub account created
2. ✅ Code pushed to GitHub repository
3. ✅ Vercel account ([Sign up free](https://vercel.com/signup))
4. ✅ OpenAI API key ([Get here](https://platform.openai.com/api-keys))

---

## Option 1: Deploy via Vercel Dashboard (Easiest)

### Step 1: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Sahayata MVP"

# Create main branch
git branch -M main

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/sahayata-mvp.git

# Push to GitHub
git push -u origin main
```

### Step 2: Import Project to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Select your `sahayata-mvp` repository
5. Click "Import"

### Step 3: Configure Project

Vercel will auto-detect Next.js. You'll see:
- **Framework Preset**: Next.js ✅ (auto-detected)
- **Root Directory**: ./ (leave as default)
- **Build Command**: `npm run build` (auto-filled)
- **Output Directory**: `.next` (auto-filled)

Click "Deploy" to continue.

### Step 4: Add Environment Variables

Before the first deployment completes:

1. Go to your project settings → "Environment Variables"
2. Add the following variable:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: `sk-your-actual-openai-api-key`
   - **Environment**: Check all three (Production, Preview, Development)
3. Click "Save"

### Step 5: Redeploy (if needed)

If deployment already completed without env variables:
1. Go to "Deployments" tab
2. Click "Redeploy" on the latest deployment
3. Your app will rebuild with environment variables

### Step 6: Access Your App

Once deployed (takes 2-3 minutes):
- You'll get a URL like: `https://sahayata-mvp.vercel.app`
- Click to open your live app! 🎉

---

## Option 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login

```bash
vercel login
```

Follow the prompts to authenticate.

### Step 3: Deploy

```bash
# From your project directory
cd sahayata-mvp
vercel
```

### Step 4: Follow Prompts

```
? Set up and deploy "~/sahayata-mvp"? [Y/n] y
? Which scope do you want to deploy to? <Your Account>
? Link to existing project? [y/N] n
? What's your project's name? sahayata-mvp
? In which directory is your code located? ./
```

### Step 5: Add Environment Variables

```bash
vercel env add OPENAI_API_KEY
```

When prompted:
- Enter your OpenAI API key
- Select environments: Production, Preview, Development (select all)

### Step 6: Deploy to Production

```bash
vercel --prod
```

---

## Post-Deployment Setup

### 1. Test Your Deployment

Visit your Vercel URL and test:
- ✅ Language selection works
- ✅ Chat interface loads
- ✅ Messages send and receive
- ✅ Quick exit button works
- ✅ Crisis detection triggers
- ✅ Resources can be fetched

### 2. Custom Domain (Optional)

To use your own domain (e.g., `sahayata.org`):

1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (can take up to 48 hours)

### 3. Monitor Usage

**OpenAI API Usage**:
- Dashboard: [platform.openai.com/usage](https://platform.openai.com/usage)
- Set up billing alerts to avoid surprises

**Vercel Analytics** (Optional):
- Enable in project settings for visitor insights
- Free tier: 2,500 data points/month

---

## Continuous Deployment

Once set up, Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request gets a preview URL

To update your app:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

Vercel automatically detects the push and redeploys! ⚡

---

## Environment Variables Management

### View Current Variables
```bash
vercel env ls
```

### Add New Variable
```bash
vercel env add VARIABLE_NAME
```

### Remove Variable
```bash
vercel env rm VARIABLE_NAME
```

### Pull Variables Locally (for development)
```bash
vercel env pull .env.local
```

---

## Troubleshooting

### Build Fails

**Error: "Module not found"**
- Solution: Run `npm install` locally, commit package-lock.json
- Push to GitHub and redeploy

**Error: "OPENAI_API_KEY is not defined"**
- Solution: Add environment variable in Vercel dashboard
- Redeploy after adding

### Runtime Errors

**500 Error on Chat**
- Check OpenAI API key is correct
- Verify API key has available credits
- Check OpenAI API status: [status.openai.com](https://status.openai.com)

**Deployment Success but App Shows Error**
- Check Vercel function logs: Project → Deployments → Click deployment → Functions tab
- Look for error messages

### Performance Issues

**Slow Response Times**
- GPT-4 can be slow; consider using GPT-3.5-turbo for faster responses
- Update `app/api/chat/route.ts`, change model to `gpt-3.5-turbo`

---

## Rollback Deployment

If something goes wrong:

1. Go to Vercel dashboard → Deployments
2. Find a working previous deployment
3. Click "..." menu → "Promote to Production"
4. Previous version is now live instantly

---

## Cost Management

### Vercel Costs
- **Hobby Plan** (Free):
  - 100 GB bandwidth/month
  - Unlimited projects
  - Sufficient for MVP

### OpenAI Costs
- **Estimate for 500 conversations/month**:
  - GPT-4: ~$20-50
  - GPT-3.5-turbo: ~$5-10

**To Reduce Costs**:
1. Use GPT-3.5-turbo instead of GPT-4
2. Reduce `max_tokens` in API calls
3. Implement caching for common responses
4. Set spending limits in OpenAI dashboard

---

## Getting Help

**Vercel Support**:
- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

**OpenAI Support**:
- Documentation: [platform.openai.com/docs](https://platform.openai.com/docs)
- Community: [community.openai.com](https://community.openai.com)

---

## Security Checklist

Before going live:

- [ ] Environment variables are not in code (only in Vercel dashboard)
- [ ] `.env.local` is in `.gitignore`
- [ ] OpenAI API key has spending limits set
- [ ] Crisis detection keywords are comprehensive
- [ ] Emergency contact numbers are correct
- [ ] Quick exit button is tested and works
- [ ] HTTPS is enabled (automatic with Vercel)

---

## Next Steps After Deployment

1. **Test with Real Users**: Get 5-10 people to test the chatbot
2. **Monitor Logs**: Check Vercel function logs for errors
3. **Track API Usage**: Monitor OpenAI dashboard for costs
4. **Gather Feedback**: Note issues and feature requests
5. **Iterate**: Update based on feedback and redeploy

---

🎉 **Congratulations!** Your Sahayata MVP is now live and helping people!

For updates and improvements, just push to GitHub and Vercel will auto-deploy.
