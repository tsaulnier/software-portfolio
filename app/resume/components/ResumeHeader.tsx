import styles from "../styles/Resume.module.css";
import type { ContactLine } from "@/app/resume/types/resume";

type ResumeHeaderProps = {
  name: string;
  contact: ContactLine[];
};

export default function ResumeHeader({ name, contact }: ResumeHeaderProps) {
  return (
    <header className={styles.resumeHeader}>
      <h1 className={styles.resumeHeaderName}>{name}</h1>

      <div className={styles.resumeHeaderContact}>
        {contact.map((line, i) => {
          if (line.type === "text") {
            return (
              <span key={i} className={styles.contactText}>
                {line.value}
              </span>
            );
          }

          if (line.type === "link") {
            return (
              <a
                key={i}
                href={line.href}
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {line.text}
              </a>
            );
          }

          // This should never happen
          return null;
        })}
      </div>
    </header>
  );
}
