"use client";

import { useEffect, useRef } from "react";
import { ArrowDownIcon } from "lucide-react";
import Terminal from "@/components/Terminal";

const ROLES = ["C/C++", "GoLang", "TypeScript", "Systems Engineer"];

export default function Home() {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const roleRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const current = ROLES[roleIndex];
      if (!roleRef.current) return;

      if (!deleting) {
        roleRef.current.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1600);
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
      setTimeout(tick, deleting ? 60 : 100);
    };

    const timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTerminal = () => {
    terminalRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-red-500/5 blur-2xl" />
        </div>

        {/* Tag line */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-mono tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          Associate SDE @ Toshiba
        </div>

        {/* Main heading */}
        <h1 className="font-acorn text-[clamp(4rem,14vw,11rem)] leading-none tracking-tight text-white mb-4">
          Sudarshan
        </h1>

        {/* Animated role */}
        <div className="font-mono text-xl md:text-2xl text-neutral-400 mb-6 h-8 flex items-center gap-2">
          <span className="text-orange-400">&gt;</span>
          <span ref={roleRef} className="text-gradient-warm font-semibold" />
          <span className="w-0.5 h-6 bg-orange-400 animate-blink inline-block" />
        </div>

        {/* Subtitle */}
        <p className="max-w-xl text-neutral-500 text-base md:text-lg font-mono leading-relaxed mb-12">
          {`I design and build things — from low-level systems`}
          <br />
          {`to full-stack web apps.`}
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

      {/* Terminal */}
      <div ref={terminalRef}>
        <Terminal />
      </div>
    </main>
  );
}
