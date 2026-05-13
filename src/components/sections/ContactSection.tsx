"use client";

import { GitBranch, Link, Mail, Send } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteData } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionBadge } from "@/components/ui/SectionBadge";

const socialIcons = {
  Email: Mail,
  GitHub: GitBranch,
  LinkedIn: Link,
};

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-5 py-24 sm:px-8 lg:px-10"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6 shadow-[0_0_80px_rgba(34,211,238,0.08)] sm:p-10 lg:p-14"
      >
        <div
          aria-hidden="true"
          className="absolute right-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"
        />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <SectionBadge icon={Send}>Contact</SectionBadge>
            <h2
              id="contact-heading"
              className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl"
            >
              {siteData.contactCta.heading}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              {siteData.contactCta.body}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">{siteData.email}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {siteData.socialLinks.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons] ?? Mail;

              return (
                <ButtonLink
                  key={link.label}
                  href={link.href}
                  icon={Icon}
                  iconPosition="left"
                  variant="secondary"
                  className="w-full justify-start"
                >
                  {link.label}
                </ButtonLink>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
