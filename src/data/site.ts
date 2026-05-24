/**
 * Verified content model for pavanrathod.com.
 *
 * Conventions:
 * - User-visible copy lives here and is consumed by section components.
 *   Components should not hardcode strings.
 * - `isPlaceholder` flags are kept on the types for future drafts, but every
 *   record in this file is real, verified content (so they are all `false`).
 * - See docs/CONTENT_INTAKE.md for how to update content safely.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type ProjectStatus = "in_progress" | "concept" | "live" | "archived";

export type Project = {
  title: string;
  slug: string;
  summary: string;
  status?: ProjectStatus;
  statusNote: string;
  pills: string[];
  stack: string[];
  liveUrl: string | null;
  liveLabel: string | null;
  githubUrl: string | null;
  githubLabel: string | null;
  isPlaceholder: boolean;
};

export type SkillGroup = {
  category: string;
  chips: string[];
  isPlaceholder: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
  isPlaceholder: boolean;
};

export type AboutFeature = {
  title: string;
  body: string;
};

export type ProcessStep = {
  title: string;
  body: string;
};

export type ContactButton = {
  label: string;
  href: string;
};

export const siteData = {
  name: "Pavan Rathod",
  email: "pavanrwork@gmail.com",
  location: "Torrance, CA",
  linkedin: "https://www.linkedin.com/in/pavanrathod828",
  github: "https://github.com/pavanrathod828",
  resumeUrl: "/resume.pdf",
  tagline:
    "Computer Science student at CSULB building full-stack web products — booking platforms, AI tools, and modern web experiences.",
  heroEyebrow: "Software Engineering · CSULB '28 · Los Angeles",
  heroSubTagline:
    "Seeking Software Engineering internships for Summer 2026 and 2027. Currently building a booking platform for an LA-area hotel.",
  hero: {
    headline: "Pavan Rathod",
  },
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
  },
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ] as const,
  socialLinks: [
    {
      label: "Email",
      href: "mailto:pavanrwork@gmail.com",
      isPlaceholder: false,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pavanrathod828",
      isPlaceholder: false,
    },
    {
      label: "GitHub",
      href: "https://github.com/pavanrathod828",
      isPlaceholder: false,
    },
  ] as const,
  about: {
    badge: "About",
    headline:
      "Building thoughtful web products with modern tools and clear engineering.",
    paragraphs: [
      "I'm a CS student at CSULB ('28), minoring in Finance. My work sits between full-stack engineering and product thinking — I care about clean code, but I care just as much about whether what I build is actually useful to the person on the other side of the screen.",
      "Right now I'm building the first website and booking platform for an LA-area hotel, shipping production code in Next.js and TypeScript with Stripe for payments. Alongside that, I work on Python and Flask projects for AI tooling, backend services, and small utilities. Recognized on the CSULB President's Honor List.",
    ],
    features: [
      {
        title: "Full-Stack Builder",
        body: "Next.js, TypeScript, Tailwind, React on the frontend. Python, Flask, Stripe, AWS on the backend. Equally comfortable on either side.",
      },
      {
        title: "AI-Assisted Workflow",
        body: "Use Claude Code, Codex, and Copilot to plan, ship, and review work — never to skip code review or testing.",
      },
      {
        title: "Foundations",
        body: "DSA practice via NeetCode. AWS Certified Cloud Practitioner. CSULB President's Honor List.",
      },
    ],
  },
  projects: [
    {
      title: "Skyways Hotel — Booking Platform",
      slug: "skyways-hotel",
      summary:
        "First-party website and booking platform for an operating LA-area hotel. Replacing a third-party booking dependency with a Stripe-powered reservation flow, plus a separate ordering subsystem for on-property services.",
      status: "in_progress",
      statusNote: "In development, v1 launching May 2026.",
      pills: ["Client work"],
      stack: ["Next.js", "TypeScript", "Tailwind", "Stripe", "Vercel"],
      githubUrl: null,
      githubLabel: "GitHub: private",
      liveUrl: null,
      liveLabel: "Live: coming May 2026",
      isPlaceholder: false,
    },
    {
      title: "pavanrathod.com — Portfolio Platform",
      slug: "pavanrathod-com",
      summary:
        "Premium animated personal portfolio in Next.js 16, TypeScript, and Tailwind v4 with motion animations, full WCAG AA accessibility, and a custom warm-light design system. Built with Claude Code and Codex in an AI-paired workflow.",
      status: "live",
      statusNote: "The site you're reading this on.",
      pills: ["Personal"],
      stack: ["Next.js", "TypeScript", "Tailwind v4", "Motion", "Vercel"],
      githubUrl: "https://github.com/pavanrathod828/pavanrathod-portfolio",
      githubLabel: "GitHub",
      liveUrl: "https://pavanrathod.com",
      liveLabel: "Live",
      isPlaceholder: false,
    },
    {
      title: "VidSnapAI — AI Short-Form Video Generator",
      slug: "vidsnap-ai",
      summary:
        "Flask REST service that takes uploaded media, generates TTS narration, and renders short videos via an ffmpeg pipeline. Includes job-status polling, rate limiting, exponential-backoff retries, and structured logging.",
      status: "live",
      statusNote: "Released October 2025.",
      pills: ["Backend"],
      stack: ["Python", "Flask", "ffmpeg", "REST APIs"],
      githubUrl: null,
      githubLabel: "GitHub: private",
      liveUrl: null,
      liveLabel: null,
      isPlaceholder: false,
    },
  ] as const,
  projectsSection: {
    badge: "Featured Projects",
    headline:
      "Selected projects across full-stack web, AI tooling, and backend systems.",
    description:
      "A working portfolio of recent work — a booking platform, AI tools, a video generator, and the site you're reading this on.",
  },
  skills: [
    {
      category: "Frontend",
      chips: ["Next.js", "React", "TypeScript", "Tailwind", "Motion", "HTML/CSS"],
      isPlaceholder: false,
    },
    {
      category: "Backend & APIs",
      chips: ["Python", "Flask", "REST APIs", "Stripe", "JSON", "HTTP", "Jinja2"],
      isPlaceholder: false,
    },
    {
      category: "Cloud & Tools",
      chips: ["AWS", "Vercel", "Git", "GitHub", "Linux", "VS Code", "ffmpeg"],
      isPlaceholder: false,
    },
    {
      category: "AI-Assisted Development",
      chips: ["Claude Code", "Codex", "GitHub Copilot", "ChatGPT"],
      isPlaceholder: false,
    },
  ] as const,
  skillsSection: {
    badge: "Skills",
    headline:
      "A working stack across frontend, backend, cloud, and AI tooling.",
    description:
      "Depth varies by area — frontend and Python/Flask are strongest, AWS and Stripe are growing through current projects.",
  },
  process: {
    badge: "AI Workflow",
    headline:
      "Responsible AI-assisted development, with human review in the loop.",
    body: "I use AI tools the way I use any tool — to plan more clearly, ship faster, and catch mistakes earlier. Every line of generated code is reviewed before it gets committed. Here's how I actually work.",
    steps: [
      {
        title: "Plan",
        body: "Use Claude and ChatGPT to think through requirements, edge cases, and architecture before writing code. Document decisions in markdown.",
      },
      {
        title: "Build",
        body: "Pair with Claude Code or Codex inside VS Code for implementation. Write typed, reviewable code in small commits.",
      },
      {
        title: "Test",
        body: "Run lint, build, type checks, and manual review at every phase boundary. Fix what's broken before moving forward.",
      },
      {
        title: "Ship",
        body: "Deploy via Vercel from GitHub. Smoke test the live build. Monitor and iterate based on real use.",
      },
    ],
  },
  contact: {
    badge: "Contact",
    headline:
      "Open to internships, freelance projects, and short collaborations.",
    body: "Best reached by email. Currently in Los Angeles and open to remote, hybrid, or on-site roles for Summer 2026 and Summer 2027 cycles.",
    buttons: [
      { label: "Email", href: "mailto:pavanrwork@gmail.com" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/pavanrathod828",
      },
      { label: "GitHub", href: "https://github.com/pavanrathod828" },
    ] as const,
  },
  footerText: "© 2026 Pavan Rathod · Built with Next.js, deployed on Vercel",
} as const;

export default siteData;
