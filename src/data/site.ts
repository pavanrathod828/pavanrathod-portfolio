/**
 * Reconciled content model for pavanrathod.com.
 *
 * As of 2026-05-24, the only field still consumed by a rendered component
 * is `siteData.heroIntro` (used by `src/components/hero/Hero.tsx`). All
 * previous legacy fields (`name`, `email`, `navItems`, `socialLinks`,
 * `about`, `projects`, `projectsSection`, `skills`, `skillsSection`,
 * `contact`, `footerText`, and the related types) have been removed
 * alongside their zombie consumers in `src/components/sections/*` and
 * `src/components/layout/{Header,MobileNav,Footer,SectionHeader,Container}.tsx`.
 *
 * If a future component needs shared, typed content, add it here as a
 * narrow field. Do not revive the prior grab-bag shape.
 */

export type HeroIntro = {
  eyebrow: string;
  headlineBefore: string;
  headlineHighlight: string;
  headlineAfter: string;
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  photoAlt: string;
};

export const siteData = {
  heroIntro: {
    eyebrow: "PAVAN RATHOD · CS + FINANCE · CSULB '28 · LOS ANGELES",
    headlineBefore: "I build ",
    headlineHighlight: "retrieval",
    headlineAfter: " and attribution systems for D2C brands.",
    subhead:
      "Software Engineer Intern at HypeOn AI. Open to Summer 2027 SWE internships. Applying to MS CS (AI/ML) for Fall 2028.",
    primaryCta: { label: "See the work", href: "/work/hypeon" },
    secondaryCta: {
      label: "View on GitHub",
      href: "https://github.com/pavanrathod828",
    },
    photoAlt: "Pavan Rathod, Software Engineer Intern at HypeOn AI.",
  } satisfies HeroIntro,
} as const;

export default siteData;
