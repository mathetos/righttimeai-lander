"use client";

import Script from "next/script";

const MAILERLITE_ACCOUNT = "1647982";
const MAILERLITE_FORM_ID = "E3PoXJ";

export function Signup() {
  return (
    <section id="signup" className="relative px-6 py-32">
      <Script
        id="mailerlite-universal"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},l=d.createElement(e),l.async=1,l.src=u,n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
ml('account', '${MAILERLITE_ACCOUNT}');
          `.trim(),
        }}
      />
      <div className="gradient-glow mx-auto max-w-xl text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight md:text-5xl">
          Join the early beta
        </h2>
        <p className="mt-4 text-muted-foreground">
          Small cohort. No spam. We&apos;ll email you when your invite is ready.
        </p>
        <div className="ml-embed-wrapper mt-10">
          <div className="ml-embedded" data-form={MAILERLITE_FORM_ID} />
        </div>
      </div>
    </section>
  );
}
