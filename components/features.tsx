import { Ban, Brain, Layers, Clock } from "lucide-react";

const features = [
  {
    icon: Ban,
    title: "No polls or voting",
    description:
      "Stop sending links and waiting for responses. RightTime removes the human overhead entirely.",
  },
  {
    icon: Brain,
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
    icon: Clock,
    title: "Built for teams that move fast",
    description:
      "Designed for teams and founders where time actually matters and every meeting slot counts.",
  },
];

export function Features() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="gradient-glow text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            What Makes This Different
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight md:text-5xl">
            Intelligence, not interaction.
          </h2>
        </div>

        <div className="gradient-glow-sm relative mt-16 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
