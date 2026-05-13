# Content intake checklist

This file is the contract for swapping placeholder content in `src/data/site.ts` for real, verified content. Follow it every time real data is added.

## Ground rules

- **Never commit raw exports.** Resume Word docs, LinkedIn ZIPs, Claude data exports, browser cookies, screenshots with private info — none of these belong in git. Keep raw files in `private/` (gitignored).
- **Truth before polish.** If a metric, employer, award, or testimonial cannot be verified from a primary source you still control, leave the placeholder in place.
- **Update the data file, not the components.** All user-visible copy belongs in `src/data/site.ts`. If a section needs a new field, add it to the type + the data, then consume it.
- **Drop the `PLACEHOLDER` / `PLACEHOLDER-SAFE` prefix only when the content is verified.** Components check for that prefix to render fallback text.
- **One area at a time.** Resist the urge to update everything in a single commit — small commits per content area make review easier.

## Intake checklist

### 1. Resume

- [ ] Final canonical PDF dropped in `public/resume.pdf` (overwrites the placeholder)
- [ ] One-line professional headline confirmed
- [ ] Short bio (≤50 words) confirmed
- [ ] Education line(s) confirmed
- [ ] No private info (full address, personal phone, SSN, DOB) is in the PDF
- [ ] Resume source file kept locally in `private/raw/resume/`, never committed

### 2. LinkedIn

- [ ] Verified LinkedIn URL — update `siteData.linkedin` and the matching `socialLinks` entry
- [ ] Handle text matches the URL (no stale handles)
- [ ] Any imported bullet points reworded to remove first-person LinkedIn voice
- [ ] No content imported that LinkedIn doesn't show publicly

### 3. GitHub

- [ ] Verified GitHub username — update `siteData.github` and the matching `socialLinks` entry
- [ ] For each featured project: real repo URL, real demo URL (if any), real stack, real `statusNote`
- [ ] `status` set to one of: `in_progress`, `concept`, `live`, `archived`
- [ ] `isPlaceholder: false` once everything else is real
- [ ] Project summary written by you, not pasted from the README

### 4. Claude / ChatGPT usage

- [ ] If quoting Claude/ChatGPT content, copy lives in `private/processed/`, not raw export
- [ ] Anything published has been reviewed line-by-line for private info, hallucinations, or confidential project mentions
- [ ] No raw conversation transcripts in the repo

### 5. Contact

- [ ] Real public email set in `siteData.email` (the `PLACEHOLDER` prefix triggers the masked fallback)
- [ ] The `socialLinks` Email entry uses a `mailto:` href that matches `siteData.email`

### 6. Skills

- [ ] Each skill backed by either coursework, a public project, or job experience
- [ ] No invented frameworks or libraries
- [ ] `isPlaceholder: false` per group once verified

## What's safe to publish vs. keep private

| Safe to publish                                | Keep private                                          |
| ---------------------------------------------- | ----------------------------------------------------- |
| Public LinkedIn headline + summary             | LinkedIn full export (`.csv`, `.json`)                |
| Resume PDF cleaned of personal contact details | Resume `.docx` / `.pages` source                      |
| Public GitHub repo names + descriptions        | Private repo names                                    |
| Sentences you wrote yourself summarizing work  | Raw Claude/ChatGPT transcripts                        |
| Demo screenshots that don't contain real users | Anything with another person's data without consent   |
| Course names + degree                          | Transcripts, grades, financial info, immigration info |

## Hard "do not commit" rules

- `.env`, `.env.local`, any file matching `.env*`
- `*.pem`, `*.key`, `id_rsa*`, `*secret*`, `*credentials*`
- `private/**` (anything under `private/`)
- Raw resume sources: `resume.docx`, `resume.pages`, `*.pages`, `*.doc`
- Anything from a Claude data export

The repo's `.gitignore` already covers most of these, but the file scanner only catches what it knows about — treat this list as authoritative.
