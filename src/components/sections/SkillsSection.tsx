"use client";

import { Wrench } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteData } from "@/data/site";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";

export function SkillsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24"
    >
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            <SectionBadge icon={Wrench}>Skills</SectionBadge>
            <h2
              id="skills-heading"
              className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl"
            >
              Clean groups now, verified evidence later.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            Skill labels remain placeholder-marked until backed by resume, GitHub, coursework, or
            project evidence.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {siteData.skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
            >
              <Card className="h-full">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  {group.category}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
