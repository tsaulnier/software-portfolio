"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

type Props = {
  projects: Project[];
  allTags: string[];
};

export default function ProjectsClient({ projects, allTags }: Props) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [matchMode, setMatchMode] = useState<"any" | "all">("any");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"all" | "filter">("all");

  const filteredProjects = useMemo(() => {
    if (viewMode === "all") return projects;

    return projects.filter((project) => {
        const terms = searchQuery
            .toLowerCase()
            .split(/\s+/)
            .filter(Boolean);

        const matchesSearch =
            terms.length === 0 ||
            terms.every((term) =>
                project.title.toLowerCase().includes(term) ||
                project.description.toLowerCase().includes(term) ||
                project.tags.some((tag) => tag.includes(term))
            );

        const matchesTags =
            selectedTags.length === 0 ||
            (matchMode === "any"
            ? selectedTags.some((tag) => project.tags.includes(tag))
            : selectedTags.every((tag) => project.tags.includes(tag)));

      return matchesSearch && matchesTags;
    });
  }, [projects, selectedTags, matchMode, searchQuery, viewMode]);

  function toggleTag(tag: string) {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  }

  return (
    <>
      {/* Back */}
      <nav style={{ padding: "0.75rem" }}>
        <Link href="/">← BACK</Link>
      </nav>

      {/* Title */}
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="opacity-70">
        Filter by tags or specify keywords
      </p>

      {/* Top controls */}
      <div className="flex items-center gap-3">
        <span className={viewMode === "all" ? "font-medium" : "opacity-50"}>
            SHOW ALL
        </span>

        <label className="relative inline-flex items-center cursor-pointer">
            <input
            type="checkbox"
            checked={viewMode === "filter"}
            onChange={() =>
                setViewMode((v) => (v === "all" ? "filter" : "all"))
            }
            className="sr-only peer"
            />

            <div className="w-14 h-7 bg-gray-300 rounded-full peer-checked:bg-gray-400 transition-colors" />

            <div className="absolute left-1 top-1 w-5 h-5 bg-black rounded-full transition-transform peer-checked:translate-x-7" />
        </label>

        <span className={viewMode === "filter" ? "font-medium" : "opacity-50"}>
            FILTER
        </span>

        <input
          placeholder="Keywords (optional)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-2 py-1 ml-2"
        />
      </div>

      {/* Match mode */}
      
      {/* Section A: tag toggles */}
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 border ${
              selectedTags.includes(tag) && "bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="flex gap-6 text-sm">
        <label className="flex gap-1 items-center">
          <input
            type="radio"
            checked={matchMode === "any"}
            onChange={() => setMatchMode("any")}
          />
          Match <strong>any</strong> tags
        </label>

        <label className="flex gap-1 items-center">
          <input
            type="radio"
            checked={matchMode === "all"}
            onChange={() => setMatchMode("all")}
          />
          Match <strong>all</strong> tags
        </label>
      </div>

      {/* Section B: project list */}
      <div className="space-y-4 pt-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="border p-4 cursor-pointer hover:bg-gray-50"
          >
            <div className="font-medium">{project.title}</div>
            <p className="text-sm opacity-70">{project.description}</p>

            <div className="flex gap-2 mt-2 text-xs">
              {project.tags.map((tag) => (
                <span key={tag} className="border px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
