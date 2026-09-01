"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { sectionReveal, viewportOnce } from "@/lib/motion";
import { HiChevronDown } from "react-icons/hi";
import { useState } from "react";

const projects = [
  {
    title: "WayFit",
    url: "https://wayfit.ca/",
    host: "wayfit.ca",
    desc: "All-in-one fitness tracking web platform for the WayFit iOS & Android apps — workouts, nutrition, and goal tracking.",
    tech: ["Next.js", "Live Product"],
    img: "https://cdn.omniultra.imagine.art/ceaed39a-684f-4da0-a1e9-ca9f91ee1c26/media/image/52ac094c0f664fb7ab24e3cd7cd077dd/wayfit-screenshot.png",
    alt: "WayFit fitness tracker website screenshot",
  },
  {
    title: "Ghar se Daftar",
    url: "https://ghar-se-daftar.vercel.app/",
    host: "ghar-se-daftar.vercel.app",
    desc: "Homemade meal delivery startup in Lahore, connecting office workers with home-cooked food.",
    tech: ["Next.js", "Tailwind CSS"],
    img: "https://cdn-chatly-docs.vyro.ai/chatly/ultra-agent/uploads/4c848c12-f3b5-46ca-8369-d0d2cb2e1d67/c1a9fd24-ab1a-4ba7-bdfe-1f9c1a1a4d5b.png",
    alt: "Ghar se Daftar website screenshot",
  },
  {
    title: "BookEilen",
    url: "https://bookelien.vercel.app/",
    host: "bookelien.vercel.app",
    desc: "Personal online book reading platform with authentication and a reading library.",
    tech: ["Next.js", "Node.js / Express", "Supabase"],
    img: "https://cdn-chatly-docs.vyro.ai/chatly/ultra-agent/uploads/4c848c12-f3b5-46ca-8369-d0d2cb2e1d67/ab616cc0-f9d6-443b-bebd-8f7e654b2eac.png",
    alt: "BookEilen website screenshot",
  },
  {
    title: "Personal Portfolio (Framer)",
    url: "https://shobi.framer.website/",
    host: "shobi.framer.website",
    desc: "An earlier iteration of my portfolio, designed and built entirely in Framer.",
    tech: ["Framer", "Design"],
    img: "https://cdn-chatly-docs.vyro.ai/chatly/ultra-agent/uploads/4c848c12-f3b5-46ca-8369-d0d2cb2e1d67/db1a71f9-ec65-4a33-a0ca-1b3d6582aaf7.png",
    alt: "Personal portfolio built with Framer screenshot",
  },
  {
    title: "Pixelative — Company Website",
    url: "https://pixelative.co/",
    host: "pixelative.co",
    desc: "Company website of my agency — contributed to select pages during my time there.",
    tech: ["Next.js", "Contribution"],
    img: "https://cdn-chatly-docs.vyro.ai/chatly/ultra-agent/uploads/4c848c12-f3b5-46ca-8369-d0d2cb2e1d67/0c480fb2-c659-4fae-8522-86b91e9adfb1.png",
    alt: "Pixelative company website screenshot",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  const visible = projects.slice(0, 4);
  const extra = projects.length > 4 ? projects[4] : null;

  return (
    <section id="projects" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-3 font-mono text-[13px] tracking-[2px] text-accent"
        >
          // projects
        </motion.p>
        <motion.h2
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12 text-3xl font-extrabold uppercase tracking-tight md:text-4xl"
        >
          Selected Work
        </motion.h2>
        <div className="grid gap-7 md:grid-cols-2">
          {visible.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener"
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={i}
              className="block overflow-hidden rounded-[10px] border border-line bg-bg-2 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-card-hover"
            >
              {/* browser chrome */}
              <div className="flex items-center gap-2 border-b border-line bg-bg-2 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 flex-1 truncate rounded border border-line bg-bg px-2.5 py-0.5 font-mono text-[11px] text-faint">
                  {p.host}
                </span>
              </div>
              <Image
                src={p.img}
                alt={p.alt}
                width={1280}
                height={800}
                loading="lazy"
                className="aspect-[16/10] w-full bg-bg-2 object-cover object-top"
              />
              <div className="px-6 py-5">
                <h3 className="mb-1.5 text-lg font-bold">{p.title}</h3>
                <p className="mb-3 text-sm text-dim">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line px-3 py-1 font-mono text-[11px] text-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-block font-mono text-xs text-accent transition hover:text-accent-soft">
                  Visit →
                </span>
              </div>
            </motion.a>
          ))}

          <AnimatePresence>
            {expanded && extra && (
              <motion.a
                key={extra.title}
                href={extra.url}
                target="_blank"
                rel="noopener"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35 }}
                className="block overflow-hidden rounded-[10px] border border-line bg-bg-2 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-card-hover"
              >
                {/* browser chrome */}
                <div className="flex items-center gap-2 border-b border-line bg-bg-2 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 flex-1 truncate rounded border border-line bg-bg px-2.5 py-0.5 font-mono text-[11px] text-faint">
                    {extra.host}
                  </span>
                </div>
                <Image
                  src={extra.img}
                  alt={extra.alt}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="aspect-[16/10] w-full bg-bg-2 object-cover object-top"
                />
                <div className="px-6 py-5">
                  <h3 className="mb-1.5 text-lg font-bold">{extra.title}</h3>
                  <p className="mb-3 text-sm text-dim">{extra.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {extra.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-line px-3 py-1 font-mono text-[11px] text-dim"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-block font-mono text-xs text-accent transition hover:text-accent-soft">
                    Visit →
                  </span>
                </div>
              </motion.a>
            )}
          </AnimatePresence>
        </div>

        {projects.length > 4 && (
          <div className="mt-8 flex justify-center">
            <button
              aria-expanded={expanded}
              aria-controls="projects-more"
              onClick={() => setExpanded((s) => !s)}
              className="inline-flex items-center justify-center rounded-full border border-line px-3 py-2 text-dim transition hover:text-accent-soft hover:scale-[1.02]"
            >
              <span className={`transition-transform ${expanded ? "rotate-180" : ""}`}>
                <HiChevronDown size={20} />
              </span>
              <span className="sr-only">{expanded ? "Show fewer projects" : "Show more projects"}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

