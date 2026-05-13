import { siteData } from "@/data/site";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/55 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-10">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-5"
      >
        <a
          href="#home"
          className="text-sm font-semibold tracking-[0.24em] text-white uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          PR
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {siteData.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-400 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 md:inline-flex"
        >
          Contact
        </a>
        <MobileNav />
      </nav>
    </header>
  );
}
