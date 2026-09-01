"use client";

import { motion } from "framer-motion";
import { sectionReveal, viewportOnce } from "@/lib/motion";

const groups = [
  { name: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "State Management", items: ["Zustand", "React Query"] },
  { name: "Backend", items: ["Node.js", "Express.js", "REST APIs", "PostgreSQL"] },
  { name: "AI-Assisted Development", items: ["Claude Code", "Cursor", "Codex"] },
  { name: "Tools", items: ["Git / GitHub", "Docker"] },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-3 font-mono text-[13px] tracking-[2px] text-accent"
        >
          // stack
        </motion.p>
        <motion.h2
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12 text-3xl font-extrabold uppercase tracking-tight md:text-4xl"
        >
          Skills
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <motion.div
              key={group.name}
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={i}
              className="rounded-lg border border-line bg-bg-2 p-6 transition hover:border-accent hover:shadow-card-hover"
            >
              <h3 className="mb-4 font-mono text-[13px] text-accent">{group.name}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line px-3 py-1 font-mono text-xs text-dim transition hover:border-accent hover:text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
