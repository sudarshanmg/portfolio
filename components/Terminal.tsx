"use client";

import React, {
  useState,
  KeyboardEvent,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { randomAnimal } from "../utils/animalEmojis";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Terminal: React.FC = () => {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const [res, setRes] = useState<ReactNode[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [prevInput, setPrevInput] = useState<string>(input);

  useEffect(() => {
    scrollToBottom();
  }, [res]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setPrevInput(e.target.value);
  };

  const handleEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") executeCommand();
    if (e.key === "ArrowUp") setInput(prevInput);
  };

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const executeCommand = () => {
    const command = input.toLowerCase().trim();
    let result: string = "";

    if (command.startsWith("whoami")) {
      const pattern = /^whoami\s+-r\b/;
      if (pattern.test(command)) {
        result = "Updating soon...";
      } else {
        result =
          "Sudarshan MG — a software engineer who lives across the stack, from bare-metal Qt/QML on embedded Linux up to Flask + Postgres web platforms. I lead app-core, a model-driven UI framework that powers 7+ Toshiba printer applications from a single codebase. I think in systems: concurrency, data models, and the messy layers between silicon and humans. C++, Go, Python and TypeScript are the tools I reach for. I build things that have to actually work.";
      }
    } else if (command.startsWith("hi") || command.startsWith("hello")) {
      result = `Hey visitor ${randomAnimal}!`;
    } else if (command.startsWith("repo")) {
      result = "https://github.com/sudarshanmg/portfolio";
    } else if (command.startsWith("xp")) {
      const pattern = /^xp\s+-t\b/;
      if (pattern.test(command)) {
        result = `▶ C++, Go, Python, JS/TS, SQL · Qt6/QML, OpenGL, Embedded Linux · Flask, Node.js, Next.js, React · PostgreSQL, Docker, Git, Linux`;
      } else {
        result = `▶ Software Engineer @ Toshiba Software India (Feb 2024 — Present), promoted from Associate SDE. Lead developer of app-core. Ex Full-Stack Intern @ Signa-X (2023). Use -t for the toolkit.`;
      }
    } else if (command.startsWith("clear")) {
      result = "";
      setRes([]);
    } else if (command.startsWith("works")) {
      result = "▶ Software Engineer @ Toshiba Software India — leading app-core across 7+ embedded printer apps";
    } else if (command.startsWith("connect")) {
      const email_pattern = /^connect\s+-e\b/;
      const insta_pattern = /^connect\s+-i\b/;
      const github_pattern = /^connect\s+-g\b/;
      const x_pattern = /^connect\s+-x\b/;
      const linkedin_pattern = /^connect\s+-l\b/;

      if (email_pattern.test(command)) {
        result = "sudarshanmallibhat@gmail.com";
      } else if (insta_pattern.test(command)) {
        result = "Not available currently";
      } else if (github_pattern.test(command)) {
        result = "https://github.com/sudarshanmg";
      } else if (linkedin_pattern.test(command)) {
        result = "https://linkedin.com/in/sudarshanmg";
      } else if (x_pattern.test(command)) {
        result = "https://twitter.com/pivotanimated";
      } else {
        result =
          "▶ Available on GitHub (-g), LinkedIn (-l), X (-x), Instagram (-i) and e-mail (-e). Use the appropriate flags!";
      }
    } else if (command.startsWith("cd")) {
      const about_pattern = /^cd\s+about\b/;
      const projects_pattern = /^cd\s+projects\b/;
      const wall_pattern = /^cd\s+wall\b/;
      if (about_pattern.test(command)) {
        result = "Redirecting to the about page...";
        router.push("/about");
      } else if (projects_pattern.test(command)) {
        result = "Redirecting to the projects page...";
        router.push("/projects");
      } else if (wall_pattern.test(command)) {
        result = "Redirecting to the wall...";
        router.push("/wall");
      } else {
        result = `Available pages: about, wall, projects`;
      }
    } else if (command.startsWith("help")) {
      result = `▶ type 'hi' to say hello\n▶ use 'cd <page-name>' to go to that page\n▶ type 'whoami' to know more about me, use -r flag to get the resume link\n▶ type 'repo' to go to the github page\n▶ type 'xp' to know about my experience, use -t flag to display my toolkit\n▶ type 'help' to show help\n▶ type 'works' to know about my current work\n▶ type 'connect' to connect with me on 'github (-g)', 'linkedin (-l)', 'X (-x)', 'instagram (-i)', email (-e)'\n▶ type 'clear' to clear the terminal\n▶ Use the up arrow key ( ^ ) to load previous cmd`;
    } else if (command.startsWith("exit")) {
      result = "▶ Haha, nice try! But you cannot exit this terminal 😈";
    } else {
      result = `▶ Command not found: ${command}`;
    }

    const isError =
      result === `▶ Command not found: ${command}` ||
      command.startsWith("exit");

    const formattedResult = result.split("\n").map((line, index) => (
      <div key={index}>{line}</div>
    ));

    setRes((prevOutput: ReactNode[]) => [
      ...prevOutput,
      <div key={res.length} className="mb-1">
        {command !== "clear" && (
          <span className="text-orange-400 font-bold">{"sudarshan@dev:~$ "}</span>
        )}
        <span className="text-white">{command === "clear" ? "" : input}</span>
        {command !== "clear" && <br />}
        <span className={clsx(isError ? "text-red-400" : "text-emerald-400")}>
          {result.startsWith("https") ? (
            <Link href={result} target="_blank" className="hover:underline text-amber-400">
              ⭧ {result} ⭧
            </Link>
          ) : result.endsWith("@gmail.com") ? (
            <Link
              href={"mailto: " + result}
              target="_blank"
              className="hover:underline text-amber-400"
            >
              ⭧ {result} ⭧
            </Link>
          ) : (
            formattedResult
          )}
        </span>
      </div>,
    ]);

    setInput("");
  };

  return (
    <div className="mx-4 mb-8 rounded-xl overflow-hidden border-2 border-orange-500/40 glow-orange">
      {/* Terminal window bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#111111] border-b-2 border-orange-500/30">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-3 text-xs text-neutral-500 font-mono">sudarshan@dev — bash</span>
        <div className="ml-auto text-xs text-neutral-600 font-mono">~/portfolio</div>
      </div>

      {/* Terminal body */}
      <div
        ref={containerRef}
        className="h-[75vh] bg-[#0d0d0d] p-4 font-mono text-sm overflow-y-auto scrollbar"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="text-orange-400 font-bold mb-1">
          {"sudarshan@dev:~$ "}
          <span className="text-white">hello...</span>
        </div>
        <div className="text-emerald-400 mb-4">
          <div>{`▶ Welcome. type 'help' to explore.`}</div>
          <div className="text-neutral-500 text-xs mt-1">{`// C++ • Go • TypeScript • Python • Qt/QML`}</div>
        </div>

        <div>{res}</div>

        <div className="flex items-center mt-1">
          <span className="text-orange-400 font-bold whitespace-nowrap">{"sudarshan@dev:~$ "}</span>
          <input
            ref={inputRef}
            autoCapitalize="false"
            spellCheck="false"
            autoComplete="off"
            value={input}
            className="flex-1 bg-transparent outline-none border-none p-0 ml-2 text-white caret-orange-400"
            onChange={handleInputChange}
            onKeyDown={handleEnterKey}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
