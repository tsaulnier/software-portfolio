/* =========================
   Root
   ========================= */

export type ResumeData = {
  name: string;
  contact: ContactLine[];
  sections: Section[];
};

/* =========================
   Contact
   ========================= */

export type ContactLine =
  | ContactText
  | ContactLink;

export type ContactText = {
  type: "text";
  value: string;
};

export type ContactLink = {
  type: "link";
  label: ContactLabel;
  text: string;
  href: string;
};

export type ContactLabel =
  | "Email"
  | "LinkedIn"
  | "GitHub"
  | "Website"
  | "Phone"
  | string;

/* =========================
   Sections
   ========================= */

export type Section =
  | ParagraphSection
  | EntriesSection
  | ExperienceSection
  | SkillsSection
  | ProjectsSection;

/* ---------- Paragraph ---------- */

export type ParagraphSection = {
  type: "paragraph";
  title: string;
  content: string;
};

/* ---------- Simple Entries ---------- */

export type EntriesSection = {
  type: "entries";
  title: string;
  entries: Entry[];
};

export type Entry = {
  title: string;
  right?: string;
  note?: string;
};

/* ---------- Experience ---------- */

export type ExperienceSection = {
  type: "experience";
  title: string;
  items: ExperienceItem[];
};

export type ExperienceItem = {
  role: string;
  dates: string;
  company: string;
  location?: string;
  bullets: string[];
};

/* ---------- Skills ---------- */

export type SkillsSection = {
  type: "skills";
  title: string;
  groups: SkillGroup[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

/* ---------- Projects ---------- */

export type ProjectsSection = {
  type: "projects";
  title: string;
  items: ProjectItem[];
};

export type ProjectItem = {
  name: string;
  description: string;
  tech?: string[];
  links?: ProjectLink[];
};

export type ProjectLink = {
  label: string;
  href: string;
};
