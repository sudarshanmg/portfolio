"use client"; // Ensure this is a client component

import { useEffect, useState, useRef } from "react";
import { BiDownArrowCircle } from "react-icons/bi";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import Star from "@/public/images/star.svg";
import Terminal from "@/components/Terminal";

export default function Home() {
  const [starSize, setStarSize] = useState(40);
  const [opacity, setOpacity] = useState(1);
  const terminalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setStarSize(Math.max(0, 40 - scrollY * 0.2));
      setOpacity(Math.max(0, 1 - scrollY * 0.005));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTerminal = () => {
    terminalRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col justify-stretch">
      <div className="text-center my-16 mx-4 max-h-fit">
        <header className="font-playfair">
          <div className="hidden lg:block relative">
            <Image
              src={Star}
              width={starSize}
              height={starSize}
              alt="star bro"
              className="right-60 absolute"
              style={{ opacity }}
            />
          </div>
          <h1
            className="text-6xl md:text-6xl lg:text-8xl font-acorn transition-all duration-300"
            style={{ opacity }}
          >
            <div>{`Hi. I'm Sudarshan.`}</div>
            <div className="font-extralight">El creator.</div>
          </h1>
          <div className="hidden lg:block relative">
            <Image
              src={Star}
              width={starSize}
              height={starSize}
              alt="star bro"
              className="left-60 absolute bottom-4"
              style={{ opacity }}
            />
          </div>
          <h2
            className="text-sm sm:text-md md:text-lg m-4 font-mono font-semibold text-neutral-500 transition-all duration-300"
            style={{ opacity }}
          >
            {`I design and build things.`}
          </h2>
          <button onClick={scrollToTerminal}>
            <ArrowDownIcon
              className="transition-all text-slate-800 hover:text-slate-600 m-4"
              size={40}
            />
          </button>
        </header>
      </div>
      <div ref={terminalRef}>
        <Terminal />
      </div>
    </main>
  );
}
