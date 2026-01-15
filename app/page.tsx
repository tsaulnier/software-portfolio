"use client";

import Image from "next/image";
import Link from "next/link";
import { useState} from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null);
  
  const router = useRouter();

  const [locked, setLocked] = useState(false);
  
  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  const isDarkMode = 0;

  const handleTap = (section: "resume" | "projects" | "about", href: string) => {
    if (locked) return;
    setLocked(true);
    setHovered(section);

    setTimeout(() => {
      router.push(href);
    }, 500);
  };

  useEffect(() => {
    const reset = () => {
      setHovered(null);
      setLocked(false);
    };

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        reset();
      }
    });

    return () => {
      document.removeEventListener("visibilitychange", reset);
    };
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center">
      <div className="relative flex flex-col items-center justify-center">
        <h1 className="absolute -top-12 text-xl font-mono font-thin tracking-widest z-20 pointer-events-none">
          THOM SAULNIER
        </h1>
        <Link
          href="/resume"
          onMouseEnter={() => setHovered("resume")}
          onMouseLeave={() => setHovered(null)}
          onClick={(e) => {
            if (!isTouch) return;
            e.preventDefault();
            handleTap("resume", "/resume");
          }}
          className="absolute -bottom-17 text-small font-mono font-thin tracking-widest z-20">
          RÉSUMÉ
        </Link>
        <Link
          href="/projects"
          onMouseEnter={() => setHovered("projects")}
          onMouseLeave={() => setHovered(null)}
          onClick={(e) => {
            if (!isTouch) return;
            e.preventDefault();
            handleTap("projects", "/projects");
          }}
          className="absolute -bottom-25 text-med font-mono font-thin tracking-widest z-20">
          PROJECTS
        </Link>
        <Link
          href="/about"
          onMouseEnter={() => setHovered("about")}
          onMouseLeave={() => setHovered(null)}
          onClick={(e) => {
            if (!isTouch) return;
            e.preventDefault();
            handleTap("about", "/about");
          }}
          className="absolute -bottom-33 text-med font-mono font-thin tracking-widest z-20">
          ABOUT ME
        </Link> 

        <Image
          src="/thom.png"
          alt="thom"
          width={192}
          height={192}
          priority
          className=" rounded-full border z-10"
          style={{ borderColor: "var(--outline-color"}}
        />
      </div>
      <div
        className="absolute w-[600px] h-[600px] rounded-full border transition-all duration-300 pointer-events-none z-0"
        style={{
          borderColor: "var(--arc-color)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: hovered === "about" ? 0.8 : 0.2,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 90%)"
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full border transition-all duration-300 pointer-events-none z-0"
        style={{
          borderColor: "var(--arc-color)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: hovered === "projects" ? 0.8 : 0.2,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 90%)"
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full border transition-all duration-300 pointer-events-none z-0"
        style={{
          borderColor: "var(--arc-color)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: hovered === "resume" ? 0.8 : 0.2,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 90%)"
        }}
      />
      <div
        className="absolute w-[260px] h-[260px] rounded-full border transition-all duration-300 pointer-events-none z-0"
        style={{
          borderColor: "var(--arc-color)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          clipPath: "polygon(0% 20%, 100% 20%, 100% 100%, 0% 100%)"
        }}
      />
    </main>
  );
}