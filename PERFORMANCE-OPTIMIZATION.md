# Performance Optimization Checklist

## Image Optimization

### Before Deployment:
1. **Compress all images** using TinyPNG, ImageOptim, or Squoosh
   - Target: <200KB per image for photos
   - Target: <50KB for icons/graphics

2. **Convert to WebP format** (with PNG/JPG fallback)
   - Use online tools or `cwebp` command
   - Example: `cwebp -q 80 hero-lawn.jpg -o hero-lawn.webp`

3. **Create responsive sizes** for hero images
   - Mobile: 768px width
   - Tablet: 1024px width
   - Desktop: 1920px width

### Images to Optimize:
- [ ] Logo (logo.png) - compress, create multiple sizes
- [ ] Hero background (hero-lawn.jpg)
- [ ] Service page images (6 images)
- [ ] Gallery images (8 images)

## CSS/JS Optimization

### Before Deployment:
1. **Minify CSS** (if using custom.css extensively)
   - Use online CSS minifier or build tool

2. **Minify JavaScript** (main.js)
   - Use UglifyJS or Terser

3. **Consider CDN alternatives** to Tailwind CDN
   - Extract only used Tailwind classes
   - Generate custom build (optional for advanced users)

## Hosting Recommendations

### Netlify (Recommended):
- Automatic HTTPS
- Global CDN
- Forms integration
- Deploy via Git

### GitHub Pages:
- Free hosting
- Custom domain support
- HTTPS via GitHub

### Vercel:
- Fast edge network
- Easy deployment
- Analytics available

## Post-Deployment:

1. **Test with PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Target: 90+ mobile score, 95+ desktop score

2. **Test with GTmetrix**
   - https://gtmetrix.com/
   - Check load time, total page size

3. **Verify on mobile devices**
   - Real device testing
   - Check load times on 3G/4G

## Ongoing:
- Monitor form submissions (Formspree dashboard)
- Update images as real client photos become available
- Add Google Analytics (optional)
