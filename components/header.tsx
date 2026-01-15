"use client";

import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";

export function Header() {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a skeleton placeholder
  }

  const dark = theme === "dark";

  return (
    <header className="
      fixed
      top-4
      right-4
      z-50
      max-w-[100vw]
      overflow-hidden
      pointer-events-auto
      ">
      <label className="relative inline-flex items-center cursor-pointer">
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
            flex items-center justify-center text-xs
            transition-transform
            peer-checked:translate-x-7
            peer-checked:bg-white peer-checked:text-neutral-900
          "
        >
          {dark ? "☾" : "☀︎"}
        </div>
      </label>
    </header>
  );
}
