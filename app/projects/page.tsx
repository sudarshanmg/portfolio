"use client";
import Link from "next/link";
import { ExternalLink, Github, AlertTriangle } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  tools: string;
  techColor: string;
  techLabel: string;
  deploymentLink?: string;
  githubLink?: string;
  alert?: boolean;
  wide?: boolean;
  tall?: boolean;
};

const projects: Project[] = [
  {
    title: "File Compressor (Huffman)",
    desc: "Lossless file compression from scratch implementing Huffman encoding algorithm. Compresses any file type.",
    tools: "C++",
    techColor: "border-red-500/60 shadow-red-500/10",
    techLabel: "C++",
    githubLink: "https://github.com/sudarshanmg/huffman",
    wide: true,
  },
  {
    title: "Artificial Neural Network",
    desc: "A complete ANN library built from scratch — forward pass, backprop, gradient descent. No frameworks.",
    tools: "Python, NumPy",
    techColor: "border-purple-500/60 shadow-purple-500/10",
    techLabel: "Python",
    deploymentLink: "https://github.com/sudarshanmg/ANN",
  },
  {
    title: "Frogify",
    desc: "Platform to upload, share and listen to music. Full-stack with auth, storage and streaming.",
    tools: "NextJS, TypeScript, Supabase, NextAuth, PostgreSQL, TailwindCSS",
    techColor: "border-yellow-500/60 shadow-yellow-500/10",
    techLabel: "TypeScript",
    deploymentLink: "https://frogify.vercel.app",
    githubLink: "https://github.com/sudarshanmg/frogify",
    tall: true,
  },
  {
    title: "Discord Clone",
    desc: "Full Discord clone with real-time messaging, video & audio chat via WebRTC.",
    tools: "NextJS, TypeScript, NodeJS, WebRTC, socket.io, UploadThing",
    techColor: "border-yellow-500/60 shadow-yellow-500/10",
    techLabel: "TypeScript",
    alert: true,
  },
  {
    title: "FIS — Faculty Information System",
    desc: "Custom application for the college to manage faculty data with role-based access control.",
    tools: "NextJS, TypeScript, Supabase, PostgreSQL, UploadThing",
    techColor: "border-yellow-500/60 shadow-yellow-500/10",
    techLabel: "TypeScript",
    githubLink: "https://github.com/sudarshanmg/faculty-system",
  },
  {
    title: "Pragyatha",
    desc: "Site built for the college fest — event listings, registrations, real-time updates.",
    tools: "NextJS, TypeScript, TailwindCSS, Appwrite",
    techColor: "border-orange-500/60 shadow-orange-500/10",
    techLabel: "NextJS",
    deploymentLink: "https://pragyatha.vercel.app",
    githubLink: "https://github.com/sudarshanmg/pragyatha",
    wide: true,
  },
  {
    title: "Currency Converter",
    desc: "Desktop app to convert currency rates, built with Electron for cross-platform distribution.",
    tools: "ReactJS, ElectronJS, TailwindCSS, NodeJS",
    techColor: "border-cyan-500/60 shadow-cyan-500/10",
    techLabel: "Electron",
    githubLink: "https://github.com/sudarshanmg/currency-converter",
  },
  {
    title: "Algorithm Visualiser",
    desc: "Visual playground for algorithms — watch them run step-by-step in the browser.",
    tools: "ReactJS",
    techColor: "border-orange-500/60 shadow-orange-500/10",
    techLabel: "React",
    deploymentLink: "https://sudarshanmg.github.io/sudogorithm/",
    githubLink: "https://github.com/sudarshanmg/sudogorithm",
  },
];

const techBadgeColor: Record<string, string> = {
  "C++": "bg-red-500/15 text-red-400 border-red-500/30",
  Python: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  TypeScript: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  NextJS: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  Electron: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  React: "bg-orange-500/15 text-orange-400 border-orange-500/30",
};

function ProjectCard({ project }: { project: Project }) {
  const badgeClass = techBadgeColor[project.techLabel] ?? "bg-neutral-500/15 text-neutral-400 border-neutral-500/30";

  return (
    <div
      className={`
        group relative flex flex-col bg-[#0f0f0f] rounded-2xl border p-6
        ${project.techColor}
        shadow-lg card-hover
        ${project.tall ? "row-span-2" : ""}
        ${project.wide ? "md:col-span-2" : ""}
      `}
    >
      {/* Tech badge */}
      <span className={`self-start text-xs font-mono px-2 py-0.5 rounded-full border mb-4 ${badgeClass}`}>
        {project.techLabel}
      </span>

      <h2 className="text-lg font-bold text-white leading-tight mb-2 group-hover:text-orange-400 transition-colors duration-200">
        {project.title}
      </h2>

      <p className="text-sm text-neutral-500 leading-relaxed flex-1 mb-4">
        {project.desc}
      </p>

      {/* Tools */}
      <p className="text-xs font-mono text-neutral-600 mb-4 line-clamp-1">
        {project.tools}
      </p>

      {/* Links / status */}
      <div className="flex items-center gap-3 mt-auto">
        {project.alert ? (
          <span className="flex items-center gap-1 text-xs text-yellow-500/80 font-mono">
            <AlertTriangle size={12} />
            Preview coming soon
          </span>
        ) : (
          <>
            {project.deploymentLink && (
              <Link
                href={project.deploymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-mono text-orange-400 hover:text-orange-300 transition-colors"
              >
                <ExternalLink size={12} />
                Demo
              </Link>
            )}
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                <Github size={12} />
                Source
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12">
        <p className="text-xs font-mono text-orange-400 tracking-widest uppercase mb-3">// work</p>
        <h1 className="font-acorn text-5xl md:text-7xl text-white leading-none">Projects</h1>
        <p className="mt-4 text-neutral-500 font-mono text-sm max-w-md">
          Things I built — systems software, full-stack apps, and everything in between.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </main>
  );
}
