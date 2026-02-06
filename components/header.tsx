"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    function updateSticky() {
      const sentinel = document.getElementById("hero-logo-sentinel");
      if (!sentinel) return;
      // Show sticky header only once the big hero logo has scrolled past the top
      const rect = sentinel.getBoundingClientRect();
      setShowSticky(rect.bottom <= 0);
    }

    updateSticky();
    window.addEventListener("scroll", updateSticky, { passive: true });
    window.addEventListener("resize", updateSticky);
    return () => {
      window.removeEventListener("scroll", updateSticky);
      window.removeEventListener("resize", updateSticky);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSticky
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-3">
        <Image
          src="/images/righttimewordmark.png"
          alt="RightTime"
          width={180}
          height={28}
          className="h-7 w-auto object-contain object-center"
          priority
          unoptimized
        />
      </div>
    </header>
  );
}
