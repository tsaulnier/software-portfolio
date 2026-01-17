"use client";

import { useTheme } from "@/components/ThemeProvider";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const dark = theme === "dark";

  return (
    <header
      className="
        fixed top-3 inset-x-0 z-50
        px-4
        pointer-events-none
      "
    >
      <div className="flex items-center justify-between max-w-[100vw]">
        {/* Home button (hidden on /) */}
        {isHome ? (
          <div
            className="w-10 h-6"
            aria-hidden
          />
        ) : (
          <Link
            href="/"
            aria-label="Home"
            className="
              pointer-events-auto
              relative inline-flex items-center justify-center
              w-10 h-6 rounded-full
              border
              border-neutral-400
              bg-neutral-200 text-neutral-900
              dark:border-neutral-600
              dark:bg-neutral-800 dark:text-neutral-100
              transition-colors duration-200
              hover:bg-neutral-300 dark:hover:bg-neutral-700
            "
          >
            <HomeIcon />
          </Link>
        )}


        {/* Theme toggle */}
        <label className="pointer-events-auto relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={theme === "light"}
            onChange={toggle}
            className="sr-only peer"
          />

          {/* Track */}
          <div className="w-14 h-7 rounded-full bg-neutral-700 peer-checked:bg-neutral-300 transition-colors" />

          {/* Knob */}
          <div
            className="
              absolute left-1 top-1 w-5 h-5 rounded-full
              bg-neutral-950 text-neutral-100
              dark:bg-neutral-950 dark:text-neutral-100
              peer-checked:bg-white peer-checked:text-neutral-900
              flex items-center justify-center text-xs
              transition-transform
              peer-checked:translate-x-7
            "
          >
            {dark ? "☾" : "☀︎"}
          </div>
        </label>
      </div>
    </header>
  );
}

/* Inline icon keeps this self-contained */
function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 10v10h14V10" />
    </svg>
  );
}
