"use client";

import { motion } from "framer-motion";
import { sectionReveal, viewportOnce } from "@/lib/motion";
import { LINKS } from "@/lib/links";
import SocialLinks from "./SocialLinks";

const socials = [
  { label: "GitHub", href: LINKS.github },
  { label: "LinkedIn", href: LINKS.linkedin },
  { label: "Discord", href: LINKS.discord },
  { label: "Upwork", href: LINKS.upwork },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.p
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-3 font-mono text-[13px] tracking-[2px] text-accent"
        >
          // contact
        </motion.p>
        <motion.h2
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-6 text-3xl font-extrabold uppercase tracking-tight md:text-5xl"
        >
          Let&apos;s Connect
        </motion.h2>
        <motion.p
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mb-10 max-w-xl text-dim"
        >
          Have a project or a role in mind? My inbox is always open — I usually
          reply within a day.
        </motion.p>
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-8"
        >
          <a
            href={LINKS.email}
            className="inline-flex items-center gap-3 rounded-md bg-accent px-8 py-3.5 font-mono text-sm text-white transition hover:scale-[1.03] hover:shadow-glow"
          >
            <span className="sr-only">Email</span>
            irtazashahab@gmail.com
          </a>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          <SocialLinks size={18} />
        </div>
      </div>
    </section>
  );
}
