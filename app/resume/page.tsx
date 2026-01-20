import type { Metadata } from "next";

import ResumePage from "./components/ResumePage";
import rawResumeJson from "../resume/content/resume.json";
import { normalizeResume } from "./lib/normalizeResume";
import { RawResumeData } from "./types/resume.raw";

const rawResume = rawResumeJson as unknown as RawResumeData
const resume = normalizeResume(rawResume);

export const metadata: Metadata = {
  title: "Resume | Thom Saulnier",
  description: "Resume of Thom Saulnier, Software Engineer",
};

export default function Resume() {
  return (
    <div className="pt-13">
      <main className="resume-route">
        <ResumePage data={resume} />
      </main>
    </div>
  );
}
