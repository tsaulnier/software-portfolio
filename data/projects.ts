export type Project = {
  id: string;        // stable unique ID
  slug: string;      // maps to image folder
  title: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "0",
    slug: "alpha",
    title: "Project Alpha",
    description: "A short description of Alpha. Pretty cool and new.",
    tags: ["react", "design"],
  },
  {
    id: "1",
    slug: "beta",
    title: "Project Beta",
    description: "A short description of Beta. Also pretty cool and new.",
    tags: ["nextjs", "backend"],
  },
];
