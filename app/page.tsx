import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { CtaBeta } from "@/components/cta-beta";

export default function Page() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-brand-soft selection:text-brand-strong">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CtaBeta />
      </main>
    </div>
  );
}
