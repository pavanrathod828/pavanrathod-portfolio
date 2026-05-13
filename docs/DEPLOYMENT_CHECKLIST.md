# Deployment checklist — Vercel + GoDaddy

Step-by-step for taking this Next.js app from a private GitHub repo to a live `pavanrathod.com`.

## 0. Prerequisites

- [ ] Repo pushed to GitHub: `pavanrathod828/pavanrathod-portfolio` (private)
- [ ] Local `npm run lint`, `npm run build`, `npm run typecheck` all pass
- [ ] `public/resume.pdf` is either the real resume or a known placeholder you're comfortable shipping
- [ ] All visible `PLACEHOLDER` strings are either acceptable for launch or replaced

## 1. Push the latest main

```bash
cd ~/Code/pavanrathod-portfolio
git status                # working tree clean
git push origin main      # remote in sync
```

## 2. Import into Vercel

1. Sign in to Vercel with the GitHub account that owns the repo (`pavanrathod828`).
2. **Add New → Project** → **Import** the `pavanrathod-portfolio` repo.
3. Framework preset: **Next.js** (auto-detected).
4. Root directory: `/` (default).
5. Build command: leave default (`next build`).
6. Output directory: leave default.
7. Install command: leave default.
8. Environment variables: **none yet** — there are no secrets in this app.
9. Click **Deploy**.

The first build will run on Vercel and produce a `*.vercel.app` URL.

## 3. Preview deployments

- Every push to a non-`main` branch creates a unique preview URL.
- Every PR comments the preview URL on the PR.
- Use these for sharing before promoting to production.

To force a redeploy without a code change, use the Vercel dashboard's **Redeploy** button.

## 4. Custom domain: pavanrathod.com

### In Vercel

1. Open the project → **Settings → Domains**.
2. Add `pavanrathod.com`. Vercel will mark it as "Invalid Configuration" until DNS is set.
3. Add `www.pavanrathod.com` as well — Vercel will offer to redirect it to the apex (recommended).

Vercel will display the **exact DNS records** to add. Always use the values it gives you — they can vary by setup.

Typically:

- Apex (`pavanrathod.com`) → an **A record** to `76.76.21.21`
- `www` → a **CNAME** to `cname.vercel-dns.com`

### In GoDaddy

1. Sign in to GoDaddy → **My Products → Domains → pavanrathod.com → DNS**.
2. **Delete** the default GoDaddy parked-page records that conflict (usually an `A @` pointing to GoDaddy's IP and a `CNAME www` pointing to `@`).
3. Add the A record Vercel asked for:
   - Type: `A`
   - Name: `@`
   - Value: (whatever Vercel showed, e.g. `76.76.21.21`)
   - TTL: 600 (or default)
4. Add the CNAME Vercel asked for:
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: 600
5. Save.

### Verify

- DNS propagation can take a few minutes up to several hours. `dig pavanrathod.com +short` should return Vercel's IP.
- Back in Vercel, the domain should flip to "Valid Configuration".
- SSL: Vercel auto-provisions a Let's Encrypt certificate. The lock icon should appear in the browser.

## 5. Environment variables

This project intentionally has **no env vars** in the MVP. When that changes:

```bash
vercel env add VAR_NAME production
vercel env add VAR_NAME preview
```

Or use **Settings → Environment Variables** in the Vercel dashboard. Never commit `.env` files.

## 6. Post-deploy smoke tests

After the first production deploy, check from a clean browser session:

- [ ] `https://pavanrathod.com` loads and shows the hero section
- [ ] `https://www.pavanrathod.com` redirects (or loads) without certificate warnings
- [ ] Hero CTA "Download Resume" downloads the PDF
- [ ] Mobile hamburger opens, traps focus, closes on Escape and outside-tap
- [ ] All section anchor links scroll to the right section with the heading visible below the fixed header
- [ ] No console errors in DevTools
- [ ] Lighthouse Performance ≥ 90 on mobile (Vercel's "Speed Insights" tab confirms)
- [ ] Open Graph preview looks right (paste the URL into iMessage, Slack, or https://opengraph.dev)

## 7. Rollback

If a deploy breaks production:

1. Vercel **Deployments** tab → find the last good deploy.
2. Click **⋯ → Promote to Production**.
3. Investigate the broken commit locally before re-deploying.

## 8. After launch

- [ ] Update `siteData` content as the resume / projects evolve
- [ ] Re-run the smoke tests after major content changes
- [ ] Watch the Vercel **Analytics** tab for traffic and 404s
