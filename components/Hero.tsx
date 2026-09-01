"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { LINKS } from "@/lib/links";
import SocialLinks from "./SocialLinks";

const PORTRAIT =
  "https://cdn.omniultra.imagine.art/ceaed39a-684f-4da0-a1e9-ca9f91ee1c26/media/image/0d8d0929844049fd9534c526087fa8ec.png";

const socials = [
  { label: "GitHub", href: LINKS.github },
  { label: "LinkedIn", href: LINKS.linkedin },
  { label: "Discord", href: LINKS.discord },
  { label: "Upwork", href: LINKS.upwork },
  { label: "Email", href: LINKS.email },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-line"
    >
      {/* aurora glow */}
      <div className="aurora" aria-hidden="true">
        <span /><span /><span />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-6 font-mono text-sm tracking-[2px] text-accent"
          >
            // Lahore, Pakistan — available for work
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="max-w-5xl text-[clamp(48px,9vw,120px)] font-extrabold uppercase leading-[0.95] tracking-tight text-ink"
          >
            Muhammad Irtaza Shahab
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 max-w-2xl font-mono text-[clamp(16px,2.2vw,22px)] text-accent-soft"
          >
            Full Stack Developer — building with AI-assisted workflows
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-4 max-w-xl text-dim"
          >
            Frontend-focused developer with ~2 years at software agencies,
            shipping React &amp; Next.js products and growing into full-stack
            roles.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-10"
          >
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-md bg-accent px-6 py-3 font-mono text-sm text-white transition hover:scale-[1.03] hover:shadow-glow"
              >
                View Projects
              </a>
              <a
                href={LINKS.email}
                className="rounded-md border border-line-strong px-6 py-3 font-mono text-sm text-ink transition hover:scale-[1.03] hover:border-accent hover:shadow-glow"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-6">
              <SocialLinks size={20} />
            </div>
          </motion.div>
        </div>

        {/* portrait */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="relative mx-auto hidden w-full max-w-[340px] md:block"
        >
          {/* soft purple glow behind */}
          <div
            className="absolute inset-x-0 bottom-0 top-10 -z-10 rounded-full bg-accent/25 blur-[70px]"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-t-full border border-line-strong/60">
            <Image
              src={PORTRAIT}
              alt="Portrait of Muhammad Irtaza Shahab"
              width={680}
              height={850}
              priority
              className="w-full object-cover object-top"
            />
            {/* purple duotone tint overlay */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent-dim/45 via-transparent to-transparent mix-blend-color"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/70 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
          {/* fade into background at the base */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
}
