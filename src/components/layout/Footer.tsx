import { siteData } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[#d9cfb5] bg-[#ebe4d3] px-5 py-8 text-center text-sm text-[#5a544c] sm:px-8 lg:px-10">
      <p>{siteData.footerText}</p>
    </footer>
  );
}
