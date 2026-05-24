import { AnimatedGradientText } from "@/components/hero/AnimatedGradientText";
import { Button } from "@/components/ui/Button";
import { siteData } from "@/data/site";

export default function Hero() {
  const { heroIntro } = siteData;

  return (
    <section
      id="hero"
      aria-labelledby="hero-headline"
      className="flex min-h-[80vh] items-center px-6 py-16 md:px-12 md:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div className="order-2 flex flex-col gap-6 md:order-1 md:gap-8">
          <span className="eyebrow">{heroIntro.eyebrow}</span>

          <h1 id="hero-headline" className="hero-headline">
            {heroIntro.headlineBefore}
            <AnimatedGradientText>
              {heroIntro.headlineHighlight}
            </AnimatedGradientText>
            {heroIntro.headlineAfter}
          </h1>

          <p className="max-w-[55ch] text-lg leading-relaxed text-[color:var(--muted)] md:text-xl">
            {heroIntro.subhead}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href={heroIntro.primaryCta.href} variant="default">
              {heroIntro.primaryCta.label}
            </Button>
            <Button href={heroIntro.secondaryCta.href} variant="outline">
              {heroIntro.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="order-1 mx-auto self-center md:order-2 md:mx-0 md:self-start">
          <div
            role="img"
            aria-label={heroIntro.photoAlt}
            className="flex size-24 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--line-strong)] md:size-[200px]"
          >
            <span
              aria-hidden="true"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted-2)]"
            >
              Photo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
