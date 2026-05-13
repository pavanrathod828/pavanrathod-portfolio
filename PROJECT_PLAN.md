# pavanrathod.com - Premium Animated Portfolio Project Plan

Owner: Pavan Rathod  
Primary domain: pavanrathod.com  
Primary goal: Build a premium, modern, animated portfolio website that demonstrates the kind of high-end web experience people associate with expensive agency-grade sites, while still being fast, accessible, maintainable, and truthful.

---

## 1. Project thesis

This should not be only a resume website. It should feel like a live product demo of your taste, technical skill, AI-native workflow, and ability to ship polished web experiences.

The site should communicate:

1. You can design and build modern animated websites.
2. You can use AI tools professionally, not randomly.
3. You have real projects, real skills, and a clear story.
4. You understand performance, accessibility, deployment, GitHub workflow, and product thinking.
5. Recruiters, professors, classmates, and clients can quickly understand what you do.

The premium positioning:

> "I build fast, animated, AI-assisted web experiences that feel expensive, but are engineered cleanly."

Do not copy the internet trend blindly. The goal is not to say "this is a $10,000 website." The goal is to make the website good enough that people understand why it could be worth that.

---

## 2. Recommended stack

Use this as the default stack unless there is a strong reason to change it.

### Core

- Framework: Next.js with the App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Animation: Motion / Framer Motion
- UI primitives: custom components first; optional shadcn/ui for accessible base components
- Icons: lucide-react
- Content: local JSON/MDX content files at first
- Deployment: Vercel connected to GitHub
- Domain: GoDaddy DNS pointed to Vercel

### Optional premium effects

Use carefully. Do not overload the site.

- GSAP for scroll choreography if Motion is not enough
- React Three Fiber / Three.js for one subtle 3D hero object or background
- Lenis for smooth scrolling, only if it does not hurt accessibility
- MDX for case studies or technical writing
- View Transitions API where supported

### Why Vercel first

Vercel is the best fit for a Next.js portfolio with previews, easy GitHub integration, and custom domains. GitHub Pages is still a useful backup, but it is better for static sites. If we choose GitHub Pages, we should build the site as a static export and avoid server-only Next.js features.

Official references:

- Codex IDE extension: https://developers.openai.com/codex/ide
- Codex CLI: https://github.com/openai/codex
- Claude data export: https://support.claude.com/en/articles/9450526-how-can-i-export-my-claude-data
- Vercel custom domains: https://vercel.com/docs/domains/working-with-domains/add-a-domain
- GitHub Pages custom domain: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- GoDaddy DNS records: https://www.godaddy.com/help/manage-dns-records-680

---

## 3. Website concept

Working title:

# Pavan Rathod - AI-Native Developer Portfolio

Visual direction:

- Dark, premium, cinematic base theme
- Clean typography
- Bright accent gradients, but not too many colors
- Smooth scroll sections
- Glass / metal / grid textures
- Cursor-reactive lighting in hero section
- Subtle code-terminal visuals
- Project cards that feel interactive
- Strong mobile experience, not desktop-only

Possible tagline options:

1. "Building animated web experiences with code, AI, and product thinking."
2. "Computer science student turning ideas into polished web products."
3. "I build modern, animated, AI-assisted websites and software projects."
4. "Frontend, full-stack, and AI-assisted development - shipped with taste."

Best first tagline:

> "I build modern, animated web experiences with code, AI, and product thinking."

---

## 4. Site map

### 1. Home

Primary one-page landing experience with anchored sections.

Sections:

1. Hero
2. About / origin story
3. Featured projects
4. Skills and tools
5. AI workflow / build process
6. Resume highlights
7. Timeline / experience / education
8. Testimonials or proof, if available
9. Contact CTA

### 2. Projects

Dedicated page for all projects.

Each project should eventually have:

- Project name
- Live demo link
- GitHub link
- Problem statement
- Tech stack
- Screenshots or demo video
- What you personally built
- Challenges solved
- What you learned
- Measurable impact, if available

### 3. Case study pages

For 2-3 best projects, create deeper case studies:

- `/projects/project-name`
- Hero image or video
- Problem
- Constraints
- Design decisions
- Implementation details
- Result
- Lessons learned

### 4. Resume page

- Clean web version of resume
- Download PDF button
- LinkedIn button
- GitHub button
- Email button

### 5. Lab page

This is the premium differentiator.

Possible content:

- Animated UI experiments
- AI-built components
- Mini demos
- Before/after redesigns
- Interactive cards, terminals, shaders, micro-interactions

This makes the site feel like a living portfolio instead of a static resume.

### 6. Optional blog/notes page

Good for SEO and credibility.

Post ideas:

- "How I built my animated portfolio with Next.js, Codex, and Vercel"
- "What I learned building with AI coding agents"
- "CS student project breakdown: from idea to deployed app"

---

## 5. Content sources

We will collect content from:

1. Resume
2. LinkedIn profile
3. GitHub repositories
4. Claude conversations/export
5. ChatGPT planning conversations
6. Personal project notes
7. Screenshots, project images, and demo videos

Important privacy rule:

Raw exports from Claude, LinkedIn, or private documents should never be committed to GitHub. Keep raw files in a private local folder that is ignored by Git.

Recommended private folders:

```txt
private/
  raw/
    claude-export/
    resume/
    linkedin/
  processed/
    portfolio-source-brief.md
    portfolio-content.json
```

Add this to `.gitignore`:

```gitignore
private/
*.zip
*.csv
*.jsonl
*.mbox
*.pdf
!public/resume.pdf
```

Only publish reviewed, cleaned, intentional content.

---

## 6. Claude data import workflow

Goal: Use your Claude history to discover useful details about your work, interests, projects, voice, and technical strengths. Do not automatically publish raw Claude data.

### Step A - Export Claude data

On Claude web or Claude Desktop:

1. Open Claude.
2. Click your initials in the lower-left corner.
3. Open Settings.
4. Go to Privacy.
5. Click Export data.
6. Wait for the email download link.
7. Download the export locally.
8. Put it in `private/raw/claude-export/`.

### Step B - Summarize safely

Do not upload sensitive files publicly. Use Claude itself, ChatGPT, or a local script to produce a clean summary.

The output we want is:

```txt
private/processed/portfolio-source-brief.md
```

Then convert the final reviewed content into:

```txt
src/content/profile.ts
src/content/projects.ts
src/content/site.ts
```

---

## 7. Master prompt for Claude to extract portfolio data

Use this inside Claude after you provide it your resume, LinkedIn text, project notes, and optionally selected Claude export content. Do not ask Claude to invent missing facts.

```text
You are helping me build the source content for my personal portfolio website, pavanrathod.com.

Your task is to analyze only the information I provide in this chat: my resume, LinkedIn profile text, project notes, GitHub/project descriptions, and selected Claude conversation/export content.

Important rules:
- Do not invent facts.
- If something is missing, write "Unknown" or add it to a "Needs confirmation" list.
- Do not include private, sensitive, embarrassing, irrelevant, or account-specific information.
- Do not expose raw conversation text unless I explicitly mark it as safe to publish.
- Focus on information useful for a public professional portfolio.
- Make me sound polished but still truthful and natural.
- Prefer concrete proof over generic claims.

Deliver the result in the structure below.

1. Identity summary
- Full name:
- Preferred display name:
- Current role/title:
- School:
- Location, if safe to publish:
- One-sentence headline:
- Short bio, 50 words:
- Medium bio, 120 words:
- Long bio, 250 words:

2. Positioning
- What I should be known for:
- Best target audience: recruiters, clients, classmates, professors, startup founders, etc.
- 3 possible website taglines:
- 3 possible hero subtitles:
- 5 strengths that are supported by evidence:
- 5 things to avoid claiming because there is not enough proof:

3. Skills
Group my skills into:
- Frontend:
- Backend:
- AI/tools:
- Languages:
- Databases:
- Design/tools:
- Deployment/devops:
- Coursework/CS fundamentals:
For every skill, add evidence if available. Example: "React - used in Project X".

4. Projects
For each project you can identify, create:
- Project name:
- One-line summary:
- Problem solved:
- My role:
- Tech stack:
- Key features:
- What makes it impressive:
- What I learned:
- Possible live demo link: Unknown if not provided
- GitHub link: Unknown if not provided
- Best screenshot/video needed:
- Portfolio priority score from 1-10:

5. Best 3 featured projects
Pick the best 3 projects for the home page and explain why.

6. Resume highlights
Extract:
- Education:
- Experience:
- Certifications:
- Awards:
- Leadership:
- Volunteer/community:
- Strong bullet points:
- Weak bullet points that should be rewritten:

7. Personal story
Write:
- A polished origin story paragraph.
- A more energetic version for the website.
- A professional version for recruiters.

8. Website copy
Write polished copy for:
- Hero headline
- Hero subheadline
- About section
- Projects section intro
- Skills section intro
- AI workflow section
- Contact CTA
- Footer line

9. Visual brand direction
Suggest:
- Brand keywords:
- Color mood:
- Typography mood:
- Animation style:
- Websites or styles to reference, described generally without copying:

10. Content gaps
List everything I still need to provide before the website can feel complete.

11. Final JSON
Create a clean JSON object called `portfolioContent` with these keys:
- name
- headline
- shortBio
- longBio
- location
- school
- links
- skills
- featuredProjects
- allProjects
- experience
- education
- certifications
- contact
- contentGaps
```

---

## 8. Prompt for turning resume + LinkedIn into website copy

Use this after pasting your resume and LinkedIn profile text.

```text
I am building my portfolio website at pavanrathod.com.

Here is my resume and LinkedIn content. Rewrite it into strong website copy while staying truthful.

Rules:
- Do not invent experience, metrics, awards, or skills.
- Make the tone confident, modern, and professional.
- Make it sound like a real person, not corporate filler.
- Extract the strongest proof points.
- Improve weak resume bullets using action verbs and clearer impact, but mark any missing metrics as "needs metric".
- Create short versions for a landing page and detailed versions for case study/resume pages.

Output:
1. 3 hero headline options
2. 3 hero subtitle options
3. About section, 80 words
4. About section, 180 words
5. Skills grouped by category
6. Top projects ranked by portfolio value
7. Improved project descriptions
8. Resume bullet rewrites
9. Content gaps I need to fill
10. Final website-ready JSON
```

---

## 9. Prompt for Codex to create the project

Use this in VS Code/Codex after creating or opening the repository.

```text
We are building a premium animated portfolio website for pavanrathod.com.

Tech stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion / Framer Motion
- Clean component architecture
- Vercel deployment

Goal:
Build a polished, fast, responsive, accessible portfolio site that feels like a high-end animated web experience. It should include hero, about, projects, skills, AI workflow, resume, and contact sections. It should use local content files so I can update my portfolio easily.

Important requirements:
- Do not hardcode all content inside components. Create content files in `src/content/`.
- Keep components reusable and clean.
- Use tasteful animations, not excessive effects.
- Respect prefers-reduced-motion.
- Make it mobile-first and responsive.
- Add SEO metadata and Open Graph image support.
- Add a downloadable resume placeholder at `public/resume.pdf`.
- Add a README with setup, development, and deployment steps.
- Add an AGENTS.md file explaining coding standards for future AI agent work.
- Do not add unnecessary dependencies.
- Run lint/build and fix errors.

First inspect the existing project structure. Then propose a file plan. After I approve, implement the first version.
```

---

## 10. Local setup plan on MacBook

### Required apps/accounts

- VS Code
- Git
- Node.js LTS
- pnpm
- GitHub account with student benefits
- ChatGPT Edu account with Codex access
- Vercel account connected to GitHub
- GoDaddy account with pavanrathod.com

### Initial commands

```bash
mkdir -p ~/Projects
cd ~/Projects
npx create-next-app@latest pavanrathod.com
cd pavanrathod.com
git init
```

Recommended choices during setup:

```txt
TypeScript: yes
ESLint: yes
Tailwind CSS: yes
src directory: yes
App Router: yes
Turbopack: yes if offered
Import alias: @/*
```

Install useful packages:

```bash
pnpm add motion lucide-react clsx tailwind-merge next-themes
pnpm add -D prettier prettier-plugin-tailwindcss
```

Optional later:

```bash
pnpm add three @react-three/fiber @react-three/drei
pnpm add gsap
```

Run locally:

```bash
pnpm dev
```

Build check:

```bash
pnpm lint
pnpm build
```

---

## 11. Repository structure

Recommended structure:

```txt
pavanrathod.com/
  docs/
    project-plan.md
    content-brief.md
    design-system.md
    codex-prompts.md
  private/
    raw/
    processed/
  public/
    resume.pdf
    images/
    og-image.png
  src/
    app/
      page.tsx
      layout.tsx
      globals.css
      projects/
        page.tsx
        [slug]/
          page.tsx
      resume/
        page.tsx
      lab/
        page.tsx
    components/
      layout/
      sections/
      ui/
      motion/
    content/
      site.ts
      profile.ts
      projects.ts
      experience.ts
    lib/
      utils.ts
      seo.ts
    styles/
  .gitignore
  AGENTS.md
  README.md
  package.json
```

---

## 12. Content model

Create content as TypeScript objects so components stay clean.

Example:

```ts
export const profile = {
  name: "Pavan Rathod",
  headline: "I build modern, animated web experiences with code, AI, and product thinking.",
  location: "California",
  school: "California State University, Long Beach",
  bio: "...",
  links: {
    github: "",
    linkedin: "",
    email: "",
    resume: "/resume.pdf",
  },
};
```

Project shape:

```ts
export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  role: string;
  stack: string[];
  features: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  priority: number;
};
```

---

## 13. Premium homepage blueprint

### Hero

Goal: Immediate wow factor.

Elements:

- Large headline
- Animated gradient highlight
- Subheadline
- CTA buttons: "View Projects" and "Download Resume"
- Small status badge: "CS student - building AI-assisted web experiences"
- Background: subtle grid, radial glow, floating code snippets, or terminal panel
- Optional cursor glow

Animation:

- Text reveal on load
- Background gradient movement
- CTA hover micro-interaction
- No heavy animation before first paint

### About

Goal: Human story.

Content:

- Who you are
- What you are studying
- What you like building
- How AI tools fit your workflow
- What kind of opportunities you want

### Featured projects

Goal: Show proof.

Use 3 best projects only on home page.

Each card:

- Image/video thumbnail
- Title
- One-line outcome
- Stack tags
- Interactive hover
- Links to case study, GitHub, demo

### Skills

Goal: Recruiter scanning.

Group by category, not random icon soup.

Categories:

- Frontend
- Backend
- AI/dev tools
- CS fundamentals
- Deployment
- Design/product

### AI workflow

Goal: Make the site timely and differentiated.

Possible section title:

> "My AI-assisted build system"

Show a 4-step loop:

1. Plan the feature
2. Prompt Codex/ChatGPT/Claude
3. Review the code manually
4. Test, polish, and deploy

Important: Make it clear you are the developer, and AI is your accelerator.

### Lab

Goal: Make people explore.

Include mini-interactions:

- Animated command palette
- Project filter
- Tiny terminal animation
- Component demos
- Scroll progress
- Theme toggle

### Contact

Goal: Conversion.

CTA examples:

- "Want to build something polished? Let's talk."
- "Open to internships, freelance builds, and collaboration."
- Buttons: Email, LinkedIn, GitHub

---

## 14. Design system

### Brand keywords

- Premium
- Technical
- Fast
- Curious
- AI-native
- Polished
- Cinematic
- Trustworthy

### Color direction

Start with:

- Background: near-black / deep navy
- Text: off-white
- Muted text: slate gray
- Accent 1: electric blue
- Accent 2: violet or cyan
- Accent 3: warm highlight only for small details

### Typography

Use clean, modern fonts. Avoid overly decorative fonts.

Possible pair:

- Heading: modern sans
- Body: highly readable sans
- Code: monospace

### Motion principles

- Animate meaning, not decoration.
- Scroll reveals should be subtle.
- Every hover state should feel intentional.
- Respect reduced motion.
- Keep performance strong on mobile.

---

## 15. Animation feature list

MVP animations:

- Hero text reveal
- Gradient glow background
- Project card hover lift
- Section reveal on scroll
- Smooth mobile nav
- Animated skill tags
- Button hover shine

Phase 2 animations:

- Cursor-reactive hero glow
- Command-palette style project search
- Scroll-linked timeline
- Animated code terminal
- Small 3D object or shader background

Avoid in MVP:

- Too many parallax layers
- Heavy 3D on every section
- Constant motion that distracts from content
- Animations that break on mobile

---

## 16. Development phases

### Phase 0 - Planning and content collection

Deliverables:

- `docs/project-plan.md`
- Claude portfolio summary
- Resume PDF
- LinkedIn text
- GitHub project list
- 3 featured projects selected
- Initial brand direction

Done when:

- We know what content will appear on the site.
- We have enough real information to build the first version.

### Phase 1 - Project setup

Deliverables:

- Next.js project created
- Git repository initialized
- GitHub repo created
- Tailwind configured
- Basic layout built
- README and AGENTS.md added

Done when:

- `pnpm dev` works.
- `pnpm build` passes.

### Phase 2 - MVP landing page

Deliverables:

- Hero section
- About section
- Featured projects section
- Skills section
- Contact section
- Resume download button
- Responsive layout

Done when:

- Site looks good on laptop and phone.
- Content is editable from `src/content/`.

### Phase 3 - Premium animation pass

Deliverables:

- Hero background animation
- Scroll reveal system
- Project card interactions
- Motion-safe reduced-motion support
- Performance check

Done when:

- Site feels premium but still fast.

### Phase 4 - Projects and case studies

Deliverables:

- Projects page
- 2-3 individual project case study pages
- Screenshots/videos added
- GitHub/demo links added

Done when:

- A recruiter can understand your best work in under 60 seconds.

### Phase 5 - Resume, SEO, polish

Deliverables:

- Resume page
- Metadata and Open Graph image
- Favicon
- Sitemap/robots if needed
- Accessibility pass
- Lighthouse pass
- Copywriting polish

Done when:

- Site feels launch-ready.

### Phase 6 - Deploy and connect domain

Deliverables:

- GitHub repo connected to Vercel
- Production deploy live
- pavanrathod.com connected
- www redirect working
- HTTPS active

Done when:

- `https://pavanrathod.com` loads the site successfully.
- `https://www.pavanrathod.com` redirects correctly or loads correctly.

### Phase 7 - Continuous improvement

Deliverables:

- Lab page
- Blog/notes
- More case studies
- Analytics
- Better project media
- Testimonials

Done when:

- The site becomes a living portfolio.

---

## 17. Deployment plan

### Recommended: Vercel

1. Push project to GitHub.
2. Create a Vercel account or sign in.
3. Import the GitHub repository into Vercel.
4. Set build command if needed: `pnpm build`.
5. Deploy preview.
6. Fix any build issues.
7. Add `pavanrathod.com` in Vercel project settings.
8. Add `www.pavanrathod.com` too.
9. Vercel will show required DNS records.
10. In GoDaddy, update DNS records to match Vercel.
11. Wait for DNS propagation.
12. Confirm HTTPS is active.

### DNS notes

For Vercel:

- Apex domain like `pavanrathod.com` usually uses an A record.
- Subdomain like `www.pavanrathod.com` uses a CNAME record.
- Use the exact values Vercel gives you because they can vary by setup.

For GoDaddy:

- Open your domain.
- Go to DNS records.
- Add/edit A, CNAME, or TXT records as required.
- Make sure you do not leave conflicting old website records.

### Backup: GitHub Pages

Use GitHub Pages only if we choose a fully static site.

For GitHub Pages custom domain:

- Apex domain requires A records to GitHub Pages IP addresses.
- `www` subdomain uses a CNAME to the GitHub Pages default domain.
- GitHub recommends verifying the domain and enabling HTTPS.

---

## 18. Git and GitHub workflow

Main branches:

```txt
main - production
feature/* - new features
content/* - content updates
fix/* - bug fixes
```

Basic workflow:

```bash
git status
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/pavanrathod.com.git
git push -u origin main
```

For each feature:

```bash
git checkout -b feature/hero-section
# work
git add .
git commit -m "Build animated hero section"
git push -u origin feature/hero-section
```

Then open a pull request, review changes, merge to main, and let Vercel deploy.

---

## 19. AGENTS.md for Codex

Create this file at the project root.

```md
# AGENTS.md

## Project

This is the source code for pavanrathod.com, a premium animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and Motion.

## Coding rules

- Use TypeScript.
- Keep components small and reusable.
- Keep content in `src/content/`, not hardcoded across components.
- Use semantic HTML.
- Respect accessibility and keyboard navigation.
- Respect `prefers-reduced-motion`.
- Do not add dependencies unless they clearly help.
- Run lint/build after major changes.
- Do not commit secrets or raw private files.
- Do not modify files in `private/` unless explicitly asked.

## Design rules

- Premium, clean, modern, technical.
- Avoid clutter.
- Animations should feel smooth and intentional.
- Mobile experience matters as much as desktop.

## Before finishing a task

- Summarize what changed.
- Mention any files touched.
- Run or recommend the exact test/build commands.
- Note any follow-up tasks.
```

---

## 20. Quality checklist

### Design

- Hero has strong visual impact.
- Typography is clean.
- Spacing is consistent.
- Color palette is controlled.
- Animations feel premium, not random.
- Mobile layout is excellent.

### Content

- No fake claims.
- Projects have proof.
- Resume is updated.
- LinkedIn/GitHub/contact links work.
- Each section has a clear purpose.

### Engineering

- TypeScript passes.
- Lint passes.
- Build passes.
- No console errors.
- Images optimized.
- Metadata added.
- Components reusable.
- Content files organized.

### Accessibility

- Keyboard navigation works.
- Buttons and links are clear.
- Color contrast is readable.
- Animations respect reduced motion.
- Images have alt text.
- Semantic HTML used.

### Performance

- Avoid huge JS bundles.
- Use 3D sparingly.
- Compress images.
- Lazy-load heavy sections.
- Test on mobile.

### Launch

- Domain works.
- HTTPS works.
- www redirect works.
- Resume downloads.
- GitHub repo is clean.
- Private files are not committed.

---

## 21. Better project ideas for the portfolio

These can make the website stronger than a normal portfolio.

### Idea 1 - Interactive AI build log

A section showing how you use AI professionally:

- Prompt
- Plan
- Code review
- Test
- Deploy

This shows maturity and separates you from people who just say "I use AI."

### Idea 2 - Website as a case study

Create a case study for pavanrathod.com itself:

- Goal
- Design system
- Tech stack
- AI workflow
- Performance decisions
- Deployment
- Lessons learned

This turns the portfolio into one of your portfolio projects.

### Idea 3 - Project demo videos

For every major project, record a 30-60 second video demo. A video often communicates more than a GitHub link.

### Idea 4 - Lab page

Build small visual experiments:

- Animated cards
- Terminal UI
- Floating dock
- Command menu
- 3D logo
- Scroll timeline

This helps prove that you can build modern animated interfaces.

### Idea 5 - Recruiter mode / client mode

A toggle that changes the emphasis:

- Recruiter mode: education, skills, projects, resume
- Client mode: website builds, process, contact CTA

This can be Phase 2 or 3.

### Idea 6 - Public roadmap

Show what you are learning/building now. This makes the site feel alive.

Example:

- Currently learning: full-stack Next.js, AI agents, deployment
- Currently building: pavanrathod.com, project X, project Y
- Next goal: internship-ready portfolio

---

## 22. First milestone checklist

Before writing lots of code, collect this:

```txt
[ ] Final display name
[ ] Best email for contact
[ ] GitHub username
[ ] LinkedIn URL
[ ] Resume PDF
[ ] 3 best projects
[ ] For each project: title, summary, stack, GitHub link, live link if available
[ ] 3-5 screenshots or demo videos
[ ] Claude-generated portfolio summary
[ ] Preferred color/style references
[ ] Short bio
[ ] Long bio
```

---

## 23. Immediate next actions

1. Create local project folder.
2. Save this file as `docs/project-plan.md`.
3. Export Claude data through Claude Settings > Privacy.
4. Put raw export in `private/raw/claude-export/`.
5. Paste resume + LinkedIn + selected Claude content into the Claude prompt above.
6. Save Claude output as `private/processed/portfolio-source-brief.md`.
7. Create Next.js project.
8. Create GitHub repo.
9. Add README and AGENTS.md.
10. Use Codex to build the first MVP landing page.
11. Deploy to Vercel preview.
12. Connect pavanrathod.com.
13. Polish until it feels premium.

---

## 24. Definition of done for version 1

Version 1 is successful when:

- pavanrathod.com is live.
- The homepage is visually impressive.
- The site is fast on mobile.
- It includes real resume/project content.
- It has at least 3 featured projects or clearly marked coming-soon slots.
- It has working GitHub, LinkedIn, email, and resume links.
- It has polished animations without hurting usability.
- The code is clean enough to continue improving.
- The website itself can be listed as a portfolio project.

