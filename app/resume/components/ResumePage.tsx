import ResumeSection from "./ResumeSection";
import ResumeHeader from "./ResumeHeader";
import ExperienceItem from "./ExperienceItem";

import type { ResumeData, Section } from "@/app/resume/types/resume";
import styles from "../styles/Resume.module.css";

type ResumePageProps = {
  data: ResumeData;
};

export default function ResumePage({ data }: ResumePageProps) {
  const renderSection = (section: Section) => {
    switch (section.type) {
      case "paragraph":
        return <p className={styles.paragraph}>{section.content}</p>;

      case "entries":
        return section.entries.map((e, i) => {
          const isEducation = section.title === "Education";

          let school = "";
          let year = "";

          if (isEducation && e.right) {
            const parts = e.right.split("·").map((s) => s.trim());
            school = parts[0] || "";
            year = parts[1] || "";
          }

          return (
            <div key={i} className={styles.entry}>
              <div className={styles.entryHeader}>
                {/* Degree on the left */}
                <strong>{e.title}</strong>

                {/* Right column */}
                {isEducation ? (
                  <span className={styles.entryRight}>
                    {school && <span className="school">{school}</span>}
                    {year && <span className="year">{year}</span>}
                  </span>
                ) : (
                  e.right && <span className={styles.entryRight}>{e.right}</span>
                )}
              </div>

              {/* Note below the header, for all entries */}
              {e.note && <div className={styles.entryNote}>{e.note}</div>}
            </div>
          );
        });




      case "experience":
        return section.items.map((item, i) => (
          <ExperienceItem key={i} {...item} />
        ));

      default:
        return null;
    }
  };

  return (
    <article className={styles.resumePage}>
      <ResumeHeader name={data.name} contact={data.contact} />

      {data.sections.map((section, i) => {
        // Apply special layout class for Education
        const sectionClass =
          section.title === "Education" ? styles.educationSection : "";

        return (
          <ResumeSection
            key={i}
            title={section.title}
            className={sectionClass}
          >
            {renderSection(section)}
          </ResumeSection>
        );
      })}
    </article>
  );
}
