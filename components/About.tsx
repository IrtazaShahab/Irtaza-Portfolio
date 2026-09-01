"use client";

import { motion } from "framer-motion";
import { sectionReveal, viewportOnce } from "@/lib/motion";
import SocialLinks from "./SocialLinks";

export default function About() {
  return (
    <section id="about" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6 md:grid md:grid-cols-[1fr_320px] md:gap-x-12 md:items-start">
                <div className="md:col-span-2">
        <motion.p
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-3 font-mono text-[13px] tracking-[2px] text-accent"
        >
          // about
        </motion.p>
        <motion.h2
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-8 text-3xl font-extrabold uppercase tracking-tight md:text-4xl"
        >
          About
        </motion.h2>
        </div>
        <motion.p
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="leading-relaxed text-dim"
        >
          I&apos;m a frontend-focused full stack developer based in Lahore,
          Pakistan, with around two years of professional experience at software
          agencies (Pixelative, Hashed System). My core stack is React.js,
          Next.js, TypeScript, and Tailwind CSS, with full-stack exposure across
          Node.js, Express.js, and PostgreSQL. I use AI coding tools — Claude
          Code, Cursor, and Codex — as a regular part of my workflow, and I&apos;m
          currently expanding into Python and full-stack roles. Alongside work,
          I&apos;m a Computer Science student at the Virtual University of Pakistan.
        </motion.p>
    
        {/* Quick Facts card on the right for larger screens */}
        <motion.aside
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 md:mt-0"
        >
          <div className="rounded-lg border border-line bg-[#07070b] p-6 shadow-glow md:sticky md:top-28">
            <h3 className="mb-3 font-mono text-sm tracking-[2px] text-accent">Quick Facts</h3>
            <ul className="mb-4 space-y-3">
              <li className="text-sm text-dim">Location: Lahore, Pakistan</li>
              <li className="text-sm text-dim">Education: BSc Computer Science</li>
              <li className="text-sm text-dim">Experience: ~2 years at agencies</li>
              <li className="text-sm text-dim">Focus: Frontend &amp; AI-assisted tooling</li>
              <li className="text-sm text-dim">Backend: Node.js, PostgreSQL</li>
              <li className="text-sm text-dim">Workflow: TDD, PR reviews, CI</li>
            </ul>
            <div className="flex items-center justify-between">
              <SocialLinks size={16} gap={10} />
              <a href="#contact" className="font-mono text-xs text-accent hover:underline">
                Contact
              </a>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
