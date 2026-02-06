export function Problem() {
  return (
    <section className="relative px-6 py-32">
      <div className="gradient-glow mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          The Problem
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
          Most scheduling tools ask people to participate.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
          Instead of collecting votes and chasing replies, RightTime looks at
          actual availability and recommends the right time automatically.{" "}
          <span className="font-medium text-foreground">
            RightTime does the work for you.
          </span>
        </p>
      </div>
    </section>
  );
}
