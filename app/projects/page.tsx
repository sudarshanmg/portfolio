"use client";
import Link from "next/link";
import { ExternalLink, Github, Cpu } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  tools: string;
  tech: string;
  accent: string; // tailwind color base e.g. "red"
  deploymentLink?: string;
  githubLink?: string;
  badge?: string; // e.g. "WORK" / "BUILDING"
  wide?: boolean;
  tall?: boolean;
};

const projects: Project[] = [
  {
    title: "app-core",
    desc: "A shared Qt/QML architecture framework — the foundation for 7+ embedded display applications across Toshiba TEC printer models, all driven from a single model-driven codebase. Renders correctly across differing screen geometries (272×400 & 240×240).",
    tools: "C++, Qt6, Qt/QML, Embedded Linux",
    tech: "C++",
    accent: "red",
    badge: "WORK · LEAD DEV",
    wide: true,
  },
  {
    title: "Offline PDF Editor",
    desc: "Cross-platform desktop PDF editor with tiled OpenGL rendering, a per-thread rendering context for concurrency, and a non-destructive annotation model.",
    tools: "C++, Qt6, MuPDF, OpenGL",
    tech: "C++",
    accent: "red",
    badge: "BUILDING",
    tall: true,
  },
  {
    title: "gotask",
    desc: "A complete task-manager backend in Go — JWT auth, filtering, sorting and pagination over a REST API. Idiomatic Go service design with stateless auth.",
    tools: "Go, REST, JWT",
    tech: "Go",
    accent: "cyan",
    githubLink: "https://github.com/sudarshanmg/gotask",
  },
  {
    title: "FocusKitty",
    desc: "An aesthetic Pomodoro / focus-timer web app with themeable modes. Designed, shipped and live.",
    tools: "TypeScript, React, Next.js",
    tech: "TypeScript",
    accent: "yellow",
    deploymentLink: "https://focuskitty.app",
  },
  {
    title: "PDF Translation Platform",
    desc: "Internal document-translation web app adopted org-wide — 7+ languages, JWT auth with role-based access, and normalized PostgreSQL schemas.",
    tools: "Flask, PostgreSQL, JWT",
    tech: "Python",
    accent: "purple",
    badge: "WORK",
    wide: true,
  },
  {
    title: "Huffman Compressor",
    desc: "Lossless file compression & decompression from scratch using Huffman coding — binary tree construction and bit-level I/O.",
    tools: "C++",
    tech: "C++",
    accent: "red",
    githubLink: "https://github.com/sudarshanmg/huffman",
  },
  {
    title: "Neural Network from Scratch",
    desc: "A feed-forward artificial neural network with backpropagation, implemented from first principles — no ML frameworks.",
    tools: "Python, NumPy",
    tech: "Python",
    accent: "purple",
    githubLink: "https://github.com/sudarshanmg/ANN",
  },
];

const accentMap: Record<string, { border: string; shadow: string; badge: string; text: string }> = {
  red:    { border: "border-red-500",    shadow: "hover:shadow-[6px_6px_0_0_#ef4444]", badge: "bg-red-500",    text: "text-red-400" },
  cyan:   { border: "border-cyan-400",   shadow: "hover:shadow-[6px_6px_0_0_#22d3ee]", badge: "bg-cyan-400",   text: "text-cyan-300" },
  yellow: { border: "border-yellow-400", shadow: "hover:shadow-[6px_6px_0_0_#facc15]", badge: "bg-yellow-400", text: "text-yellow-300" },
  purple: { border: "border-purple-500", shadow: "hover:shadow-[6px_6px_0_0_#a855f7]", badge: "bg-purple-500", text: "text-purple-300" },
  orange: { border: "border-orange-500", shadow: "hover:shadow-[6px_6px_0_0_#f97316]", badge: "bg-orange-500", text: "text-orange-300" },
};

function ProjectCard({ project }: { project: Project }) {
  const a = accentMap[project.accent] ?? accentMap.orange;

  return (
    <div
      className={`
        group relative flex flex-col bg-[#0f0f0f] border-2 ${a.border} ${a.shadow}
        p-6 transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1
        ${project.tall ? "row-span-2" : ""}
        ${project.wide ? "md:col-span-2" : ""}
      `}
    >
      {/* Top row: tech + badge */}
      <div className="flex items-center justify-between mb-4 gap-2">
        <span className={`text-xs font-mono font-bold px-2 py-0.5 text-black ${a.badge}`}>
          {project.tech}
        </span>
        {project.badge && (
          <span className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500">
            <Cpu size={11} /> {project.badge}
          </span>
        )}
      </div>

      <h2 className="font-acorn text-2xl md:text-3xl text-white leading-none mb-3 transition-colors">
        {project.title}
      </h2>

      <p className="text-sm text-neutral-400 leading-relaxed flex-1 mb-4">
        {project.desc}
      </p>

      <p className="text-xs font-mono text-neutral-600 mb-4">{project.tools}</p>

      <div className="flex items-center gap-4 mt-auto pt-3 border-t border-white/10">
        {project.deploymentLink && (
          <Link
            href={project.deploymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 text-xs font-mono font-bold ${a.text} hover:underline`}
          >
            <ExternalLink size={13} /> LIVE
          </Link>
        )}
        {project.githubLink && (
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-mono font-bold text-neutral-400 hover:text-white hover:underline"
          >
            <Github size={13} /> SOURCE
          </Link>
        )}
        {!project.deploymentLink && !project.githubLink && (
          <span className="text-xs font-mono text-neutral-600 italic">internal / proprietary</span>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12">
        <span className="inline-block bg-yellow-400 text-black font-mono font-bold text-xs tracking-widest uppercase px-3 py-1.5 border-2 border-black brutal-shadow-sm -rotate-2 mb-5">
          // selected work
        </span>
        <h1 className="font-acorn text-6xl md:text-8xl text-white leading-[0.85] noise-text">
          Projects
        </h1>
        <p className="mt-5 text-neutral-400 font-mono text-sm max-w-lg">
          Systems software, embedded UI frameworks, full-stack platforms — things that ship and things I build for the love of it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </main>
  );
}
