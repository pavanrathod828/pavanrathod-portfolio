"use client";

import {
  ArrowDown,
  FileText,
  GitBranch,
  Link as LinkIcon,
  Mail,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteData } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/layout/Container";

const socialIcons = {
  Email: Mail,
  GitHub: GitBranch,
  LinkedIn: LinkIcon,
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative isolate flex min-h-[92svh] scroll-mt-24 items-center overflow-hidden py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[#faf7f0]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(28,26,23,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(28,26,23,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(circle at 50% 28%, black 0%, transparent 68%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] -top-[10%] -z-10 h-[600px] w-[600px] rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, #ebe4d3 0%, transparent 70%)",
        }}
      />

      <Container className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.72fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-[#6b5638]">
            {siteData.heroEyebrow}
          </p>
          <h1
            id="home-heading"
            className="mt-3 max-w-5xl font-serif text-[clamp(3.5rem,9vw,7.5rem)] font-normal italic leading-[1] tracking-[-0.01em] text-[#1c1a17]"
          >
            {siteData.hero.headline}
          </h1>
          <p className="mt-7 max-w-[620px] text-[21px] leading-[1.5] text-[#1c1a17]">
            {siteData.tagline}
          </p>
          <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-[#5a544c]">
            {siteData.heroSubTagline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#projects" icon={ArrowDown} variant="primary">
              View Projects
            </ButtonLink>
            <ButtonLink href={siteData.resumeUrl} icon={FileText} variant="secondary">
              Download Resume
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {siteData.socialLinks.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons] ?? Mail;

              return (
                <ButtonLink
                  key={link.label}
                  href={link.href}
                  icon={Icon}
                  iconPosition="left"
                  variant="ghost"
                  className="min-h-10 px-3 py-2 text-xs"
                >
                  {link.label}
                </ButtonLink>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-xl lg:ml-auto"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[#2a2620] bg-[#1a1815] p-4 shadow-[0_20px_60px_-15px_rgba(28,26,23,0.25)]">
            <div className="rounded-xl border border-[#2a2620] bg-[#1a1815] p-4">
              <div className="flex items-center gap-2 border-b border-[#2a2620] pb-4">
                <span className="size-3 rounded-full bg-red-400/80" />
                <span className="size-3 rounded-full bg-amber-300/80" />
                <span className="size-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-mono text-[12px] text-[#8a8278]">
                  pavan.config.ts
                </span>
              </div>
              <div className="space-y-4 py-5 font-mono text-[13px] leading-6 text-[#e8e0d0]">
                <p>
                  <span className="text-[#b8a989]">const</span>{" "}
                  <span className="text-[#e8e0d0]">role</span>{" "}
                  <span className="text-[#8a8278]">=</span>{" "}
                  <span className="text-[#c4985a]">
                    &quot;Software Engineering Intern&quot;
                  </span>
                  ;
                </p>
                <p>
                  <span className="text-[#b8a989]">const</span>{" "}
                  <span className="text-[#e8e0d0]">stack</span>{" "}
                  <span className="text-[#8a8278]">=</span> [
                  <span className="text-[#c4985a]">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-[#c4985a]">&quot;TypeScript&quot;</span>,{" "}
                  <span className="text-[#c4985a]">&quot;Python&quot;</span>,{" "}
                  <span className="text-[#c4985a]">&quot;AWS&quot;</span>];
                </p>
                <p>
                  <span className="text-[#b8a989]">const</span>{" "}
                  <span className="text-[#e8e0d0]">status</span>{" "}
                  <span className="text-[#8a8278]">=</span>{" "}
                  <span className="text-[#c4985a]">
                    &quot;Open for Summer 2026 &amp; 2027&quot;
                  </span>
                  ;
                </p>
                <p>
                  <span className="text-[#b8a989]">const</span>{" "}
                  <span className="text-[#e8e0d0]">building</span>{" "}
                  <span className="text-[#8a8278]">=</span>{" "}
                  <span className="text-[#c4985a]">
                    &quot;skyways-hotel-booking&quot;
                  </span>
                  ;
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div
                  className="rounded-xl border p-4"
                  style={{
                    borderColor: "rgba(232,224,208,0.1)",
                    backgroundColor: "rgba(232,224,208,0.06)",
                  }}
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8a8278]">
                    Location
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#e8e0d0]">
                    Los Angeles · Torrance, CA
                  </p>
                </div>
                <div
                  className="rounded-xl border p-4"
                  style={{
                    borderColor: "rgba(232,224,208,0.1)",
                    backgroundColor: "rgba(232,224,208,0.06)",
                  }}
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8a8278]">
                    Status
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#e8e0d0]">
                    Open to internships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
