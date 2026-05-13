# pavanrathod.com

The source for **pavanrathod.com** — a premium animated personal portfolio for Pavan Rathod.

The site is a polished, dark, motion-aware single-page experience built with Next.js App Router, TypeScript, and Tailwind CSS. Content lives in a typed data file (`src/data/site.ts`) and is intentionally placeholder-safe until verified resume, LinkedIn, GitHub, and project data are added.

## Stack

- **Framework:** Next.js (App Router, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Motion:** `motion` (Motion / Framer Motion's successor)
- **Icons:** `lucide-react`
- **Deployment target:** Vercel
- **Domain:** pavanrathod.com via GoDaddy DNS

## Local development

```bash
npm install
npm run dev       # next dev (http://localhost:3000)
npm run lint      # eslint
npm run build     # next build
npm run typecheck # tsc --noEmit
```

Run all three checks before committing anything non-trivial.

## Repository layout

```
src/
  app/
    layout.tsx        # metadata, viewport, skip-to-content, root <html>
    page.tsx          # composes Header + sections + Footer
    globals.css       # Tailwind v4 entry, reduced-motion + focus rules
  components/
    layout/
      Header.tsx      # fixed top nav (server component)
      MobileNav.tsx   # sliding panel + focus trap (client component)
      Footer.tsx
      Container.tsx   # max-w-7xl + horizontal padding wrapper
      SectionHeader.tsx
    sections/         # Hero, About, Projects, Skills, Process, Contact
    ui/
      ButtonLink.tsx
      Card.tsx        # soft-glass card with optional hover-lift
      SectionBadge.tsx
  data/
    site.ts           # the single source of truth for content
  lib/
    utils.ts          # cn() helper (clsx + tailwind-merge)
public/
  resume.pdf          # placeholder PDF (replace with real resume)
docs/
  CONTENT_INTAKE.md   # how to swap placeholder data for real content
  DEPLOYMENT_CHECKLIST.md
AGENTS.md             # non-negotiable rules for AI agents on this repo
CLAUDE.md             # Claude Code conventions
```

## Conventions

- **Content lives in `src/data/site.ts`**, never hardcoded in components. See `docs/CONTENT_INTAKE.md` for how to add real content.
- **Placeholder-safe by default.** User-visible strings starting with `PLACEHOLDER` or `PLACEHOLDER-SAFE` mean "needs verification." Components mask or fall back when they see that prefix.
- **`prefers-reduced-motion` is respected everywhere.** Every animated component reads `useReducedMotion()` from `motion/react` and gates animation. There's also a global CSS fallback in `globals.css`.
- **No invented facts.** No fake jobs, internships, clients, awards, metrics, or production results. See `AGENTS.md`.
- **No heavy deps.** No `three`, `gsap`, `lenis`, `framer-motion`, or `next-themes`. The site uses `motion` only.

## Deployment

See `docs/DEPLOYMENT_CHECKLIST.md` for the full Vercel + GoDaddy + DNS walkthrough. Short version:

1. `git push origin main`
2. Import the repo in Vercel as a Next.js project (no env vars required for the MVP).
3. Add `pavanrathod.com` and `www.pavanrathod.com` in **Settings → Domains** and copy the DNS records Vercel shows.
4. In GoDaddy DNS, replace the parked-page records with the A and CNAME Vercel provided.
5. Run the smoke tests in the checklist.

## Adding real content

See `docs/CONTENT_INTAKE.md` for the checklist. The short version: never commit raw exports, never invent facts, and update `src/data/site.ts` first — components consume that file.

## License

Personal portfolio. All rights reserved.
