# Nikhila Sri Harshitha Badam — Personal Portfolio

Modern personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and React Icons.

## Features

- Responsive layout for mobile, tablet, and desktop
- Dark modern UI with animated gradients and glassmorphism
- Sticky navigation with mobile hamburger menu
- Framer Motion section transitions and reveal animations
- Parallax-inspired hero visual and floating blobs
- Accessible reduced motion support
- SEO-ready metadata and favicon placeholder
- Contact form UI with copy email feature

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open the site locally:

```bash
http://localhost:3000
```

## Production

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment

This project is ready for deployment on Vercel. Use the root folder with build command `npm run build`.

## File Structure

- `app/layout.tsx` — global metadata and layout
- `app/page.tsx` — main landing page with sections
- `app/globals.css` — global Tailwind and custom styling
- `components/` — reusable UI components

## Notes

- The portfolio is built using the App Router.
- Animations respect `prefers-reduced-motion`.
- The UI is optimized for Lighthouse performance and accessibility.
