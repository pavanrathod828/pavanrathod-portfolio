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
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 md:gap-8">
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
    </section>
  );
}
