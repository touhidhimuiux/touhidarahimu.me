# 🚀 Vercel Deployment Guide

This guide will help you deploy your portfolio to Vercel in just a few minutes.

## Prerequisites

- GitHub Account (for version control)
- Vercel Account (sign up at [vercel.com](https://vercel.com))
- Git installed on your local machine

## Step 1: Prepare Your Project for Git

If you haven't already initialized a git repository:

```bash
git init
git add .
git commit -m "Initial commit - ready for deployment"
```

## Step 2: Push to GitHub

1. Create a new repository on [GitHub](https://github.com/new)
2. Follow GitHub's instructions to push your code:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy from your project directory:
```bash
vercel
```

3. Follow the prompts:
   - Link to existing project? → `No` (first time)
   - Set project name → `portfolioAcademic` (or your preferred name)
   - Which scope? → Select your personal account
   - Detected framework? → `Vite` (should auto-detect)
   - Build command? → Press enter (uses vercel.json default)

### Option B: Vercel Dashboard (Web UI)

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure project settings:
   - **Framework**: Vite (auto-detected)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `dist` (auto-filled)
5. Add Environment Variables:
   - If using EmailJS, add:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`
   - View `.env.example` for reference
6. Click "Deploy"

## Step 4: Configure Environment Variables

1. In Vercel dashboard, go to Settings → Environment Variables
2. Add your environment variables:
   - Copy values from your local `.env.local`
   - Paste into Vercel's environment variables section
3. Save and redeploy if needed

## Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions from your domain provider

## After Deployment

Your site will be available at:
- **Default**: `https://your-project-name.vercel.app`
- **Custom Domain**: `https://yourdomain.com` (after configuration)

### Continuous Deployment

Every time you push to the `main` branch on GitHub, Vercel will automatically rebuild and deploy your site. Check deployment status in the Vercel dashboard.

## Troubleshooting

### Build Failures
- Check build logs in Vercel dashboard: Settings → Deployments
- Ensure all environment variables are set
- Verify `npm run build` works locally

### Environment Variables Not Working
- Ensure variables start with `VITE_` (required for Vite)
- Redeploy after adding variables
- Check browser console for undefined variables

### Performance Issues
- Check bundle size: `npm run build` output shows size
- Large images should be optimized before upload
- Use Vercel's Analytics to monitor performance

### DNS/Domain Issues
- Allow 24-48 hours for DNS propagation
- Verify DNS settings in your domain provider
- Test with `vercel.app` domain first

## Project Structure Optimized for Vercel

✅ `.gitignore` - Ensures clean deployments
✅ `vercel.json` - Optimized Vercel configuration
✅ `vite.config.ts` - Production-ready build settings
✅ `.env.example` - Template for environment variables
✅ `dist/` - Build output (auto-generated, ignored in git)

## Quick Commands Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Preview production build locally
npm preview

# Deploy with Vercel CLI
vercel

# Deploy with production flag
vercel --prod

# View deployment logs
vercel logs
```

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)

---

**Happy deploying! 🎉**
