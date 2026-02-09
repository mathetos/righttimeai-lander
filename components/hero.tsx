"use client";

import { ProductCarousel } from "@/components/product-carousel";

const MAILERLITE_FORM_ID = "E3PoXJ";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-x-hidden">
      {/* Abstract background orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-soft/30 rounded-full blur-3xl opacity-50 animate-float" />
        <div
          className="absolute top-40 left-0 w-[400px] h-[400px] bg-accent-soft/40 rounded-full blur-3xl opacity-50 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft/50 border border-brand-soft text-brand-strong text-xs font-semibold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-strong opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-strong" />
            </span>
            Accepting Early Access
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
            Scheduling, <br className="hidden md:block" />
            <span className="text-primary/90">without the work.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            No polls. No voting. No back-and-forth.
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            RightTime automatically finds the best time to meet by reading real
            calendars and prioritizing your guests preferences.  
          </p>

          <div className="ml-embed-wrapper w-full max-w-md sm:max-w-lg flex flex-col items-center">
            <div className="ml-embedded w-full" data-form={MAILERLITE_FORM_ID} />
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Small cohort. No spam. We&apos;ll email you when your invite is
            ready.
          </p>
        </div>

        {/* Carousel - overflow hidden to prevent horizontal scrollbar */}
        <div className="w-full mt-8">
          <ProductCarousel />
        </div>
      </div>
    </section>
  );
}
