# pavanrathod.com — Scrollytelling Redesign

**Living doc.** Update the top section every session so you can pick up after gaps.

---

## STATUS

- **Current phase:** Phase 9 — PR open, awaiting review/merge.
- **Last completed:** Phase 9 — pre-merge parity audit + PR. Rebuilt `public/resume.pdf` (64 KB, May 18) added so `hasResume` resolves to `true` and Resume links go live across nav + Contact. Audit-blocking LinkedIn URL discrepancy resolved: the dashed-id URL `linkedin.com/in/pavan-rathod-64b0b7254/` was replaced with the confirmed-live custom-handle URL `https://www.linkedin.com/in/pavanrathod828` in all 4 occurrences (1 in `ContactSection.tsx`, 3 in `src/data/site.ts`). Zero stale references remain. PR #1 opened: `redesign-scrollytelling` → `main`. Vercel preview deployment built green for the PR. Branch HEAD `007a568`.
- **Next action:** Pavan reviews the PR on the Vercel preview (desktop + mobile + Lighthouse/a11y). On explicit "merge it" → squash-merge via GitHub UI. Vercel auto-deploys to pavanrathod.com on green main.

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

> Updated 2026-05-18. The original Phase-0 plan called for Skills, Process, fixed UI overlays, and a mobile-pass phase. Implementation diverged — Skills got replaced by the Now section's stack strip, Process was cut, the scrub-budget closed at 3 (hero pin + About parallax + Skyways header), mobile/reduced-motion handling is baked into every section's `matchMedia` gate rather than being its own pass. The list below is the actual roadmap going forward.

### Phase 0 — Read & decide ✅ DONE
LBT reference read end-to-end, locked decisions table written, no code.

### Phase 1 — Design tokens ✅ DONE
`docs/design-tokens.md` written + locked after one revision round (letter-spacing, line-height, ease-entry curve corrected to match LBT exactly). Commits: c1b5ffd.

### Phase 2 — Branch + dependencies ✅ DONE
`redesign-scrollytelling` branch created, GSAP installed (^3.15.0), motion ^12.38.0 confirmed, no Lenis, PLAN.md + CLAUDE.md cleaned of warm-palette contradictions. Vercel preview live. Commits: f11a4e1, 5b7749e, 87b02b1, 795c253, dde1e7d, d08b6db.

### Phase 3 — Hero (pinned + word stagger) ✅ DONE
GSAP ScrollTrigger pin (~150vh), `.from('#who')` rise, word-by-word reveal on hero headline. Includes the SSR-safe visibility fix (CSS-default visible, `useIsoLayoutEffect` hides + reveals pre-paint, catch fallback resets to visible). Commits: a22cac4, e24abb8, 4167d18, 31d1bf1, 3d3bbbe, 7a0bb90, 21a822f, cee1e9c, 2554fa0, fabd7a0, 5d3973d, 23edb8e, 400b16e.

### Phase 4 — About / "Who" ✅ DONE
HeroAbout replaced with parallax-scrub heading, three-paragraph observational body, italic Fraunces punchline. `#who` anchor preserved (Phase 3 hero scrub references it). Commits: fb11ec9, 309ad85, 68bbee5.

### Phase 5 — Skyways (anchor project) ✅ DONE
Text-led, header scrub parallax (3rd and final scrub budget), graceful figure fallback (later removed in Phase 6 revision), teal live link to https://skyways-hotel.vercel.app. Commits: fd72d20, d0a5c3e, 69cb845, 5000c93.

### Phase 6 — Project sections (Portfolio + LBT) ✅ DONE
Two new sections after Skyways. Introduced `src/lib/useSectionReveal.ts` — SSR-safe motion-library imperative reveal hook. Phase 6 revision (2026-05-18): cut figures from all three project sections, trimmed copy to 2 paragraphs, added mono spec lines, bumped title clamp, alternating teal/amber italic title accents + matching punchline color, top hairlines, tighter spacing. Commits: 4307fd9, 0548095, a93f2a1, 8f9ffc3.

### Phase 7 — Now section + stack/credentials strip ✅ DONE
`NowSection.tsx` mounted between HeroAbout and Skyways. Current role at HypeOn (Software Engineer Intern, SF), one-paragraph body, italic Fraunces punchline, two-line mono stack/credentials strip at the close. Amber title accent on "HypeOn" + amber punchline. Skills section is intentionally cut from the redesign — the stack strip replaces it. Commits: 98e21a0.

### Phase 8 — Site chrome (nav + contact + footer) ✅ DONE
- `SiteNav.tsx` — fixed top, dark glass-pill treatment (`--overlay-glass` + backdrop blur), hidden while the pinned hero is on screen (scroll listener compares `scrollY` to 60% of viewport height inside a `useIsoLayoutEffect`), fades in once past. JetBrains Mono wordmark "Pavan Rathod" left, Inter links right (About / Now / Work / Contact / Resume conditional). Mobile (<1024px) collapses to a `<button aria-expanded>` toggle dropping a vertical list; Escape closes. Reduced-motion strips the transitions. SSR-safe: default visible (no-JS users see the nav).
- `ContactSection.tsx` — `#contact` after LBT, mirrors the Phase-6-revision pattern with the `useSectionReveal` hook. Meta `CONTACT / LET'S TALK`, Fraunces title "Open to what's *next*." with teal italic on "next", one-line body, 4-link row (mailto + LinkedIn + GitHub + Resume) styled like the project teal links with `ArrowUpRight` icons. When `hasResume` is false the row renders a muted italic "Resume — coming soon" inert span instead.
- `SiteFooter.tsx` — slim chrome below main: small muted link row (Email / LinkedIn / GitHub / Resume conditional) + `© 2026 Pavan Rathod · Built with Next.js, deployed on Vercel` mono credit. No reveal animation — always visible.
- **Resume link conditional behavior:** build-time `existsSync(public/resume.pdf)` check in `page.tsx` flips a `hasResume` boolean propagated as a prop to nav/contact/footer. Re-deploy auto-detects when the real PDF is added; no code change needed.
- **Cleanup A:** `NowSection.tsx` stack/credentials strip swapped `<strong>` → `<span>` on the leading labels (semantic, not emphatic content). Visual identical.
- **Cleanup B:** `SkywaysSection.tsx` converted from `<motion.p whileInView initial={{opacity:0}}>` pattern to the shared `useSectionReveal` hook with `data-reveal` attributes. GSAP header scrub preserved verbatim (the 3rd-and-final scrub in the budget). All five animated sections (HeroAbout, Now, Skyways, Portfolio, LBT) and the new Contact section now share the same SSR-safe reveal architecture — **zero inline `opacity:0` anywhere in the SSR HTML**, confirmed by grep.
- Commits: 5c61c03.

**Still cut from the original Phase 0 plan** (do not re-introduce without explicit revisit):
- Skills section — replaced by the Now stack strip.
- Process / "How I work" section — dropped.
- Fixed UI overlays (progress bar, identity pill, timer) — out of scope.
- Mobile / reduced-motion as a discrete phase — already handled per-section.

### Phase 9 — Pre-merge parity audit + merge to main (only remaining)
- **Replace the deleted `public/resume.pdf`** with the rebuilt résumé before merge — until then, all three Resume links ship in their inert/omitted state. The build-time `existsSync` check is wired and ready; the moment a real PDF is dropped back into `public/`, the next deploy lights the links up automatically (no code change needed).
- Full desktop pass on the Vercel preview, top to bottom.
- Full mobile pass on real iPhone (recruiters open links on phones first).
- Nav: verify hide-during-hero / show-after-hero on real scroll, mobile menu open/close + Escape behavior + focus, anchor links jump to the right sections.
- Lighthouse / accessibility audit (keyboard nav, focus rings, color contrast on every section, alt text where applicable, aria-expanded behavior on the mobile menu).
- Real-content audit — every visible string is final, no placeholder copy anywhere.
- Squash-merge to `main` **only on explicit "merge it" from Pavan**. Vercel auto-deploys to pavanrathod.com on green main.

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

---

## Hero visibility architecture fix — May 17, 2026

- 23edb8e fix(hero): make word reveal a progressive enhancement — headline visible by default, revert-safe. New HEAD on `redesign-scrollytelling`. CSS default for `.word-inner` flipped to `translateY(0)` (visible); GSAP hides + reveals just-in-time via `useIsoLayoutEffect` (synchronous pre-paint set). Catch block now falls back to `gsap.set(".word-inner", { yPercent: 0 })` so any setup exception still leaves the headline readable. The `.word-inner` override inside the `(max-width: 1023px), (prefers-reduced-motion: reduce)` media query was removed (redundant now); the `#hero-stage` / `#hero-pin` / `#hero-content` layout-collapse rules in the same block were kept (still load-bearing for mobile/reduced-motion to avoid 50vh of dead space below the hero).

---

## Phase 5 — Skyways anchor project — May 17, 2026

- fd72d20 feat(skyways): add anchor project section — text-led, header scrub parallax, live site link. New HEAD on `redesign-scrollytelling`. New component `src/components/skyways/SkywaysSection.tsx` mounted in `page.tsx` after `<HeroAbout />`. Text-led single-column layout matching About (max 62ch prose). Meta label `WORK / PROJECT 01`, Fraunces section heading "Skyways" with GSAP scrub parallax (yPercent 0→+40, scrub: 1, matchMedia-gated ≥ 1024px no-reduced-motion — 3rd and final scrub budget per locked decisions). Three observational body paragraphs (problem → decision → outcome), italic Fraunces punchline "A booking the hotel actually keeps.", screenshot figure (`/public/skyways/skyways-live.jpg` — Pavan will drop in actual file later, container has `--ink` background + 16:10 aspect ratio so missing file degrades gracefully), and a teal outbound link to https://skyways-hotel.vercel.app with lucide `ArrowUpRight` icon. Enter-once reveals (body, punchline, figure, link) use `motion/react` `whileInView` with `useReducedMotion()` honored. Image swapped from plain `<img>` to `next/image` to keep lint clean. Tokens used: existing `--font-fraunces`, `--font-inter`, `--font-jetbrains-mono`, `--text`, `--muted`, `--muted-2`, `--line`, `--line-strong`, `--teal`, `--teal-soft`, `--ink`, `--dur-fast`, `--ease-standard`. No new tokens introduced.
- 69cb845 fix(skyways): graceful image fallback, constrain figure width, wording tweak. (1) `next/image` now has `onError` handler that flips an `imageFailed` useState; when true the figure renders a `.skyways-shot-fallback` dark panel with centered JetBrains Mono uppercase caption "Skyways Hotel — live site" in `--muted-2` instead of a broken-image glyph. Real image appears automatically once `/public/skyways/skyways-live.jpg` is added. (2) `.skyways-shot` max-width tightened from 960px to 880px so the figure no longer overflows the prose column visually — reads as a deliberate framed media element. `sizes` attribute updated to match. (3) Third body paragraph swapped "honest about what the place is" → "honest about what it offers" — points at the hotel, not at the writing. Header scrub, meta label, heading, punchline, live-site link, and motion reveals all untouched.

---

## Phase 6 — pavanrathod.com + LBT project sections — May 17, 2026

- 4307fd9 feat(phase6): add pavanrathod.com and LBT project sections. Two new components mounted in `page.tsx` after `<SkywaysSection />`: `src/components/portfolio/PortfolioSection.tsx` (id `#portfolio`, meta `WORK / PROJECT 02`, italic-word title "The one project a recruiter *always* opens.", problem→decision→outcome body, italic Fraunces punchline "A portfolio's hardest decision is what to leave off…", `/public/portfolio/portfolio-live.jpg` figure with graceful fallback caption "pavanrathod.com — the live portfolio", teal "View the source on GitHub" link → github.com/pavanrathod828/pavanrathod-portfolio), and `src/components/lbt/LbtSection.tsx` (id `#lbt`, meta `WORK / PROJECT 03`, italic-word title "What it costs to ride *anonymously*.", three-paragraph body covering the ENGR 350 ethics origin / TAP fare anonymity / four concrete fixes, italic punchline "Anonymity shouldn't be something only the full-fare rider can afford.", `/public/lbt/lbt-live.jpg` figure with fallback caption "LBT & The Rider's Data — the live presentation", teal "Explore the live project" link → pavanrathodcs.github.io/lbt-rider-data). Image files are not yet in `/public/` — fallback panels render cleanly until Pavan drops them in.
- Reveal architecture: **new shared hook `src/lib/useSectionReveal.ts`** is the SSR-safe reveal pattern Phase 6 needed. Plain HTML SSRs visible by default (CSS-default state, no `opacity: 0` baked into the served markup). After mount, `useIsoLayoutEffect` gates on `matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)')` — if it fails or JS never hydrates, content stays visible. When it passes, the hook hides marked `[data-reveal]` descendants synchronously before paint, attaches a single `IntersectionObserver` to the section with `rootMargin: "-80px"`, and on intersection animates them in via motion's imperative `animate()` with 0.7s `power3.out` and an 80ms cascade. Observer disconnects after first fire (once-reveal). 16 `data-reveal` attributes across the two new sections, all confirmed empty of `style="..."` in the SSR'd HTML — confirms the SSR-safe contract.
- No GSAP, no ScrollTrigger, no scrub. Scrub budget remains fully spent (hero pin + About + Skyways).
- New CSS family `.project-*` mirrors Skyways visual treatment (same 8rem padding, 62ch prose column, 880px figure max-width, JetBrains Mono meta, Fraunces title with italic-word inline via `<em>`, italic Fraunces punchline, dark-ink figure fallback, teal link with ArrowUpRight icon and hover lift). Separate from `.skyways-*` so Skyways is untouched; future cleanup could collapse them.
- Skyways component itself was not modified — Phase 6 spec said to mirror it, not refactor it. Its `<motion.p whileInView>` pattern still SSR-renders `opacity: 0` markup; this is a known divergence between Skyways and the new SSR-safe pattern. Acceptable for now because the hero-fix is well above and Skyways content is short enough to recover quickly, but worth a follow-up commit later to bring Skyways onto the same `useSectionReveal` hook.

Verification: `npx tsc --noEmit` clean, `npm run lint` clean, `npm run build` clean (4/4 static pages, no warnings). Dev SSR returns `HTTP 200` (~33KB, up from ~24KB for the new content), all three section IDs present (`#skyways`, `#portfolio`, `#lbt`), 16 `data-reveal` attrs in HTML with no inline `style="opacity:0"` on any of them, both `<em>always</em>` and `<em>anonymously</em>` rendered.

---

## Phase 6 revision — tighten + bolder accents — May 18, 2026

- a93f2a1 refactor(phase6): tighten project sections, cut figures, bolder accent treatment. Net −101 lines across 4 files. **Figures cut everywhere** — `<motion.figure>` / `<figure data-reveal>` markup removed from all three sections, along with their `next/image` imports, `useState(imageFailed)` calls, `/public/skyways/...` `/public/portfolio/...` `/public/lbt/...` references, and the `.skyways-shot` / `.skyways-shot-img` / `.skyways-shot-fallback` / `.project-shot` / `.project-shot-img` / `.project-shot-fallback` CSS rules. No dangling refs in components or stylesheet (grep verified). **Spec lines added** — new mono technical-metadata line directly under each meta label and above each title: Skyways `MARKETING SITE · DIRECT BOOKING · LIVE`, Portfolio `NEXT.JS 16 · TYPESCRIPT · TAILWIND V4 · WCAG AA`, LBT `ENGR 350 · TRANSIT PRIVACY ETHICS · LIVE`. CSS class `.skyways-spec` (Skyways) and `.project-spec` (Portfolio + LBT shared) — meta-token sizing, `--muted` color, 0.16em tracking, uppercase, centered. **Body copy trimmed** from 3 paragraphs to 2 per section, exactly matching the spec text. Reveal targets dropped from 8 to 7 per section. **Title clamp bumped** from `clamp(2.4rem, 5.5vw, 4.8rem)` to `clamp(2.8rem, 6.5vw, 4.8rem)` (higher floor, steeper viewport ramp, same ceiling) — pushes titles toward the top of the existing scale without inventing a new one. **Italic-word accents** added: `<em>Skyways</em>` colored `var(--teal)`, `#portfolio .project-heading em` colored `var(--amber)`, `#lbt .project-heading em` colored `var(--teal)`. The Skyways title was previously plain; whole word italicized since it's a single-word title and "the most concrete noun" per the spec. **Punchlines accented** to match each section's title color (teal/amber/teal). **Top hairline added**: `border-top: 1px solid var(--line-strong)` on `.skyways-section` and `.project-section` — creates visible structure between sections now that the figures are gone. **Spacing tightened**: desktop padding 8rem→6rem, gap 4rem→2.5rem; mobile padding 5rem→4rem, gap 2.5rem→1.75rem. About section untouched (still at 8rem/4rem). All other locked invariants preserved: useSectionReveal hook unchanged, SSR-safe contract intact, no GSAP/scrub added (Skyways' existing header scrub stays), motion-library enter-once reveals intact, mobile reduced-motion behavior unchanged, meta labels and punchline phrases unchanged, live links unchanged.

Verification: typecheck/lint/build green. Dev SSR returns HTTP 200 (~28.8KB, down from 33KB after removing the figures), all three `<em>` accents present in markup (`<em>Skyways</em>`, `<em>always</em>`, `<em>anonymously</em>`), all three spec lines rendered, zero `<img>`/`<figure>`/`*-shot` matches in HTML.

---

## Phase 7 — Now section (HypeOn role) + stack/credentials strip — May 18, 2026

- 98e21a0 feat(phase7): add Now section (HypeOn role) + stack/credentials strip. New component `src/components/now/NowSection.tsx` mounted in `page.tsx` between `<HeroAbout />` and `<SkywaysSection />`. Final section order: Hero → Who → Now → Skyways → Portfolio → LBT.
- **Content (exact)**: meta label `NOW / 2026`, mono spec line `SOFTWARE ENGINEER INTERN · SAN FRANCISCO`, Fraunces title `Currently at <em>HypeOn</em>.`, one-paragraph Inter body about HypeOn (AI-powered e-commerce intelligence in SF, what Pavan does there), italic Fraunces punchline `No more localhost. Real users now.`, two-line mono closing strip: `STACK · TYPESCRIPT · NEXT.JS · REACT · PYTHON · FLASK · REST APIs · AWS` / `CREDENTIALS · CSULB PRESIDENT'S HONOR LIST · CS + FINANCE`. Leading word in each strip line wrapped in `<strong className="now-strip-label">` colored `--muted` for slight emphasis above the `--muted-2` items.
- **Architecture**: mirrors the Phase-6-revision Portfolio/LBT pattern exactly. Plain HTML in JSX (no `<motion.X>`), reveal via `useSectionReveal` hook + `data-reveal` attributes (7 targets: meta, spec, title, body, punchline, stack-line, credentials-line). SSR-safe — content visible by default in CSS, no inline `opacity:0` in server HTML, the hook hides + reveals just-in-time on ≥1024px + no-reduced-motion only. **No GSAP, no ScrollTrigger** — scrub budget remains fully spent at the locked 3 (hero pin + About parallax + Skyways header).
- **Accents**: `<em>HypeOn</em>` colored `var(--amber)` via `.now-heading em` rule. Punchline colored `var(--amber)` to match. Visual rhythm across the four "work" sections is now teal (Skyways) → amber (Portfolio) → teal (LBT) → amber (Now) — wait, Now sits before the project sections, so the sequence as you scroll is: Now (amber) → Skyways (teal) → Portfolio (amber) → LBT (teal). Clean teal/amber alternation top-to-bottom.
- **CSS additions**: new `.now-*` family parallel to `.project-*` (heading, body, spec, punchline, meta, meta-divider, strip, strip-line, strip-label). Same vertical rhythm as Phase 6 revision (6rem desktop padding, 2.5rem gap; 4rem / 1.75rem mobile). Strip wrapper uses its own `gap: 0.4rem` so the two strip lines visually group tighter than the rest of the section. Strip type sized at `clamp(0.62rem, 0.72vw, 0.72rem)` — slightly smaller than the spec line. Strip items in `--muted-2`, strip labels (`STACK`, `CREDENTIALS`) in `--muted` for the brighter-leading-word effect the spec called for.
- **PHASE PLAN section in PLAN.md rewritten** to reflect actual roadmap. Phases 0–7 marked done with commit references. Phase 8 = site chrome (header/nav, contact block, footer — replaces the commented-out legacy Header/Footer from Phase 3). Phase 9 = pre-merge parity audit then squash-merge to main. Skills section explicitly cut (replaced by the Now stack strip), Process section cut (redundant given the body copy already shows process), fixed UI overlays (progress bar, identity pill, timer) cut as out of scope, mobile-pass cut as already-handled per-section.
- **Scroll machinery untouched**: hero pin, hero scrub timeline, `#who` anchor on HeroAbout, HeroAbout header parallax, Skyways header scrub — all preserved exactly. Inserting the new section between HeroAbout and Skyways shifts the layout but doesn't disturb any GSAP triggers, since each ScrollTrigger is anchored on its own section element by ID.

Verification: `npx tsc --noEmit` clean, `npm run lint` clean, `npm run build` clean (4/4 static pages, no warnings). Dev SSR returns HTTP 200 at ~30.6KB (up ~1.8KB from the Phase 6 revision baseline for the Now content). `#now` section present in HTML, `<em>HypeOn</em>` accent rendered, all 6 distinct content strings rendered (meta, spec, body opener, punchline, both strip labels), total `data-reveal` attribute count across the page = 21 (7 each in Now + Portfolio + LBT, 0 in Skyways which still uses the `<motion.p whileInView>` pattern), zero inline `opacity:0` on any `data-reveal` element. Section order in HTML: hero-stage → who → now → skyways → portfolio → lbt.

---

## Phase 8 — Site chrome (nav + contact + footer) + Skyways reveal-pattern unification — May 18, 2026

- 5c61c03 feat(phase8): add site nav, contact, footer; convert Skyways to useSectionReveal. Net +556 lines across 7 files. Three new components, one section rewrite, one semantics tweak, and the site-wide composition update.
- **`src/components/chrome/SiteNav.tsx`** — fixed top, `var(--overlay-glass)` + `backdrop-filter: blur(22px) saturate(180%)` glass-pill treatment, bottom hairline `var(--line)`. Hidden during pinned hero — a `useIsoLayoutEffect` attaches a passive scroll listener that toggles `.site-nav--hidden` whenever `scrollY < window.innerHeight * 0.6`. SSR default state: visible (no-JS users see the nav permanently — confirmed by `<nav class="site-nav  ">` in the SSR HTML with no `--hidden` modifier). On hydration, useIsoLayoutEffect runs before paint and adds the hidden class at scrollY=0 — no flash. JetBrains Mono wordmark "Pavan Rathod" left (clicks `#hero-stage` to scroll to top), Inter weight-500 links right (About / Now / Work / Contact / Resume). Mobile (<1024px): real `<button>` toggle with `aria-expanded` + `aria-controls`, Escape key closes via a scoped `keydown` listener active only while open, links close the menu on click. Reduced-motion strips all transitions via `@media (prefers-reduced-motion: reduce) { transition: none !important }`.
- **`src/components/contact/ContactSection.tsx`** — new `#contact` section after LBT, mirrors the Phase-6-revision project pattern. Plain JSX + `useSectionReveal` hook, no motion components, no GSAP. Meta `CONTACT / LET'S TALK`, Fraunces title "Open to what's *next*." (teal italic on "next" via `.contact-heading em { color: var(--teal) }`), one-line body, 4-link row (mailto + LinkedIn + GitHub + Resume conditional) styled identical to the project teal live-links with `ArrowUpRight` icons and hover lift. Body text-aligned center; links flex-wrap row that becomes a column on mobile. 4 reveal targets: meta, heading, body, links-row. Top hairline matches the other sections.
- **`src/components/chrome/SiteFooter.tsx`** — minimal `<footer>` outside `<main>`. Two lines: small Inter muted link row (Email / LinkedIn / GitHub / Resume conditional) + `© 2026 Pavan Rathod · Built with Next.js, deployed on Vercel` in JetBrains Mono `--muted-2`. Top hairline `var(--line)`. No reveal animation — always visible. Modest padding (2.5rem desktop / 2rem mobile).
- **Resume link conditional**: build-time `existsSync(path.join(process.cwd(), "public", "resume.pdf"))` in `page.tsx` returns the `hasResume` boolean passed as a prop to nav, contact, and footer. Current state: file IS present (196KB placeholder, May 13). All three Resume links render active right now. Removing the placeholder before deploy makes the nav and footer omit it and the contact row swap to a muted italic "Resume — coming soon" inert span — re-deploy is the only step needed when the real resume PDF is added later.
- **`src/components/now/NowSection.tsx`** — cleanup A: `<strong className="now-strip-label">` → `<span className="now-strip-label">` on STACK and CREDENTIALS leading words. They're category labels, not emphatic content. Same className, same CSS, visual unchanged.
- **`src/components/skyways/SkywaysSection.tsx`** — cleanup B: converted from `<motion.p whileInView initial={{opacity:0}}>` pattern to the shared `useSectionReveal` hook with `data-reveal` attributes. Removed `motion`, `useReducedMotion`, `REVEAL_EASE`, `REVEAL_DURATION` imports + the `fadeIn` props object. Added `useSectionReveal(sectionRef)` call alongside the GSAP scrub's `useIsoLayoutEffect`. Six reveal targets (meta, spec, body p1, body p2, punchline, link); heading deliberately NOT a data-reveal target since GSAP owns its transform via the header scrub. **GSAP header scrub preserved verbatim** — the 3rd-and-final scrub in the budget still ties `headerRef.yPercent` 0 → 40 over the section's viewport traversal, ease `none`, scrub 1. After conversion, Skyways' SSR HTML has zero inline `opacity:0` styles, matching the other four animated sections.
- **`src/app/page.tsx`** — new structure: `<SiteNav />` (outside `<main>`, fixed) / `<main id="main">` with Hero → HeroAbout → Now → Skyways → Portfolio → LBT → Contact / `<SiteFooter />` (outside `<main>`). Wrapped in a fragment. The skip-to-content link in `layout.tsx` still targets `#main` — unaffected.
- **CSS additions** to `globals.css`: new `.site-nav*` family (~80 lines including mobile dropdown rules and reduced-motion override), new `.contact-*` family parallel to `.now-*`/`.project-*` (~70 lines), new `.site-footer*` family (~40 lines). All use existing tokens — no new colors, no new fonts.
- **Scroll machinery untouched**: hero pin, hero scrub timeline, `#who` anchor on HeroAbout, HeroAbout header parallax, Skyways GSAP header scrub — every existing GSAP/ScrollTrigger is byte-for-byte preserved. The new nav uses a plain `scroll` listener; no new GSAP code added anywhere. Scrub budget remains fully spent at 3 (hero pin + About parallax + Skyways header).

Verification: `npx tsc --noEmit` clean, `npm run lint` clean, `npm run build` clean (4/4 static pages, no warnings). Dev SSR returns HTTP 200 at ~34.6KB (+4KB from Phase 7 for nav + contact + footer markup). Confirmed: `<nav class="site-nav  ">` renders with no `--hidden` modifier in SSR (so no-JS users see the nav), Pavan Rathod wordmark present, all 5 nav links present (About, Now, Work, Contact, Resume), `aria-expanded="false" aria-controls="site-nav-list"` on the mobile toggle, `#contact` section + `<em>next</em>` teal accent present, all 4 contact link hrefs present (mailto:pavanrwork@gmail.com / LinkedIn / GitHub / /resume.pdf), `<footer class="site-footer">` + © credit line, section order `hero-stage → who → now → skyways → portfolio → lbt → contact`, **zero inline `opacity:0` anywhere in the SSR HTML** (the entire site is now SSR-safe end to end).

---

## Phase 8.1 — post-Phase-8 targeted fixes — May 18, 2026

- cc4afa6 fix(phase8): remove stale resume pdf, drop duplicate footer links, fix strip spacing. Net −78 lines across 5 files (1 deletion + 4 edits). Three independent fixes bundled.
- **Fix 1 — stale resume PDF removed**: `git rm public/resume.pdf` (the 196 KB outdated PDF, dated May 13). The Phase 8 build-time `existsSync(public/resume.pdf)` check in `page.tsx` was technically working correctly the whole time — it just resolved to `true` because the placeholder file existed in the repo. With the file gone, `hasResume` is now `false` at build time and the existing conditional rendering paths take over: SiteNav drops the Resume entry from its `links` array, ContactSection swaps the active `<a href="/resume.pdf">` for the muted italic `<span className="contact-link contact-link--inert">Resume — coming soon</span>` fallback, SiteFooter no longer renders any Resume entry (it had a guarded `<li>{hasResume && …}</li>` which now evaluates to nothing — moot anyway after Fix 2 below removed the entire footer link row). Zero conditional logic was changed; the file deletion alone flipped the behavior. Tracked as a Phase 9 pre-merge item: re-add the rebuilt résumé before merge so the live site lights the links up automatically.
- **Fix 2 — duplicate Footer link row dropped**: `SiteFooter.tsx` rewritten to render only the `<p className="site-footer-credit">` credit line — the entire `<ul className="site-footer-links">` with its four `<li><a>` items was removed. The duplication wasn't a render bug; ContactSection's `.contact-links` row was sitting directly above the Footer's `.site-footer-links` row with the same four labels, producing the visual repetition. Now Contact owns the contact links (large teal with arrow icons), Footer is just the © line beneath. `SiteFooterProps` interface + `hasResume` parameter removed since the prop is no longer needed. `page.tsx` updated to call `<SiteFooter />` without the prop. `.site-footer-links`, `.site-footer-link`, `.site-footer-link:hover`, and the related `@media (prefers-reduced-motion: reduce)` block in `globals.css` deleted; the `@media (max-width: 1023px) .site-footer` mobile-padding rule kept. The top hairline (`border-top: 1px solid var(--line)`) and outer padding kept.
- **Fix 3 — NowSection strip spacing normalized**: replaced textual ` · ` separators with explicit `{" · "}` JSX expressions on BOTH strip lines. The Phase 8 diagnostic confirmed both source lines had byte-identical `</span>` → `20 c2 b7 20` (space-middot-space) sequences, but the SWC JSX whitespace-collapse pass treated them differently — the CREDENTIALS line ended its first text segment with a letter ("CSULB") before the newline whereas the STACK line ended with " ·", and that asymmetry caused the leading space on CREDENTIALS to be eaten while STACK's was preserved. Using `{" · "}` makes every separator an independent JSX expression with explicit whitespace, removing the multi-line-text-collapse pass from the equation entirely. Visual rendering confirmed in SSR: both lines now render with uniform `space-middot-space` spacing at every separator.
- **Vercel preview will rebuild from `cc4afa6`** with `hasResume` resolving to `false`: Resume links will be inert/omitted across the board until the rebuilt résumé is re-added. No deploy-blocking 404s — the inert "Resume — coming soon" treatment is intentional UX.

Verification: `npx tsc --noEmit` clean, `npm run lint` clean, `npm run build` clean (4/4 static pages, no warnings). Dev SSR returns HTTP 200 at ~32.8KB (down from 34.6KB after dropping the footer link list + the inactive Resume `<a>` tags). Confirmed in HTML: `public/resume.pdf` removed (verified via `[ -f public/resume.pdf ]` → "REMOVED"); 0 active Resume links anywhere in the rendered markup (nav, contact `<a href="/resume.pdf">`, footer all return 0 grep matches for the resume-link patterns); the inert "Resume — coming soon" span IS rendered in the contact section; `.site-footer-links` class has 0 occurrences in HTML; the © credit line renders correctly as the only footer content; both strip lines now render as `<span>STACK</span> · TYPESCRIPT · … · AWS` and `<span>CREDENTIALS</span> · CSULB PRESIDENT'S HONOR LIST · CS + FINANCE` with consistent `space-middot-space` spacing throughout (React text-split `<!-- -->` comments appear between adjacent text nodes but are invisible at render time).

---

## Phase 9 — pre-merge audit + PR into main — May 18, 2026

- 007a568 chore(phase9): add resume pdf, fix LinkedIn URL to custom handle. Branch HEAD before this commit was `8e99093` (Phase 8.1 log). Three commits in this phase total: the Phase-8.1 audit fix earlier in the day (cc4afa6 + 8e99093) and this one closing the audit gap.
- **Step 1 — résumé added.** `cp /Users/pavanrathod/Resume/May18.pdf public/resume.pdf`. New file is a valid 64 KB PDF v1.7, 1 page, dated May 18. The Phase-8 build-time `existsSync(path.join(process.cwd(), "public", "resume.pdf"))` check in `page.tsx` now resolves `hasResume` to `true` at build time, flipping all conditional Resume rendering paths back to their active state. Two `/resume.pdf` hrefs render in SSR (nav + Contact). The footer was not re-given a Resume link — its link row was removed entirely in Phase 8.1 since it duplicated the Contact row directly above.
- **Step 2 — quality gate green.** `npx tsc --noEmit` clean, `npm run lint` clean, `npm run build` clean (4/4 static pages, no warnings). Dev SSR `HTTP 200` at ~33.2 KB, all six section ids present (#who, #now, #skyways, #portfolio, #lbt, #contact), zero inline `opacity:0` on any data-reveal element, two active `/resume.pdf` hrefs, zero "Resume — coming soon" inert spans (the active branch is taken).
- **Step 3 — parity audit.** Compared `redesign-scrollytelling` against `origin/main` via `git diff main...redesign-scrollytelling --stat`: 19 files changed, +2549 / −104, 12 new files (PLAN.md, design-tokens.md, 9 new components, useSectionReveal hook), 1 deletion (the old placeholder `public/resume.pdf` — the new one replaces it). Metadata block in `layout.tsx` retains full title (with template), description, openGraph (with /og.png), twitter (summary_large_image with /og.png), icons (favicon.ico, 16x16, 32x32, apple-touch-icon), robots: index+follow. Viewport correctly switched to `themeColor: "#0a0a0a"` + `colorScheme: "dark"`. All 5 favicon/og.png files present in `public/` and identical to main. Robots/sitemap: not on main, not on branch (pre-existing gap, flagged as a future polish item but not a regression). Routes: both main and branch have only `src/app/page.tsx`. GitHub URL parity: all `github.com/pavanrathod...` references use `https://github.com/pavanrathod828` — matches spec. Email: `mailto:pavanrwork@gmail.com` is canonical and consistent. **Audit hard-stopped on one finding**: LinkedIn URL in the codebase was `https://www.linkedin.com/in/pavan-rathod-64b0b7254/` (the dashed auto-generated URL) while the spec required the custom-handle URL `https://www.linkedin.com/in/pavanrathod828`. Stopped, reported, awaited resolution. Pavan confirmed `pavanrathod828` is the live custom handle — proceeded with the fix.
- **LinkedIn URL fix.** Replaced the dashed URL with `https://www.linkedin.com/in/pavanrathod828` in 4 locations: `src/components/contact/ContactSection.tsx:46` (the visible Contact link), and `src/data/site.ts:65,92,240` (the data file that feeds the commented-out legacy components — updated for hygiene even though those components don't render). Confirmed zero remaining occurrences of `pavan-rathod-64b0b7254` anywhere in the repo (excluding node_modules/.next/.git). Rendered HTML confirms: the single LinkedIn href in the page is now `https://www.linkedin.com/in/pavanrathod828`.
- **Step 3 (re-verified) — clean.** Quality gate re-run after the fix: typecheck/lint/build still green.
- **Step 4 — PR opened.** `gh pr create --base main --head redesign-scrollytelling` produced **PR #1**: https://github.com/pavanrathod828/pavanrathod-portfolio/pull/1. Title: "Phase 9 — scrollytelling redesign to production". Body summarizes everything the redesign ships (visual system, hero, About, Now/HypeOn, three project sections, Contact, chrome, reveal architecture, mobile/reduced-motion handling, résumé wiring), notes the intentional cuts (Skills section, Process section, fixed UI overlays), and lists a test plan checklist. State: `OPEN`, `mergeable: MERGEABLE`. **Vercel preview deployment for the PR built successfully** (status check `SUCCESS`, target URL `vercel.com/ipavan828s-projects/pavanrathod-portfolio/Dvx1S5JAPNmf2axi7rsghdP525Xf`). **Not merged.** Awaiting Pavan's review.

`main` has not been touched in this phase. The merge happens manually on GitHub after Pavan signs off.
