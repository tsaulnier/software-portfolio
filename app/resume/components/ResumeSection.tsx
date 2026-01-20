import styles from "../styles/Resume.module.css";

type ResumeSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className={styles.resumeSection}>
      <h2 className={styles.resumeSectionTitle}>{title}</h2>
      <hr className={styles.resumeSectionDivider} />
      <div className={styles.resumeSectionContent}>{children}</div>
    </section>
  );
}

