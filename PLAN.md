# pavanrathod.com — Scrollytelling Redesign

**Living doc.** Update the top section every session so you can pick up after gaps.

---

## STATUS

- **Current phase:** Phase 2 complete. Ready for Phase 3 (hero component).
- **Last completed:** Phase 2: branch redesign-scrollytelling created, GSAP installed (^3.15.0), PLAN.md committed, Vercel preview live.
- **Next action:** Pavan provides the line-led headline copy direction for the hero, then Claude Code writes the pinned hero component (LBT-adapted scrub timeline).

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
- **Vercel preview URL:** [PASTE_URL_HERE — Pavan will provide]
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
