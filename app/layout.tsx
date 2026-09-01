import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Irtaza Shahab | Full Stack Developer",
  description: 
      "Frontend-focused full stack developer in Lahore, Pakistan. React, Next.js",
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
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
