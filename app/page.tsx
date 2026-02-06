import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Features } from "@/components/features";
import { BetaAccess } from "@/components/beta-access";
import { Signup } from "@/components/signup";
import { Footer } from "@/components/footer";
import { DecorativeBg } from "@/components/decorative-bg";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <DecorativeBg />
      <div className="relative z-10">
        <Header />
        <Hero />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-border" />
        </div>
        <Problem />
        <Features />
        <BetaAccess />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-border" />
        </div>
        <Signup />
        <Footer />
      </div>
    </main>
  );
}
