"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { LINKS } from "@/lib/links";
import SocialLinks from "./SocialLinks";

/* chanhdai-style pixel "IS" monogram (SVG block letters) */
function PixelIsLogo() {
  const I = [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ];
  const S = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ];
  const cell = 3;
  const accent: Record<string, boolean> = { S_0_4: true, I_6_0: true };
  const rects: React.ReactElement[] = [];
  const draw = (map: number[][], offX: number, prefix: string) => {
    map.forEach((row, r) =>
      row.forEach((v, c) => {
        if (!v) return;
        const key = `${prefix}_${r}_${c}`;
        rects.push(
          <rect
            key={key}
            x={1.5 + (offX + c) * cell}
            y={3.5 + r * cell}
            width={cell - 0.7}
            height={cell - 0.7}
            fill={accent[key] ? "#8b5cf6" : "#f2f2f7"}
          />
        );
      })
    );
  };
  draw(I, 0, "I");
  draw(S, 4, "S");
  return (
    <svg width="72" height="28" viewBox="0 0 72 28" aria-hidden="true" className="transition-all duration-300 hover:[filter:drop-shadow(0_0_6px_rgba(139,92,246,0.5))]">
      {rects}
    </svg>
  );
}

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      let current: string | null = null;
      navItems.forEach((item) => {
        const el = document.querySelector(item.href) as HTMLElement | null;
        if (el && el.offsetTop <= y) current = item.href;
      });
      setActive(current);
      const link = document.querySelector<HTMLElement>(
        `.nav-link[href="${current}"]`
      );
      const bar = barRef.current;
      if (bar) {
        if (link) {
          bar.style.width = `${link.offsetWidth}px`;
          bar.style.left = `${link.offsetLeft}px`;
        } else {
          bar.style.width = "0";
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-[#0a0a0f]/80 backdrop-blur-md">
      <motion.div
        className="absolute left-0 top-0 h-[2px] origin-left bg-gradient-to-r from-accent-dim via-accent to-accent-soft"
        style={{ scaleX: progress, width: "100%" }}
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2.5" aria-label="IS — home">
          <PixelIsLogo />
          <span className="font-mono text-[11px] tracking-[1px] text-dim">irtaza.dev</span>
        </a>

        <div className="relative hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link relative py-1.5 text-[13px] transition-colors hover:text-accent-soft ${
                active === item.href ? "text-accent-soft" : "text-dim"
              }`}
            >
              {item.label}
            </a>
          ))}
          <span
            ref={barRef}
            className="absolute -bottom-0.5 left-0 h-[2px] bg-accent shadow-glow transition-all duration-300"
            style={{ width: 0 }}
            aria-hidden="true"
          />
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <SocialLinks size={18} />
          <a href="#contact" className="rounded-md border border-line-strong px-4 py-1.5 font-mono text-xs text-ink transition hover:border-accent hover:shadow-glow">
            Get in touch
          </a>
        </div>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-px w-5 bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-[#0a0a0f] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setOpen(false)}
                className="text-sm text-dim"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

