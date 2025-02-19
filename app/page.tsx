"use client"; // Ensure this is a client component

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Star from "@/public/images/star.svg";
import Terminal from "@/components/Terminal";

export default function Home() {
  const [fontSize, setFontSize] = useState(4); // Smaller initial font size for mobile
  const [starSize, setStarSize] = useState(40);
  const [subTextSize, setSubTextSize] = useState(1.5); // Smaller initial subtext size for mobile
  const [opacity, setOpacity] = useState(1);
  const terminalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setFontSize(Math.max(1.2, 4 - scrollY * 0.02)); // Smaller dynamic font size for mobile
      setStarSize(Math.max(0, 40 - scrollY * 0.2));
      setSubTextSize(Math.max(0.8, 1.5 - scrollY * 0.01)); // Smaller dynamic subtext size for mobile
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-acorn transition-all duration-300"
            style={{ fontSize: `${fontSize}rem` }}
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
            className="text-sm sm:text-base md:text-lg m-4 font-mono font-semibold text-neutral-500 transition-all duration-300"
            style={{ fontSize: `${subTextSize}rem`, opacity }}
          >
            {`I design and build things.`}
          </h2>
          <button
            onClick={scrollToTerminal}
            className="mt-4 px-4 py-2 bg-slate-900 text-neutral-500 font-semibold rounded-full shadow-md hover:bg-blue-600 transition-all"
          >
            ⬇
          </button>
        </header>
      </div>
      <div ref={terminalRef} className="mt-8">
        <Terminal />
      </div>
    </main>
  );
}
