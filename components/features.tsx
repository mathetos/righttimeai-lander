"use client";

import { Users, CalendarCheck, Layers, Zap, X, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "No polls or voting",
    description:
      "Stop sending links and waiting for responses. RightTime removes the human overhead entirely.",
  },
  {
    icon: CalendarCheck,
    title: "Real calendar intelligence",
    description:
      "Reads actual availability from connected calendars to find the genuinely best time for everyone.",
  },
  {
    icon: Layers,
    title: "Multiple calendars per person",
    description:
      "Work calendar, personal calendar, side projects. RightTime handles the complexity so you don't have to.",
  },
  {
    icon: Zap,
    title: "Built for teams that move fast",
    description:
      "Designed for teams and founders where time actually matters and every meeting slot counts.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-card/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* The Problem Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-muted-foreground tracking-widest uppercase mb-3">
              The Problem
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Most scheduling tools ask people to participate.
            </h3>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Instead of collecting votes and chasing replies, RightTime looks at
              actual availability and recommends the right time automatically.
              RightTime does the work for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-border/60 bg-white/50 shadow-sm">
              <CardContent className="p-8 flex flex-col h-full opacity-60">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <X className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold">The Old Way</h4>
                </div>
                <ul className="space-y-4 flex-1">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                    Send a polling link
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                    Wait for everyone to vote
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                    Chase down non-responders
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                    Manually pick the &quot;least bad&quot; time
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-white shadow-lg ring-1 ring-primary/5">
              <CardContent className="p-8 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Check className="h-32 w-32 text-accent-strong" />
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-accent-soft flex items-center justify-center text-accent-strong">
                    <Check className="h-5 w-5" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary">RightTime</h4>
                </div>
                <ul className="space-y-4 flex-1">
                  <li className="flex items-center gap-3 text-foreground font-medium">
                    <Check className="h-4 w-4 text-accent-strong" />
                    Connect calendars
                  </li>
                  <li className="flex items-center gap-3 text-foreground font-medium">
                    <Check className="h-4 w-4 text-accent-strong" />
                    Instant best time recommendation
                  </li>
                  <li className="flex items-center gap-3 text-foreground font-medium">
                    <Check className="h-4 w-4 text-accent-strong" />
                    Book automatically
                  </li>
                  <li className="flex items-center gap-3 text-foreground font-medium">
                    <Check className="h-4 w-4 text-accent-strong" />
                    Zero email back-and-forth
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-strong tracking-widest uppercase mb-3">
              What Makes This Different
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground">
              Intelligence, not interaction.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-white border border-border/50 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-xl bg-brand-soft/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-brand-strong">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h4 className="text-2xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
