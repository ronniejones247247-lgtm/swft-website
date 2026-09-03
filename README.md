# SWFT Website — swfoamtech.com

Marketing site for SouthWestern Foam Technologies, Belton, TX.

## How it works

- **Stack:** Next.js (App Router) + React + TypeScript, CSS Modules. No CMS — content is edited directly in the code.
- **Hosting:** Vercel. Every push to the `main` branch on GitHub automatically deploys to https://swfoamtech.com — treat a push as "publish to the live site."
- **Quote form:** posts to Formspree (endpoint in `components/Footer/Footer.tsx`); submissions arrive by email.
- **Analytics:** Google Analytics tag in `app/layout.tsx`.

## Where things live

| What | File |
|---|---|
| Homepage sections | `app/page.tsx` (composes components in `components/`) |
| Services page | `app/services/page.tsx` |
| Markets page | `app/markets/page.tsx` |
| About page | `app/about/page.tsx` |
| Contact info + quote form + footer | `components/Footer/Footer.tsx` |
| Foam visualizer | `components/FoamVisualizer/FoamVisualizer.tsx` |
| Photos | `public/photos/` (use descriptive filenames) |

## Working on it

```bash
npm install     # first time only
npm run dev     # local preview at http://localhost:3000
npm run build   # must pass before pushing — Vercel runs the same build
```

## Content rules

- SWFT is ISO 9001 **compliant, not certified** — never word it as "certified."
- Keep company facts (years in business, facility size, coverage) consistent across all pages when updating one.
