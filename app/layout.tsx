import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Irtaza Shahab | Full Stack Developer",
  description:
    "Full Stack Developer in Lahore, Pakistan with strong frontend expertise — building production-ready web applications with React, Next.js, TypeScript and Node.js.",
  icons: {
    // Declared here rather than via an app/ file convention so the SVG and the
    // .ico can coexist: modern browsers take the SVG, older ones fall back.
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
  },
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
