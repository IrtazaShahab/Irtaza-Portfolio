"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import SocialLinks from "./SocialLinks";

// three.js stays out of the initial bundle and never runs on the server
const HeroBackground = dynamic(() => import("./HeroBackground"), { ssr: false });

// transparent cutout (1252×1135) — no baked-in background, so it sits on the section
const PORTRAIT = "/images/irtaza-cutout.png";

const STACK = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    // reducedMotion="user" keeps the fades but drops the movement for anyone
    // who asks the OS for less motion.
    <MotionConfig reducedMotion="user">
      <section
        id="hero"
        className="relative isolate flex min-h-[calc(100svh-64px)] overflow-hidden border-b border-line"
      >
        {/* corner gradient glows (WebGL) */}
        <HeroBackground />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-6 px-6 pt-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-8 md:pb-16 md:pt-4 lg:gap-16 xl:max-w-[1320px]">
          {/* ---------- copy ---------- */}
          <div className="order-2 self-center pb-14 md:order-1 md:py-20">
            {/* availability */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-bg-2/70 px-3.5 py-1.5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] tracking-[1.5px] text-dim sm:text-xs">
                Available for work — Lahore, PK
              </span>
            </motion.div>

            {/* name */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-[clamp(40px,6vw,76px)] font-extrabold uppercase leading-[0.98] tracking-[-0.025em] text-ink"
            >
              Irtaza{" "}
              <span className="bg-gradient-to-r from-accent-soft to-accent bg-clip-text text-transparent">
                Shahab
              </span>
            </motion.h1>

            {/* professional title */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              <p className="font-mono text-[clamp(16px,1.9vw,22px)] font-medium tracking-tight text-accent-soft">
                Full Stack Developer
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-6 max-w-[52ch] text-[15px] leading-[1.75] text-dim sm:text-base"
            >
              Frontend is my strongest area — I build responsive,
              production-ready applications with{" "}
              <span className="text-ink">React, Next.js and TypeScript</span>,
              and work across the stack with Node.js, Express and PostgreSQL.
              Around two years of agency experience shipping live products.
            </motion.p>

            {/* stack — static labels, so no hover state */}
            <motion.ul
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              aria-label="Core stack"
              className="mt-7 flex flex-wrap gap-2"
            >
              {STACK.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-line bg-bg-2/60 px-2.5 py-1 font-mono text-[11px] text-dim"
                >
                  {t}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="mt-9"
            >
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-white transition-[background-color,box-shadow] duration-200 hover:bg-accent-soft hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  View Projects
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#contact"
                  className="rounded-md border border-line-strong px-5 py-3 font-mono text-sm text-ink transition-colors duration-200 hover:border-accent-soft hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <span className="font-mono text-[11px] tracking-[1.5px] text-faint">
                  FIND ME
                </span>
                <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
                <SocialLinks size={18} />
              </div>
            </motion.div>
          </div>

          {/* ---------- portrait ---------- */}
          {/* centred alongside the copy; the cutout fades out at the bottom
              instead of sitting in a box */}
          <div className="relative order-1 mx-auto w-full max-w-[320px] sm:max-w-[400px] md:order-2 md:max-w-[600px]">
            {/* soft backlight — separates the dark jacket from the dark page */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="pointer-events-none absolute inset-x-[-12%] bottom-0 top-[4%] -z-10"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_52%_48%_at_50%_46%,rgba(139,92,246,0.34),rgba(109,75,214,0.12)_55%,transparent_75%)]" />
              {/* thin orbit rings behind the head */}
              <div className="absolute left-1/2 top-[6%] aspect-square w-[74%] -translate-x-1/2 rounded-full border border-line-strong/60" />
              <div className="absolute left-1/2 top-[-2%] aspect-square w-[92%] -translate-x-1/2 rounded-full border border-dashed border-line" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[1252/1135] [mask-image:linear-gradient(to_bottom,black_72%,transparent_100%)]"
            >
              <Image
                src={PORTRAIT}
                alt="Portrait of Irtaza Shahab"
                fill
                priority
                quality={90}
                sizes="(min-width: 1320px) 620px, (min-width: 768px) 47vw, (min-width: 640px) 400px, 320px"
                className="select-none object-contain object-bottom"
                draggable={false}
              />
            </motion.div>

            {/* floating role badge — glass pill, no frame around the photo */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
              className="absolute bottom-[12%] left-0 sm:left-[2%] md:bottom-[16%] md:left-[-4%]"
            >
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }
                className="flex items-center gap-3 rounded-xl border border-line-strong bg-bg/70 py-2.5 pl-3.5 pr-4 shadow-[0_12px_40px_rgba(0,0,0,0.45),0_0_24px_rgba(139,92,246,0.18)] backdrop-blur-md"
              >
                <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-soft opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-soft" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-soft">
                    Full Stack Developer
                  </p>
                  <p className="mt-0.5 text-xs text-ink/80">Lahore, Pakistan</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* scroll cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          aria-label="Scroll to About section"
          className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft md:flex"
        >
          <span className="scroll-mouse" aria-hidden="true">
            <span className="scroll-dot" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint transition-colors group-hover:text-accent-soft">
            Scroll
          </span>
        </motion.a>
      </section>
    </MotionConfig>
  );
}
