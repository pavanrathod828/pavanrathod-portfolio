import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      className="min-h-[80vh] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto flex w-full max-w-[720px] flex-col gap-8">
        <h1 className="section-title">Not here.</h1>

        <p className="body-text text-[color:var(--muted)]">
          This page hasn&apos;t been built yet — or it never was.
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
