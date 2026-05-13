export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  status: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  isPlaceholder: true;
};

export type SkillGroup = {
  category: string;
  items: string[];
  isPlaceholder: true;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  isPlaceholder: true;
};

export const siteData = {
  name: "Pavan Rathod",
  role: "PLACEHOLDER - Computer Science student and web developer",
  tagline:
    "PLACEHOLDER - I build modern, animated web experiences with code, AI, and product thinking.",
  placeholderNote:
    "PLACEHOLDER-SAFE CONTENT - Real resume, LinkedIn, GitHub, project screenshots, and Claude-summary details have not been added yet.",
  location: "PLACEHOLDER - California, United States",
  email: "PLACEHOLDER - add verified public email",
  linkedin: "https://www.linkedin.com/in/replace-with-verified-profile",
  github: "https://github.com/replace-with-verified-username",
  resumeUrl: "/resume.pdf",
  hero: {
    eyebrow: "Portfolio in progress",
    headline: "Pavan Rathod",
    subheadline:
      "PLACEHOLDER - A premium animated portfolio for projects, technical skills, design taste, and responsible AI-assisted development workflow.",
  },
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  aboutPreview: {
    paragraphs: [
      "PLACEHOLDER-SAFE - This website is being built as a polished portfolio system for Pavan Rathod. The first version focuses on structure, motion, responsiveness, and a content model that can later accept verified resume, LinkedIn, GitHub, and project data.",
      "PLACEHOLDER-SAFE - The final site should present real projects, technical skills, design taste, and an AI-assisted development process without overstating what is proven. Until then, visible placeholders mark every unverified claim.",
    ],
    focusAreas: [
      {
        title: "Projects",
        description: "Reserved for verified project summaries, links, screenshots, and case studies.",
      },
      {
        title: "Technical craft",
        description: "A clean Next.js, TypeScript, and Tailwind foundation for a fast portfolio.",
      },
      {
        title: "AI workflow",
        description: "A professional process where AI assists planning and coding while Pavan reviews.",
      },
    ],
  },
  projects: [
    {
      title: "PLACEHOLDER - pavanrathod.com",
      slug: "pavanrathod-com",
      summary:
        "Placeholder entry for this portfolio site as a case study once design, implementation, and deployment details are verified.",
      status: "Placeholder until the portfolio build has shipped.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://pavanrathod.com",
      githubUrl: "https://github.com/replace-with-verified-username/pavanrathod.com",
      isPlaceholder: true,
    },
    {
      title: "PLACEHOLDER - Featured project 1",
      slug: "featured-project-1",
      summary:
        "Placeholder for a verified project summary from resume, GitHub, LinkedIn, or project notes.",
      status: "Needs confirmation from real project data.",
      stack: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: undefined,
      githubUrl: undefined,
      isPlaceholder: true,
    },
    {
      title: "PLACEHOLDER - Featured project 2",
      slug: "featured-project-2",
      summary:
        "Placeholder for another strong project with verified scope, links, screenshots, and outcomes.",
      status: "Needs confirmation from real project data.",
      stack: ["Next.js", "API integration", "Responsive UI"],
      liveUrl: undefined,
      githubUrl: undefined,
      isPlaceholder: true,
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: ["PLACEHOLDER - React", "PLACEHOLDER - Next.js", "PLACEHOLDER - Tailwind CSS"],
      isPlaceholder: true,
    },
    {
      category: "Languages",
      items: ["PLACEHOLDER - TypeScript", "PLACEHOLDER - JavaScript"],
      isPlaceholder: true,
    },
    {
      category: "AI and developer tools",
      items: ["PLACEHOLDER - Codex", "PLACEHOLDER - ChatGPT", "PLACEHOLDER - Claude"],
      isPlaceholder: true,
    },
    {
      category: "Deployment",
      items: ["PLACEHOLDER - Vercel", "PLACEHOLDER - GitHub"],
      isPlaceholder: true,
    },
  ],
  processIntro: [
    "PLACEHOLDER-SAFE - This section frames AI as an accelerator for planning, implementation support, and iteration. It does not claim that AI replaces the developer or that unreviewed generated code is shipped.",
    "The workflow is intentionally simple: plan the feature, build with clear constraints, test the result, and deploy only after review.",
  ],
  processSteps: [
    {
      title: "Plan",
      description: "Define the goal, constraints, content truth rules, and design direction before writing code.",
    },
    {
      title: "Build",
      description: "Use reusable components, typed data, and AI assistance where it speeds up careful implementation.",
    },
    {
      title: "Test",
      description: "Run lint, build, responsive checks, and manual review before treating the work as finished.",
    },
    {
      title: "Deploy",
      description: "Ship through a clean GitHub and Vercel workflow after private files and placeholders are reviewed.",
    },
  ],
  contactCta: {
    heading: "PLACEHOLDER - Ready for verified contact details.",
    body: "PLACEHOLDER-SAFE - LinkedIn, GitHub, and email links are wired for the portfolio layout, but should be replaced with verified public links before launch.",
  },
  socialLinks: [
    {
      label: "Email",
      href: "mailto:replace-with-verified-email@example.com",
      handle: "PLACEHOLDER - verified email needed",
      isPlaceholder: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/replace-with-verified-profile",
      handle: "PLACEHOLDER - verified LinkedIn URL needed",
      isPlaceholder: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/replace-with-verified-username",
      handle: "PLACEHOLDER - verified GitHub username needed",
      isPlaceholder: true,
    },
  ],
} as const;

export default siteData;
