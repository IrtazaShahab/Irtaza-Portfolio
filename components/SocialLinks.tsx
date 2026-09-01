"use client";

import { LINKS } from "@/lib/links";
import { SiGithub, SiDiscord, SiUpwork } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

type Platform = "github" | "linkedin" | "discord" | "upwork" | "email";

type SocialItem = {
  key: Platform;
  label: string;
  href: string;
  Icon: React.ComponentType<{ size?: number }>;
};

export const SOCIALS: SocialItem[] = [
  { key: "github", label: "GitHub", href: LINKS.github, Icon: SiGithub },
  { key: "linkedin", label: "LinkedIn", href: LINKS.linkedin, Icon: FaLinkedin },
  { key: "discord", label: "Discord", href: LINKS.discord, Icon: SiDiscord },
  { key: "upwork", label: "Upwork", href: LINKS.upwork, Icon: SiUpwork },
  { key: "email", label: "Email", href: LINKS.email, Icon: HiOutlineMail },
];

type Props = {
  size?: number;
  gap?: number;
  className?: string;
  show?: Platform[] | null; // null means show all
};

export default function SocialLinks({ size = 18, gap = 10, className = "", show = null }: Props) {
  const list = show ? SOCIALS.filter((s) => show.includes(s.key)) : SOCIALS;

  return (
    <div className={"flex items-center " + className} style={{ gap }}>
      {list.map((s) => (
        <a
          key={s.key}
          href={s.href}
          target={s.key === "email" ? "_self" : "_blank"}
          rel={s.key === "email" ? undefined : "noopener"}
          aria-label={s.label}
          className="text-dim transition-colors hover:text-accent-soft focus:outline-none focus:ring-2 focus:ring-accent/30 rounded-md p-1"
        >
          {typeof s.Icon === "function" ? (
            <s.Icon size={size} />
          ) : (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <circle cx="12" cy="12" r="10" />
            </svg>
          )}
        </a>
      ))}
    </div>
  );
}
