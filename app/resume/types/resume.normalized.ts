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
  | {
      type: "text";
      value: string;
    }
  | {
      type: "link";
      label: string;
      text: string;
      href: string;
    };

/* =========================
   Sections
   ========================= */

export type Section =
  | ParagraphSection
  | EntriesSection
  | ExperienceSection;

/* ---------- Paragraph ---------- */

export type ParagraphSection = {
  type: "paragraph";
  title: string;
  content: string;
};

/* ---------- Entries ---------- */

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
