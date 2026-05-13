# CLAUDE.md

Notes for Claude Code working on this repo. Read `AGENTS.md` first for the non-negotiable rules; this file is the tighter operational guide.

## What this repo is

`pavanrathod.com` — a Next.js App Router portfolio. Dark, motion-aware, single-page (for now). MVP is shipped; future work is content swap-in, case studies, and the lab page.

## Project conventions

- **Content lives in `src/data/site.ts`.** Never hardcode user-visible copy in components. If a new field is needed, add it to the type + the data file, then consume.
- **Placeholder-safe content model.** Strings prefixed `PLACEHOLDER` / `PLACEHOLDER-SAFE` are not yet verified. Components must hide raw placeholder strings behind friendlier fallbacks (see `ContactSection` for the `siteData.email` example).
- **No invented facts.** No fake jobs, internships, clients, awards, metrics, real-company names, or production results. Public placeholders only.
- **Truth before polish.** Leave a placeholder when verification is missing rather than guess.

## Motion / accessibility

- Every animated component reads `useReducedMotion()` from `motion/react` and gates animation accordingly.
- There is a global CSS fallback in `globals.css` for users with `prefers-reduced-motion: reduce`.
- Decorative motion elements use `aria-hidden="true"`.
- Every interactive element is a `<button>` or `<a>`. Every section has a heading and an `aria-labelledby` link to its heading id.
- Focus rings are present everywhere (per-component cyan outline + root `:focus-visible` fallback in `globals.css`).

## Dependencies

- Allowed: `motion`, `lucide-react`, `clsx`, `tailwind-merge`, `gsap` (approved — used for hero pin and parallax scrubs only, per PLAN.md Phase 2), Tailwind v4, Next.js, React 19, TypeScript.
- **Forbidden without explicit approval:** `three`, `lenis`, `framer-motion` (we use `motion`), `next-themes`. If you think you need a new dep, stop and ask.

## TypeScript

- `strict: true`. No `any`. No `@ts-ignore` without a comment explaining why.
- `npm run typecheck` (`tsc --noEmit`) must pass before commits.

## Important files

- `src/data/site.ts` — content + types
- `src/app/layout.tsx` — metadata, viewport, skip-to-content, root html
- `src/app/page.tsx` — composes the sections
- `src/components/layout/` — `Container`, `Header`, `Footer`, `MobileNav`, `SectionHeader`
- `src/components/ui/` — `ButtonLink`, `Card`, `SectionBadge`
- `src/components/sections/` — one file per landing section
- `docs/CONTENT_INTAKE.md` — checklist for replacing placeholder data
- `docs/DEPLOYMENT_CHECKLIST.md` — Vercel + GoDaddy deploy guide

## Design tokens

Dark palette defined in docs/design-tokens.md (Phase 1, locked May 13). This file supersedes the old warm palette for the redesign-scrollytelling branch.

### Typography

- **Body / nav / buttons / chips:** Geist Sans (`--font-geist-sans`), weight 400–600.
- **h1 hero "Pavan Rathod":** Instrument Serif (`font-serif`), **italic**, weight 400, `clamp(56px, 9vw, 120px)`, `letter-spacing: -0.01em`, `line-height: 1`.
- **h2 section headings:** Instrument Serif (`font-serif`), **roman**, weight 400, `clamp(36px, 5vw, 64px)`, `letter-spacing: -0.015em`.
- **h3 and smaller:** Geist Sans, weight 500–600.
- **Code window text:** Geist Mono (`font-mono`), only inside the hero code window.

### Rules

- Use the tokens above, not arbitrary hex. New colors require a token + a reason.
- The **hero code window stays dark on purpose** — it's the only dark surface besides the contact CTA panel.
- The contact CTA panel inverts to dark (`#1c1a17` + `#faf7f0` text) to create rhythm against the bone page.
- Don't reintroduce cyan/violet glow effects — the dark-mode design has been replaced.

## Before finishing a task

- Summarize what changed.
- List touched files.
- Run `npm run lint`, `npm run build`, and `npm run typecheck`.
- Call out any placeholder content or follow-up work.
- Never modify files in `private/` unless explicitly asked.
- Never commit `.env*`, raw resume sources, or API keys.
