# Decision 001 — Hero / Above-the-fold

**Date:** 2026-05-23
**Status:** Approved — ready to build
**Owner:** Pavan Rathod
**Source chat:** Claude Project "Portfolio Refresh" / Hero chat
**References:** `docs/BRAND.md` §1, §2, §5; `docs/PORTFOLIO_PLAN.md` §3 (Option B family, hybrid variant)

---

## Strategic angle (decided)

Hybrid: **Work-anchored headline with operator → researcher trajectory carried by the subhead.**

The hero serves three audiences in parallel without choosing between them:
- **MS faculty readers** (primary priority): the trajectory and the named technical domains set up the research story.
- **Big Tech recruiters scanning for Summer 2027 internships** (secondary priority): "Open to Summer 2027 SWE internships" is the keyword they're filtering for.
- **Quant firms** (tertiary): the `CS + FINANCE` eyebrow surfaces the combo without diluting the headline.

PhD optionality preserved by not committing to it in copy.

---

## Final copy

**Eyebrow** (small caps or monospace, muted):
```
PAVAN RATHOD · CS + FINANCE · CSULB '28 · LOS ANGELES
```

**Headline** (largest type):
```
I build retrieval and attribution systems for D2C brands.
```

**Subhead** (one step down from headline, muted-foreground):
```
Software Engineer Intern at HypeOn AI. Open to Summer 2027 SWE internships. Applying to MS CS (AI/ML) for Fall 2028.
```

**Primary CTA:** `See the work` → `/work/hypeon`

**Secondary CTA:** `View on GitHub` → `https://github.com/pavanrathod828`
- *Swap to* `Research direction` → `/research` *once `/research` ships in Week 6 of PORTFOLIO_PLAN.md.*

---

## Implementation spec

### Layout
- Single section, viewport height max (`min-h-[80vh]`, not `100vh` — leave room for the next section to peek and invite scroll).
- Two-column on `md:` and up: text block left, photo right.
- One-column on mobile: photo above eyebrow, then text block, then CTAs.
- Photo: real headshot, ~96px circular on mobile, ~200px circular on desktop. No AI-generated avatar.

### shadcn components
- `Button` with `variant="default"` for primary CTA.
- `Button` with `variant="outline"` for secondary CTA.
- No `Card` — the hero is not a card.
- Layout: raw `div` with Tailwind flex/grid primitives.

### Typography (approximate; match design system)
- Eyebrow: `text-xs md:text-sm font-mono tracking-wider uppercase text-muted-foreground`
- Headline: `text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight`
- Subhead: `text-lg md:text-xl text-muted-foreground leading-relaxed`
- CTAs: default Button sizing

### Single allowed motion effect
**MagicUI `AnimatedGradientText` (or equivalent) on the word `retrieval` only.**
- Runs once on mount, ~800ms sweep.
- No loop, no infinite animation.
- Respects `prefers-reduced-motion` — falls back to static color.

No other animation in the hero. No staggered word reveal. No fade-in on the headline. The text must be present and readable on first paint (LCP-critical).

### Mobile behavior (<768px)
- Eyebrow may drop `LOS ANGELES` first if it wraps to two lines.
- Headline max 2 lines — tighten letter-spacing before reducing font size if wrapping to 3.
- Subhead clauses break onto separate lines (sentence-per-line is acceptable mobile behavior).
- CTAs stack vertically (`flex-col gap-3`), primary on top.
- Photo above text block, not below.

---

## What NOT to do (per BRAND.md anti-patterns)

- No `Hi, I'm Pavan 👋` framing.
- No emoji in eyebrow, headline, subhead, or CTAs.
- No typewriter animation on the headline.
- No 3D blob, WebGL, or particle background.
- No "Download Resume" as primary CTA. Resume lives in nav and Contact section.
- No skill bars, no proficiency percentages.
- No staggered word-by-word reveal on page load.

---

## Acceptance criteria

The hero ships when all of the following are true:
1. Name, school + year, current role, and Summer 2027 availability all visible above the fold on a 1366×768 desktop viewport without scroll.
2. Name and headline visible above the fold on a 375×667 mobile viewport without scroll.
3. LCP < 2.0s on simulated 4G (Lighthouse mobile).
4. Lighthouse Accessibility = 100. Performance ≥ 95.
5. `prefers-reduced-motion: reduce` disables the gradient sweep on `retrieval`.
6. Both CTAs have visible focus rings (keyboard tab test).
7. Primary CTA links to a real `/work/hypeon` page (even if it's a stub with one paragraph at first ship — better a real page in progress than a broken link).
8. Cross-browser check: latest Chrome, Safari, Firefox.

---

## Open follow-ups (not blocking this ship)

- `/work/hypeon` page content (separate decision doc — to be written in next chat).
- `/research` page content (Week 6 in plan).
- Photo asset — needs a real headshot. If not available, ship hero text-only first and add photo when ready. Do not block on this.

---

## Pressure-test results (for traceability)

Tested against:
- 7-second recruiter scan → pass
- MS admissions reader → pass (caveat: `/research` must ship by Week 6)
- F-1 filter → pass (no sponsorship triggers in hero copy)
- BRAND.md anti-patterns → pass
- AI-portfolio cliché check → pass

Single action item from pressure test: secondary CTA points to GitHub until `/research` ships. Already reflected in spec above.
