"use client";

import { ArrowDown, FileText, GitBranch, Link, Mail, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteData } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionBadge } from "@/components/ui/SectionBadge";

const socialIcons = {
  Email: Mail,
  GitHub: GitBranch,
  LinkedIn: Link,
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden px-5 py-28 sm:px-8 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[#02040a]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(circle at 50% 28%, black 0%, transparent 68%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/30 blur-3xl sm:h-96 sm:w-96"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.08, 0.98, 1],
                opacity: [0.52, 0.72, 0.48, 0.52],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[-9rem] top-24 -z-10 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl sm:h-[28rem] sm:w-[28rem]"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -18, 12, 0],
                y: [0, 20, -10, 0],
              }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.72fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <SectionBadge icon={Sparkles}>{siteData.hero.eyebrow}</SectionBadge>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.28em] text-slate-400">
            {siteData.role}
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-8xl">
            {siteData.hero.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {siteData.tagline}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            {siteData.placeholderNote}
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
          initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-xl lg:ml-auto"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-cyan-300/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="rounded-[1.35rem] border border-white/10 bg-slate-950/80 p-4">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="size-3 rounded-full bg-red-400/80" />
                <span className="size-3 rounded-full bg-amber-300/80" />
                <span className="size-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-xs font-medium text-slate-400">
                  portfolio-mvp.tsx
                </span>
              </div>
              <div className="space-y-4 py-5 font-mono text-xs leading-6 text-slate-300 sm:text-sm">
                <p>
                  <span className="text-cyan-300">const</span>{" "}
                  <span className="text-white">contentMode</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-emerald-300">&quot;placeholder-safe&quot;</span>;
                </p>
                <p>
                  <span className="text-cyan-300">const</span>{" "}
                  <span className="text-white">workflow</span>{" "}
                  <span className="text-slate-500">=</span> [
                  <span className="text-emerald-300">&quot;plan&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;build&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;test&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;deploy&quot;</span>];
                </p>
                <p className="text-slate-500">
                  {"// Verified project details will replace placeholders after review."}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">
                    Location
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">{siteData.location}</p>
                </div>
                <div className="rounded-2xl border border-violet-300/15 bg-violet-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-violet-200">
                    Status
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    Portfolio in progress
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
