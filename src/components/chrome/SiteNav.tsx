"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface SiteNavProps {
  hasResume: boolean;
}

type NavLink = { href: string; label: string };

export default function SiteNav({ hasResume }: SiteNavProps) {
  // Default: visible (SSR-safe — no-JS users see the nav).
  // After hydration, useIsoLayoutEffect flips it to hidden if at top of page,
  // before browser paint, so JS users never see a flash of visible nav.
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useIsoLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const update = () => {
      // Hidden while pinned hero is on screen — show once past ~60% of viewport.
      setHidden(window.scrollY < window.innerHeight * 0.6);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const links: NavLink[] = [
    { href: "#who", label: "About" },
    { href: "#now", label: "Now" },
    { href: "#skyways", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  if (hasResume) {
    links.push({ href: "/resume.pdf", label: "Resume" });
  }

  return (
    <nav
      className={`site-nav ${hidden ? "site-nav--hidden" : ""} ${
        menuOpen ? "site-nav--menu-open" : ""
      }`}
      aria-label="Primary"
    >
      <div className="site-nav-inner">
        <a href="#hero-stage" className="site-nav-wordmark">
          Pavan Rathod
        </a>

        <button
          type="button"
          className="site-nav-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="site-nav-list"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="site-nav-toggle-icon" aria-hidden="true" />
          ) : (
            <Menu className="site-nav-toggle-icon" aria-hidden="true" />
          )}
        </button>

        <ul id="site-nav-list" className="site-nav-list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="site-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
