# Eva International Spa - Deployment Guide

## Repository
**GitHub:** https://github.com/beyondlifefunerals-ctrl/evainternationalspa.git

---

## Quick Deploy Options

### Option 1: Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import the `evainternationalspa` repository
4. Vercel auto-detects Vite settings - just click **"Deploy"**
5. Your site will be live in ~1 minute!

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click **"Add new site"** → **"Import an existing project"**
3. Select the `evainternationalspa` repository
4. Build settings (auto-detected):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**

---

## Manual Deployment

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Steps
```bash
# 1. Clone the repository
git clone https://github.com/beyondlifefunerals-ctrl/evainternationalspa.git

# 2. Navigate to project folder
cd evainternationalspa

# 3. Install dependencies
npm install

# 4. Build for production
npm run build

# 5. The 'dist' folder contains your production files
# Upload the contents of 'dist' to any static hosting provider
```

---

## Custom Domain Setup

### On Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### On Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS as instructed

---

## Environment Variables
**None required** - This is a static frontend application.

---

## Tech Stack
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui

---

## Support
For any issues, contact the development team or refer to the original Lovable project.
