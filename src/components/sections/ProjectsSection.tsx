"use client";

import { ExternalLink, GitBranch, ShieldAlert } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteData } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";

export function ProjectsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24"
    >
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeader
            badge="Featured Projects"
            headingId="projects-heading"
            title="Project cards are ready for real proof, links, and media."
            description="These cards intentionally use placeholder-safe project entries from the shared data file. They should be replaced only after real GitHub links, demos, screenshots, and project details are confirmed."
          />
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {siteData.projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.06 }}
            >
              <Card as="article" hoverLift className="group relative h-full overflow-hidden shadow-2xl">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cyan-300/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
                />
                <div className="relative flex h-full flex-col">
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
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
