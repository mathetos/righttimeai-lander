"use client";

import Script from "next/script";
import { useState, useRef, useEffect, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

const TURNSTILE_SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "error-callback"?: () => void;
        }
      ) => string;
      getResponse: (widgetId: string) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export function Signup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [turnstileReady, setTurnstileReady] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() || "";

  useEffect(() => {
    if (!siteKey || !turnstileReady || !turnstileRef.current || typeof window?.turnstile?.render !== "function") return;
    if (widgetIdRef.current) return;
    widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
      sitekey: siteKey,
    });
    return () => {
      if (widgetIdRef.current) widgetIdRef.current = null;
    };
  }, [siteKey, turnstileReady]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    if (siteKey) {
      const token = widgetIdRef.current && window.turnstile?.getResponse(widgetIdRef.current);
      if (!token) {
        setErrorMsg("Please complete the verification.");
        return;
      }
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const body: { email: string; turnstileToken?: string } = { email };
      if (siteKey && widgetIdRef.current) {
        body.turnstileToken = window.turnstile?.getResponse(widgetIdRef.current) ?? undefined;
      }
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        if (siteKey && widgetIdRef.current && window.turnstile?.reset) {
          window.turnstile.reset(widgetIdRef.current);
        }
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
      if (siteKey && widgetIdRef.current && window.turnstile?.reset) {
        window.turnstile.reset(widgetIdRef.current);
      }
    }
  }

  return (
    <section id="signup" className="relative px-6 py-32">
      {siteKey && (
        <Script
          src={TURNSTILE_SCRIPT}
          strategy="afterInteractive"
          onLoad={() => setTurnstileReady(true)}
        />
      )}
      <div className="gradient-glow mx-auto max-w-xl text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight md:text-5xl">
          Join the early beta
        </h2>
        <p className="mt-4 text-muted-foreground">
          Small cohort. No spam. We&apos;ll email you when your invite is ready.
        </p>

        {status === "success" ? (
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-7 w-7 text-primary" />
            </div>
            <p className="text-lg font-medium text-foreground">
              You&apos;re on the list.
            </p>
            <p className="text-sm text-muted-foreground">
              We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 flex-1 rounded-full border border-border bg-card px-6 text-foreground shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="group flex h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-8 font-medium text-primary-foreground transition-all hover:opacity-90 disabled:opacity-70"
              >
                {status === "loading" ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Get Early Access
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </div>
            {siteKey && (
              <div className="flex justify-center">
                <div ref={turnstileRef} />
              </div>
            )}
          </form>
        )}

        {status === "error" && errorMsg && (
          <p className="mt-4 text-sm text-destructive">{errorMsg}</p>
        )}
      </div>
    </section>
  );
}
