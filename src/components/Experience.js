import styles from "./Experience.module.css";
import pageStyles from "../app/page.module.css";

const experiences = [
  {
    role: "SQA Engineer",
    company: "K2X TECH",
    date: "2024/09 – Present",
    tasks: [
      "Performing Black-Box and Functional Testing.",
      "Understand Manual and API Testing using Swagger and Postman.",
      "Automation testing using playwright.",
      "Carrying out all tasks through Microsoft Teams."
    ]
  },
  {
    role: "SQA Engineer",
    company: "WORKBOX TECHNOLOGIES",
    date: "2023/10 – 2024/08",
    tasks: [
      "Performing Black-Box, Functional, and UI/UX design Testing.",
      "Analyzing requirements and executing test cases.",
      "Understand the Agile and Scrum Software development process.",
      "Manual and API Testing using Swagger and Postman.",
      "Estimate, prioritize, plan and coordinate testing activities.",
      "Managing Bug Tracking Tool (Trello, JIRA)."
    ]
  },
  {
    role: "Lab Engineer",
    company: "CITY UNIVERSITY OF PESHAWAR",
    date: "2021/11 – 2024/01",
    tasks: [
      "Responsible for overseeing practical labs in computer programming.",
      "Create a Complete Software Requirement Specification (SRS).",
      "Design and execute test cases of mobile and web applications.",
      "Complete System (end-to-end) testing of final year student projects.",
      "Handles documentation and tutorials for lab procedures."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className={pageStyles.sectionAlt}>
      <div className={`container`}>
        <div className={pageStyles.sectionHeader}>
          <h2 className={pageStyles.sectionTitle}>Professional Experience</h2>
          <p className={pageStyles.sectionSubtitle}>My journey and specific roles in software quality assurance.</p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.headerWrap}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.company}>{exp.company}</div>
                  </div>
                  <div className={styles.date}>{exp.date}</div>
                </div>
                <ul className={styles.tasks}>
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
