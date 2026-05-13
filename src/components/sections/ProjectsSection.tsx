"use client";

import { Clock, Code2, ExternalLink, FileCode2, GitBranch, Lock } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteData, type ProjectStatus } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { cn } from "@/lib/utils";

const statusMeta: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  in_progress: {
    label: "In progress",
    className: "border-[#d9cfb5] bg-[#ebe4d3] text-[#6b5638]",
  },
  concept: {
    label: "Concept",
    className: "border-[#d9cfb5] bg-[#faf7f0] text-[#5a544c]",
  },
  live: {
    label: "Live",
    className: "border-[#1c1a17] bg-[#1c1a17] text-[#faf7f0]",
  },
  archived: {
    label: "Archived",
    className: "border-[#d9cfb5] bg-[#ebe4d3] text-[#5a544c]",
  },
};

function stackIcon(item: string) {
  const normalized = item.toLowerCase();
  if (normalized.includes("typescript") || normalized.includes("javascript")) {
    return FileCode2;
  }
  return Code2;
}

export function ProjectsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 py-24"
    >
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeader
            badge={siteData.projectsSection.badge}
            headingId="projects-heading"
            title={siteData.projectsSection.headline}
            description={siteData.projectsSection.description}
          />
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {siteData.projects.map((project, index) => {
            const status = project.status ? statusMeta[project.status as ProjectStatus] : null;

            return (
              <motion.div
                key={project.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.06 }}
              >
                <Card
                  as="article"
                  hoverLift
                  className="relative h-full"
                >
                  <div className="relative flex h-full flex-col">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.pills.map((pill) => (
                        <span
                          key={pill}
                          className="rounded-full border border-[#d9cfb5] bg-[#ebe4d3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#6b5638]"
                        >
                          {pill}
                        </span>
                      ))}
                      {status ? (
                        <span
                          className={cn(
                            "rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em]",
                            status.className,
                          )}
                        >
                          {status.label}
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-[#1c1a17]">{project.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-[#1c1a17]">{project.summary}</p>
                      <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-[#5a544c]">
                        {project.statusNote}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => {
                        const Icon = stackIcon(item);
                        return (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1.5 rounded-full bg-[#ebe4d3] px-3 py-1 text-xs text-[#5a544c] transition hover:bg-[#d9cfb5] motion-reduce:transition-none"
                          >
                            <Icon aria-hidden="true" className="size-3.5 text-[#6b5638]" />
                            {item}
                          </span>
                        );
                      })}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
                      {project.githubUrl ? (
                        <ButtonLink
                          href={project.githubUrl}
                          icon={GitBranch}
                          iconPosition="left"
                          variant="ghost"
                          className="min-h-10 px-3 py-2 text-xs"
                        >
                          {project.githubLabel ?? "GitHub"}
                        </ButtonLink>
                      ) : project.githubLabel ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8a8278]">
                          <Lock aria-hidden="true" className="size-3" />
                          {project.githubLabel}
                        </span>
                      ) : null}
                      {project.liveUrl ? (
                        <ButtonLink
                          href={project.liveUrl}
                          icon={ExternalLink}
                          iconPosition="left"
                          variant="ghost"
                          className="min-h-10 px-3 py-2 text-xs"
                        >
                          {project.liveLabel ?? "Live"}
                        </ButtonLink>
                      ) : project.liveLabel ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8a8278]">
                          <Clock aria-hidden="true" className="size-3" />
                          {project.liveLabel}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
