"use client";

import { useEffect, useRef } from "react";
import { ArrowDownIcon } from "lucide-react";
import Terminal from "@/components/Terminal";

const ROLES = ["C/C++", "GoLang", "TypeScript", "Systems Engineer"];
const STACK = [
  "C++", "Go", "Python", "TypeScript", "Qt/QML", "OpenGL",
  "Embedded Linux", "Flask", "Next.js", "PostgreSQL", "Docker",
];

export default function Home() {
  const terminalRef = useRef<HTMLDivElement | null>(null);
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

  const scrollToTerminal = () => {
    terminalRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="min-h-[82vh] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden grid-bg">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-3xl animate-float" />
          <div className="absolute bottom-0 right-10 w-[280px] h-[280px] rounded-full bg-red-500/10 blur-2xl" />
          <div className="absolute top-10 left-10 w-[220px] h-[220px] rounded-full bg-yellow-500/5 blur-2xl" />
        </div>

        {/* Sticker tag */}
        <div className="mb-8 -rotate-2 animate-wiggle">
          <span className="inline-block bg-orange-500 text-black font-mono font-bold text-xs tracking-widest uppercase px-3 py-1.5 border-2 border-black brutal-shadow-sm">
            ./hello_world
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-acorn text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-tighter text-white mb-6 noise-text">
          Sudarshan
        </h1>

        {/* Animated role */}
        <div className="font-mono text-xl md:text-2xl text-neutral-400 mb-8 h-8 flex items-center gap-2">
          <span className="text-orange-400">&gt;</span>
          <span ref={roleRef} className="text-gradient-warm font-bold" />
          <span className="w-0.5 h-6 bg-orange-400 animate-blink inline-block" />
        </div>

        {/* Subtitle */}
        <p className="max-w-xl text-neutral-500 text-base md:text-lg font-mono leading-relaxed mb-12">
          {`I design and build things — from bare-metal Qt/QML`}
          <br />
          {`on embedded Linux to full-stack web platforms.`}
        </p>

        {/* CTA */}
        <button
          onClick={scrollToTerminal}
          className="group flex flex-col items-center gap-2 text-neutral-600 hover:text-orange-400 transition-colors duration-200"
          aria-label="Scroll to terminal"
        >
          <span className="text-xs font-mono tracking-widest uppercase">explore</span>
          <ArrowDownIcon
            size={20}
            className="group-hover:translate-y-1 transition-transform duration-200"
          />
        </button>
      </section>

      {/* Tech marquee */}
      <div className="relative overflow-hidden border-y-2 border-orange-500/40 bg-orange-500 py-3 mb-8 -rotate-1">
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

      {/* Terminal */}
      <div ref={terminalRef}>
        <Terminal />
      </div>
    </main>
  );
}
