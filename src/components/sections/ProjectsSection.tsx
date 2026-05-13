"use client";

import { ExternalLink, GitBranch, ShieldAlert } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteData } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function ProjectsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <SectionBadge>Featured Projects</SectionBadge>
          <h2
            id="projects-heading"
            className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl"
          >
            Project cards are ready for real proof, links, and media.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            These cards intentionally use placeholder-safe project entries from the shared data
            file. They should be replaced only after real GitHub links, demos, screenshots, and
            project details are confirmed.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {siteData.projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07] motion-reduce:transition-none"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cyan-300/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
              />
              <div className="relative flex min-h-full flex-col">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                    Placeholder
                  </span>
                  <ShieldAlert aria-hidden="true" className="size-5 text-slate-500" />
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    {project.status}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2 pt-2">
                  {project.githubUrl ? (
                    <ButtonLink
                      href={project.githubUrl}
                      icon={GitBranch}
                      iconPosition="left"
                      variant="ghost"
                      className="min-h-10 px-3 py-2 text-xs"
                    >
                      GitHub
                    </ButtonLink>
                  ) : null}
                  {project.liveUrl ? (
                    <ButtonLink
                      href={project.liveUrl}
                      icon={ExternalLink}
                      iconPosition="left"
                      variant="ghost"
                      className="min-h-10 px-3 py-2 text-xs"
                    >
                      Live
                    </ButtonLink>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
