"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [dark, setDark] = useState(true);

  // Initialize theme from document class
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  };

  return (
    <header className="fixed top-4 right-4 z-50">
      <label className="relative inline-flex items-center cursor-pointer">
        {/* Hidden checkbox controls toggle */}
        <input
          type="checkbox"
          checked={!dark} // unchecked = dark, checked = light
          onChange={toggle}
          className="sr-only peer"
        />

        {/* Track */}
        <div className="w-14 h-7 bg-neutral-700 rounded-full peer-checked:bg-neutral-300 transition-colors" />

        {/* Knob with icon */}
        <div className="
          absolute left-1 top-1 w-5 h-5 rounded-full
          bg-neutral-950 text-neutral-100
          flex items-center justify-center text-xs
          transition-transform
          peer-checked:translate-x-7
          peer-checked:bg-white peer-checked:text-neutral-900
        ">
          {dark ? "☾" : "☀︎"}
        </div>
      </label>
    </header>
  );
}
