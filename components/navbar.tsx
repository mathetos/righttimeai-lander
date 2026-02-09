"use client";

import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/righttimewordmark.png"
            alt="RightTime"
            width={140}
            height={36}
            className="h-14 w-auto object-contain"
            unoptimized
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#beta"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Early Access
          </a>
          <a
            href="#beta"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 text-sm font-medium transition-colors"
          >
            Join Beta
          </a>
        </div>
      </div>
    </nav>
  );
}
