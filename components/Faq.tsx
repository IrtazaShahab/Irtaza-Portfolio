"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sectionReveal, viewportOnce } from "@/lib/motion";

const faqs = [
  {
    q: "What kind of projects are you looking for?",
    a: "Full-stack and frontend product work — dashboards, marketing sites, and SaaS applications. I'm also expanding into Python-heavy backend work.",
  },
  {
    q: "Are you open to full-time roles or freelance work?",
    a: "Both. I'm available for full-time roles and freelance engagements — reach out and let's talk about what you need.",
  },
  {
    q: "What's your tech stack?",
    a: "React, Next.js, TypeScript, and Tailwind CSS on the front end; Node, Express, and PostgreSQL on the back end, with Zustand and React Query for state management.",
  },
  {
    q: "Do you use AI tools in your workflow?",
    a: "Daily — Claude Code, Cursor, and Codex for scaffolding, refactoring, and exploring ideas. AI accelerates the work; I own the architecture and review every line.",
  },
  {
    q: "Where are you based and are you open to remote work?",
    a: "I'm based in Lahore, Pakistan, and I'm fully remote-friendly — comfortable with async collaboration across time zones.",
  },
  {
    q: "How can I get in touch?",
    a: "Email is fastest, or reach out via any of the social links in the contact section — I usually reply within a day.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-3 font-mono text-[13px] tracking-[2px] text-accent"
        >
          // faq
        </motion.p>
        <motion.h2
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12 text-3xl font-extrabold uppercase tracking-tight md:text-4xl"
        >
          Common Questions
        </motion.h2>
        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={i}
              className="mb-3 border border-line rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold transition hover:bg-bg-2"
                aria-expanded={openIdx === i}
              >
                {faq.q}
                <motion.span
                  animate={{ rotate: openIdx === i ? 45 : 0 }}
                  className="ml-4 font-mono text-xl text-accent"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-5 pb-4 text-sm text-dim">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
