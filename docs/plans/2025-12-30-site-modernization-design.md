# Site Modernization Design

**Date**: 2025-12-30
**Status**: Approved
**Scope**: Complete refresh of all 5 pages with stock photos

## Overview

Transform the Above & Beyond lawn care website from a basic functional design to a fresh, modern aesthetic with:
- Updated typography and color palette
- Glassmorphism card effects
- Professional stock photography from Pexels
- CSS animations and polish
- Full automated implementation via parallel agents

## Agent Architecture

### Parallel Agent Strategy

| Agent | Responsibility | Tools |
|-------|---------------|-------|
| **Photo Scout** | Search Pexels API, evaluate images, download best matches | WebFetch, Bash |
| **Design System** | Create color palette, typography, CSS variables, components | Write, Edit |
| **Page Transformer** | Apply new design system to all 5 HTML pages | Edit, Read |
| **QA Reviewer** | Validate images, check responsive design, test accessibility | Browser, Bash |

### Execution Flow

```
Phase 1 (Parallel):
├── Photo Scout → downloads all images
└── Design System → creates new CSS/design tokens

Phase 2 (Sequential):
└── Page Transformer → applies changes to all pages

Phase 3 (Parallel):
├── QA Reviewer → validates implementation
└── Git commit → saves progress
```

## Design System Specification

### Color Palette (Fresh & Modern)

| Token | Current | New | Usage |
|-------|---------|-----|-------|
| `--primary` | `#2d5016` | `#22c55e` | CTAs, highlights |
| `--primary-dark` | `#4a7729` | `#16a34a` | Hover states |
| `--secondary` | `#1e3a5f` | `#0ea5e9` | Accents |
| `--accent` | `#c41e3a` | `#f97316` | Urgent CTAs |
| `--surface` | `#f8f7f4` | `#f8fafc` | Backgrounds |
| `--glass` | N/A | `rgba(255,255,255,0.7)` | Glassmorphism |

### Typography

| Element | Current | New |
|---------|---------|-----|
| Headings | System default | **Inter** (700, 800 weights) |
| Body | System sans-serif | **Inter** (400, 500 weights) |
| Scale | Basic | Fluid clamp() sizing |

### Component Updates

- **Cards**: `backdrop-filter: blur(10px)`, soft shadows, rounded-2xl
- **Buttons**: Gradient backgrounds, subtle hover lift + glow
- **Hero**: Full-viewport with gradient overlay on photo
- **Sections**: Alternating white/subtle gradient backgrounds
- **Animations**: Fade-in on scroll using Intersection Observer

## Stock Photo Requirements

### Images (15 total)

| Image | Dimensions | Search Terms | Placement |
|-------|------------|--------------|-----------|
| `hero-lawn.jpg` | 1920x1080 | "beautiful green lawn suburban house" | Homepage hero |
| `lawn-1.jpg` | 800x600 | "lawn mowing residential" | Gallery |
| `aeration-1.jpg` | 800x600 | "lawn care grass healthy" | Gallery |
| `cleanup-1.jpg` | 800x600 | "fall leaves yard cleanup" | Gallery |
| `powerwash-1.jpg` | 800x600 | "pressure washing driveway" | Gallery |
| `snow-1.jpg` | 800x600 | "snow removal driveway winter" | Gallery |
| `lights-1.jpg` | 800x600 | "christmas lights house exterior" | Gallery |
| `landscape-1.jpg` | 800x600 | "landscaping garden design" | Gallery |
| `garden-1.jpg` | 800x600 | "mulch garden bed flowers" | Gallery |
| `about-team.jpg` | 1200x800 | "landscaping team workers" | About page |
| `services-hero.jpg` | 1920x600 | "lawn care equipment" | Services header |
| `contact-hero.jpg` | 1920x600 | "suburban neighborhood houses" | Contact header |

### Selection Criteria (Automated)

1. **Resolution**: Minimum 800px width, prefer larger
2. **Color harmony**: Greens, natural tones matching palette
3. **Composition**: Clear subject, good lighting, professional
4. **Relevance**: Match to search intent

**Source**: Pexels API (free, no attribution required)

## Page Transformation Plan

### Homepage (index.html)
- Full-viewport hero with `hero-lawn.jpg` + gradient overlay
- Glassmorphism service cards with hover effects
- "Why Choose Us" section with icon animations
- Service area section refresh
- New CTA buttons with gradients

### Services (services.html)
- New header banner with `services-hero.jpg`
- Service cards with glassmorphism treatment
- Subtle background patterns
- Accordion animations for details

### About (about.html)
- Team photo section with `about-team.jpg`
- Timeline/story section with fade-in animations
- Values in modern card grid
- Owner story with pull-quote styling

### Gallery (gallery.html)
- Grid layout with hover zoom
- Lightbox functionality for full-view
- All 8 gallery images populated

### Contact (contact.html)
- Split layout: form + info card
- `contact-hero.jpg` as subtle background
- Glassmorphism form container
- Enhanced form styling with focus states

### Shared Components
- Header with scroll-triggered shadow
- Footer refresh with gradient accent
- Mobile menu with smooth transitions

## Testing & QA Strategy

### Automated Validation

| Check | Method | Pass Criteria |
|-------|--------|---------------|
| Images load | Browser agent | All 15 images return 200 |
| No broken links | HTML scan | All hrefs resolve |
| Responsive | Viewport tests | 375px, 768px, 1440px |
| Color contrast | A11y check | WCAG AA (4.5:1) |
| Mobile menu | Browser test | Opens/closes correctly |
| CTA buttons | Visual check | Visible, clickable |
| Page load | Performance | < 3s per page |

### Rollback Safety
- All changes on clean git state
- Revert possible with `git checkout .`

## Success Criteria

- [ ] All 15 images downloaded and properly sized
- [ ] New design system applied to all 5 pages
- [ ] Glassmorphism effects working
- [ ] Responsive at all breakpoints
- [ ] All links functional
- [ ] Mobile menu working
- [ ] Page load times acceptable
- [ ] Git commit with changes documented
