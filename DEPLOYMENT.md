# Deployment Guide - Above & Beyond Website

## Pre-Deployment Checklist

Before deploying, complete these tasks:

- [ ] Download and add all stock photos (see `assets/images/stock-photos.md`)
- [ ] Configure Formspree form ID in `contact.html`
- [ ] Generate and add favicon files
- [ ] Compress/optimize all images
- [ ] Update domain references if different from aboveandbeyondny.com
- [ ] Test all pages locally in multiple browsers
- [ ] Verify all links work
- [ ] Test contact form submission
- [ ] Check mobile responsiveness

## Option 1: Netlify (Recommended)

**Why Netlify:**
- Free SSL certificate
- Built-in form handling (alternative to Formspree)
- Automatic deployments from Git
- Global CDN
- Easy custom domain setup

**Steps:**

1. **Create Netlify account** at https://netlify.com

2. **Connect repository:**
   - Click "New site from Git"
   - Connect to your Git repository (GitHub, GitLab, or Bitbucket)
   - Or drag/drop your project folder

3. **Build settings:**
   - Build command: (leave empty for static site)
   - Publish directory: `/` (root)
   - Click "Deploy site"

4. **Custom domain:**
   - Go to Site settings > Domain management
   - Add custom domain (aboveandbeyondny.com)
   - Follow DNS configuration instructions
   - SSL certificate auto-configures

5. **Forms (if using Netlify Forms instead of Formspree):**
   - In `contact.html`, update form tag:
     ```html
     <form name="contact" method="POST" netlify>
     ```
   - Remove Formspree action URL
   - Forms will appear in Netlify dashboard

6. **Test deployment:**
   - Visit your `.netlify.app` URL
   - Test all pages
   - Submit contact form test

---

## Option 2: GitHub Pages

**Why GitHub Pages:**
- Free hosting
- Integrated with GitHub
- HTTPS support
- Simple deployment

**Steps:**

1. **Create GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/above-and-beyond.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Click Save

3. **Custom domain:**
   - Add `CNAME` file to root:
     ```
     aboveandbeyondny.com
     ```
   - Configure DNS:
     - Add A records pointing to GitHub IPs:
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153
     - Add CNAME record: `www` → `YOUR-USERNAME.github.io`
   - In GitHub Pages settings, add custom domain
   - Enable "Enforce HTTPS"

4. **Deploy updates:**
   ```bash
   git add .
   git commit -m "Update message"
   git push
   ```
   - Site updates automatically in ~1 minute

---

## Option 3: Vercel

**Why Vercel:**
- Extremely fast edge network
- Simple deployment
- Free SSL
- Analytics available

**Steps:**

1. **Create Vercel account** at https://vercel.com

2. **Import project:**
   - Click "New Project"
   - Import from Git or upload folder
   - Framework: None (static site)
   - Click Deploy

3. **Custom domain:**
   - Go to Project Settings > Domains
   - Add domain
   - Follow DNS configuration

4. **Deploy updates:**
   - Push to Git (auto-deploys)
   - Or use Vercel CLI:
     ```bash
     npm i -g vercel
     vercel
     ```

---

## Post-Deployment Tasks

### 1. Test Website Thoroughly

- [ ] Visit all 5 pages
- [ ] Click all navigation links
- [ ] Test mobile menu
- [ ] Submit contact form (test submission)
- [ ] Test phone number click-to-call on mobile
- [ ] Check all images load
- [ ] Test on mobile device
- [ ] Test on different browsers

### 2. SEO Setup

**Google Search Console:**
1. Go to https://search.google.com/search-console
2. Add property (your domain)
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://aboveandbeyondny.com/sitemap.xml`

**Google Business Profile:**
1. Create listing at https://business.google.com
2. Add business info, photos, hours
3. Verify business (postcard or phone)
4. Critical for local SEO!

### 3. Performance Testing

Run tests and optimize:

1. **PageSpeed Insights:** https://pagespeed.web.dev/
   - Target: 90+ mobile, 95+ desktop
   - Fix any critical issues

2. **GTmetrix:** https://gtmetrix.com/
   - Check load time and page size
   - Optimize images if needed

3. **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
   - Verify mobile optimization

### 4. Monitor & Maintain

- **Check form submissions** regularly (Formspree or Netlify dashboard)
- **Monitor Google Analytics** (if installed)
- **Update gallery** with real client photos as available
- **Add testimonials** as reviews come in
- **Keep content fresh** - add blog posts or seasonal promotions

---

## DNS Configuration Reference

When setting up custom domain, configure these DNS records:

**For Netlify:**
- Point domain to Netlify's load balancer (provided in dashboard)

**For GitHub Pages:**
- A Records:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- CNAME: `www` → `username.github.io`

**For Vercel:**
- Follow DNS instructions in Vercel dashboard

---

## Support

For deployment issues:
- **Netlify:** https://docs.netlify.com
- **GitHub Pages:** https://docs.github.com/en/pages
- **Vercel:** https://vercel.com/docs

For website updates, contact the website administrator.
