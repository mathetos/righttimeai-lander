"use client";

import { useEffect } from "react";

const MAILERLITE_ACCOUNT = "1647982";

/** MailerLite global: callable and has a queue array before script loads */
type Ml = ((...args: unknown[]) => void) & { q?: unknown[] };

/**
 * Injects MailerLite Universal script after mount so all .ml-embedded
 * elements (Hero + CtaBeta) exist in the DOM when the script runs.
 */
export function MailerLiteScript() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as Window & { ml?: Ml };
    if (w.ml) return;

    // Same as MailerLite snippet: define ml() and queue, then load script
    const ml = (function (...args: unknown[]) {
      (ml.q = ml.q || []).push(args);
    }) as Ml;
    ml.q = ml.q || [];
    w.ml = ml;
    w.ml("account", MAILERLITE_ACCOUNT);

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://assets.mailerlite.com/js/universal.js";
    document.head.appendChild(script);
  }, []);

  return null;
}
