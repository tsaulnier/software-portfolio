import styles from "../styles/Resume.module.css";
import ResumeHeader from "./ResumeHeader";
import ResumeSection from "./ResumeSection";
import ExperienceItem from "./ExperienceItem";

import type {
  ResumeData,
  Section,
} from "@/app/resume/types/resume";

type ResumePageProps = {
  data: ResumeData;
};

export default function ResumePage({ data }: ResumePageProps) {
  return (
    <article className={styles.resumePage}>
      <ResumeHeader name={data.name} contact={data.contact} />

      {data.sections.map((section, i) => (
        <ResumeSection key={i} title={section.title}>
          {renderSection(section)}
        </ResumeSection>
      ))}
    </article>
  );
}

function renderSection(section: Section) {
  switch (section.type) {
    case "paragraph":
      return <p className={styles.paragraph}>{section.content}</p>;

    case "entries":
      return section.entries.map((e, i) => (
        <div key={i} className={styles.entry}>
          <div className={styles.entryHeader}>
            <strong>{e.title}</strong>
            {e.right && <span className={styles.entryRight}>{e.right}</span>}
          </div>
          {e.note && <div className={styles.entryNote}>{e.note}</div>}
        </div>
      ));

    case "experience":
      return section.items.map((item, i) => (
        <ExperienceItem key={i} {...item} />
      ));

    default:
      return null;
  }
}
