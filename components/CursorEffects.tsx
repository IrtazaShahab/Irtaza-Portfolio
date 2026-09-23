"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// Site-wide pointer effects: a soft purple→blue glow that trails the cursor,
// and a short pulse wherever the user clicks. Both are pointer-events: none
// and screen-blended at low opacity, so they tint the page without covering
// text or intercepting clicks. Mouse / trackpad only — touch gets neither.
export default function CursorEffects() {
  const glowRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const layer = layerRef.current;
    if (!glow || !layer) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lag = reduceMotion ? 0.001 : 0.55;
    const moveX = gsap.quickTo(glow, "x", { duration: lag, ease: "power3.out" });
    const moveY = gsap.quickTo(glow, "y", { duration: lag, ease: "power3.out" });

    let shown = false;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      if (!shown) {
        // first move: jump into place instead of sliding in from the corner
        gsap.set(glow, { x: e.clientX, y: e.clientY });
        gsap.to(glow, { opacity: 1, duration: 0.4 });
        shown = true;
      }
      moveX(e.clientX);
      moveY(e.clientY);
    };
    const onLeave = () => {
      gsap.to(glow, { opacity: 0, duration: 0.4 });
      shown = false;
    };

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const pulse = document.createElement("span");
      pulse.className = "click-pulse";
      layer.appendChild(pulse);
      gsap.set(pulse, { x: e.clientX, y: e.clientY, xPercent: -50, yPercent: -50 });
      const done = () => pulse.remove();
      if (reduceMotion) {
        gsap.fromTo(pulse, { opacity: 0.8, scale: 1 }, { opacity: 0, duration: 0.35, onComplete: done });
      } else {
        gsap.fromTo(
          pulse,
          { opacity: 0.9, scale: 0.2 },
          { opacity: 0, scale: 1, duration: 0.6, ease: "power2.out", onComplete: done },
        );
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      gsap.killTweensOf(glow);
      layer.querySelectorAll(".click-pulse").forEach((n) => n.remove());
    };
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden mix-blend-screen"
    >
      <div ref={glowRef} className="cursor-glow" />
    </div>
  );
}
