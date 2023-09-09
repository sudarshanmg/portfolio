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
const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [res, setRes] = useState<ReactNode[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [prevInput, setprevInput] = useState<string>(input);

  useEffect(() => {
    scrollToBottom();
  }, [res]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setprevInput(e.target.value);
  };

  const handleEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand();
    }
    if (e.key === "ArrowUp") {
      setInput(prevInput);
    }
  };

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const executeCommand = () => {
    const command = input.toLowerCase().trim();
    console.log(command);

    let result: string = "";

    switch (command) {
      case "about":
        result = "I am a software enigineer by day. (and Batman by night 🦇)";
        break;
      case "hi":
        result = `Hello, User ${randomAnimal}!`;
        break;
      case "xp":
        const pattern = /^xp\s+-t\b/;
        if (pattern.test(command)) {
          result = `MERN Stack`;
        } else {
          result = `Worked as a full-stack developer intern @ Signa-X from Dec-2022 to Mar-2023`;
        }
        break;
      case "clear":
        result = "";
        setRes([]);
        break;
      default:
        result = `Command not found: ${command}`;
        break;
    }

    // for cmds with flags

    const xp_t = /^xp\s+-t\b/; // xp -t
    const about_r = /^about\s+-r\b/; // about -r

    if (xp_t.test(command)) {
      result =
        "ReactJS, NextJS, NodeJS, MongoDB, BaaS, Linux, Python, C/C++, Java, JS/TS";
    }

    if (about_r.test(command)) {
      result =
        "https://drive.google.com/file/d/1OJnELX78XioDBuAjgioT_JKAP8LPqiSO/view?usp=drive_link";
    }

    setRes((prevOutput: any) => [
      ...prevOutput,
      <div key={res.length}>
        {input !== "clear" && <span className="text-white">{"> "}</span>}
        {input === "clear" ? "" : input}
        {input !== "clear" && <br />}
        <span
          className={clsx(
            "text-lime-500",
            result === `Command not found: ${command}`
              ? "text-red-500"
              : "text-lime-500"
          )}
        >
          {result.startsWith("https") ? (
            <Link href={result} target="_blank" className="hover:underline">
              -{">"} Resume link {"<"}-
            </Link>
          ) : (
            result
          )}
        </span>
      </div>,
    ]);

    setInput("");
  };

  return (
    <div
      ref={containerRef}
      className={
        "h-[50vh] m-4 rounded-lg bg-neutral-900 p-4 font-mono shadow-inner shadow-neutral-700  overflow-y-auto text-white"
      }
    >
      <div className="text-md font-mono mb-4">
        <div className="text-white">{"> "}hello...</div>
        <div className="text-lime-500">
          <div> {`- type 'hi' to know your animal`}</div>
          <div>
            {" "}
            {`- type 'about' to know more about me, use -r flag to get the resume
            link`}
          </div>
          <div>
            {" "}
            {`- type 'xp' to know about my experience, use -t flag to diplay`}
            toolkit
          </div>
          <div> {`- type 'works' to know about my past works`}</div>
          <div> {`- type 'clear' to clear the terminal`}</div>
          <div> {`- Use the up arrow key ( ^ ) to load previous cmd`}</div>
        </div>
      </div>

      <div>{res}</div>
      <div className="flex">
        <span className="text-white">{">"}</span>
        <input
          autoCapitalize="false"
          spellCheck="false"
          autoComplete="off"
          value={input}
          className="bg-transparent outline-none border-none p-0 w-5/6 resize-none pl-2"
          onChange={handleInputChange}
          onKeyDown={handleEnterKey}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
