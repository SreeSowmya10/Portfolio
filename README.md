# Sree Sowmya Gaddam — Reference-Style Portfolio

This version keeps the visual language of the uploaded reference screenshots:

- White / warm-cream background
- Fine dotted grid background
- Floating pill navigation
- Orange active navigation state
- Large editorial typography
- Rounded white cards
- Project sections with left text + right product preview
- Education + technical skills cards
- Marquee/ticker strip
- Small blue cursor follower
- Framer Motion entrance animations
- Responsive mobile navigation
- Next.js 15 + TypeScript + Tailwind CSS v4
- shadcn/ui-compatible component setup
- Vercel deployment configuration

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Production test:

```bash
npm run build
npm start
```

Type check:

```bash
npm run typecheck
```

## Deploy

### Vercel dashboard

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Vercel detects Next.js automatically.
4. Deploy.

### Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

## Personalize

All portfolio content is in:

```text
components/portfolio.tsx
```

The reference design does not require a personal photo, so this version uses a clean `SS` monogram treatment instead of fabricating a photo.

Replace the GitHub placeholder link in `components/portfolio.tsx` with your real GitHub profile before publishing.

Once you use a custom Vercel domain, update the URLs in:

```text
app/layout.tsx
app/robots.ts
app/sitemap.ts
```