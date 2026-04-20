import styles from "./Education.module.css";
import pageStyles from "../app/page.module.css";

const certificates = [
  { name: "QA Fundamental", org: "10pearls university" },
  { name: "API testing using Postman", org: "10pearls university" },
  { name: "Foundamental of JMeter", org: "Mindluster" },
  { name: "Digital marketing", org: "DigiSkills.pk ministry of information technology" },
  { name: "Agile Project Management", org: "HP LIFE" },
  { name: "Communication and professional skills", org: "K2X Tech" }
];

export default function Education() {
  return (
    <section id="education" className={pageStyles.section}>
      <div className={`container`}>
        <div className={pageStyles.sectionHeader}>
          <h2 className={pageStyles.sectionTitle}>Certifications</h2>
          <p className={pageStyles.sectionSubtitle}>My continuous learning achievements and professional certificates.</p>
        </div>

        <div className={`${pageStyles.grid} ${pageStyles.gridCols2}`}>
          {certificates.map((cert, index) => (
            <div key={index} className={`minimal-card ${styles.certCard}`}>
              <div className={styles.certIcon}>🏆</div>
              <div className={styles.certContent}>
                <span className={styles.certName}>{cert.name}</span>
                <span className={styles.certOrg}>{cert.org}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
