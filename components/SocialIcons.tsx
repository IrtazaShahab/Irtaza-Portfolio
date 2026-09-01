"use client";

import { LINKS } from "@/lib/links";

type Props = {
  size?: number;
  gap?: number;
  className?: string;
};

export default function SocialIcons({ size = 16, gap = 12, className = "" }: Props) {
  const s = size;
  return (
    <div className={"flex items-center " + className} style={{ gap }}>
      <a href={LINKS.github} target="_blank" rel="noopener" aria-label="GitHub" className="text-dim hover:text-accent">
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.084-.73.084-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.655 1.649.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.62-5.479 5.92.43.37.814 1.102.814 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
        </svg>
      </a>

      <a href={LINKS.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="text-dim hover:text-accent">
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.4v4.57h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.73z" />
        </svg>
      </a>

      <a href={LINKS.discord} target="_blank" rel="noopener" aria-label="Discord" className="text-dim hover:text-accent">
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20 3a1 1 0 0 0-.447-.894C18.29 1.45 15.88 1 12 1S5.71 1.45 4.447 2.106A1 1 0 0 0 4 3v12a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V3zM9.5 12.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
      </a>

      <a href={LINKS.upwork} target="_blank" rel="noopener" aria-label="Upwork" className="text-dim hover:text-accent">
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6 3c-1.657 0-3 1.343-3 3v12c0 1.657 1.343 3 3 3h12c1.657 0 3-1.343 3-3V6c0-1.657-1.343-3-3-3H6zm5.5 6.5c.828 0 1.5.672 1.5 1.5S12.328 12.5 11.5 12.5 10 11.828 10 11s.672-1.5 1.5-1.5z" />
        </svg>
      </a>
    </div>
  );
}
