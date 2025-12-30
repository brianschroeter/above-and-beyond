# Quick Start Guide

## For Tyler (Website Owner)

### Accessing Form Submissions

1. Go to https://formspree.io
2. Log in with your account
3. Click on "Above & Beyond" form
4. View all quote requests

### Updating Content

Contact your website administrator for:
- Adding new services
- Updating photos
- Changing contact information
- Adding testimonials

### Domain & Hosting

- **Domain:** aboveandbeyondny.com (update with actual domain)
- **Hosting:** [Netlify/GitHub Pages/Vercel]
- **SSL:** Automatic (HTTPS enabled)

---

## For Website Administrator

### Making Updates

1. Edit HTML files directly
2. Test locally: `open index.html`
3. Commit changes: `git add . && git commit -m "Update description"`
4. Push to deploy: `git push`

### Adding Photos

1. Optimize images first (TinyPNG.com)
2. Add to `assets/images/` or `assets/images/gallery/`
3. Update HTML to reference new image
4. Commit and push

### Monitoring

- **Forms:** Formspree dashboard
- **Analytics:** Google Analytics (if installed)
- **Search:** Google Search Console
- **Errors:** Check browser console

### Common Tasks

**Update phone number:**
- Search all files for `631-484-3915`
- Replace with new number
- Commit and push

**Update email:**
- Search for `info@aboveandbeyondny.com`
- Replace in all HTML files
- Update Formspree configuration

**Add testimonial:**
- Edit `about.html` or create new section on `index.html`
- Follow existing HTML structure
- Include customer name and service

---

## Support Resources

- **HTML/CSS Help:** https://developer.mozilla.org/
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Formspree Docs:** https://help.formspree.io/
- **Google Search Console:** https://search.google.com/search-console

## File Locations

- **Homepage:** `index.html`
- **Services:** `services.html`
- **About:** `about.html`
- **Gallery:** `gallery.html`
- **Contact:** `contact.html`
- **Styles:** `assets/css/custom.css`
- **JavaScript:** `assets/js/main.js`
- **Images:** `assets/images/`
