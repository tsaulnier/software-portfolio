// app/projects/page.tsx
import ProjectsClient from "./ProjectsClient";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  
    const allTags = Array.from(
        new Set(projects.flatMap((project) => project.tags))
    ).sort();

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <ProjectsClient projects={projects} allTags={allTags} />
    </main>
  );
}
