import { siteData } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500 sm:px-8 lg:px-10">
      <p>{siteData.placeholderNote}</p>
    </footer>
  );
}
