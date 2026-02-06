import { Zap, DollarSign, MessageSquare } from "lucide-react";

const perks = [
  {
    icon: Zap,
    title: "Priority access",
    description: "Be among the first to use RightTime before the public launch.",
  },
  {
    icon: DollarSign,
    title: "Early-bird pricing",
    description: "Lock in the best pricing when paid plans launch.",
  },
  {
    icon: MessageSquare,
    title: "Shape the product",
    description: "Direct influence on how the product evolves.",
  },
];

export function BetaAccess() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="gradient-glow relative rounded-3xl border border-border bg-card p-8 shadow-sm md:p-16">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Early Beta
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-card-foreground md:text-5xl">
              Get in early. Get rewarded.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              RightTime is currently in private beta. We&apos;re opening early
              access to a small group of teams and founders.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {perks.map((perk) => (
              <div key={perk.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <perk.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-card-foreground">
                  {perk.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
