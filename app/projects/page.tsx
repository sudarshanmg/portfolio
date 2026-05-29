"use client";
import Link from "next/link";
import { useRef } from "react";
import { ExternalLink, Github, Cpu } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  tools: string;
  tech: string;
  accent: string;
  deploymentLink?: string;
  githubLink?: string;
  badge?: string;
  wide?: boolean;
  tall?: boolean;
  // Fun hover reveal content
  hoverLines: string[];
  hoverEmoji: string;
};

const projects: Project[] = [
  {
    title: "app-core",
    desc: "A shared Qt/QML architecture framework — the foundation for 7+ embedded display applications across Toshiba TEC printer models from a single model-driven codebase.",
    tools: "C++, Qt6, Qt/QML, Embedded Linux",
    tech: "C++",
    accent: "red",
    badge: "WORK · LEAD DEV",
    wide: true,
    hoverEmoji: "⚙️",
    hoverLines: [
      "[QML] loading app-core v3.1...",
      "[DEVICE] 272×400 ✓  240×240 ✓",
      "[RENDER] model-driven layout OK",
      "[FLEET]  7 devices initialized ✓",
      "$ make -j8  →  BUILD OK",
    ],
  },
  {
    title: "Offline PDF Editor",
    desc: "Cross-platform desktop PDF editor with tiled OpenGL rendering, per-thread rendering contexts for concurrency, and a non-destructive annotation model.",
    tools: "C++, Qt6, MuPDF, OpenGL",
    tech: "C++",
    accent: "red",
    badge: "BUILDING",
    tall: true,
    hoverEmoji: "🖥️",
    hoverLines: [
      "GL_VENDOR: OpenGL 4.6",
      "tiles rendered:   32 × 32px",
      "render thread:    running ✓",
      "annotations:      non-destructive",
      "FPS: 60  ░░░░░░░░░░ 100%",
    ],
  },
  {
    title: "gotask",
    desc: "A complete task-manager backend in Go — JWT auth, filtering, sorting and pagination over a REST API. Idiomatic Go service design with stateless auth.",
    tools: "Go, REST, JWT",
    tech: "Go",
    accent: "cyan",
    githubLink: "https://github.com/sudarshanmg/gotask",
    hoverEmoji: "🐹",
    hoverLines: [
      "GET  /tasks?sort=due&limit=20",
      "→ 200 OK  [ 20 tasks ]",
      "POST /auth/login",
      "→ 200 OK  { jwt: ey... }",
      "go build ./...  ✓",
    ],
  },
  {
    title: "FocusKitty",
    desc: "An aesthetic Pomodoro / focus-timer web app with themeable modes. Designed, shipped and live.",
    tools: "TypeScript, React, Next.js",
    tech: "TypeScript",
    accent: "yellow",
    deploymentLink: "https://focuskitty.app",
    hoverEmoji: "🐱",
    hoverLines: [
      "  🍅  FOCUS MODE",
      "  ▶  25:00 → 24:59...",
      "  theme: sakura 🌸",
      "  streak: 7 days 🔥",
      "  meow~  ฅ^•ﻌ•^ฅ",
    ],
  },
  {
    title: "PDF Translation Platform",
    desc: "Internal document-translation web app adopted org-wide — 7+ languages, JWT auth with role-based access, and normalized PostgreSQL schemas.",
    tools: "Flask, PostgreSQL, JWT",
    tech: "Python",
    accent: "purple",
    badge: "WORK",
    wide: true,
    hoverEmoji: "🌐",
    hoverLines: [
      "EN → JA  ████████ done",
      "EN → DE  ████████ done",
      "EN → FR  ████████ done",
      "EN → ES  ████████ done",
      "7 languages  •  RBAC  •  JWT ✓",
    ],
  },
  {
    title: "Huffman Compressor",
    desc: "Lossless file compression & decompression from scratch — binary tree construction and bit-level I/O.",
    tools: "C++",
    tech: "C++",
    accent: "red",
    githubLink: "https://github.com/sudarshanmg/huffman",
    hoverEmoji: "🌳",
    hoverLines: [
      "10110011 00010110",
      "01101001 11001011",
      "tree depth:  12 levels",
      "ratio: 4.2MB → 1.8MB",
      "compression: 57% ✓",
    ],
  },
  {
    title: "Neural Network",
    desc: "A feed-forward ANN with backpropagation from first principles — no frameworks, no shortcuts.",
    tools: "Python, NumPy",
    tech: "Python",
    accent: "purple",
    githubLink: "https://github.com/sudarshanmg/ANN",
    hoverEmoji: "🧠",
    hoverLines: [
      "layers: [784, 128, 64, 10]",
      "epoch  42/100",
      "loss:   0.023  ↓↓",
      "acc:    97.4%  ↑",
      "backprop:  hand-coded ✓",
    ],
  },
];

const accentMap: Record<string, {
  border: string;
  hardShadow: string;
  badge: string;
  badgeBg: string;
  text: string;
  hoverBg: string;
  glowColor: string;
}> = {
  red: {
    border: "border-red-500",
    hardShadow: "group-hover:shadow-[8px_8px_0_0_#ef4444]",
    badge: "text-black",
    badgeBg: "bg-red-500",
    text: "text-red-400",
    hoverBg: "group-hover:bg-red-950/40",
    glowColor: "#ef4444",
  },
  cyan: {
    border: "border-cyan-400",
    hardShadow: "group-hover:shadow-[8px_8px_0_0_#22d3ee]",
    badge: "text-black",
    badgeBg: "bg-cyan-400",
    text: "text-cyan-300",
    hoverBg: "group-hover:bg-cyan-950/40",
    glowColor: "#22d3ee",
  },
  yellow: {
    border: "border-yellow-400",
    hardShadow: "group-hover:shadow-[8px_8px_0_0_#facc15]",
    badge: "text-black",
    badgeBg: "bg-yellow-400",
    text: "text-yellow-300",
    hoverBg: "group-hover:bg-yellow-950/40",
    glowColor: "#facc15",
  },
  purple: {
    border: "border-purple-500",
    hardShadow: "group-hover:shadow-[8px_8px_0_0_#a855f7]",
    badge: "text-white",
    badgeBg: "bg-purple-600",
    text: "text-purple-300",
    hoverBg: "group-hover:bg-purple-950/40",
    glowColor: "#a855f7",
  },
};

function ProjectCard({ project }: { project: Project }) {
  const a = accentMap[project.accent] ?? accentMap.red;
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -8;
    const rotY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  const handleMouseDown = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(-4px) translate(4px, 4px)";
    card.style.boxShadow = "2px 2px 0 0 " + a.glowColor;
  };

  const handleMouseUp = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    card.style.boxShadow = "";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`
        group relative flex flex-col bg-[#0c0c0c] border-2 ${a.border}
        ${a.hardShadow} ${a.hoverBg}
        p-6 transition-all duration-200 cursor-pointer select-none
        ${project.tall ? "row-span-2" : ""}
        ${project.wide ? "md:col-span-2" : ""}
        overflow-hidden
      `}
      style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease, background-color 0.2s ease" }}
    >
      {/* Hover reveal overlay — slides up from bottom */}
      <div className="
        absolute inset-x-0 bottom-0 h-0 group-hover:h-[160px]
        bg-[#0a0a0a]/95 border-t-2 border-dashed
        transition-all duration-300 ease-out overflow-hidden z-10
        flex flex-col justify-end pb-4 px-4
        font-mono text-[11px] leading-5
      " style={{ borderColor: a.glowColor }}>
        <span className="mb-2 text-[10px] uppercase tracking-widest opacity-50"
          style={{ color: a.glowColor }}>
          {project.hoverEmoji} {project.tech} runtime
        </span>
        {project.hoverLines.map((line, i) => (
          <div key={i} style={{ color: i === project.hoverLines.length - 1 ? a.glowColor : "#9ca3af" }}>
            {line}
          </div>
        ))}
      </div>

      {/* Decorative corner mark */}
      <div className="absolute top-0 right-0 w-0 h-0
        border-l-[24px] border-l-transparent
        border-t-[24px] opacity-60"
        style={{ borderTopColor: a.glowColor }}
      />

      {/* Top row: tech badge + status badge */}
      <div className="flex items-center justify-between mb-4 gap-2">
        <span className={`text-xs font-mono font-bold px-2 py-0.5 ${a.badge} ${a.badgeBg}`}>
          {project.tech}
        </span>
        {project.badge && (
          <span className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500">
            <Cpu size={11} /> {project.badge}
          </span>
        )}
      </div>

      <h2 className="font-acorn text-2xl md:text-3xl text-white leading-none mb-3">
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
            onClick={(e) => e.stopPropagation()}
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
            onClick={(e) => e.stopPropagation()}
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

/* Scattered decorative bg elements */
function BgDeco() {
  const items = [
    { text: "C++", x: "5%",  y: "8%",  rot: "-15deg", color: "#ef444415", size: "5rem" },
    { text: "Go",  x: "80%", y: "5%",  rot: "10deg",  color: "#22d3ee15", size: "4rem" },
    { text: "{}",  x: "90%", y: "40%", rot: "5deg",   color: "#a855f715", size: "6rem" },
    { text: "01",  x: "2%",  y: "55%", rot: "-8deg",  color: "#ef444410", size: "3.5rem" },
    { text: "//",  x: "50%", y: "92%", rot: "3deg",   color: "#facc1510", size: "5rem" },
    { text: "fn",  x: "75%", y: "80%", rot: "-12deg", color: "#22d3ee12", size: "4rem" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((item, i) => (
        <span
          key={i}
          className="absolute font-acorn font-bold select-none"
          style={{
            left: item.x,
            top: item.y,
            transform: `rotate(${item.rot})`,
            color: item.color,
            fontSize: item.size,
          }}
        >
          {item.text}
        </span>
      ))}
      {/* Diagonal lines pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="diag" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="20" x2="20" y2="0" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="relative max-w-5xl mx-auto px-4 py-12 overflow-hidden">
      <BgDeco />

      <div className="relative z-10 mb-12">
        <span className="inline-block bg-yellow-400 text-black font-mono font-bold text-xs tracking-widest uppercase px-3 py-1.5 border-2 border-black brutal-shadow-sm -rotate-2 mb-5">
          // selected work
        </span>
        <h1 className="font-acorn text-6xl md:text-8xl text-white leading-[0.85] noise-text">
          Projects
        </h1>
        <p className="mt-5 text-neutral-400 font-mono text-sm max-w-lg">
          Systems software, embedded frameworks, full-stack platforms — things that ship and things I build for the love of it.
          <span className="text-neutral-600 ml-2">// hover a card</span>
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </main>
  );
}
