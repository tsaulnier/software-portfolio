import type { RawResumeData } from "@/app/resume/types/resume.raw";
import type { ResumeData, ContactLine, Section } from "@/app/resume/types/resume";

export function normalizeResume(raw: RawResumeData): ResumeData {
  return {
    name: raw.name,
    contact: normalizeContact(raw.contact),
    sections: raw.sections.map(normalizeSection),
  };
}

/* ---------- Contact ---------- */

function normalizeContact(
  contact: RawResumeData["contact"]
): ContactLine[] {
  return contact.map((line) => {
    if (typeof line === "string") {
      return { type: "text", value: line };
    }

    return {
      type: "link",
      label: line.label ?? "Link",
      text: line.text,
      href: line.href,
    };
  });
}

/* ---------- Sections ---------- */

function normalizeSection(section: RawResumeData["sections"][number]): Section {
  switch (section.type) {
    case "paragraph":
      return section;

    case "entries":
      return section;

    case "experience":
      return section;

    default:
      return assertNever(section);
  }
}

function assertNever(x: never): never {
  throw new Error("Unhandled section: " + JSON.stringify(x));
}
