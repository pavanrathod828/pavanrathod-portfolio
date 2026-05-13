import { siteData } from "@/data/site";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#ebe4d3] bg-[#faf7f0]/85 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-10">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-5"
      >
        <a
          href="#home"
          className="text-sm font-semibold tracking-[0.24em] text-[#1c1a17] uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1c1a17]"
        >
          PR
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {siteData.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#5a544c] transition hover:bg-[#ebe4d3] hover:text-[#1c1a17] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c1a17]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-full bg-[#1c1a17] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#faf7f0] transition hover:bg-[#4a3a26] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1c1a17] md:inline-flex"
        >
          Contact
        </a>
        <MobileNav />
      </nav>
    </header>
  );
}
