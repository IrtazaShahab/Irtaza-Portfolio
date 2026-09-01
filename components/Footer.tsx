import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 font-mono text-xs text-faint">
        <span>© {new Date().getFullYear()} Muhammad Irtaza Shahab</span>
        <div className="flex items-center gap-5">
          <SocialLinks size={16} />
          <a href="#hero" className="transition hover:text-accent-soft">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
