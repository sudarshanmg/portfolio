"use client";

import { useEffect, useRef } from "react";
import Terminal from "@/components/Terminal";

const ROLES = ["C/C++", "GoLang", "TypeScript", "Systems Engineer"];
const STACK = [
  "C++", "Go", "Python", "TypeScript", "Qt/QML", "OpenGL",
  "Embedded Linux", "Flask", "Next.js", "PostgreSQL", "Docker",
];

export default function Home() {
  const roleRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = ROLES[roleIndex];
      if (!roleRef.current) return;
      if (!deleting) {
        roleRef.current.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          timer = setTimeout(tick, 1600);
          return;
        }
      } else {
        roleRef.current.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
        }
      }
      timer = setTimeout(tick, deleting ? 55 : 95);
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col">
      {/* Split layout — stacks on mobile, side-by-side on lg */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">

        {/* LEFT: Hero */}
        <section className="
          flex flex-col justify-center px-8 py-16
          lg:w-[45%] lg:sticky lg:top-[80px] lg:h-[calc(100vh-80px)]
          relative overflow-hidden grid-bg
          border-b-2 lg:border-b-0 lg:border-r-2 border-orange-500/30
        ">
          {/* BG blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-3xl animate-float" />
            <div className="absolute bottom-10 right-0 w-[200px] h-[200px] rounded-full bg-red-500/10 blur-2xl" />
          </div>

          {/* Sticker */}
          <div className="mb-6 -rotate-2 animate-wiggle w-fit">
            <span className="inline-block bg-orange-500 text-black font-mono font-bold text-xs tracking-widest uppercase px-3 py-1.5 border-2 border-black brutal-shadow-sm">
              ./hello_world
            </span>
          </div>

          {/* Name */}
          <h1 className="font-acorn text-[clamp(3.5rem,10vw,8rem)] leading-[0.82] tracking-tighter text-white noise-text mb-5">
            Sudar
            <br />
            <span className="text-orange-500">shan</span>
          </h1>

          {/* Animated role */}
          <div className="font-mono text-base md:text-lg text-neutral-400 mb-5 h-7 flex items-center gap-2">
            <span className="text-orange-400">&gt;</span>
            <span ref={roleRef} className="text-gradient-warm font-bold" />
            <span className="w-0.5 h-5 bg-orange-400 animate-blink inline-block" />
          </div>

          {/* Subtitle */}
          <p className="text-neutral-500 text-sm font-mono leading-relaxed mb-8 max-w-xs">
            {`Bare-metal Qt/QML on embedded Linux to full-stack web platforms.`}
          </p>

          {/* Social links */}
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://github.com/sudarshanmg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-mono font-bold text-xs px-3 py-2 border-2 border-black brutal-press brutal-shadow-sm uppercase tracking-wide"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sudarshanmg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 text-black font-mono font-bold text-xs px-3 py-2 border-2 border-black brutal-press brutal-shadow-sm uppercase tracking-wide"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sudarshanmallibhat@gmail.com"
              className="bg-orange-500 text-black font-mono font-bold text-xs px-3 py-2 border-2 border-black brutal-press brutal-shadow-sm uppercase tracking-wide"
            >
              Email
            </a>
          </div>
        </section>

        {/* RIGHT: Terminal — always visible */}
        <div className="flex-1 flex flex-col lg:overflow-y-auto lg:h-[calc(100vh-80px)] px-4 py-8 bg-[#080808]">
          <Terminal />
        </div>
      </div>

      {/* Tech marquee — full width below the split */}
      <div className="relative overflow-hidden border-y-2 border-orange-500/40 bg-orange-500 py-3 -rotate-1">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...STACK, ...STACK].map((tech, i) => (
            <span
              key={i}
              className="mx-6 text-black font-mono font-bold text-lg uppercase tracking-wide"
            >
              {tech} <span className="text-black/40">✦</span>
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
