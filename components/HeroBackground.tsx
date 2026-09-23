"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

// Hero backdrop: two domain-warped gradient glows (the Stripe/whatamesh
// technique) in the site's purples, pinned to the top corners, with faint contour lines running
// through them. Everything is masked off before it reaches the copy or the
// portrait. GSAP handles the fade-in and the slow drift of each glow.

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform float uReveal;
  uniform float uAspect;
  uniform vec2 uLeft;   // glow centres in uv space (0,0 bottom-left)
  uniform vec2 uRight;
  uniform vec3 uViolet;
  uniform vec3 uPurple;
  uniform vec3 uDim;
  uniform vec3 uSoft;
  varying vec2 vUv;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x),
               mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + 11.7; a *= 0.5; }
    return v;
  }

  // soft elliptical falloff around a corner
  float blob(vec2 p, vec2 c, vec2 r) {
    vec2 d = (p - c) / r;
    return exp(-dot(d, d) * 1.6);
  }

  void main() {
    vec2 p = vec2(vUv.x * uAspect, vUv.y);
    float t = uTime * 0.06;

    // two-pass domain warp
    vec2 q = vec2(fbm(p * 1.6 + t), fbm(p * 1.6 - t + 4.2));
    float f = fbm(p * 1.4 + q * 1.8 + vec2(t * 0.7, -t));

    vec2 L = vec2(uLeft.x * uAspect, uLeft.y);
    vec2 R = vec2(uRight.x * uAspect, uRight.y);
    // portrait-shaped screens stack the photo at the top, so pull the glows
    // tight into the corners there
    vec2 k = uAspect < 1.0 ? vec2(0.55, 0.38) : vec2(1.0);
    float mL = blob(p, L, vec2(0.5, 0.34) * k);
    float mR = blob(p, R, vec2(0.55, 0.36) * k);
    float m = mL + mR;

    // site palette only: deep violet → accent-dim → accent, accent-soft highlights
    vec3 left = mix(uViolet, uPurple, smoothstep(0.2, 0.7, f));
    left = mix(left, uSoft, smoothstep(0.7, 0.95, q.x) * 0.3);
    vec3 right = mix(uPurple, uDim, smoothstep(0.35, 0.75, q.y));
    right = mix(right, uSoft, smoothstep(0.6, 0.9, f) * 0.35);
    vec3 base = (left * mL + right * mR) / max(m, 1e-3);

    // contour lines of the warped field — thin, lavender, only inside the glows
    float iso = f * 12.0;
    float d = 0.5 - abs(fract(iso) - 0.5); // distance to the nearest contour
    float line = 1.0 - smoothstep(0.0, fwidth(iso) * 1.2, d);

    float a = clamp(m * (0.18 + 0.42 * f), 0.0, 0.5);
    float la = line * m * 0.25;

    // hard guarantee: nothing below the top ~45% of the section
    float cut = smoothstep(uAspect < 1.0 ? 0.8 : 0.55, uAspect < 1.0 ? 0.97 : 0.88, vUv.y) * uReveal;
    a *= cut;
    la *= cut;

    vec3 rgb = base * a + uSoft * la;
    float alpha = clamp(a + la * 0.5, 0.0, 1.0);
    gl_FragColor = vec4(rgb, alpha); // premultiplied
  }
`;

// The shader writes these straight to the canvas, so keep them as the exact
// sRGB hex values instead of letting three convert them to linear space
// (which darkens the purples and shifts them toward blue).
const hex = (c: string) => new THREE.Color().setStyle(c, THREE.LinearSRGBColorSpace);

export default function HeroBackground() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, premultipliedAlpha: true, powerPreference: "low-power" });
    } catch {
      host.classList.add("hero-corners-fallback");
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // the glow is soft, so it renders below device resolution to stay cheap
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1) * 0.75);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = "block";
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();

    const uniforms = {
      uTime: { value: 8 },
      uReveal: { value: reduceMotion ? 1 : 0 },
      uAspect: { value: 1 },
      uLeft: { value: new THREE.Vector2(-0.06, 1.1) },
      uRight: { value: new THREE.Vector2(1.06, 1.1) },
      uViolet: { value: hex("#4c1d95") },
      uPurple: { value: hex("#8b5cf6") },
      uDim: { value: hex("#6d4bd6") },
      uSoft: { value: hex("#a78bfa") },
    };
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.CustomBlending,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor,
    });
    const geometry = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geometry, material));

    const render = () => renderer.render(scene, camera);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = host;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      uniforms.uAspect.value = w / h;
      render();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const cleanup = () => {
      ro.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };

    if (reduceMotion) {
      render();
      return cleanup;
    }

    // fade in, then let each glow wander a little around its corner
    const tweens = [
      gsap.to(uniforms.uReveal, { value: 1, duration: 2.2, ease: "power2.out", delay: 0.2 }),
      gsap.to(uniforms.uLeft.value, { x: 0.06, y: 1.02, duration: 9, ease: "sine.inOut", yoyo: true, repeat: -1 }),
      gsap.to(uniforms.uRight.value, { x: 0.94, y: 1.16, duration: 11, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.5 }),
    ];

    // only animate while the hero is on screen and the tab is visible
    let visible = true;
    const tick = (time: number) => {
      uniforms.uTime.value = 8 + time;
      render();
    };
    const sync = () => {
      gsap.ticker.remove(tick);
      if (visible && !document.hidden) gsap.ticker.add(tick);
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    io.observe(host);
    document.addEventListener("visibilitychange", sync);
    sync();

    return () => {
      gsap.ticker.remove(tick);
      tweens.forEach((tw) => tw.kill());
      document.removeEventListener("visibilitychange", sync);
      io.disconnect();
      cleanup();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    />
  );
}
