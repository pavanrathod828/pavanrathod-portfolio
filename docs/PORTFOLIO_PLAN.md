# PORTFOLIO_PLAN.md — pavanrathod.com Refresh

> Synthesized from a 5-advisor LLM Council session (Contrarian, First Principles, Expansionist, Outsider, Executor) with anonymized peer review. Save this file as `PORTFOLIO_PLAN.md` and load into a Claude Project.

---

## Context

Pavan Rathod — F-1 visa CS undergrad at CSULB (grad Spring 2028, Finance minor), self-described **Founding Engineer at HypeOn AI** (D2C competitive-intel SaaS, SF — Ad Intelligence, ROAS Attribution, Review Intelligence, GEO Demand Mapping). One portfolio site (pavanrathod.com) needs to serve multiple high-stakes audiences in parallel:

1. **Big Tech / AI lab recruiters** (Google, Meta, MSFT, Amazon, Apple, Nvidia, Anthropic, OpenAI) — Summer 2026/2027 internships and new-grad — needs F-1 sponsorship.
2. **MS CS (AI/ML) admissions** for Fall 2028 entry — UC system (UCLA/UCSD/UCI/UCD/UCR/Berkeley), CA privates (Stanford/Caltech/USC), Illinois cluster (UIUC, UChicago, Northwestern, UIC, IIT) — needs scholarship / TA-RA funding.
3. **The international-applicant filter** that screens F-1 candidates silently across both pipelines.
4. **(New, surfaced by council)** Quant / applied-research firms — Jane Street, Two Sigma, Citadel, Jump, Hudson River — auto-sponsor, value CS+Finance + Founding Engineer narrative.

**Stakes:** ~$200K scholarship gap for MS, sponsorship-eligible role, AI lab pipeline credibility, ~12 weeks active runway before the 2026 application cycles open. Fall 2028 MS apps open ~Sept 2027 (18 months out) — but the **LOR-eligible faculty relationship must already be warm by then**, which makes "this semester" the actual critical path, not "12 weeks."

**Why a refresh now:** The current site (live, audited) does not serve any of these audiences. It actively damages two of them.

---

## 1) Audit — What's Outdated, Weak, Generic, or Actively Hurting

### Identity layer (highest-severity issues)

- **Title contradiction.** Self-description: "Founding Engineer at HypeOn AI." Live site (`src/components/now/NowSection.tsx`): "SOFTWARE ENGINEER INTERN · SAN FRANCISCO." Recruiters and admissions readers cross-check 4 surfaces (LinkedIn / GitHub / resume / site) in <90 seconds. Mismatch reads as title-inflation, which for an F-1 candidate is closer to terminal than for a citizen.
- **No name or face above the fold.** Hero shows "CS STUDENT / CSULB '28" + a poetic headline. A stranger doesn't know who is talking to them in the first 8 seconds.
- **No work-authorization disclosure.** Tag-team risk: hiding it wastes recruiter time at auto-sponsoring firms (Apple, Nvidia), exposing it raw filters you out of 60% of startups. Today the site does neither — invisible signal.

### Content layer

- **Zero AI/ML artifact.** No HypeOn case study. No public ML/RAG/LLM repo. No demo. No metric anywhere on the page. For MS AI/ML admissions at the target schools, **you are not in the pile** without one. A Flask + ffmpeg pipeline (VidSnapAI) does not count.
- **`src/data/site.ts` is desynced from the rendered page.** The data file references projects (Skyways, VidSnapAI, the portfolio itself) but the rendered page (`src/app/page.tsx`) uses different section components (`Hero`, `HeroAbout`, `NowSection`, `SkywaysSection`, `PortfolioSection`, `LbtSection`, `ContactSection`). Single source of truth has been quietly abandoned.
- **Hero copy is poetic, not declarative.** "Software for the people who actually use it." reads well but defers the credibility answer. Big Tech recruiters close the tab before they get to the proof.
- **Featured projects don't signal what audiences need.**
  - Skyways Hotel — booking platform, in dev, launches May 2026, private repo, no demo. Currently the strongest signal, but unverifiable.
  - The portfolio itself — recursive, mildly impressive, weak as a project.
  - VidSnapAI — Flask + ffmpeg, private repo. Not an AI project despite the name.
- **No research signal.** No papers read, no reproductions, no professor interests, no TA experience, no `/research` route.
- **No GitHub linkage to any actual work.** GitHub username `pavanrathod828` is linked but there is no visible substantive repo from the site.

### Audience-specific damage

- **Big Tech recruiters:** see no code, no resume signal, no metrics; F-1 timing math ("CSULB '28" eyebrow) telegraphs CPT → OPT → H-1B lottery in 2028, killing most new-grad pipelines that hire in fall.
- **MS AI/ML admissions:** see "industry SaaS founding engineer" framing with no research output. Admissions reads this as *industry-track, not research-track* — actively works against funded admits.
- **F-1 filter:** ATS regex doesn't read prose. Without a US phone, "available [date]," or work-auth checkbox, the filter doesn't even pass you through to a human.

### Stack / repo conventions

- `motion` + `gsap` both present (CLAUDE.md notes `gsap` is approved only for hero pin + parallax scrubs). Working as intended.
- No shadcn, no MagicUI, no MDX, no tests, no Playwright. Repo discipline ("no invented facts, placeholder-safe, truth-before-polish") is a strength — keep it.

---

## 2) New Information Architecture

The site is a **closing document**, not an opening one. Its job is to confirm a yes that has already started forming off-site (LinkedIn, referral, application packet). Optimize for the 30-second confirmation read, not the 5-minute exploration.

| # | Section | Job | Why it serves the audiences |
|---|---------|-----|-----------------------------|
| 1 | **Hero / Identity** | Answer "who, what, where" in 5 seconds | Big Tech: instant signal. MS readers: name + school + role. F-1: work-auth line. All: name + face. |
| 2 | **Now (HypeOn)** | Quantified proof of current work | Big Tech: industry signal + metrics. MS: shows operator → researcher transition. Quant: Founding Engineer + Finance minor in same view. |
| 3 | **HypeOn Case Study** *(new — `/work/hypeon`)* | One shipped system with metrics, anonymized as needed | Replaces hand-waving. Single most-converting page. Linkable in cold emails. |
| 4 | **AI/ML Project** *(new — featured repo)* | Public proof you can ship retrieval / embeddings / evals / fine-tuning | The MS-admissions deal-breaker. Also AI lab signal. |
| 5 | **Selected Work** | Tight grid — 3 projects max, no padding | Each must earn its slot with a public link, screenshot, or metric. |
| 6 | **Research / Field Notes** *(new — `/research`)* | Papers read, reproductions, professor interests, MS targets | Pure MS / TA-RA signal. Also signals seriousness to AI labs. |
| 7 | **About / Background** | Compressed bio | Humanizes after evidence is in. |
| 8 | **CV** *(new route — `/cv`)* | One-click recruiter shortcut | Replaces the resume PDF link. Big Tech recruiters need a URL they can paste into a tracker. |
| 9 | **Contact + Work Auth** | Email, LinkedIn, GitHub, US location, work-auth line | F-1 signaling done in one place, audience-appropriate. |

**Removed:** the poetic "About" prose section (`HeroAbout.tsx` current copy) is moved to `/about` or cut entirely. Manifesto is unreliable signal for recruiter/admissions audiences in 8 seconds.

**Justification per audience:**

- **Big Tech recruiter (8-30s read):** sections 1 → 2 → 8 → close. They need name, school, current role, sponsorship line, resume link. Everything else is bonus.
- **AI lab recruiter (30s-2min read):** sections 1 → 2 → 4 → 6 → 3. They want to see one substantive ML repo and writing that shows you think about systems, not just demos.
- **MS admissions reader (2-5min read):** sections 1 → 6 → 3 → 4 → 7. The `/research` page is the single most important new asset for funded admits.
- **F-1 filter:** ATS-friendly hero text (name, role, location, available date) + work-auth line in contact.
- **Quant firm:** sections 1 → 2 → 4 → /cv. The Finance minor must surface in section 1's eyebrow text, not hide in `/about`.

---

## 3) Hero Positioning Copy — Three Options

All three include name above the fold, eyebrow with role/school/location, and a single declarative headline. Avoid abstract poetry — the manifesto belongs lower on the page if at all.

### Option A — Conservative (recommended for first ship)
> **Eyebrow:** PAVAN RATHOD · CS + FINANCE · CSULB '28 · LOS ANGELES
> **Headline:** Software engineer building competitive-intelligence systems for D2C brands.
> **Subline:** Currently at HypeOn AI (San Francisco). Available for SWE internships Summer 2026 and Summer 2027. Eligible for CPT; open to OPT in 2028.
> **CTA pair:** [See HypeOn case study] [Resume]

*Why:* Names the work, names the school, names the timing, declares work-auth without leading with it. Safe for every audience; passes the recruiter 8-second test.

### Option B — Operator (recommended once HypeOn case study + ML repo ship)
> **Eyebrow:** PAVAN RATHOD · FOUNDING ENGINEER, HYPEON AI · CS + FINANCE @ CSULB
> **Headline:** I build the systems behind D2C competitive intelligence.
> **Subline:** Ad Intelligence · ROAS Attribution · Review Intelligence · GEO Demand Mapping. CS undergrad applying for MS AI/ML, Fall 2028.
> **CTA pair:** [HypeOn case study] [Research notes]

*Why:* Leads with the strongest professional signal — but only honest if the "Founding Engineer" title is verified (see §7) and the case study with metrics is shipped. Otherwise this option amplifies the credibility risk identified by the council.

### Option C — Bold / Publication frame (defer until at least one ML artifact and one essay are live)
> **Eyebrow:** PAVAN RATHOD · FIELD NOTES FROM D2C AI
> **Headline:** Most ad-attribution models lie. I write about the ones that don't.
> **Subline:** Founding Engineer at HypeOn. Building production AI for D2C competitive intelligence. Currently writing about retrieval, evals, and demand modeling.
> **CTA pair:** [Latest essay] [HypeOn case study]

*Why:* Compounding play (Expansionist angle). Powerful if executed — turns the site into a publication that compounds authority. Premature without the artifacts.

**Recommendation:** Ship Option A in Week 2. Upgrade to Option B in Week 5 only if the title is verified consistent and the HypeOn case study is live. Reserve Option C for after Week 12.

---

## 4) Project Curation — Keep / Cut / Gap

### Keep
- **HypeOn case study** *(new, replaces "Now" hand-waving)* — anonymized as needed. Must include one shipped system, the stack, your specific contribution, and 3 real metrics.
- **Skyways Hotel** — *only* once it ships (May 2026) with a live URL. Until then, demote from "featured" to a one-liner under "Current builds."

### Cut from featured
- **The portfolio itself** — recursive, not a project. Mention in footer.
- **VidSnapAI** — Flask + ffmpeg, private repo, not an AI artifact. Move to `/archive` or delete entirely.

### Gap-fill projects (in priority order)

**P1 — Shipped AI/ML Repo with Public Teardown** *(weeks 3-4)*
- *What:* Smallest viable retrieval-or-fine-tuning project. Options: (a) RAG over public product-review corpora with eval harness; (b) ad-creative classifier fine-tuned on Meta Ad Library data; (c) reproduction of a recent retrieval paper with new evals.
- *What it proves:* You can ship ML systems end-to-end. Closes the MS AI/ML "no research" wound.
- *Deliverables:* Public GitHub repo, README written like a teardown, hosted demo if cheap, one written explainer (~600 words) on `/research`.

**P2 — `/research` page with reading + reproduction log** *(week 6)*
- *What:* Curated list of 5-10 papers read this semester, one reproduction attempt, list of 6-12 professors whose labs you're targeting for MS, your specific interests (e.g., "retrieval evaluation," "low-resource fine-tuning," "geospatial ML for commerce").
- *What it proves:* Research-mindset signal. Lets target faculty see themselves on the page when you cold-email.

**P3 — One written essay (Field Note) on D2C AI** *(week 8-9)*
- *What:* A 1000-word teardown of something you actually understand from HypeOn (anonymized) or your AI/ML project. Title example: *"Why most review-mining models fail on beauty SKUs"* or *"Geographic priors that beat GPT-4 on demand forecasting."*
- *What it proves:* Writing samples are research-application gold. Also recruiter-shareable.

**P4 — (Optional, only if time allows) GEO Demand Atlas mini-version**
- *What:* The Expansionist's flagship idea, drastically scoped down — a single static interactive map for one US category using public data (Google Trends + Reddit), no weekly refresh, no LLM pipeline. **Critical constraint: zero HypeOn methodology, zero internal IP, written cofounder sign-off.** If you can't get sign-off, skip.
- *What it proves:* Product taste + geospatial ML + visual artifact.
- *Council note:* The full Atlas concept was flagged as a 400-hour project in a 150-hour budget and an IP landmine. Do not attempt the maximalist version.

---

## 5) Tech Stack Decision

### Verdict: **STAY** on the current stack. Do NOT migrate.

Current: Next.js 16, React 19, Tailwind v4, motion + gsap, TS strict.

**Why stay:**
- Migration to shadcn/ui + MagicUI = 15-25 hours minimum for re-skinning a site that already looks credible. Zero recruiter-visible value for the cost.
- The bottleneck is **content** (HypeOn case study, ML repo, research page), not components or animation.
- Tailwind v4 + motion + gsap already supports every interaction the new IA needs.
- The repo already has strong discipline: `useReducedMotion()` gating, focus rings, `prefers-reduced-motion`, placeholder-safe content model, WCAG AA. Don't throw this away.

**On Playwright MCP:**
- Playwright MCP is useful as a *tool you use* (layout QA, screenshot diffs during the refresh), not as a stack decision. If you want to install it locally to verify visual changes during this refresh, fine — but it doesn't belong in the production stack.

**Targeted additions worth their weight:**
- **MDX** (~2 hrs) — only if you commit to writing the case study and Field Notes inside the repo. Otherwise skip.
- **`next-seo` or hand-rolled metadata** (~1 hr) — for `/research`, `/work/hypeon`, `/cv` route metadata.
- **A simple project-card primitive** — there's already `Card.tsx`. Reuse it. No new dep needed.

**Forbidden additions (per council):**
- shadcn/ui migration — re-skin churn, no audience value.
- MagicUI — eye-candy, not signal.
- `three`, `lenis`, `framer-motion`, `next-themes` — already disallowed by `CLAUDE.md`. Keep them out.

---

## 6) Phased Execution Plan

Time budget: ~10-15 hrs/week of nights + weekends.

**Application calendar anchors:**
- Big Tech Summer 2027 internships open: ~July-Aug 2026 (rolling through fall)
- Quant fall recruiting opens: ~Aug-Sept 2026
- MS Fall 2028 apps open: ~Sept 2027 — but **LOR-eligible research relationship must be warm 12+ months earlier** = this semester is the critical path
- Big Tech new-grad apps for Spring 2028 grads: ~July-Sept 2027

### Week 0 — Identity Triage (this week, <2 hrs)

- [ ] Resolve the "Founding Engineer" title with HypeOn cofounders. Confirm CPT documentation supports the role. If anything is ambiguous, downgrade to "Software Engineer (CPT)" — consistency is non-negotiable.
- [ ] Make the title identical across: pavanrathod.com (`NowSection.tsx`), LinkedIn headline + experience, GitHub bio, resume, email signature. Same day. This is the single most leveraged hour of the quarter.

### Week 1 — Faculty Outreach Starts (highest-EV action)

- [ ] Identify 5 CSULB CS faculty + 2 nearby UC faculty whose research overlaps with your interests (ML, retrieval, NLP, applied AI, ML systems). Read one recent paper from each.
- [ ] Send 7 cold emails. Format: one paragraph, specific reference to their work, concrete proposal (e.g., "I'd like to contribute on [their specific topic]; I'd start by [concrete first task]; can I show you a 200-word proposal?"). No portfolio link yet — link comes after the site refresh.
- [ ] Begin LeetCode cadence: 5 problems/week, never stops.

### Week 2 — Site Identity Layer Fix (4-6 hrs)

- [ ] Hero rewrite to Option A copy (name + face above fold, declarative headline, work-auth subline).
- [ ] Add name and a real headshot above the fold (mobile + desktop).
- [ ] Above-fold links: GitHub, LinkedIn, Resume.
- [ ] Add a single F-1 work-auth line: *"Eligible for CPT; open to OPT in 2028. Available [date]."*
- [ ] Fix `NowSection.tsx` title to match Week 0 decision.
- [ ] Reconcile `src/data/site.ts` with rendered components (or formally deprecate `src/data/site.ts` and delete legacy `/sections` components — pick one source of truth).

### Week 3 — HypeOn Case Study (6-8 hrs)

- [ ] Draft 500-800 word case study at `/work/hypeon`. Structure: problem → what you shipped → stack → 3 metrics → 1 anti-pattern (something that failed) → what's next.
- [ ] Run draft past HypeOn cofounders for IP / NDA / anonymization sign-off. **Do not publish until sign-off.**
- [ ] Add architecture diagram (Excalidraw or mermaid). One image, no more.
- [ ] Link from hero and from `NowSection`.

### Week 4 — Ship the AI/ML Repo (10-12 hrs)

- [ ] Build the smallest viable ML project (pick from P1 in §4). Eval harness is non-negotiable — write evals first.
- [ ] Public GitHub repo. README is half the artifact: problem, approach, eval results (numbers), what failed, how to run.
- [ ] If hosting is cheap (Vercel/HF Spaces), add a minimal demo.
- [ ] Link to the repo from a new `Selected Work` section that replaces the current portfolio grid.

### Week 5 — Portfolio Surgery + Hero Upgrade (4-5 hrs)

- [ ] Cut VidSnapAI and "the portfolio itself" from featured. Keep HypeOn case study + AI/ML repo + Skyways (one-liner only).
- [ ] If Week 0 title is "Founding Engineer" and Week 3 case study is live, upgrade hero to **Option B**. Otherwise stay on Option A.
- [ ] Replace the poetic `HeroAbout` block with a tight 3-bullet *Selected Wins* strip (or remove and let evidence speak).

### Week 6 — `/research` Page (4-5 hrs)

- [ ] Build `/research` route. Sections: Papers I'm reading this term, Reproductions in progress, Professors I'd like to work with, MS targets, Research interests in one paragraph.
- [ ] Link from main nav and from `/cv`.
- [ ] By now, faculty cold-email responses are landing — update this page with the conversations that materialize.

### Week 7 — `/cv` Route + Resume Polish (3 hrs)

- [ ] Build `/cv` route — HTML version of resume, scannable, copy-paste-friendly for recruiter trackers.
- [ ] Update `/resume.pdf` to current resume. Add `Last updated: <date>`.
- [ ] Verify resume / LinkedIn / site say identical things about HypeOn, dates, titles.

### Week 8 — Discoverability + Polish (4 hrs)

- [ ] OG image with name + face + headline. Open Graph metadata on every route.
- [ ] Submit to Google Search Console. Verify indexing.
- [ ] Lighthouse 95+ on Performance / Accessibility / Best Practices / SEO. Mobile QA.
- [ ] Add `Last shipped: <date>` strip in footer.

### Weeks 9-10 — Field Note #1 + Referral Outreach (6-8 hrs)

- [ ] Write Field Note #1 (1000 words) on something you actually shipped at HypeOn or built in the AI/ML repo. Publish at `/notes/[slug]`.
- [ ] Begin referral pipeline: 5 cold outreach messages per week to engineers at Google/Meta/MSFT/Amazon/Apple/Nvidia/Anthropic/OpenAI/Jane Street/Two Sigma/Citadel. New site is the artifact link.
- [ ] Apply to Big Tech Summer 2027 internships as they open.

### Weeks 11-12 — Application Sprint + Field Note #2

- [ ] Apply to quant fall recruiting (Jane Street, Two Sigma, Citadel, Jump, Hudson River, Optiver).
- [ ] Continue LeetCode (now ~10/week).
- [ ] Field Note #2 (1000 words). Topic: something from research or AI/ML repo work.
- [ ] Begin building the MS application packet outline — schools, deadlines, who to ask for LORs (and whether each professor has signaled willingness).

### Continuing beyond Week 12

- Faculty research role active (target: started by end of summer 2026, paper draft by spring 2027, LOR-grade relationship by summer 2027).
- Field Note cadence: one per month.
- LeetCode: 5-10/week ongoing.
- Quant + Big Tech Summer 2027 interview cycle.
- MS apps Sept-Dec 2027.

---

## 7) F-1 / Sponsorship Signaling — Where (and Where Not) to Surface

### Principles

1. **Consistency beats positioning.** Whatever the title is on LinkedIn must match the site, resume, and GitHub. Cross-checking is automated at large firms.
2. **Work-auth disclosure is a signal, not a confession.** Worded right, it filters out the wrong opportunities and accelerates the right ones.
3. **The site is one of many surfaces.** Don't put on the site what you'd remove from a cover letter — but don't hide what a recruiter will ask in screen #1 anyway.

### Where to surface work-auth

- **Hero subline (Option A):** *"Eligible for CPT; open to OPT in 2028. Available [date]."* — neutral, recruiter-readable, doesn't trigger ATS "sponsorship" filters.
- **Contact section:** "Based in Los Angeles · F-1 (CPT eligible) · open to relocation / remote / hybrid · available [date]."
- **`/cv` route:** include "Work authorization: F-1 (CPT eligible); OPT eligible May 2028; will require H-1B sponsorship 2029+." This is the right venue for the full disclosure — recruiters who pull `/cv` are already at decision time.
- **Resume PDF:** match `/cv` exactly.

### Where NOT to surface it

- **Hero headline itself.** Don't lead with status. Lead with the work.
- **Above-fold ATS-scannable text** with phrases like "needs sponsorship" — that exact phrase is what gets filtered. Use "Eligible for CPT/OPT; will require sponsorship in 2029" instead.
- **HypeOn case study / project pages.** Project work is judged on the work.

### F-1 specific risk: the "Founding Engineer" title and USCIS

A peer reviewer flagged a real exposure: if the role is not on payroll with documented CPT, calling yourself "Founding Engineer" publicly could be read as unauthorized work. This is a visa-level risk, not just an HR risk. Action:

- Verify in writing with HypeOn cofounders that your role, hours, and title are consistent with your CPT documentation.
- If there's any gap, downgrade title to match the documented CPT role on the site, LinkedIn, and resume — today, not eventually.
- If in doubt, consult an immigration attorney for a 30-minute paid consult. Costs <$300, saves the visa.

### F-1 timing signal (subtle but real)

The "CSULB '28" eyebrow telegraphs to Big Tech new-grad pipelines that you're a Spring-2028 grad needing H-1B in 2029 — many programs front-load citizen/PR candidates. Counter-signals to deploy on the site:

- US phone number on the site (Torrance, CA already helps).
- "Open to relocation" in the contact section.
- "Available [date]" — explicit start date for each application cycle.
- US-based portfolio domain (`pavanrathod.com` is fine) hosted on Vercel (US infra) — already good.

### Quant / applied-research lane (the under-played card)

Jane Street, Two Sigma, Citadel, Jump, Hudson River, Optiver, IMC: **all auto-sponsor and value the CS+Finance + Founding Engineer signal.** The Finance minor must surface in the hero eyebrow (`CS + FINANCE`) so this audience sees it in the first scan. Add a "Quant interest" line to `/cv` for these applications.

---

## 8) Risks & Tripwires

- **Risk: HypeOn case study without cofounder sign-off.** Publishing internal methodology, customer counts, or unanonymized data without explicit sign-off is the single biggest IP/NDA risk in this plan. Get written approval before publish.
- **Risk: "Founding Engineer" claim outpaces documented CPT scope.** See §7. Visa-level exposure.
- **Risk: Site refresh becomes the procrastination.** First Principles' core warning. If at Week 4 the AI/ML repo isn't started, drop everything site-related for 2 weeks and ship the repo.
- **Risk: Faculty cold-emails go unanswered.** Send 7, expect 2-3 to respond, expect 1 to convert. If zero by Week 4, escalate — broaden to UC Long Beach Engineering faculty, Caltech postdocs, USC labs; or pivot to applied-research positions at a Bay-area lab via the HypeOn network.
- **Risk: GEO Demand Atlas idea seduces you back.** The council explicitly warned this is a 400-hour project in a 150-hour budget. If you start it, you will not finish anything else. Postpone to summer 2026 or skip.

---

## 9) Verification — How to Test This Plan End-to-End

The plan succeeds if, by end of Week 8, the following hold:

1. **8-second test.** A stranger landing on pavanrathod.com sees your name, face, current role, school, and one work-auth line above the fold. Test: send the URL to a friend not in tech and ask "what does this person do?" — they should answer correctly in 10 seconds.
2. **90-second cross-check.** LinkedIn, GitHub, resume, and site all show the same title, same dates, same school. Test: do the cross-check yourself with a stopwatch.
3. **One real metric.** HypeOn case study at `/work/hypeon` has at least 3 verifiable metrics. Test: read it aloud — does anything feel hand-wavy?
4. **One public AI/ML repo.** GitHub repo with README + evals + 1+ commit per week for the last month. Test: a stranger reading only the README should be able to run it.
5. **`/research` page live.** Lists papers, reproductions, professor interests, MS targets. Test: send to one of the cold-emailed professors as a follow-up.
6. **Faculty pipeline.** At least one professor reply leading to a real conversation or trial task. Test: calendar.
7. **Lighthouse scores 95+.** Performance / Accessibility / Best Practices / SEO. Test: `npm run build` + Lighthouse on the production URL.
8. **No "PLACEHOLDER" strings in production.** Repo convention. Test: `git grep -n PLACEHOLDER src/`.

If any of (1)-(5) is missing by Week 8, the plan is failing; rebudget and cut Field Notes / Atlas / animation polish to get to (1)-(5) first.

---

## 10) Critical Files (for execution session)

- `src/components/now/NowSection.tsx` — title fix (Week 0).
- `src/components/hero/Hero.tsx` — copy rewrite + name/face above fold (Week 2).
- `src/components/hero/HeroAbout.tsx` — replace with a tight wins-strip or remove (Week 5).
- `src/components/portfolio/PortfolioSection.tsx` — surgery (Week 5).
- `src/app/page.tsx` — section ordering per §2.
- `src/data/site.ts` — reconcile or deprecate (Week 2).
- `src/app/work/hypeon/page.tsx` — new (Week 3).
- `src/app/research/page.tsx` — new (Week 6).
- `src/app/cv/page.tsx` — new (Week 7).
- `public/resume.pdf` — refresh (Week 7).
- `CLAUDE.md` / `AGENTS.md` — already good; do not relax the "no invented facts" rule.

---

## One Thing To Do First

**This week, before anything else: resolve the "Founding Engineer" title across LinkedIn, GitHub, resume, and pavanrathod.com to one consistent designation backed by CPT documentation.** One hour of work. Every other improvement is noise amplified on a flagged identity until this is fixed.
