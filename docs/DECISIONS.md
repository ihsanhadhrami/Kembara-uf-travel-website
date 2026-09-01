# Architecture Decisions

## Design system (Prompt 1)

**Palette.** Anchor is **Obsidian Navy `#08101D`** — deep enough to read like Madinah night sky over the Nabawi minarets, but tinted-warm enough to sit under Bromo sunrise imagery without going cold. Two accent colors: **Volcanic Gold `#F59E0B`** (dawn light on the Kaaba, sunrise on the caldera, the same warmth in a jar of Ajwa dates) and **Celestial Teal `#14B8A6`** (the UF logo's own note, echoed in wave motifs). Cream `#F5EFE6` for text so nothing ever reads as pure white on pure black — this deliberately dodges the "near-black with a neon accent" AI-slop pattern the brief warns against, and the terracotta/cream default too. The single "gold on navy with a teal thread" system unifies the sacred and the adventurous without ever splitting the page into two moods.

**Type.** Display: **Cormorant Garamond** — a restrained late-Renaissance serif with true italics that reads editorial rather than corporate, and has enough calligraphic weight to sit under a Nabawi photo without shouting. Body: **Plus Jakarta Sans** — a clean modern grotesque with tight tracking that keeps Malay diacritics legible. Decorative Arabic: **Amiri**. Micro-caption: **JetBrains Mono** for coordinates, dates, badges — the "field notes" texture.

**Signature move.** A subtle wave/bird motif echoing the real UF logo, deployed once in three places: the logo mark itself (Nav + Footer), a small hand-drawn wave under the hero's floating spotlight image, and the wave divider above the footer. Not scattered — deliberate. Never used as a background pattern.

## Motion (baked in)

- **framer-motion** for scroll-reveals and micro-interactions.
- **Lenis** momentum smooth scrolling, mounted once at `App.js` root via `SmoothScroll`.
- Hero signature moment: **line-by-line masked reveal** on load (three tracks: "Jom Umrah / Private/VIP / bersama Kami.").
- 3D **mouse-tilt spotlight** on the hero image (springs, `preserve-3d` perspective).
- **Parallax** on backdrop imagery + destination card images (`useScroll` + `useTransform`).
- One **slow editorial marquee** (42s duration, gold + cream mix).
- All motion respects `prefers-reduced-motion`.

## Service grid — asymmetric

Umrah VIP occupies a 7-of-12-column flagship card (double-height on desktop), with a gold badge and highlight bullets. The other four services (Outbound, Inbound, Zam-Zam, Ajwa) live in a 2×2 grid at 5 columns. This visually enforces that Umrah is the flagship without needing to spell it out — matches the brief's requirement.

## Placeholders

Prompt kit said "no real IG/TikTok scrapes." Client chose Unsplash/Pexels stock imagery evoking Makkah/Madinah, Bromo, Egypt Pyramids, waterfalls, and Safari Park — treated deliberately (clipped frames, gradient shrouds, spotlight tilt), never as raw stock hero images. Every image tile carries a labelled caption so it's obvious where real client photography will replace it.

## WhatsApp module

`src/lib/whatsapp.js` exposes only `getBookingLink(serviceId, context?)`. Every CTA on the site goes through it. Phone-number formatting, `wasap.my` URL shape, and Malay-first message templating are hidden. Adding a new service is a one-line edit to `TEMPLATES`.

## Self-critique pass

Reviewed top-to-bottom after first build. Strengthened the section that felt quietest: **BookingCTA** originally had one line and one button. Now it uses the Kaaba-at-night photo as a spotlight background (respectfully — heavy navy overlay so it never reads as decoration), an Arabic-set inline ornament, and *two* CTAs (Umrah VIP + general services). Also added a stat/trust row under the hero — this is a real business asking a real client to trust them with a pilgrimage; credibility is more valuable than another decorative element.
