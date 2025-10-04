# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 business website for "Móveis Planejados São José" - a custom furniture company in São José, Santa Catarina, Brazil. The site is built with the App Router, React Server Components, TypeScript, and Tailwind CSS v4.

**Business Context:** Local furniture business targeting customers in São José, SC. Heavy SEO focus for local search optimization.

## Commands

### Development
```bash
npm run dev          # Start dev server with Turbopack on http://localhost:3000
npm run build        # Production build with Turbopack
npm run start        # Start production server
npm run lint         # Run ESLint
```

### shadcn/ui Components
```bash
npx shadcn@latest add <component-name>   # Add new UI components
```

## Architecture

### Tech Stack
- **Framework:** Next.js 15.5.4 with App Router and React Server Components
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 with CSS variables
- **UI Components:** shadcn/ui (New York style) with Radix UI primitives
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend API (configured to send to alessandrobatisp@gmail.com)
- **Carousel:** Embla Carousel React

### Project Structure

```
app/
├── layout.tsx                    # Root layout with metadata, fonts, WhatsApp button
├── page.tsx                      # Homepage - composes all sections + JSON-LD schema
├── globals.css                   # Tailwind directives + CSS variables
└── api/
    └── send-email/route.ts       # Contact form email API using Resend

components/
├── ui/                           # shadcn/ui components (button, card, form, etc.)
├── header.tsx                    # Navigation header
├── hero.tsx                      # Hero section with CTA
├── services.tsx                  # Services section
├── gallery-option2-split.tsx     # Active gallery implementation (6 projects)
├── gallery.tsx                   # Alternative gallery (not currently used)
├── gallery-option1-hero.tsx      # Alternative gallery (not currently used)
├── gallery-option3-multi.tsx     # Alternative gallery (not currently used)
├── testimonials.tsx              # Customer testimonials
├── contact-progressive.tsx       # Active contact form with progressive enhancement
├── contact.tsx                   # Alternative contact form (not currently used)
├── footer.tsx                    # Footer with contact info
└── whatsapp-button.tsx           # Floating WhatsApp button

lib/
└── utils.ts                      # cn() utility for className merging

public/images/
├── hero-kitchen.jpg              # Hero section image
└── projects/                     # Gallery images (cozinha-ilha, closet-luxo, etc.)
```

### Page Composition

The homepage (`app/page.tsx`) is a single-page marketing site composed of sections:
1. Header (navigation)
2. Hero (main banner with CTA)
3. Services (what they offer)
4. Gallery (6 projects with images)
5. Testimonials (customer reviews)
6. Contact (form using Resend API)
7. Footer
8. WhatsApp floating button (global in layout)

**Important:** The site uses JSON-LD structured data for local business SEO embedded in `page.tsx`.

### SEO Strategy

- **Metadata:** Comprehensive metadata in `app/layout.tsx` with local keywords
- **Schema Markup:** LocalBusiness JSON-LD in `page.tsx` with coordinates, hours, services
- **Image Optimization:** Next.js Image component with descriptive alt text
- **Sitemap & Robots:** `app/sitemap.ts` and `app/robots.txt` configured
- **Google Verification:** Placeholder in metadata (needs real code)

### Email Contact Flow

1. User fills form in `contact-progressive.tsx` (validated with Zod)
2. POST to `/api/send-email` route
3. Route uses Resend API to send formatted HTML email to alessandrobatisp@gmail.com
4. **Environment Variable Required:** `RESEND_API_KEY` must be set in `.env.local`
5. See `SETUP-EMAIL.md` for detailed configuration instructions

### Images

All images are stored locally in `/public/images/` for performance and SEO:
- Hero: `hero-kitchen.jpg` (101KB, priority loading)
- Gallery: 6 images in `projects/` directory (~70-90KB each)
- All images sourced from Unsplash (commercial use allowed)
- See `IMAGENS-SELECIONADAS.md` for image sources and optimization details

### Component Variants

The project has multiple implementations of some components (gallery, contact form). The active versions are imported in `app/page.tsx`:
- **Gallery:** `gallery-option2-split.tsx` (active)
- **Contact:** `contact-progressive.tsx` (active)

Alternative versions exist but are not currently used.

## Configuration Files

- **components.json:** shadcn/ui config (New York style, RSC, CSS variables)
- **Path Aliases:** `@/` maps to root, configured for components, lib, utils, ui, hooks
- **Tailwind:** v4 with CSS variables in `app/globals.css`, neutral base color
- **Icon Library:** Lucide React

## Environment Variables

Required for production:
```
RESEND_API_KEY=re_xxxxx    # Resend API key for contact form emails
```

Create `.env.local` in project root (never commit this file).

## Important Notes

- **Turbopack:** All build/dev commands use `--turbopack` flag
- **Language:** All content is in Brazilian Portuguese (pt-BR)
- **Contact Email:** All form submissions go to alessandrobatisp@gmail.com
- **WhatsApp:** Floating button present globally (number configured in component)
- **Local Business:** Site is optimized for "São José SC" local search queries
- **Image Alt Text:** Must be descriptive and include local keywords for SEO
