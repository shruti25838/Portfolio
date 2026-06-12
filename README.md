# Shruti Sridhar — Portfolio

Personal portfolio website for Shruti Sridhar, an AI/ML engineer based in New York.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: lucide-react + custom SVG icons
- **Images**: next/image (optimized)
- **Fonts**: Bricolage Grotesque, Hanken Grotesk, JetBrains Mono (Google Fonts)

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Deploy to Vercel

Push to a GitHub repository, then import it in [Vercel](https://vercel.com). No special configuration needed — Vercel auto-detects Next.js.

Or use the Vercel CLI:

```bash
npx vercel
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles, CSS variables, animations
│   ├── layout.tsx           # Root layout with SEO metadata & fonts
│   └── page.tsx             # Main page assembling all sections
├── components/
│   ├── sections/            # One component per portfolio section
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Toolkit.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Patents.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   └── ui/                  # Shared UI components
│       ├── Nav.tsx
│       ├── ScrollProgress.tsx
│       ├── CustomCursor.tsx
│       ├── SectionLabel.tsx
│       ├── SectionHeading.tsx
│       ├── Chip.tsx
│       ├── StatCounter.tsx
│       ├── GitHubIcon.tsx
│       └── LinkedInIcon.tsx
├── lib/
│   └── content.ts           # All portfolio content (typed, easy to edit)
└── public/
    └── images/              # Portfolio images
```

## Customization

All content lives in `lib/content.ts` — edit text, links, and data there.

### Placeholders to replace

Search for `TODO` comments across the codebase:

- **Your photo**: Replace `/public/images/about-portrait.png`
- **LinkedIn URL**: Update in `lib/content.ts` → `SOCIAL_LINKS`
- **Résumé URL**: Update in `lib/content.ts` → `SOCIAL_LINKS`
- **Project demo links**: Update BoxBox and CodeMentor AI links in `PROJECTS`
- **Project screenshots**: Replace images in `/public/images/`
- **OG Image**: Add to `app/layout.tsx` metadata

## Design System

- **Palette**: Warm paper (#F7F1E6), cream surface, dark ink, 6 accent colors
- **Typography**: Bricolage Grotesque (headings), Hanken Grotesk (body), JetBrains Mono (code/labels)
- **Motion**: Smooth cubic-bezier(0.16, 1, 0.3, 1) reveals, respects `prefers-reduced-motion`

## License

© 2026 Shruti Sridhar
