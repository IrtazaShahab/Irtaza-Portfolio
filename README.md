# Muhammad Irtaza Shahab — Portfolio

Personal portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Dark theme with purple accent, grid-line aesthetic (chanhdai.com-inspired)
- Pixel-block "IS" monogram logo
- Animated aurora hero with staggered entrance animations
- Scroll-spy navigation with sliding underline + scroll progress bar
- Browser-window project cards with `next/image`
- FAQ accordion, fully responsive, respects `prefers-reduced-motion`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Click **Deploy** — Vercel auto-detects Next.js. Done.

## Notes

- Project screenshots are currently loaded from a remote CDN (configured via `remotePatterns` in `next.config.js`). To self-host, drop your screenshots into `public/` and update the `img` paths in `components/Projects.tsx`.
- The Discord link (`lib/links.ts`) points to a link that only works for the owner's own logged-in account — swap it for a public `discord.com/users/<id>` profile link before sharing widely.
