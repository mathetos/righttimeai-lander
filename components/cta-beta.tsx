"use client";

import { Star, ShieldCheck, Rocket } from "lucide-react";

const MAILERLITE_FORM_ID = "E3PoXJ";

export function CtaBeta() {
  return (
    <section id="beta" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-brand-strong text-white rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative shadow-2xl shadow-brand-strong/20">
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-24 w-80 h-80 bg-accent-strong/20 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            <h2 className="text-sm font-bold text-accent-soft tracking-widest uppercase mb-6 drop-shadow-sm">
              Early Beta
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-sm">
              Get in early. Get rewarded.
            </h3>
            <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              RightTime is currently in private beta. We&apos;re opening early
              access to a small group of teams and founders.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left mb-16">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
                <Rocket className="h-6 w-6 text-accent-soft mb-4" />
                <h4 className="font-bold text-lg mb-2 text-white">
                  Priority access
                </h4>
                <p className="text-white/85 text-sm leading-relaxed">
                  Be among the first to use RightTime before the public launch.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
                <Star className="h-6 w-6 text-accent-soft mb-4" />
                <h4 className="font-bold text-lg mb-2 text-white">
                  Early-bird pricing
                </h4>
                <p className="text-white/85 text-sm leading-relaxed">
                  Lock in the best pricing when paid plans launch.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
                <ShieldCheck className="h-6 w-6 text-accent-soft mb-4" />
                <h4 className="font-bold text-lg mb-2 text-white">
                  Shape the product
                </h4>
                <p className="text-white/85 text-sm leading-relaxed">
                  Direct influence on how the product evolves.
                </p>
              </div>
            </div>

            <div className="max-w-md mx-auto">
              <h4 className="text-xl font-bold mb-4 text-white">
                Join the early beta
              </h4>
              <div className="ml-embed-wrapper">
                <div className="ml-embedded" data-form={MAILERLITE_FORM_ID} />
              </div>
              <p className="mt-4 text-xs text-white/70">
                Small cohort. No spam. We&apos;ll email you when your invite is
                ready.
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2026 RightTime. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
