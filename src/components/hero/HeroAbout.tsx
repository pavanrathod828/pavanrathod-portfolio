"use client";

export default function HeroAbout() {
  return (
    <section
      id="who"
      aria-labelledby="about-heading"
      className="about-section"
    >
      <div className="about-meta" aria-hidden="true">
        <span>ABOUT</span>
        <span className="about-meta-divider">/</span>
        <span>NOTE 01</span>
      </div>

      <h2 id="about-heading" className="about-heading">
        About
      </h2>

      <div className="about-body">
        <p>
          Some of the best lessons in software come from watching the wrong
          audience try to use it. The relative who screenshots every screen
          &ldquo;in case.&rdquo; The shop owner running operations from a phone
          while the dashboard was clearly designed on a 27-inch monitor. The
          student finishing registration at 11:58 PM and giving up because the
          page rendered three seconds late.
        </p>
        <p>
          Most software gets built for the room where it was demoed. The work
          that lasts pays attention to whoever opens it on a Tuesday morning,
          alone, with no one to ask.
        </p>
        <p>Most of building it is removing things that get in the way.</p>
      </div>
    </section>
  );
}
