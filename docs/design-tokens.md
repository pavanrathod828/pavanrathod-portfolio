# Design Tokens — pavanrathod.com Scrollytelling Redesign

**Status:** Phase 1 spec. No code in this branch yet.
**Source of truth:** [`PLAN.md`](../../../LBT/PLAN.md) Locked Decisions table.
**Reference build:** LBT presentation at `/Users/pavanrathod/LBT/lbt-presentation/index.html` (2,370 lines). Tokens cite line numbers where inherited.
**Audience:** Pavan reviews and pushes back. Phase 2 turns this into `globals.css` + `tailwind.config.ts` only after approval.

This document defines the visual + motion vocabulary. It does not prescribe component markup, layout, or copy. Phases 3+ consume these tokens.

---

## 1. Color tokens

All tokens are CSS custom properties on `:root`, declared once in `globals.css`. Names follow LBT's bare-word convention (`--bg`, `--teal`, `--amber`) rather than scale-style (`--color-neutral-900`) because the palette is small, intentional, and not a generated ramp.

### 1.1 Surfaces

| Token | Hex | Used for | LBT source |
|---|---|---|---|
| `--bg` | `#0a0a0a` | Page background. The single dark canvas the whole site sits on. | LBT line 18 |
| `--ink` | `#1a1a1f` | Reserved for the inverse use case (cream/light section, currently not in scope). Keep defined so we don't redefine later. | LBT line 22 |

**Not inherited (intentionally dropped):**
- `--bg-soft` (`#0e0e12`) — LBT used this as a subtly elevated plane. **Cut by decision (Pavan, May 13).** Single canvas everywhere — every section sits on `--bg`. Differentiation comes from whitespace, typography weight, and motion, not from surface tone. If a future section truly needs to feel like a different plane, reopen this decision rather than reintroducing the token quietly.
- `--bg-light` (`#faf6ee`), `--bg-cream` (`#f4ecdb`) — LBT used these for an editorial light section that won't appear in this site. The redesign stays dark end-to-end.

### 1.2 Accents

| Token | Hex | Used for | Notes |
|---|---|---|---|
| `--teal` | `#2aa88a` | Primary accent. Links, "active" or "good" semantic states, hero pin progress indicator, left side of the progress-bar gradient. | LBT line 23. Anchor color of the brand. |
| `--teal-soft` | `#1a6b5c` | Hover-state / pressed-state / muted teal. Borders that need teal identity but quieter. | LBT line 24 |
| `--amber` | `#f0a820` | Secondary accent. Tag dots, the right side of the progress-bar gradient, "in flight" indicators, focus rings. | LBT line 25 |
| `--amber-soft` | `#d4860a` | Quieter amber for sustained surfaces (e.g. a tag with amber bg). | LBT line 26 |
| `--red` | `#e74c3c` | Reserved only for error/destructive states. **Not** a brand color — never decorative. | LBT line 27 |

The teal+amber pairing is the visual signature carried over from LBT. Used together they tell the eye "this is the same author."

### 1.3 Text + lines (alpha on dark)

These use `rgba` over `--bg` deliberately so they composite correctly on top of any future image/video backgrounds without re-tuning.

| Token | Value | Effective hex on `#0a0a0a` | Used for |
|---|---|---|---|
| `--text` | `#ffffff` | `#ffffff` | Primary text — headlines, body copy, anything load-bearing. Use 100% white, not off-white. LBT does the same (`color: white` on body, line 38). |
| `--muted` | `rgba(255,255,255,0.55)` | ≈ `#909090` | Secondary text — subtitles, captions, source attributions. LBT line 28. |
| `--muted-2` | `rgba(255,255,255,0.35)` | ≈ `#5f5f5f` | **Tertiary, large/uppercase only** — section eyebrows, mono tags, divider labels. Never body copy at this opacity. LBT line 29. |
| `--line` | `rgba(255,255,255,0.08)` | hairline | Section dividers, list separators, hairlines under blocks. The "drawn with a 0.5mm pencil" feel. LBT line 30. |
| `--line-strong` | `rgba(255,255,255,0.16)` | visible 1px border | Borders on glass-pill UI (identity pill, top nav). Adapted from LBT's identity-pill border (line 124). |
| `--overlay-glass` | `rgba(16,16,16,0.72)` | translucent panel | Background for the identity pill / top nav, paired with `backdrop-filter: blur(22px) saturate(180%)`. LBT line 125. |

### 1.4 WCAG AA verification (against `#0a0a0a`)

Contrast ratios computed via standard sRGB luminance formula. AA requires ≥ 4.5:1 for normal text, ≥ 3:1 for large text (≥ 18pt / 24px, or ≥ 14pt / 18.66px bold).

| Foreground | Ratio | AA normal | AA large | AAA |
|---|---|---|---|---|
| `--text` (`#ffffff`) | 20.4 : 1 | ✓ | ✓ | ✓ |
| `--muted` on `--bg` (composite `#909090`) | 6.3 : 1 | ✓ | ✓ | — |
| `--muted-2` on `--bg` (composite `#5f5f5f`) | 3.0 : 1 | ✗ | ✓ (borderline) | — |
| `--teal` (`#2aa88a`) | 7.6 : 1 | ✓ | ✓ | ✓ |
| `--teal-soft` (`#1a6b5c`) | 3.4 : 1 | ✗ | ✓ | — |
| `--amber` (`#f0a820`) | 11.1 : 1 | ✓ | ✓ | ✓ |
| `--amber-soft` (`#d4860a`) | 7.0 : 1 | ✓ | ✓ | ✓ |
| `--red` (`#e74c3c`) | 5.7 : 1 | ✓ | ✓ | — |

**Rules this implies:**
- `--muted-2` is **only** for large/uppercase mono labels and eyebrows. Never paragraph text. If a label drops below 14px regular, switch it to `--muted`.
- `--teal-soft` is **never** a text color on `--bg`. It's for borders, decorative shapes, hover backgrounds.
- All interactive text (links, buttons) uses `--text`, `--teal`, or `--amber` at full opacity.

### 1.5 Gradients (composed, not tokens)

LBT uses two composed gradients that show up often enough to name conventions for, but they're not declared as variables — they're inline where they appear:

- **Progress bar fill:** `linear-gradient(90deg, var(--teal), var(--amber))` — LBT line 69. Carries over unchanged.
- **Section blend-in:** `linear-gradient(180deg, var(--bg), transparent)` at section tops, 120px tall — LBT line 614. Use this anywhere a section transitions to a new visual treatment to avoid a hard seam.

---

## 2. Typography tokens

Three families. Each has a specific role. **No additional fonts get added without an explicit decision.**

### 2.1 Families + loading

| Family | Role | Weights / styles to load | LBT source |
|---|---|---|---|
| Fraunces | Display — every heading, section title, hero. The voice. | **Roman + italic, 300/400/500/600/700, opsz axis 9..144** | LBT line 10 + italic added (Pavan, May 13) |
| Inter | Body — all paragraphs, lists, captions, UI buttons. | Roman 300, 400, 500, 600 | LBT line 10 |
| JetBrains Mono | Meta — eyebrows, tags, timestamps, kbd, numeric stats. | Roman 400, 500. **Italic not loaded** — flag for Phase 4 revisit only if code captions or annotations need italic mono. | LBT line 10 |

**Loading method:** Next.js `next/font/google` (self-hosted, eliminates render-blocking CSS request). Phase 2 wires this up. `display: 'swap'` to match LBT line 10. Subset to `latin` — we don't need extended ranges.

**Updated Google Fonts URL** (replacing LBT's line 10 spec, which omitted italic):

```
https://fonts.googleapis.com/css2?
  family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400;1,9..144,500;1,9..144,600;1,9..144,700
  &family=Inter:wght@300;400;500;600
  &family=JetBrains+Mono:wght@400;500
  &display=swap
```

(The `ital,opsz,wght` axis order is required by Google Fonts when combining italic and a numeric axis; `0,...` = roman, `1,...` = italic.)

When wiring via `next/font/google`, the equivalent config passes `style: ['normal', 'italic']` and `axes: ['opsz']` on the Fraunces import.

### 2.2 Fraunces — `opsz` (optical sizing) and italic

Fraunces is a variable font with a true optical-size axis (`opsz`, 9 → 144). Browsers will auto-pick a position based on rendered size when `font-optical-sizing: auto` is set, which is the default in modern browsers. **Trust the auto behavior — do not manually set `font-variation-settings: 'opsz'`.**

This matters because:
- Hero title at ~7rem renders at the "display" end of the axis (~96+), getting tighter spacing and sharper contrast — the cinematic look.
- Section titles at ~2rem render in the "subhead" range (~36–48), better suited spacing.
- Quotes and pull-quotes at ~1.4rem render closer to the text end of the axis.

LBT relies on `opsz` implicitly — it loads `opsz,wght@9..144,...` and never manually overrides. We do the same.

**Italic is loaded (Pavan decision, May 13).** LBT uses `font-style: italic` on Fraunces weights (lines 643, 676, 678) and relied on browser-synthesized italics. The redesign loads true italics across the full opsz range instead, because:
1. Synthesized italics render visibly heavier on macOS Safari than designed italics.
2. Fraunces' true italic is a distinct draw with its own character — slanted-roman synthesis loses that.
3. The font carries the brand voice; the payload cost (~one extra woff2 file in practice, since variable fonts pack efficiently) is acceptable.

Browsers will pick italic glyphs automatically wherever `font-style: italic` is applied. No code changes needed at the usage site.

### 2.3 Inter — `font-feature-settings`

Body font sets `font-feature-settings: "ss01", "cv11"` on `html, body` — LBT line 43.

- `ss01` — Stylistic Set 1: alternate single-story `a`, more geometric. Subtle.
- `cv11` — Character Variant 11: alternate single-story `g`. Cleaner at small sizes.

These give Inter a slightly more architectural feel and de-genericize it. Inherited from LBT verbatim. Apply at the root so all descendants get them.

Additionally, on any element rendering tabular numbers (stats, scroll progress %, timestamps in mono), add `font-variant-numeric: tabular-nums` to prevent number jitter — LBT line 192 does this on the timer.

### 2.4 Type scale

All sizes use `clamp(min, fluid, max)` so they respond smoothly between breakpoints without a separate mobile stylesheet. The fluid term is in `vw` so it scales with viewport width.

| Token | Family | Weight | clamp(min, fluid, max) | Mobile (~375px) | Desktop (~1400px+) | LBT source |
|---|---|---|---|---|---|---|
| `--type-hero` | Fraunces | 400 | `clamp(3rem, 8.5vw, 7rem)` | 48 px | 112 px | LBT line 368 |
| `--type-section-title` | Fraunces | 400 | `clamp(2.4rem, 5.5vw, 4.8rem)` | 38.4 px | 76.8 px | LBT line 273, 520 |
| `--type-subsection` | Fraunces | 400 | `clamp(1.8rem, 3vw, 2.6rem)` | 28.8 px | 41.6 px | LBT line 670 |
| `--type-pullquote` | Fraunces | 500 | `clamp(1.4rem, 2.5vw, 2rem)` | 22.4 px | 32 px | LBT line 871 |
| `--type-subtitle` | Inter | 400 | `clamp(1.05rem, 1.4vw, 1.3rem)` | 16.8 px | 20.8 px | LBT line 385 |
| `--type-body` | Inter | 300 | `clamp(0.95rem, 0.85rem + 0.3vw, 1.05rem)` | 15.2 px (clamped to min) | 16.8 px (clamped to max) | Adapted (Pavan, May 13). LBT body was 0.98rem fixed (line 687). |
| `--type-body-lg` | Inter | 300 | `clamp(1rem, 1.1vw, 1.15rem)` | 16 px | 18.4 px | Adapted — lead paragraphs in long-read sections |
| `--type-meta` | JetBrains Mono | 500 | `clamp(0.68rem, 0.8vw, 0.78rem)` | 10.9 px | 12.5 px | LBT line 83 (top-nav), 662 (system-tag) |
| `--type-meta-sm` | JetBrains Mono | 500 | `0.62rem` | 9.9 px | 9.9 px | LBT line 662 |

**`--type-body` clamp behavior (verified):**

The formula `0.85rem + 0.3vw` interpolates between bounds across a specific viewport range:

| Viewport | `0.85rem + 0.3vw` raw | After clamp | Notes |
|---|---|---|---|
| 375 px (small phone) | 13.6 + 1.125 = 14.725 px ≈ 0.92rem | **0.95 rem** (15.2 px) — min applied | Below min threshold. |
| 533 px | 13.6 + 1.6 = 15.2 px = 0.95rem | 0.95 rem (15.2 px) — crosses min | Fluid range begins. |
| 1024 px | 13.6 + 3.072 = 16.672 px ≈ 1.042rem | 1.042 rem (16.67 px) — fluid | Within range. |
| 1067 px | 13.6 + 3.2 = 16.8 px = 1.05rem | 1.05 rem (16.8 px) — crosses max | Fluid range ends. |
| 1920 px (desktop) | 13.6 + 5.76 = 19.36 px ≈ 1.21rem | **1.05 rem** (16.8 px) — max applied | Above max threshold. |

**Fluid range: 533 px → 1067 px viewport.** Below 533 px body locks at 15.2 px; above 1067 px body locks at 16.8 px. This is intentional — body copy doesn't need to scale on ultra-wide displays (it should stay legible at the same physical size), and on small phones it shouldn't shrink below 15 px (Apple's accessibility minimum).

**Letter-spacing — per-token values** (LBT uses different tracking by role; matching exactly):

| Token | letter-spacing | LBT source |
|---|---|---|
| `--type-hero` | `-0.045em` | LBT line 370 — tighter than smaller Fraunces sizes; reads cinematic at 7rem. |
| `--type-section-title` | `-0.035em` | LBT line 273 (`.editorial-title` block). |
| `--type-subsection` | `-0.02em` | LBT line 672. Default for smaller Fraunces display sizes. |
| `--type-pullquote` | `-0.02em` | Inherits the smaller-display default. |
| `--type-subtitle` | `0` (default) | Inter body tracking — no override. |
| `--type-body` | `0` (default) | Inter body tracking — no override. |
| `--type-body-lg` | `0` (default) | Inter body tracking — no override. |
| `--type-meta` (uppercase) | `0.16em` | LBT line 158. Wide tracking for the engraved-on-metal feel. |
| `--type-meta-sm` (uppercase) | `0.2em` | LBT line 663 (`.system-tag`). Slightly wider at smaller mono sizes. |

**Line-height — per-token values** (LBT uses tighter, role-specific values; matching exactly):

| Token | line-height | LBT source |
|---|---|---|
| `--type-hero` | `0.96` | LBT line 369. Intentionally tight, cinematic. |
| `--type-section-title` | `1.02` | LBT line 272 (`.editorial-title` block). |
| `--type-subsection` | `1.1` | LBT line 671. |
| `--type-pullquote` | `1.15` | Slight loosening at quote sizes for readability. |
| `--type-subtitle` | `1.5` | Lead-paragraph rhythm. |
| `--type-body` / `--type-body-lg` | `1.55` | LBT line 688. |
| `--type-meta` / `--type-meta-sm` | `1` | Single-line labels by default. |

**Adaptation note:** LBT's largest title goes to ~9.5rem (line 928) for a closing slide. We don't need that — `--type-hero` capping at 7rem is enough. Adding a `--type-display-xl` would be a token used once. Skip it.

---

## 3. Spacing scale

LBT uses ad-hoc `rem` values per section. The redesign formalizes them into a named scale so section rhythm stays consistent.

Base unit: `1rem = 16px` (default). All tokens are multiples of `0.25rem` for predictable composition.

### 3.1 Scale

| Token | Value | Used for |
|---|---|---|
| `--space-1` | `0.25rem` (4 px) | Hairline gaps inside meta-pills, icon padding. |
| `--space-2` | `0.5rem` (8 px) | Tight gaps — between an icon and its label. |
| `--space-3` | `0.75rem` (12 px) | Default inline gap (e.g. tag-pill internal padding). |
| `--space-4` | `1rem` (16 px) | Default vertical rhythm between adjacent text blocks. |
| `--space-6` | `1.5rem` (24 px) | Between heading and supporting paragraph. |
| `--space-8` | `2rem` (32 px) | Between paragraph groups within a section. |
| `--space-12` | `3rem` (48 px) | Section-internal block separation (e.g. heading group ↔ content grid). |
| `--space-16` | `4rem` (64 px) | Horizontal section padding on desktop (`padding: 0 4rem`). |
| `--space-24` | `6rem` (96 px) | **Section header margin-bottom.** From LBT line 619. |
| `--space-32` | `8rem` (128 px) | **Section vertical padding.** `padding: 8rem 0` per Locked Decisions. From LBT line 606. |

**Adaptation note:** LBT escalates to `padding: 9rem 0` in later sections (lines 718, 797, 888, 992) to add weight. PLAN.md says "8rem section vertical" — we standardize on `--space-32 = 8rem` everywhere. The redesign is shorter and doesn't need the escalation. If a section truly needs more breathing room, do it with internal whitespace, not by varying section padding.

### 3.2 Section padding pattern

Every section follows this rhythm (Tailwind/CSS pseudocode):

```
section {
  padding-block: var(--space-32);          /* 8rem top + bottom */
  padding-inline: var(--space-16);          /* 4rem left + right on desktop */
}
section > .header {
  margin-bottom: var(--space-24);           /* 6rem after header block */
  max-width: 1100px;                        /* LBT line 618 */
  margin-inline: auto;
}
section > .content {
  max-width: 1400px;                        /* LBT line 624 */
  margin-inline: auto;
}
```

### 3.3 Mobile (≤ 600px)

LBT collapses inner padding to `3rem 2rem` on small screens (line 1279) but keeps section verticals at the same scale because the type scale already shrinks fluidly. We do the same.

- Horizontal inset on mobile: `var(--space-6)` (1.5rem) — LBT line 74 uses `1.5rem`.
- Section verticals: unchanged. `--space-32` (8rem) still feels right when type drops to 38px.

---

## 4. Motion tokens

This is where the redesign earns the "scrollytelling" name. Decisions here are tighter than colors because mistakes here are nausea-inducing on real devices.

### 4.1 Duration tokens

| Token | Value | Used for |
|---|---|---|
| `--dur-fast` | `200ms` | Hover state changes, button color shifts. |
| `--dur-base` | `400ms` | Standard UI transitions — pills appearing, nav showing. LBT line 1016. |
| `--dur-medium` | `700ms` | Enter-once content reveals (headlines, paragraphs entering viewport). LBT line 2051 uses 0.7. |
| `--dur-long` | `1100ms` | Hero entry, the big-arrival moments. LBT line 1999 uses 1.1. |

Scrub animations have no "duration" in the wall-clock sense — they're tied to scroll progress. Keep that mental model separate.

### 4.2 Easing tokens

| Token | Value | Used for |
|---|---|---|
| `--ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default UI transition curve (Material standard). LBT line 1016. |
| `--ease-entry` | `cubic-bezier(0.165, 0.84, 0.44, 1)` | Entry reveals — matches GSAP `power3.out` (LBT's default reveal ease, lines 1997, 2051, 2075). See note below. |
| `--ease-exit` | `cubic-bezier(0.7, 0, 0.84, 0)` | Reserved for content exiting viewport. Use sparingly. |

**Note on `--ease-entry` (Pavan-locked, May 13):** the bezier `(0.165, 0.84, 0.44, 1)` is GSAP's `power3.out`, not `expo.out`. LBT's CSS keyframe animation on the identity pill (line 1319) used `cubic-bezier(0.16, 1, 0.3, 1)` — that's `expo.out`, which has a more dramatic asymptotic settle. We deliberately move to `power3.out` so the CSS curve matches the GSAP curve used everywhere else in LBT's reveal timelines. One curve, consistent feel.

For GSAP (Phase 2+), the equivalents:
- `--ease-standard` → `power2.out`
- `--ease-entry` → `power3.out` (LBT's default, line 1997). CSS and JS curves now agree.
- Scrub-tied tweens → `ease: 'none'` (LBT line 2020). Linear, because scroll position is the timeline.

### 4.3 What scrubs vs. what fires-once

This is the central animation taxonomy. **Memorize this.**

| Animation | Type | Library | Trigger | Notes |
|---|---|---|---|---|
| **Hero pin scrub** — hero content blurs/fades out, background scales as you scroll through the pinned section (~150vh) | **Scrub** | GSAP + ScrollTrigger | Pinned section progress | Per Locked Decisions. Only one pinned section in the whole site. |
| **About-section parallax** — Section 2 elements (e.g. portrait, secondary copy) move at different scroll rates as section enters viewport | **Scrub** | GSAP + ScrollTrigger | Section in viewport, scrub: true | Per Locked Decisions: "two parallax sections only." This is parallax #1. |
| **Skyways parallax** — anchor project section with a layered scroll-tied effect (TBD exact treatment in Phase 4) | **Scrub** | GSAP + ScrollTrigger | Section in viewport, scrub: true | Parallax #2. |
| **Hero headline word-by-word reveal** | **Fires once** | Motion library | At ~30% scroll into pinned section | Per PLAN.md Phase 3. Not scrubbed — matches LBT line 2051. |
| **Section title + subtitle reveals** | **Fires once** | Motion library | When section enters viewport (Intersection Observer / `useInView`) | `y: 30, opacity: 0 → y: 0, opacity: 1` with stagger. LBT line 2075. |
| **Project card content reveals** | **Fires once** | Motion library | When card enters viewport | Stagger children. |
| **Progress bar fill** | **Continuous (not "scrub")** | Plain JS scroll listener with `requestAnimationFrame` | Scroll position | LBT line 70 uses a 0.05s transition for smoothing. |
| **Top nav appearance** | **Fires once** (per direction) | CSS class toggle on scroll past hero | Scroll past hero threshold | LBT line 88. |
| **Identity pill fade-in on load** | **Fires once** | CSS animation | Page load | LBT line 1319. |
| **Hover/focus states** | **Continuous** | CSS transitions | User interaction | Use `--dur-fast` + `--ease-standard`. |

**Total scrub-tied animations: 3** (hero pin + 2 parallax sections). Everything else fires once or is hover-only. This is intentional — too much scrub is what makes "scroll experience" sites feel like they're fighting the user.

### 4.4 Reduced motion and the mobile static gate

`@media (prefers-reduced-motion: reduce)` is a hard contract, not a polish item. Per PLAN.md constraint.

**Global rule (carried from LBT line 51):**
```
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

**Per-category overrides on top of the global rule:**

| Animation category | Reduced-motion behavior |
|---|---|
| Hero pin scrub | **Disabled.** Hero renders as a static one-screen layout. No pinning. Headline visible immediately, no word-by-word. |
| Parallax scrubs | **Disabled.** Elements render in their final positions, no transforms tied to scroll. |
| Section enter-once reveals | **Disabled.** Content is visible at full opacity, no `y` translate. |
| **Progress bar fill** | **Kept visible. Locked (Pavan, May 13):** the bar continues to fill as the user scrolls — it's an informational indicator, not a motion effect. Under reduced motion the CSS `transition: width 0.05s linear` (LBT line 70) is explicitly **removed**, so width updates snap to the new value on each scroll tick instead of easing. Net effect: the bar still tracks progress, it just doesn't have the 50ms smoothing pass. |
| Top nav appearance | **Kept but instant.** Nav appears at the same scroll threshold but without the slide/fade transition. |
| Hover states | **Mostly kept but instant.** Color changes are fine; transforms (scale, translate) are dropped. |

**Mobile = reduced motion (per Locked Decisions, viewport threshold locked by Pavan, May 13).**

Mobile and small-tablet viewports trigger the same code paths as `prefers-reduced-motion: reduce`, regardless of the OS setting. The cutoff is **`< 1024px`** — devices in the 768–1023px range (most tablets, including iPads in portrait) get the same static treatment as phones. Only true desktop viewports (`≥ 1024px`) with `prefers-reduced-motion: no-preference` receive the scrub/pin treatment.

Phase 6 implements this via:

```
const enableScrollAnimations = matchMedia(
  '(min-width: 1024px) and (prefers-reduced-motion: no-preference)'
).matches;
```

ScrollTrigger setup, GSAP timeline creation, and motion-library `useInView` enter-once animations all gate behind this single check. Failing the check renders the static layout — all content visible, no transforms.

### 4.5 Performance constraints

- `will-change` only on actively-animating elements, removed when not in motion. Sprinkling it everywhere harms more than it helps.
- All scrub animations transform `opacity`, `transform`, or `filter` only — never `top`, `left`, `width`, `height`. (Compositor-only properties.)
- ScrollTrigger config: `scrub: 1` (1-second smoothing) is the default; `scrub: true` (pure tied) for hero exit only.
- No animation runs on the first paint. LBT delays hero entry by ~100ms (line 1998 `delay: 0.1`). We match.

---

## 5. Z-index scale

Named layers, not arbitrary numbers. The LBT file reached for `2147483647` (MAX_INT) for the timer — that was a presentation-specific hack to escape GSAP's transform stacking contexts. Since we're not shipping a timer and the site has far fewer fixed overlays, we use a clean scale.

| Token | Value | Layer | LBT source |
|---|---|---|---|
| `--z-base` | `0` | Default flow content. |
| `--z-section-bg` | `1` | Background imagery / video within a section. |
| `--z-section-fg` | `2` | Foreground content within a section. | LBT lines 346, 1107 |
| `--z-section-accent` | `3` | Accent elements layered above section content (e.g. floating quote). | LBT lines 426, 475 |
| `--z-section-top` | `4` | Top-most layer within a section (e.g. CTA, label that overlaps). | LBT lines 498, 1313 |
| `--z-section-pinned-content` | `10` | Pinned hero / question-layer content during scrub. | LBT line 582 |
| `--z-top-nav` | `100` | Top navigation bar (scrolls in after hero). | Adapted from LBT line 77 (999 → 100); we don't have competing fixed elements. |
| `--z-identity-pill` | `200` | Identity pill (bottom-left, your version). Sits above top-nav so it's always visible. | Adapted from LBT line 118 (2147483646 → 200). |
| `--z-progress-bar` | `9999` | Top scroll-progress bar. Highest non-modal layer. | LBT line 64 — kept verbatim because PLAN.md specifies "progress bar at 9999" explicitly. |
| `--z-modal` | `10000` | Reserved. No modals planned, but defined so future work has a slot above progress. |

**Adaptation rationale (cited):**
- Dropped MAX_INT (2147483647) because we're not fighting `transform: translateZ(0)` stacking-context escapes from a timer button living inside multiple pinned ScrollTrigger sections. The redesign's overlays sit outside pinned sections by design.
- Kept progress bar at 9999 verbatim because PLAN.md specifies that value and because it should genuinely be on top of everything except a (future) modal.
- Identity pill at 200 (not 9998) so the progress bar can pass over it visually — the bar is a 2px line at the very top, and the pill is bottom-left, so they don't collide in practice.

---

## 6. What's intentionally _not_ defined here

Tokens not in this doc are out of Phase 1 scope:

- **Border radius scale** — LBT uses `999px` for pills and one-off radii elsewhere. Define in Phase 3 if a real pattern emerges. Premature.
- **Shadow scale** — LBT uses one shadow (`0 8px 24px rgba(0,0,0,0.35)` on the identity pill, line 129). One shadow is not a scale. Define inline.
- **Breakpoints** — Tailwind defaults cover us. LBT has ad-hoc `@media (max-width: 900px)` and `(max-width: 600px)`. Lock those in Phase 2 via Tailwind config; not a design token concern. (Note: the **1024px** static-mode cutoff in §4.4 is a behavior gate, not a layout breakpoint.)
- **Component tokens** (button colors, card backgrounds) — these are compositions of the above. Build in Phase 4.

---

## 7. Resolved Phase 1 decisions (May 13, 2026)

The original draft of this spec flagged six open questions. All resolved on review:

1. **Fraunces italic** → Load real italic 300–700 across opsz 9..144. Updated §2.1 (loading URL) and §2.2 (rationale). Synthesized italic rejected.
2. **`--bg-soft`** → Dropped. Single canvas (`--bg`) everywhere. Updated §1.1.
3. **Body type fluid vs. fixed** → Fluid. `--type-body` = `clamp(0.95rem, 0.85rem + 0.3vw, 1.05rem)`. Fluid range 533–1067 px viewport; outside that, clamps to 15.2 px min / 16.8 px max. Updated §2.4.
4. **Reduced-motion progress bar** → Kept visible. CSS `transition: width` removed under `prefers-reduced-motion`, so updates snap. Documented in §4.4.
5. **Mobile static-mode breakpoint** → `< 1024px`. Devices 768–1023 px get the same static treatment as phones. Updated §4.4 with explicit `matchMedia` query.
6. **JetBrains Mono italic** → Stays unloaded. Flag retained inline in §2.1 for Phase 4 revisit if code captions need italic mono.

No remaining open questions for Phase 1. Acceptance checklist (below) is the final gate.

---

## 8. Acceptance checklist for this doc

Before approving Phase 1 and moving to Phase 2, confirm:

- [ ] Every color in the LBT palette either appears as a token here with an intended use, or is explicitly dropped with a reason.
- [ ] Every WCAG AA combination is verified and documented.
- [ ] Each typography size has an LBT line citation or a clearly-stated adaptation reason.
- [ ] The scrub-vs-fire-once table covers every animated element you can think of.
- [ ] Reduced-motion behavior is unambiguous for each category.
- [ ] Z-index scale has no gaps that would force a future "let me just put 9998 here."
- [ ] All six Phase 1 decisions in §7 reflect Pavan's intent and read correctly to a fresh reviewer.

When all seven pass, Phase 2 begins.
