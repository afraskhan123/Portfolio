import styles from "./Projects.module.css";
import pageStyles from "../app/page.module.css";

const projects = [
  {
    title: "Echecker",
    link: "https://techeuchecker.ntu.eu",
    desc: "Assessed startup investment readiness and connected firms to EU funding programs.",
    tasks: [
      "Assessed overall product functionality for startup readiness.", 
      "Validated the usability according to client requirements.",
      "Designed UI/UX test scenarios for the platform.",
      "Provided targeted quality improvement feedback to developers.",
      "Executed automated test scripts using Playwright."
    ]
  },
  {
    title: "Knowledge Hub Dashboard",
    link: "https://purple-plant-059f6d403.2.azurestaticapps.net/",
    desc: "Support digital transformation worldwide.",
    tasks: [
      "Manage and track project billing processes.",
      "Work with global partners for innovation.",
      "Arrange meetings and events.",
      "Tested the product functionality and usability according to the requirements.",
      "Executed automated test scripts using Playwright."
    ]
  },
  {
    title: "RollOut (K2X)",
    link: "https://rollout.live/",
    desc: "Platform that provides advertising space on digital billboards, allowing individuals and businesses to list, discover, and manage spaces.",
    tasks: [
      "Performed end-to-end functionality testing of the dashboard.", 
      "Ensured smooth discovery and listing flows for advertisements.",
      "Executed Cross-Browser testing using BrowserStack.",
      "Documented all test scenarios and results in Excel/TestRail."
    ]
  },
  {
    title: "Aviaton Emission Data Management System (AEDMS)",
    link: "https://easa-dev.k2x.tech/",
    desc: "Data Management system designed to help aviation authorities, airplane operators and verification bodies monitor CO2 emissions.",
    tasks: [
      "Gathered and analyzed technical requirements and User Stories.", 
      "Tested core product functionality and complex data workflows.",
      "Ensured platform usability and compliance standards.",
      "Logged and tracked defects using Jira software.",
      "Executed automated test scripts using Playwright."
    ]
  },
  {
    title: "Change Automator",
    link: "https://thechangecompass.com/change-automator/",
    desc: "A unique simple testing tool aimed at helping businesses understand impacts to people and their customers.",
    tasks: [
      "Analyzed and reviewed the Software Requirement Specification (SRS).", 
      "Created and maintained comprehensive test cases.", 
      "Performed Black-Box and Functional Testing.",
      "Executed API Testing validation using Postman and Swagger."
    ]
  },
  {
    title: "Content At Scale",
    link: "https://contentatscale.ai",
    desc: "OpenAI platform specialized for content creation and management solution.",
    tasks: [
      "Tested CRM modules for customer and billing management.", 
      "Conducted extensive usability and functional UI testing.",
      "Executed automated test scripts using Playwright.",
      "Prioritized and verified bug fixes in the service platform."
    ]
  },
  {
    title: "Consortium Management System",
    link: "https://cmp.k2x.tech/",
    desc: "Provides a centralized solution for managing consortium projects to facilitate collaboration and communication among stakeholders.",
    tasks: [
      "Created Use Case diagrams and verified test workflows.", 
      "Performed system-level testing of collaboration tools.",
      "Validated stakeholder communication interfaces.",
      "Executed backend API integrations testing."
    ]
  },
  {
    title: "Change Compass",
    link: "https://thechangecompass.com",
    desc: "The change compass is a unique testing tool aimed helping business understand impacts to people and their customer.",
    tasks: [
      "Understanding SRS of the whole project.",
      "Create and execute test cases of the whole project.",
      "Perform Functional Testing, UI Testing, and API Testing in this project."
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className={pageStyles.section}>
      <div className={`container`}>
        <div className={pageStyles.sectionHeader}>
          <h2 className={pageStyles.sectionTitle}>Completed Projects</h2>
          <p className={pageStyles.sectionSubtitle}>A selection of the platforms and systems I have helped test and improve.</p>
        </div>

        <div className={`${pageStyles.grid} ${pageStyles.gridCols2}`}>
          {projects.map((project, index) => (
            <div key={index} className={`minimal-card ${styles.projectCard}`}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    Visit Site
                  </a>
                )}
              </div>
              <p className={styles.projectDesc}>{project.desc}</p>
              <ul className={styles.projectTasks}>
                {project.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
