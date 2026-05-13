<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md

## Project

This repository is the source for `pavanrathod.com`, a premium animated personal portfolio for Pavan Rathod.

The goal is to build a modern, cinematic, high-end portfolio experience that demonstrates design taste, front-end craft, AI-assisted development workflow, and clean engineering while staying fast, accessible, maintainable, and truthful.

## Tech Stack

- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Runtime UI: React
- Deployment target: Vercel
- Content source: local typed data files until a fuller content system is needed

## Design Direction

- Modern, premium, cinematic, technical, and polished.
- Dark-first visual direction with controlled accents, strong typography, and restrained motion.
- Animations should clarify hierarchy, add feedback, or create tasteful atmosphere.
- The site must stay fast, responsive, keyboard-accessible, and respectful of `prefers-reduced-motion`.
- Mobile quality matters as much as desktop quality.

## Content Truth Rules

- Do not invent fake achievements, jobs, clients, awards, certifications, metrics, testimonials, or project results.
- Use clearly marked placeholder content until verified resume, LinkedIn, GitHub, project notes, and Claude-summary data are provided.
- Prefer "Unknown", "Placeholder", or "Needs confirmation" over filling gaps with assumptions.
- Keep claims specific and evidence-backed once real content is added.

## Privacy And Safety

- Never commit private Claude exports, raw resume source files, API keys, personal documents, `.env` files, or account-specific data.
- Do not modify files in `private/` unless the user explicitly asks.
- Keep publishable content reviewed, cleaned, and intentional.
- Public placeholders are fine only when they are obviously placeholders.

## Code Guidelines

- Keep components reusable, focused, and clean.
- Keep user-facing content in `src/data/` or another agreed content folder instead of scattering copy through components.
- Use semantic HTML and accessible labels for interactive UI.
- Prefer simple, composable components over broad abstractions.
- Do not add dependencies unless they clearly improve the project.
- Follow the existing project structure and inspect files before editing.
- Avoid unrelated refactors.

## Animation Guidelines

- Animations should improve the experience, not make the site slow.
- Avoid heavy effects on initial load.
- Respect `prefers-reduced-motion`.
- Use subtle reveal, hover, and transition patterns before introducing heavier choreography.
- Use 3D, shaders, or scroll effects sparingly and only when they serve the portfolio.

## Current Scope Notes

- The default `src/app/page.tsx` should remain unchanged until the homepage build begins.
- Initial data lives in `src/data/site.ts` with obvious placeholder values.
- Future homepage, project, resume, and lab sections should consume shared data instead of hardcoded copy.

## Before Finishing Work

- Summarize what changed.
- List files created or edited.
- Mention whether lint/build was run.
- Call out placeholder content or follow-up content needed.
