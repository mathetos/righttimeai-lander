"use client";

import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-10 pb-20">
      <div className="gradient-glow-lg relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Large centered logo — sticky header appears once this scrolls past the top */}
        <div id="hero-logo-sentinel" className="mb-12">
          <img
            src="/images/righttimewordmark.png"
            alt="RightTime"
            className="h-12 w-auto md:h-16"
          />
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight text-balance text-foreground md:text-7xl lg:text-8xl">
          Scheduling,{" "}
          <span className="text-primary">without</span> the work.
        </h1>

        {/* Subhead */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          RightTime automatically finds the best time to meet by reading real
          calendars and constraints.{" "}
          <span className="text-foreground font-medium">
            No polls. No voting. No back-and-forth.
          </span>
        </p>

        {/* CTA */}
        <button
          type="button"
          onClick={() =>
            document
              .getElementById("signup")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="group mt-10 flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
        >
          Join the Early Beta
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>

        <p className="mt-4 text-sm text-muted-foreground">
          Small cohort. No spam. We&apos;ll email you when your invite is ready.
        </p>
      </div>
    </section>
  );
}
