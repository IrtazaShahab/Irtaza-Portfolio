"use client";

import { motion } from "framer-motion";
import { sectionReveal, viewportOnce } from "@/lib/motion";
import { STATS } from "@/lib/stats";

export default function Stats() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-14 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={i}
            className="text-center md:border-r md:border-line md:last:border-r-0"
          >
            <p className="font-sans text-[clamp(40px,5vw,64px)] font-extrabold leading-none text-accent">
              {stat.value}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[2px] text-faint">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
