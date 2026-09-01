import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Irtaza Shahab — Full Stack Developer",
  description:
    "Frontend-focused full stack developer in Lahore, Pakistan. React, Next.js, TypeScript, Node.js — building with AI-assisted workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
