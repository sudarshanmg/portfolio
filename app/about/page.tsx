"use client";

import Link from "next/link";
import {
  BiLogoDocker,
  BiLogoGit,
  BiLogoGithub,
} from "react-icons/bi";
import {
  SiCplusplus,
  SiGo,
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiPostgresql,
  SiFlask,
  SiQt,
  SiLinux,
  SiOpengl,
} from "react-icons/si";

const skills = [
  { icon: SiCplusplus, label: "C++" },
  { icon: SiGo, label: "Go" },
  { icon: SiPython, label: "Python" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiQt, label: "Qt / QML" },
  { icon: SiOpengl, label: "OpenGL" },
  { icon: SiFlask, label: "Flask" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiReact, label: "React" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: BiLogoDocker, label: "Docker" },
  { icon: SiLinux, label: "Linux" },
  { icon: BiLogoGit, label: "Git" },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Toshiba Software India",
    period: "Feb 2024 — Present",
    note: "Promoted from Associate Software Engineer (Mar 2026)",
    accent: "bg-orange-500",
    points: [
      "Lead developer of app-core, a shared Qt/QML architecture framework powering 7+ embedded display applications across Toshiba TEC printer models from a single model-driven codebase.",
      "Designed a model-driven UI that renders correctly across differing screen geometries (272×400 & 240×240), eliminating per-device code forks and refactoring 10+ QML pages.",
      "Architected reusable embedded components — injectable headers/footers and a centralized key-input handler with long-press & key-combination detection.",
      "Built an internal PDF translation web app (Flask, PostgreSQL) adopted org-wide — 7+ languages, JWT auth, role-based access.",
      "Designed normalized PostgreSQL schemas with native ENUMs and a hashed-refresh-token JWT auth model.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Signa-X",
    period: "Jan 2023 — Mar 2023",
    accent: "bg-cyan-400",
    points: [
      "Built full-stack web features using the MERN stack and Next.js — React frontends and Node.js/Express backend services.",
      "Implemented responsive UI components and REST API integrations in a production web application.",
    ],
  },
];

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 grid-bg">
      {/* HERO */}
      <section className="mb-16">
        <span className="inline-block bg-lime-400 text-black font-mono font-bold text-xs tracking-widest uppercase px-3 py-1.5 border-2 border-black brutal-shadow-sm -rotate-2 mb-6">
          // whoami
        </span>
        <h1 className="font-acorn text-6xl md:text-8xl text-white leading-[0.8] noise-text mb-4">
          Sudarshan
          <br />
          <span className="text-gradient-warm">MG</span>
        </h1>
        <p className="font-mono text-base md:text-lg text-neutral-400 uppercase tracking-wide border-l-4 border-lime-400 pl-4">
          Software Engineer — Backend · Full-Stack · Systems
          <br />
          <span className="text-neutral-600 text-sm normal-case tracking-normal">Bengaluru, India</span>
        </p>
      </section>

      {/* SUMMARY — big brutalist block */}
      <section className="mb-16">
        <div className="bg-white text-black border-2 border-black brutal-shadow p-6 md:p-8 -rotate-1">
          <p className="font-mono text-base md:text-lg leading-relaxed font-medium">
            Software Engineer with <span className="bg-orange-400 px-1">2+ years</span> building production
            software across the full stack — from bare-metal Qt/QML on embedded Linux to
            Flask + PostgreSQL web platforms. Lead developer of a shared embedded UI
            architecture powering <span className="bg-yellow-400 px-1">7+ device applications</span>. I
            think in systems: concurrency, data modeling, and the layers between hardware
            and humans.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mb-16">
        <h2 className="font-acorn text-4xl md:text-5xl text-white mb-6">
          <span className="text-lime-400">/</span> toolkit
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-[#111] border-2 border-white/20 hover:border-lime-400 hover:-translate-y-1 transition-all duration-150 px-3 py-2 font-mono text-sm text-neutral-300"
            >
              <Icon size={18} />
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mb-16">
        <h2 className="font-acorn text-4xl md:text-5xl text-white mb-8">
          <span className="text-lime-400">/</span> experience
        </h2>
        <div className="space-y-6">
          {experience.map((job) => (
            <div
              key={job.company}
              className="relative border-2 border-white/20 bg-[#0f0f0f] p-6 hover:border-white/40 transition-colors"
            >
              <div className={`absolute top-0 left-0 w-2 h-full ${job.accent}`} />
              <div className="pl-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{job.role}</h3>
                  <span className="font-mono text-xs text-orange-400 uppercase tracking-widest">
                    {job.period}
                  </span>
                </div>
                <p className="font-mono text-sm text-neutral-400 mb-1">{job.company}</p>
                {job.note && (
                  <p className="font-mono text-xs text-neutral-600 mb-4">{job.note}</p>
                )}
                <ul className="space-y-2 mt-4">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm text-neutral-400 leading-relaxed">
                      <span className="text-lime-400 font-bold shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mb-16">
        <h2 className="font-acorn text-4xl md:text-5xl text-white mb-6">
          <span className="text-lime-400">/</span> education
        </h2>
        <div className="bg-yellow-400 text-black border-2 border-black brutal-shadow p-6 rotate-1">
          <h3 className="text-xl md:text-2xl font-bold">Bachelor of Engineering</h3>
          <p className="font-mono text-sm mt-1">Visvesvaraya Technological University (VTU)</p>
          <p className="font-mono text-sm font-bold mt-2">2024 · CGPA 8.1 / 10</p>
        </div>
      </section>

      {/* CONNECT */}
      <section>
        <h2 className="font-acorn text-4xl md:text-5xl text-white mb-6">
          <span className="text-lime-400">/</span> connect
        </h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://github.com/sudarshanmg"
            target="_blank"
            className="flex items-center gap-2 bg-white text-black font-mono font-bold px-4 py-3 border-2 border-black brutal-press brutal-shadow"
          >
            <BiLogoGithub size={20} /> GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/sudarshanmg"
            target="_blank"
            className="flex items-center gap-2 bg-cyan-400 text-black font-mono font-bold px-4 py-3 border-2 border-black brutal-press brutal-shadow"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:sudarshanmallibhat@gmail.com"
            className="flex items-center gap-2 bg-orange-500 text-black font-mono font-bold px-4 py-3 border-2 border-black brutal-press brutal-shadow"
          >
            Email
          </Link>
        </div>
      </section>
    </main>
  );
}
