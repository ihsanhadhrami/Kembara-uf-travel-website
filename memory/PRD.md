# Kembara UF — Landing Page Demo (PRD)

## Original problem statement
Award-worthy (Awwwards Site-of-the-Day level) marketing landing page for **Kembara UF (UF Travel)**, a Malaysian travel agency in Johor (SSM JM1005380-H). Sells Umrah Private/VIP (flagship), outbound tours (Indonesia — Bromo, Jogja, Malang, Safari Park; Egypt), inbound Malaysia tours, Zam-Zam supplier, Ajwa dates. Malay-first with English mix. Every CTA goes to WhatsApp (`wasap.my/+60182573204/...`). No backend, no forms — pure static demo. Deploy target: Cloudflare Workers Static Assets.

## Stack (chosen by user)
- React (JS) + Tailwind + framer-motion + lenis (built on Emergent's React template)
- Source will be lifted to a separate Vite/TS project for Cloudflare deploy — see `docs/DEPLOY.md`

## Architecture (deep modules)
- `src/lib/whatsapp.js` — `getBookingLink(serviceId, context?)` is the only WhatsApp API in the app
- `src/lib/content.js` — single source of truth (services, destinations, gallery, manifesto, marquee, stats, brand)
- `src/components/*.jsx` — one file per section, each takes minimal props, owns its own markup/state/motion
- `src/components/SmoothScroll.jsx` — Lenis root wrapper, respects `prefers-reduced-motion`

## What's been implemented (2025-12)
- **Design system**: Obsidian Navy anchor (#08101D) with Volcanic Gold (#F59E0B) + Celestial Teal (#14B8A6) accents; Cormorant Garamond display + Plus Jakarta Sans body + Amiri Arabic + JetBrains Mono captions; grain texture; wave-motif signature element
- **Nav**: sticky, transparent → glass on scroll, in-page anchors, mobile menu, WhatsApp CTA
- **Hero**: line-by-line masked reveal, 3D mouse-tilt spotlight image, parallax backdrop, Malay lead, stats row, coordinates
- **Marquee**: slow editorial ribbon (42s), gold/cream/teal mix
- **Manifesto**: 4 numbered chapters with outlined numerals + vertical timeline
- **ServiceGrid**: asymmetric bento — Umrah VIP as 7-col double-height flagship, other 4 services in 2×2
- **DestinationGrid**: 4 region cards with per-card parallax
- **SocialProof**: authentic small-account framing, 6-tile TikTok-style gallery, IG/TikTok follow row
- **BookingCTA**: high-contrast final push with Kaaba-at-night spotlight backdrop, dual CTAs
- **Footer**: SSM registration, WhatsApp + socials, demo notice, wave divider
- **Cloudflare deploy**: `wrangler.jsonc` + `docs/DEPLOY.md` (build/deploy/rollback/custom-domain)

## Prioritized backlog / P0-P2 remaining
- **P1**: Client to swap Unsplash placeholders for real trip photography (labelled slots ready)
- **P1**: WhatsApp click tracking (fbq/gtag) can be added inside `getBookingLink()` without touching any component
- **P2**: Bilingual toggle (MS ↔ EN) — content already structured for it
- **P2**: Booking form pathway for corporate rombongan (currently WhatsApp-only by design)
- **P2**: `wrangler deploy` GitHub Action

## Docs
- `/app/docs/BRAND.md`
- `/app/docs/DECISIONS.md`
- `/app/docs/DEPLOY.md`
- `/app/wrangler.jsonc`
