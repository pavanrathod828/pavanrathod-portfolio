import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HypeOn case study — Pavan Rathod",
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
        <h1 className="section-title">HypeOn — case study</h1>

        <p className="body-text text-[color:var(--muted)]">
          In progress. Publishing once internal review clears.
        </p>

        <Link
          href="/"
          className="eyebrow w-fit text-[color:var(--muted)] no-underline transition-colors hover:text-[color:var(--text)]"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
