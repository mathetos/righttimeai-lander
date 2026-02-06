import React from "react"
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "RightTime - Scheduling, without the work",
  description:
    "RightTime automatically finds the best time to meet by reading real calendars and constraints. No polls. No voting. No back-and-forth.",
};

export const viewport: Viewport = {
  themeColor: "#f5f5f8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${_geist.variable} ${_nunito.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
