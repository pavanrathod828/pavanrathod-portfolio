# PORTFOLIO_PLAN.md — pavanrathod.com Refresh

> Synthesized from a 5-advisor LLM Council session (Contrarian, First Principles, Expansionist, Outsider, Executor) with anonymized peer review. This is the execution roadmap that pairs with BRAND.md (the positioning source of truth).

---

## Context

Pavan Rathod — F-1 visa CS undergrad at CSULB (grad Spring 2028, Finance minor), Software Engineer Intern at HypeOn AI (D2C competitive-intel SaaS, SF — Ad Intelligence, ROAS Attribution, Review Intelligence, GEO Demand Mapping). One portfolio site (pavanrathod.com) needs to serve four audiences in parallel:

1. **Big Tech / AI lab recruiters** (Google, Meta, MSFT, Amazon, Apple, Nvidia, Anthropic, OpenAI) — Summer 2027 internships and new-grad — needs F-1 sponsorship.
2. **MS CS (AI/ML) admissions** for Fall 2028 entry — UC system (UCLA/UCSD/UCI/UCD/UCR/Berkeley), CA privates (Stanford/Caltech/USC), Illinois cluster (UIUC, UChicago, Northwestern, UIC, IIT) — needs scholarship / TA-RA funding.
3. **The international-applicant filter** that screens F-1 candidates silently across both pipelines.
4. **Quant / applied-research firms** — Jane Street, Two Sigma, Citadel, Jump, Hudson River — auto-sponsor, value CS+Finance + named-company signal.

**Stakes:** ~$200K scholarship gap for MS, sponsorship-eligible role, AI lab pipeline credibility. Fall 2028 MS apps open ~Sept 2027 — but the **LOR-eligible faculty relationship must already be warm by then**, which makes "this semester" the actual critical path.

**Priority order (per Pavan's explicit direction):**
1. MS Fall 2028 funded admit (primary)
2. Summer 2027 Big Tech internship (secondary)
3. HypeOn as default income/credential (stay until something better lands)
4. PhD optionality (preserved, not committed)

---

## 1) Audit — What's Outdated, Weak, Generic, or Actively Hurting

### Identity layer

- **Title consistency.** Site must use "Software Engineer Intern at HypeOn AI" across LinkedIn, GitHub bio, resume, and pavanrathod.com. No "Founding Engineer" anywhere — that title has been retired across all surfaces per Week 0 decision.
- **No name or face above the fold.** Hero shows abstract tagline. Stranger doesn't know who is talking in first 8 seconds. → Fixed in `docs/decisions/001-hero.md`.
- **No work-authorization disclosure surface.** Tag-team risk: hiding it wastes recruiter time at auto-sponsoring firms; exposing it raw filters you out elsewhere. Solution: surface on `/cv` and Contact, not in hero.

### Content layer

- **Zero AI/ML artifact.** No HypeOn case study. No public ML/RAG/LLM repo. For MS AI/ML admissions, this is the deal-breaker.
- **`src/data/site.ts` is desynced from rendered components.** Reconcile in Week 2.
- **Featured projects don't signal what audiences need.** Current projects (Skyways booking, portfolio itself, VidSnapAI) are not AI/ML, lack metrics, lack public repos.
- **No research signal.** No papers read, no reproductions, no professor interests, no `/research` route.

### Audience-specific damage

- **Big Tech recruiters:** see no code, no metrics; F-1 timing math telegraphs CPT → OPT → H-1B lottery friction.
- **MS AI/ML admissions:** see industry framing with no research output; reads as industry-track, not research-track.
- **F-1 filter:** ATS regex doesn't read prose. Need explicit availability text.

### Stack / repo conventions

- Next.js 16, React 19, Tailwind v4, motion + gsap, TS strict — keep all of this.
- No shadcn, no MagicUI installed yet. Adding shadcn for Button primitive + optional MagicUI for single hero effect is approved.
- Repo discipline ("no invented facts, placeholder-safe, truth-before-polish") is a strength — preserve it.

---

## 2) New Information Architecture

The site is a **closing document**, not an opening one. Its job is to confirm a yes that has already started forming off-site (LinkedIn, referral, application packet). Optimize for the 30-second confirmation read, not the 5-minute exploration.

| # | Section | Job | Why it serves the audiences |
|---|---------|-----|-----------------------------|
| 1 | **Hero / Identity** | Answer "who, what, where" in 5 seconds | Big Tech: instant signal. MS: name + school + role. F-1: availability line. All: name + face. |
| 2 | **Now (HypeOn)** | Quantified proof of current work | Big Tech: industry signal + metrics. MS: shows operator → researcher transition. Quant: CS+Finance + named startup. |
| 3 | **HypeOn Case Study** *(`/work/hypeon`)* | One shipped system with metrics, anonymized as needed | Replaces hand-waving. Most-converting page. Linkable in cold emails. |
| 4 | **AI/ML Project** *(public repo)* | Public proof you can ship retrieval / embeddings / evals / fine-tuning | MS-admissions deal-breaker. Also AI lab signal. |
| 5 | **Selected Work** | Tight grid — 3 projects max, no padding | Each must earn its slot with a public link, screenshot, or metric. |
| 6 | **Research / Field Notes** *(`/research`)* | Papers read, reproductions, professor interests, MS targets | Pure MS / TA-RA signal. Also signals seriousness to AI labs. |
| 7 | **About / Background** | Compressed bio | Humanizes after evidence is in. |
| 8 | **CV** *(`/cv` route)* | One-click recruiter shortcut | Replaces the resume PDF link. Big Tech recruiters need a URL they can paste into a tracker. |
| 9 | **Contact + Work Auth** | Email, LinkedIn, GitHub, US location, work-auth line | F-1 signaling done in one place, audience-appropriate. |

**Removed:** poetic "About" prose section (current `HeroAbout.tsx` copy) moved to `/about` or cut.

**Audience read paths:**
- **Big Tech recruiter (8-30s):** 1 → 2 → 8 → close.
- **AI lab recruiter (30s-2min):** 1 → 2 → 4 → 6 → 3.
- **MS admissions reader (2-5min):** 1 → 6 → 3 → 4 → 7.
- **F-1 filter:** ATS-friendly hero text + work-auth line in contact.
- **Quant firm:** 1 → 2 → 4 → /cv.

---

## 3) Hero Positioning — Decision Locked

**Decision:** Hybrid variant — work-anchored headline with operator → researcher trajectory in subhead.

**Final copy:**
> **Eyebrow:** PAVAN RATHOD · CS + FINANCE · CSULB '28 · LOS ANGELES
> **Headline:** I build retrieval and attribution systems for D2C brands.
> **Subhead:** Software Engineer Intern at HypeOn AI. Open to Summer 2027 SWE internships. Applying to MS CS (AI/ML) for Fall 2028.
> **Primary CTA:** See the work → `/work/hypeon`
> **Secondary CTA:** View on GitHub → github profile (swap to `/research` in Week 6)

Full spec: see `docs/decisions/001-hero.md`.

---

## 4) Project Curation

### Keep
- **HypeOn case study** *(new, `/work/hypeon`)* — anonymized as needed. One shipped system, stack, your specific contribution, 3 real metrics.
- **Skyways Hotel** — only once it ships (May 2026) with live URL. Until then, demote to one-liner under "Current builds."

### Cut from featured
- **The portfolio itself** — recursive, not a project. Mention in footer.
- **VidSnapAI** — Flask + ffmpeg, private repo, not an AI artifact. Move to `/archive` or delete.

### Gap-fill projects (priority order)

**P1 — Shipped AI/ML Repo with Public Teardown** *(Weeks 3-4)*
- Smallest viable retrieval-or-fine-tuning project. Options: RAG over public product-review corpora with eval harness; ad-creative classifier fine-tuned on Meta Ad Library data; reproduction of a recent retrieval paper with new evals.
- Proves: can ship ML systems end-to-end. Closes the MS AI/ML "no research" wound.
- Deliverables: public GitHub repo, README written like a teardown, hosted demo if cheap, ~600-word explainer on `/research`.

**P2 — `/research` page with reading + reproduction log** *(Week 6)*
- Curated list of 5-10 papers read this semester, one reproduction attempt, list of 6-12 professors whose labs you're targeting, your specific interests.
- Proves: research-mindset. Lets target faculty see themselves on the page when you cold-email.

**P3 — One written essay (Field Note)** *(Weeks 8-9)*
- 1000-word teardown of something you actually understand from HypeOn (anonymized) or your AI/ML project.
- Proves: writing samples — research-application gold. Also recruiter-shareable.

**P4 — Optional GEO Demand Atlas mini-version** — skip unless cofounder sign-off explicit; flagged as IP/capacity landmine.

---

## 5) Tech Stack Decision

**Verdict: STAY on current stack. Do NOT migrate.**

Current: Next.js 16, React 19, Tailwind v4, motion + gsap, TS strict.

**Why stay:** Migration to shadcn/ui + MagicUI for everything = 15-25 hours of zero recruiter-visible value. Bottleneck is content (HypeOn case study, ML repo, research page), not components.

**Targeted additions worth their weight:**
- **shadcn `Button` primitive** — for consistent CTA styling. Install via shadcn CLI, do not migrate everything.
- **MagicUI `AnimatedGradientText`** — single use, on the word "retrieval" in hero only.
- **MDX (~2 hrs)** — only if committing to writing case study + Field Notes in repo. Otherwise skip.
- **`next-seo` or hand-rolled metadata (~1 hr)** — for `/research`, `/work/hypeon`, `/cv` route metadata.

**Forbidden additions:** wholesale shadcn migration, three.js, lenis, framer-motion, next-themes.

---

## 6) Phased Execution Plan

Time budget: ~10-15 hrs/week of nights + weekends.

**Application calendar anchors:**
- Big Tech Summer 2027 internships open: ~July-Aug 2026
- Quant fall recruiting opens: ~Aug-Sept 2026
- MS Fall 2028 apps open: ~Sept 2027 — **LOR-eligible research relationship must be warm 12+ months earlier**

### Week 0 — Identity Triage (this week, <2 hrs)

- [x] Title decision: "Software Engineer Intern" across all surfaces. No "Founding Engineer."
- [ ] Make the title identical across: pavanrathod.com (`NowSection.tsx`), LinkedIn headline + experience, GitHub bio, resume, email signature.

### Week 1 — Faculty Outreach Starts (highest-EV action)

- [ ] Identify 5 CSULB CS faculty + 2 nearby UC faculty whose research overlaps with your interests (ML, retrieval, NLP, applied AI, ML systems). Read one recent paper from each.
- [ ] Send 7 cold emails. One paragraph, specific reference to their work, concrete proposal.
- [ ] Begin LeetCode cadence: 5 problems/week.

### Week 2 — Site Identity Layer Fix (4-6 hrs)

- [ ] Hero rewrite per `docs/decisions/001-hero.md`.
- [ ] Add real headshot above the fold.
- [ ] Above-fold links: GitHub, LinkedIn, Resume.
- [ ] Fix `NowSection.tsx` title.
- [ ] Reconcile `src/data/site.ts` with rendered components (or formally deprecate).

### Week 3 — HypeOn Case Study (6-8 hrs)

- [ ] Draft 500-800 word case study at `/work/hypeon`. Structure: problem → what you shipped → stack → 3 metrics → 1 anti-pattern → what's next.
- [ ] Run draft past HypeOn cofounders for IP / NDA / anonymization sign-off. **Do not publish until sign-off.**
- [ ] Add architecture diagram (Excalidraw or mermaid). One image, no more.
- [ ] Link from hero and `NowSection`.

### Week 4 — Ship the AI/ML Repo (10-12 hrs)

- [ ] Build smallest viable ML project. Eval harness is non-negotiable — write evals first.
- [ ] Public GitHub repo. README is half the artifact.
- [ ] If hosting is cheap, add minimal demo.
- [ ] Link from new `Selected Work` section.

### Week 5 — Portfolio Surgery (4-5 hrs)

- [ ] Cut VidSnapAI and "the portfolio itself" from featured.
- [ ] Keep HypeOn case study + AI/ML repo + Skyways (one-liner only).
- [ ] Replace poetic `HeroAbout` block with tight 3-bullet *Selected Wins* strip or remove.

### Week 6 — `/research` Page (4-5 hrs)

- [ ] Build `/research` route. Sections: papers reading, reproductions in progress, professors to work with, MS targets, research interests.
- [ ] Link from main nav and `/cv`.
- [ ] Swap hero secondary CTA from `View on GitHub` to `Research direction` → `/research`.

### Week 7 — `/cv` Route + Resume Polish (3 hrs)

- [ ] Build `/cv` route — HTML version of resume, scannable, copy-paste-friendly.
- [ ] Update `/resume.pdf` to current resume. Add `Last updated: <date>`.
- [ ] Verify resume / LinkedIn / site say identical things about HypeOn, dates, titles.
- [ ] Work-auth disclosure lives here: "Work authorization: F-1 (CPT eligible); OPT eligible May 2028; will require H-1B sponsorship 2029+."

### Week 8 — Discoverability + Polish (4 hrs)

- [ ] OG image with name + face + headline. Open Graph metadata on every route.
- [ ] Submit to Google Search Console. Verify indexing.
- [ ] Lighthouse 95+ on all four scores. Mobile QA.
- [ ] `Last shipped: <date>` strip in footer.

### Weeks 9-10 — Field Note #1 + Referral Outreach (6-8 hrs)

- [ ] Write Field Note #1 (1000 words). Publish at `/notes/[slug]`.
- [ ] Begin referral pipeline: 5 cold outreach messages per week.
- [ ] Apply to Big Tech Summer 2027 internships as they open.

### Weeks 11-12 — Application Sprint + Field Note #2

- [ ] Apply to quant fall recruiting.
- [ ] LeetCode ~10/week.
- [ ] Field Note #2 (1000 words).
- [ ] Begin MS application packet outline — schools, deadlines, LOR pipeline.

### Continuing beyond Week 12
- Faculty research role active (target: started by end of summer 2026, paper draft by spring 2027, LOR-grade relationship by summer 2027).
- Field Note cadence: one per month.
- LeetCode: 5-10/week ongoing.
- Quant + Big Tech Summer 2027 interview cycle.
- MS apps Sept-Dec 2027.

---

## 7) F-1 / Sponsorship Signaling

### Principles
1. **Consistency beats positioning.** Title identical across LinkedIn, GitHub, resume, site.
2. **Work-auth disclosure is a signal, not a confession.** Worded right, filters out wrong opportunities and accelerates right ones.
3. **The site is one of many surfaces.** Don't hide what a recruiter will ask in screen #1.

### Where to surface work-auth
- **Hero subline:** *"Open to Summer 2027 SWE internships."* — neutral availability signal.
- **Contact section:** "Based in Los Angeles · F-1 (CPT eligible) · open to relocation / remote / hybrid · available [date]."
- **`/cv` route:** full disclosure: "Work authorization: F-1 (CPT eligible); OPT eligible May 2028; will require H-1B sponsorship 2029+."
- **Resume PDF:** match `/cv` exactly.

### Where NOT to surface it
- Hero headline itself — lead with work, not status.
- Above-fold ATS-scannable text using "needs sponsorship" phrasing.
- HypeOn case study or project pages.

### F-1 timing signal counters
- US-based portfolio domain (`pavanrathod.com`) hosted on Vercel — already good.
- "Open to relocation" in contact.
- Explicit "Available [date]" per cycle.

### Quant / applied-research lane
The Finance minor surfaces in hero eyebrow (`CS + FINANCE`) so quant audience sees it in first scan. Add "Quant interest" line to `/cv` for these applications.

---

## 8) Risks & Tripwires

- **HypeOn case study without cofounder sign-off.** Single biggest IP/NDA risk. Get written approval before publish.
- **Site refresh becomes the procrastination.** If at Week 4 the AI/ML repo isn't started, drop site work for 2 weeks and ship the repo.
- **Faculty cold-emails go unanswered.** Send 7, expect 2-3 to respond. If zero by Week 4, escalate.
- **GEO Demand Atlas idea seduces you back.** 400-hour project in 150-hour budget. Postpone to summer 2026 or skip.

---

## 9) Verification — End of Week 8 Success Criteria

1. **8-second test.** Stranger landing on site can answer "what does this person do?" in 10 seconds.
2. **90-second cross-check.** LinkedIn, GitHub, resume, site all show same title, dates, school.
3. **One real metric.** HypeOn case study has at least 3 verifiable metrics.
4. **One public AI/ML repo.** GitHub repo with README + evals + 1+ commit/week for last month.
5. **`/research` page live.** Papers, reproductions, professor interests, MS targets.
6. **Faculty pipeline.** At least one professor reply leading to real conversation or trial task.
7. **Lighthouse 95+** on Performance / Accessibility / Best Practices / SEO.
8. **No "PLACEHOLDER" strings in production.** `git grep -n PLACEHOLDER src/` returns nothing.

If any of (1)-(5) is missing by Week 8, plan is failing. Rebudget and cut Field Notes / Atlas / animation polish to get to (1)-(5) first.

---

## 10) Critical Files (for execution session)

- `src/components/now/NowSection.tsx` — title fix (Week 0).
- `src/components/hero/Hero.tsx` — copy rewrite per `docs/decisions/001-hero.md` (Week 2).
- `src/components/hero/HeroAbout.tsx` — replace or remove (Week 5).
- `src/components/portfolio/PortfolioSection.tsx` — surgery (Week 5).
- `src/app/page.tsx` — section ordering per §2.
- `src/data/site.ts` — reconcile or deprecate (Week 2).
- `src/app/work/hypeon/page.tsx` — new (Week 3).
- `src/app/research/page.tsx` — new (Week 6).
- `src/app/cv/page.tsx` — new (Week 7).
- `public/resume.pdf` — refresh (Week 7).
- `CLAUDE.md` / `AGENTS.md` — already good; do not relax "no invented facts" rule.

---

## 11) One Thing To Do First

**This week, before anything else:** make the "Software Engineer Intern" title identical across LinkedIn, GitHub bio, resume, and `src/components/now/NowSection.tsx`. One hour of work. Every other improvement is noise amplified on a flagged identity until this is fixed.

---

*Last updated: 2026-05-23*
*Owner: Pavan Rathod*
