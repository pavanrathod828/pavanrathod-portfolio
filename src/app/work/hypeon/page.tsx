import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HypeOn AI",
  description:
    "Software Engineer Intern at HypeOn AI — case study in progress.",
};

export default function HypeOnPage() {
  return (
    <main
      id="main"
      className="min-h-[80vh] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto flex w-full max-w-[720px] flex-col gap-8">
        <Link
          href="/"
          className="eyebrow w-fit text-[color:var(--muted)] no-underline transition-colors hover:text-[color:var(--text)]"
        >
          ← Back to pavanrathod.com
        </Link>

        <h1 className="section-title">HypeOn AI</h1>

        <p className="body-text text-[color:var(--muted)]">
          Software Engineer Intern at HypeOn AI. A full teardown of the systems
          shipped — anonymized as needed — is in progress.
        </p>
      </div>
    </main>
  );
}
