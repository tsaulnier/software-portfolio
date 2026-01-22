import React from "react";
import styles from "../styles/Resume.module.css";

export type ResumeSectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string; // optional modifier for special layouts
};

export default function ResumeSection({
  title,
  children,
  className,
}: ResumeSectionProps) {
  return (
    <section className={`${styles.resumeSection} ${className || ""}`}>
      <h2 className={styles.resumeSectionTitle}>{title}</h2>
      <hr className={styles.resumeSectionDivider} />
      <div className={styles.resumeSectionContent}>{children}</div>
    </section>
  );
}
