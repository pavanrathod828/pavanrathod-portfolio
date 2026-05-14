# pavanrathod.com — Scrollytelling Redesign

**Living doc.** Update the top section every session so you can pick up after gaps.

---

## STATUS

- **Current phase:** Phase 4 complete. Ready for Phase 5 (fixed UI overlays — progress bar + top nav + identity pill).
- **Last completed:** Phase 4: About section ("ABOUT / NOTE 01") replaced the stub. Single-column centered layout, 3-paragraph body, GSAP scrub parallax on the section header (yPercent 0 → 40 over section traversal). Mobile / reduced-motion render static. `#who` anchor preserved for Phase 3 hero scrub.
- **Next action:** Phase 5 — build the fixed UI overlays (top progress bar with teal→amber gradient, top nav that fades in after hero, identity pill bottom-left). Then Phase 4 continues with Skyways section (parallax #2).

---

## QUICK-PICK BY ENERGY LEVEL

- **5 min:** read this doc, react to locked decisions
- **30 min:** Phase 1 review (Claude writes tokens doc, you read and approve)
- **60–90 min:** Phase 2 (branch + deps) + start Phase 3 (hero scaffolding)
- **Half-day:** Phase 3 done (hero complete, deployed to Vercel preview)

---

## LOCKED DECISIONS

These are settled. Don't re-litigate unless something genuinely changes.

| Decision | Value | Source |
|---|---|---|
| Visual base | Dark (LBT palette: #0a0a0a bg, teal #2aa88a + amber #f0a820 accents) | Pavan, May 13 |
| Typography family | Fraunces (display), Inter (body), JetBrains Mono (meta) | LBT vocabulary |
| Hero approach | Line-led + work-grounded, not name-led | Claude call, accepted |
| Page voice | Considered, less "I" — observational not personal | Pavan, May 13 |
| Anchor project | Skyways (1st, deepest) → pavanrathod.com (2nd) → LBT (3rd) → VidSnapAI (4th, possibly cut) | Pavan, May 13 |
| Mobile strategy | Static reduced-motion treatment, no pinning/scrub on mobile | Pavan, May 13 |
| Smooth-scroll lib | **NOT shipping Lenis** — native scroll only | Claude call, accepted |
| Animation tooling | GSAP + ScrollTrigger for hero pin and parallax scrubs only; motion library for enter-once reveals | Claude call, technical |
| Branch | `redesign-scrollytelling`, no merge to `main` until explicit OK | Brief constraint |
| Live site | `pavanrathod.com` keeps serving `main` until merge | Brief constraint |

---

## OPEN DECISIONS (deferred to the right phase)

These don't need answers now. Each phase will surface them when they matter.

- **Positioning line copy** — the exact words for the hero headline. Phase 3 question.
- **About section depth** — light credentials-only vs. fuller biographical paragraph. Phase 4 question.
- **VidSnapAI inclusion** — keep as 4th project or cut to three. Phase 4 question.
- **Whether to also host LBT at `pavanrathod.com/lbt`** — separate task after redesign ships. Not this session, not this work.

---

## PHASE PLAN

### Phase 0 — Read & decide ✅ DONE
Read the reference HTML, understand patterns, lock strategic decisions. No code.

### Phase 1 — Design tokens (next)
**Deliverable:** a written spec doc (no code) covering:
- Final palette with hex values and intended usage (bg, surface, accent, text)
- Type scale (sizes, weights, line-heights for hero/section/body/meta)
- Spacing scale
- Motion rules: durations, easings, what scrubs vs. fires-once, reduced-motion fallbacks
- Z-index layers (progress bar, identity pill, content)

**Pavan does:** read, push back on anything that feels off, approve.

### Phase 2 — Branch + dependencies
- `git checkout -b redesign-scrollytelling`
- `npm install gsap` (motion stays — covers section reveals; GSAP for hero scrub + parallax only)
- Confirm no Lenis dependency anywhere
- Set up Vercel preview deploys for this branch

**Pavan does:** run the commands or have Claude write them. Push the empty branch so the preview URL exists.

### Phase 3 — Hero
The big deliverable. Translates LBT's pinned hero-to-question scrub into a portfolio hero.

- Pinned section (~150vh)
- Hero layer: eyebrow + line-led headline + subtitle + author block + scroll cue
- Outgoing scrub: hero content blurs out, background scales/parallaxes
- Incoming scrub: section 2 (About/Who) rises from below
- Word-by-word reveal on the headline fires once at ~30% scroll (not scrubbed — matches LBT)
- Reduced-motion fallback: static layout, all elements visible immediately

**Pavan does:** review locally, then on Vercel preview. This is the hardest piece — expect 2 sessions.

### Phase 4 — Sections (one at a time)
In order:
1. **Who** — light section, considered voice, credentials + location
2. **Skyways** (anchor, deepest) — setup, what they needed, decisions made, what was learned
3. **pavanrathod.com** (this site, recursive) — design choices, why dark, why scrollytelling
4. **LBT** — links out to live presentation
5. **VidSnapAI** — only if it earns its place (decision in Phase 4)
6. **How I work** — process/methodology, scroll-revealed
7. **Open to** — what you're seeking
8. **Contact** — closing with strong type

Each section ships independently. Don't try to do them all in one session.

### Phase 5 — Fixed UI overlays
- Top progress bar (teal → amber gradient like LBT)
- Top nav (appears after hero, has dot + name + meta)
- Identity pill (bottom-left, your version — not LBT logo)
- **No timer** (that's presentation-specific)

### Phase 6 — Mobile + reduced-motion
- Static layout, no pinning, no scrub
- All content visible without animation
- Verify on actual iPhone (recruiters open links on phones first)

### Phase 7 — Vercel preview review
- Final desktop pass
- Final mobile pass
- Lighthouse / accessibility audit
- Real-content check (no placeholder copy anywhere)

### Phase 8 — Merge to main
**Only on explicit "merge it" from Pavan.** Squash-merge to `main`, Vercel auto-deploys to pavanrathod.com.

---

## RECOVERY PROTOCOL (if you forget where you left off)

1. Read the **STATUS** block at the top
2. Check the branch: `git status` in `~/Code/pavanrathod-portfolio` — confirm you're on `redesign-scrollytelling`
3. Check what was deployed: open the Vercel preview URL (gets added here after Phase 2)
4. Read the most recent commit message
5. Then ask Claude: "where are we, what's next" — paste this doc's STATUS block

---

## REFERENCE

- **Local repo:** `~/Code/pavanrathod-portfolio`
- **GitHub:** https://github.com/pavanrathod828/pavanrathod-portfolio
- **Live site:** https://pavanrathod.com (serving `main`)
- **Branch for this work:** `redesign-scrollytelling` (created, pushed, tracking origin)
- **Vercel preview URL:** https://pavanrathod-portfolio-27n5k8htj-ipavan828s-projects.vercel.app
- **Latest commit on redesign branch:** 5b7749e (PLAN.md import)
- **LBT reference file (your machine):** `/Users/pavanrathod/LBT/lbt-presentation/index.html`
- **LBT live:** https://pavanrathodcs.github.io/lbt-rider-data/

---

## CONSTRAINTS (from original brief)

- TypeScript strict, no `any`, no `@ts-ignore`
- WCAG AA contrast minimum
- `prefers-reduced-motion` respected throughout
- Real content from `src/data/site.ts` — no placeholders
- Skyways stays truthful: client work, in progress, repo private forever, no link
- Don't break what's live on main

---

## SESSION LOG

Append a one-liner each session so future-you can see the path.

- **May 13, 2026** — Phase 0 done. Reference read. Decisions locked. This plan written.
- **May 13, 2026** — Phase 1 done. docs/design-tokens.md written and locked after one revision round (letter-spacing, line-height, ease-entry curve corrected to match LBT exactly). Commit c1b5ffd.
- **May 13, 2026** — Phase 2 done. Branch redesign-scrollytelling created from main, GSAP ^3.15.0 installed, no Lenis, motion lib confirmed at ^12.38.0, PLAN.md imported to repo root. Commits f11a4e1, 5b7749e. Vercel preview confirmed building cleanly on every commit.
- **___** — _(next session)_

---

## Phase 3 — May 13, 2026

Commits:
- a22cac4 phase 3 prep: sync design tokens into globals.css (full dark palette + spacing/motion/z-index tokens, font swap to Fraunces/Inter/JetBrains Mono, body bg → `var(--bg)`, viewport themeColor → `#0a0a0a`, reduced-motion block matched to spec)
- e24abb8 phase 3: pinned hero with GSAP scrub timeline + About stub

Files:
- Created src/components/hero/Hero.tsx (pinned hero, GSAP ScrollTrigger scrub timeline, word reveal at 30%, matchMedia gate at ≥ 1024px + prefers-reduced-motion: no-preference)
- Created src/components/hero/HeroAbout.tsx (stub `#who` section for Phase 4)
- Modified src/app/page.tsx (mounted `<Hero />` + `<HeroAbout />`, commented out HeroSection, AboutSection, ProjectsSection, SkillsSection, ProcessSection, ContactSection, Header, Footer + their imports — all marked with Phase 4+ / Phase 5 TODO comments)
- Modified src/app/globals.css (Phase 1 token wiring + `.eyebrow`, `.section-title`, `.body-text` utility classes + `.hero-headline`, `.headline-line`, `.word`, `.word-inner` hero classes + static fallback `@media (max-width: 1023px), (prefers-reduced-motion: reduce)`)
- Modified src/app/layout.tsx (Geist/Geist_Mono/Instrument_Serif → Fraunces (axes: opsz, style: normal+italic) / Inter / JetBrains_Mono; skip-link restyled with amber-on-bg)

Headline locked: "Software for the people who actually use it."
Vercel preview: https://pavanrathod-portfolio-27n5k8htj-ipavan828s-projects.vercel.app (will redeploy from latest commit on this branch automatically)

Deviations from spec:
1. **Word reveal animation: `gsap.fromTo` instead of `gsap.to`.** The spec wrote `gsap.to(".word-inner", { yPercent: 0, ... })` paired with CSS `transform: translateY(110%)`. That combination doesn't reliably animate — GSAP doesn't auto-initialize its internal `yPercent` tracking from a CSS `translateY(%)` value, so `to({ yPercent: 0 })` starts from yPercent 0 (default) and animates to 0 (no-op), leaving words stuck at translateY(110%). Fix: `gsap.fromTo(".word-inner", { yPercent: 110 }, { yPercent: 0, duration: 0.9, stagger: 0.06, ease: "power3.out" })`. Same visual outcome, technically correct. CSS `translateY(110%)` retained as pre-mount placeholder so words are hidden before hydration.
2. **layout.tsx Fraunces config omits `weight` array.** Next.js `next/font/google` rejects combining `axes` with an explicit `weight` array — "Axes can only be defined for variable fonts when the weight property is nonexistent or set to `variable`." Omitting `weight` makes Next request the full variable font, which already covers 300–700 + opsz via the variable axes. End result matches design-tokens.md spec ("300/400/500/600/700, opsz axis 9..144").
3. **Commented out Header + Footer in addition to the 6 sections.** Spec said comment out "every other section that currently exists in page.tsx" — strictly the 6 inner sections — but Header/Footer use warm-palette inline-arbitrary Tailwind values and would render visibly broken on the dark canvas. Phase 5 in PLAN.md rebuilds them. Page now renders pure `<Hero />` + `<HeroAbout />` on dark.
4. **Hardcoded headline + eyebrow copy in Hero.tsx**, violating `CLAUDE.md`'s "Content lives in `src/data/site.ts`" rule. Phase 3 spec was explicit about the locked strings and inline structure. Phase 4 can lift them into site.ts if the convention wins.

Verification status:
- ✅ `npm run typecheck` clean (tsc --noEmit, zero errors)
- ✅ `npm run lint` clean (eslint, zero warnings)
- ✅ `npm run build` clean (Next 16.2.6 + Turbopack, 4/4 static pages generated, no warnings)
- ✅ `npm run dev` serves `GET / 200` with full SSR-rendered hero markup, all three font CSS variables wired up, no hydration warnings in the server log
- ⏳ Browser-runtime verification (scroll the pin, watch the word stagger, console clean, resize to < 1024px, prefers-reduced-motion emulation) — must be done on the Vercel preview URL by Pavan; cannot run from this environment.

### Phase 3 hotfix — May 13, 2026

- Commit: 31d1bf1 phase 3 hotfix: word reveal fires on mount, not on 30% scroll
- Issue: headline invisible on initial load — words were triggered at 30% scroll, but by that point the scrub timeline had already begun fading `#hero-content` out, so the headline never got a clean readable moment.
- Fix: replaced the `ScrollTrigger.create({ start: "30% top", once: true, onEnter: () => gsap.fromTo(...) })` block with a plain `gsap.to(".word-inner", { yPercent: 0, duration: 0.9, stagger: 0.06, ease: "power3.out", delay: 0.2 })` called directly inside the existing `gsap.context` so it runs on mount. 0.2s delay keeps the words from competing with the initial paint. Mobile / reduced-motion still handled by the static CSS fallback (`.word-inner { transform: translateY(0) }`) — JS never runs in that branch.
- Note on `gsap.to` vs `gsap.fromTo`: switched back to `gsap.to` per the hotfix spec ("the CSS already sets the start state"). The Phase 3 deviation #1 above flagged a concern that `gsap.to({yPercent:0})` could be a no-op against a stylesheet-set `transform: translateY(110%)` because GSAP doesn't always recover percent units from a computed matrix. If browser verification reveals the words don't actually stagger in, the minimal repair is one line: change `gsap.to(` back to `gsap.fromTo(` with `{ yPercent: 110 }` as the first argument and keep the rest identical.
- Vercel preview: https://pavanrathod-portfolio-27n5k8htj-ipavan828s-projects.vercel.app (will redeploy from `31d1bf1`).
- Repair: gsap.to → gsap.fromTo (Phase 3 deviation #1 was correct; my hotfix spec was wrong). Commit 7a0bb90.

---

## Phase 4 — About section ("ABOUT / NOTE 01") — May 13, 2026

- Replaced `HeroAbout.tsx` stub with full section: parallax heading, 3-paragraph body, meta label
- Mechanic: heading `yPercent: 0 → +40` scrub over section's viewport traversal (background feel — heading lags page)
- Layout: single column, centered, prose max-width 62ch
- Mobile / reduced-motion: static, no ScrollTrigger created (matchMedia gate `(min-width: 1024px) and (prefers-reduced-motion: no-preference)` — same gate as Hero)
- `#who` anchor preserved on the root `<section>` element — Phase 3 hero scrub timeline still animates `.from('#who', ...)` against it
- Last paragraph rendered in Fraunces italic for visual punchline (real italic glyphs per Phase 1 decision, not browser-synthesized)
- CSS variables used: `--font-fraunces`, `--font-inter`, `--font-jetbrains-mono`, `--text`, `--muted`, `--muted-2`, `--line-strong`. Spec referenced `--font-display` and `--font-body` which don't exist in this project — mapped to `--font-fraunces` and `--font-inter` per the existing Phase 1 utility-class pattern. Spec explicitly authorized this adjustment.
- Library discipline: GSAP + ScrollTrigger only. No motion library import in this file (Phase 4 spec called this out — it's one of the two scrub-tied sections; the other is Skyways later).

Commits:
- fb11ec9 feat(about): replace stub with full About section (Phase 4)
- 309ad85 feat(about): add GSAP scrub parallax for section header
- (this commit) chore(plan): log Phase 4 + bump status

Verification (what I can run from here):
- ✅ `npm run typecheck` clean
- ✅ `npm run lint` clean
- ✅ `npm run build` clean (4/4 static pages, no warnings)
- ✅ `npm run dev` + curl: `GET / 200`, `#who` anchor present, all four `.about-*` classes rendered, 8 `word-inner` spans still present (no Phase 3 regression)
- ⏳ Browser-runtime: hero pin + word stagger (regression check), About header parallax visible, < 1024px and reduced-motion fall back to static — all to be confirmed on Vercel preview by Pavan.

---

## Hero `gsap.context` scope fix — May 13, 2026

- **Symptom (Vercel preview):** hero headline invisible at scroll=0 — only the eyebrow rendered. DevTools console showed three GSAP errors: `Element not found: #hero-stage`, `GSAP target #who not found`, plus a third matching target-not-found. The word-reveal tween never effectively ran, so `.word-inner` stayed at the CSS-default `transform: translateY(110%)` and the 8 words sat clipped below their `.word` frames.
- **Root cause:** `gsap.context(callback, stageRef)` in `src/components/hero/Hero.tsx` scoped every selector inside the callback to `stageRef.current.querySelectorAll(...)`. Two problems:
  1. `#hero-stage` IS `stageRef.current` — not a descendant of itself. GSAP couldn't find it.
  2. `#who` lives in a sibling component (`HeroAbout.tsx`) — it's the next `<section>` after `#hero-stage`, not inside it. Outside the scope entirely.
  
  The earlier word-reveal hotfix (`gsap.to` → `gsap.fromTo`) made the word stagger *appear* to work in some environments because GSAP can resolve `.word-inner` against the scope (those nodes ARE descendants of `stageRef`), but the broken scrub timeline meant the hero pin + parallax + about-rise never actually engaged. The hotfix masked the symptom on the words but left the scope bug latent.
- **Fix:** dropped the second argument to `gsap.context` (commit `cee1e9c`). Selector strings now resolve at document level via `document.querySelectorAll`. `#hero-stage`, `#hero-pin`, `#hero-bg`, `#hero-content`, `#who`, and `.word-inner` all resolve correctly. `stageRef` and `ref={stageRef}` retained on the `<section>` — currently unused after the scope drop but left in place for future use.
- **Latent-bug note:** this was a Phase 3 bug introduced when the scope argument was added; neither the original Phase 3 commit nor the two hotfixes caught it because the visible regression (invisible headline) only manifested once the production-build CSS load order on Vercel made the timing tight. Local dev hid it via slightly different stylesheet timing.

Commits:
- cee1e9c fix(hero): drop gsap.context scope so #hero-stage and #who resolve at document level
- (this commit) chore(plan): log Hero gsap.context scope fix

Verification: typecheck / lint / build clean. SSR returns `HTTP 200`, all 8 `<span class="word-inner">` spans render. Browser-runtime confirmation pending on Vercel preview.

---

## Hero diagnostic pass — May 13, 2026

After the `gsap.context` scope fix deployed, Safari preview still showed the hero headline invisible at scroll=0 (only the eyebrow visible). Couldn't tell from a clean SSR check whether the bug was browser cache, a different runtime failure, or something else. This commit instruments the hero with diagnostics + a defensive reorder so the next browser test produces actionable data instead of silence.

Changes (Hero.tsx useEffect body only — JSX, imports, refs untouched):
- `[Hero] mount` log fires unconditionally before the matchMedia gate, with: matchMedia result, `window.innerWidth`, reduced-motion state, `.word-inner` count, presence of `#hero-stage` and `#who`.
- Explicit log + early return when matchMedia gate fails (so we know the gate fired vs JS not running at all).
- Explicit `console.error` + early return if `.word-inner` count is 0 at mount.
- **Reordered inside `gsap.context`:** word reveal `gsap.fromTo` runs FIRST, scrub timeline second. The prior order put the scrub first, so any ScrollTrigger throw would abort before the word reveal could apply.
- Added `gsap.set(".word-inner", { yPercent: 110 })` immediately before the fromTo — explicit start state, no longer relying on CSS to be the GSAP baseline.
- Whole context callback wrapped in `try/catch` with `console.error` on failure.
- `onStart` and `onComplete` callbacks on the word-reveal tween log to console — so we'll see "tween started" and "tween complete" if it runs to completion.
- Final `[Hero] all animations registered` log inside the try block confirms reaching the end of setup.

Commits:
- fabd7a0 phase 4 debug: defensive hero useEffect + console diagnostics
- (this commit) phase 4 debug: PLAN.md log for hero diagnostic pass

Verification: `npx tsc --noEmit` clean, `npm run lint` clean, `npm run build` clean (4/4 static pages). Console.log calls don't trip the build. Browser console output to be checked on next Vercel preview load.
