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
  {
    id: "2",
    slug: "tester",
    title: "Toronto Game Jam 2026: Example RPG",
    description: "My buddies and I designed an RPG in under 48 hours.",
    tags: ["gamemaker", "json", "music", "programming", "event", "game"],
  },
  {
    id: "3",
    slug: "conxiu",
    title: "ConXiu",
    description: "An ARG that guides users to NFC tags using headphone audio panning.",
    tags: ["MERN", "programming", "mongodb", "react", "android", "cryptography", "game", "music"],
  },
  {
    id: "4",
    slug: "portfolio",
    title: "Portfolio Site",
    description: "You're browsing this project now! I made this to showcase my professional assets.",
    tags: ["nextjs", "backend", "frontend", "github", "vercel", "resume"],
  },
  {
    id: "5",
    slug: "giri",
    title: "Giri Kedaton",
    description: "I participate in a Balinese Gamelan.",
    tags: ["gamelan", "music", "indonesia"],
  },
  {
    id: "6",
    slug: "lathe",
    title: "Vinyl Record Lathe: Souri VR-600 Vinyl Recorder",
    description: "I learned how to operate a notoriously difficult record lathe to produce vinyl records.",
    tags: ["music", "vinyl"],
  },
];
