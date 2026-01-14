"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  // Load saved preference
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) setTheme(stored);
  }, []);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {children}
      {/* Expose setter via context (optional) */}
    </>
  );
}
