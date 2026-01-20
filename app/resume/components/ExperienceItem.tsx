import styles from "../styles/Resume.module.css";
import type { ExperienceItem as ExperienceItemType } from "@/app/resume/types/resume";

type ExperienceItemProps = ExperienceItemType;

export default function ExperienceItem({
  role,
  dates,
  company,
  location,
  bullets,
}: ExperienceItemProps) {
  return (
    <div className={styles.experienceItem}>
      <div className={styles.experienceHeader}>
        <strong className={styles.roleHeader}>{role}</strong>
        <span className={styles.experienceDates}>{dates}</span>
      </div>

      <div className={styles.experienceCompany}>
        <span className={styles.orgHeader}>{company}</span>
        {location && <span className={styles.experienceLocation}> · {location}</span>}
      </div>

      {bullets.length > 0 && (
        <ul className={styles.experienceBullets}>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
