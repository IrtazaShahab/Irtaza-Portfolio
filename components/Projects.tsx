"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { sectionReveal, viewportOnce } from "@/lib/motion";
import { HiChevronDown } from "react-icons/hi";
import { useState } from "react";

type Project = {
  title: string;
  url: string;
  host: string;
  desc: string;
  tech: string[];
  img: string;
  alt: string;
};

const projects: Project[] = [
  {
    title: "WayFit",
    url: "https://wayfit.ca/",
    host: "wayfit.ca",
    desc: "All-in-one fitness tracking web platform for the WayFit iOS & Android apps — workouts, nutrition, and goal tracking.",
    tech: ["Next.js", "Live Product"],
    img: "/images/wayfit.webp",
    alt: "WayFit fitness tracker website screenshot",
  },
  {
    title: "Ghar se Daftar",
    url: "https://ghar-se-daftar.vercel.app/",
    host: "ghar-se-daftar.vercel.app",
    desc: "Homemade meal delivery startup in Lahore, connecting office workers with home-cooked food.",
    tech: ["Next.js", "Tailwind CSS"],
    img: "/images/ghar-se-daftar.webp",
    alt: "Ghar se Daftar website screenshot",
  },
  {
    title: "BookEilen",
    url: "https://bookelien.vercel.app/",
    host: "bookelien.vercel.app",
    desc: "Personal online book reading platform with authentication and a reading library.",
    tech: ["Next.js", "Node.js / Express", "Supabase"],
    img: "/images/bookeilen.webp",
    alt: "BookEilen website screenshot",
  },
  {
    title: "Personal Portfolio (Framer)",
    url: "https://shobi.framer.website/",
    host: "shobi.framer.website",
    desc: "An earlier iteration of my portfolio, designed and built entirely in Framer.",
    tech: ["Framer", "Design"],
    img: "/images/framer-portfolio.webp",
    alt: "Personal portfolio built with Framer screenshot",
  },
  {
    title: "Pixelative — Company Website",
    url: "https://pixelative.co/",
    host: "pixelative.co",
    desc: "Company website of my agency — contributed to select pages during my time there.",
    tech: ["Next.js", "Contribution"],
    img: "/images/pixelative.webp",
    alt: "Pixelative company website screenshot",
  },
];

const CARD_CLASS =
  "block overflow-hidden rounded-[10px] border border-line bg-bg-2 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-card-hover";

function ProjectCardBody({ p }: { p: Project }) {
  return (
    <>
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
        width={1600}
        height={1000}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 560px"
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
    </>
  );
}

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
              className={CARD_CLASS}
            >
              <ProjectCardBody p={p} />
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
                className={CARD_CLASS}
              >
                <ProjectCardBody p={extra} />
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
