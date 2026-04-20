import styles from "./Skills.module.css";
import pageStyles from "../app/page.module.css";

const skillCategories = [
  {
    title: "Software Testing Categories",
    skills: ["Website Testing", "Mobile App Testing", "Desktop App Testing", "Black-Box Testing", "Functional Testing", "UI/UX Testing"]
  },
  {
    title: "Requirements & Testing Concepts",
    skills: ["Static Testing (Reviews, Inspection, Walkthrough)", "SRS", "FRS", "CRS", "BRS", "Use Case Diagrams", "User Stories"]
  },
  {
    title: "Testing & Automation Tools",
    skills: ["Playwright with JavaScript", "Postman", "Swagger", "JMeter", "BrowserStack", "LT Browser"]
  },
  {
    title: "Management & Tracking Tools",
    skills: ["Jira", "Trello", "Wrike", "Microsoft Teams", "TestRail", "Zephyr Squad", "Agile", "Scrum"]
  },
  {
    title: "Programming & Web",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"]
  },
  {
    title: "Languages",
    skills: ["English", "Urdu", "Pashto"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={pageStyles.section}>
      <div className={`container`}>
        <div className={pageStyles.sectionHeader}>
          <h2 className={pageStyles.sectionTitle}>Skills & Expertise</h2>
          <p className={pageStyles.sectionSubtitle}>A comprehensive overview of my technical capabilities and testing prowess.</p>
        </div>

        <div className={`${pageStyles.grid} ${pageStyles.gridCols3}`}>
          {skillCategories.map((category, index) => (
            <div key={index} className={`minimal-card`}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
