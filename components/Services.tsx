"use client";

import { motion } from "framer-motion";
import { sectionReveal, viewportOnce } from "@/lib/motion";
import { SERVICES } from "@/lib/services";

export default function Services() {
  return (
    <section id="services" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-3 font-mono text-[13px] tracking-[2px] text-accent"
        >
          // services
        </motion.p>
        <motion.h2
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12 text-3xl font-extrabold uppercase tracking-tight md:text-4xl"
        >
          What I Do
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={i}
              className={`rounded-lg border border-line bg-bg-2 p-6 transition hover:border-accent hover:shadow-card-hover ${
                i === SERVICES.length - 1 ? "lg:col-span-1" : ""
              }`}
            >
              <span className="mb-4 inline-block font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 text-base font-bold uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-dim">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
