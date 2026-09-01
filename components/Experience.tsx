"use client";

import { motion } from "framer-motion";
import { sectionReveal, viewportOnce } from "@/lib/motion";

const jobs = [
  {
    company: "Hashed System",
    role: "Frontend Developer",
    period: "Jan 2026 — Mar 2026",
    desc: "Production frontend features with React and Next.js.",
  },
  {
    company: "Pixelative",
    role: "Frontend Developer",
    period: "Mar 2024 — Oct 2025",
    desc: "Shipped client and internal web products with REST integrations.",
  },
  {
    company: "Pixelative",
    role: "Frontend Developer Intern",
    period: "Sep 2023 — Mar 2024",
    desc: "Started my career and learned agency development workflows.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-3 font-mono text-[13px] tracking-[2px] text-accent"
        >
          // experience
        </motion.p>
        <motion.h2
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12 text-3xl font-extrabold uppercase tracking-tight md:text-4xl"
        >
          Experience
        </motion.h2>
        <div className="relative max-w-3xl border-l border-line pl-8">
          {jobs.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={i}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-glow" />
              <p className="mb-1 font-mono text-xs text-accent">{job.period}</p>
              <h3 className="text-lg font-bold">
                {job.role} — {job.company}
              </h3>
              <p className="mt-1 text-sm text-dim">{job.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
