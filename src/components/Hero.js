import styles from "./Hero.module.css";
import pageStyles from "../app/page.module.css";

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={`container ${styles.heroContent}`}>
        <span className={`${styles.greeting} animate-fade-in`}>Hello, I'm</span>
        <h1 className={`${styles.title} animate-fade-in delay-100`}>
          Afrasiyab<br />
          <span className="text-accent">SQA Engineer.</span>
        </h1>
        <p className={`${styles.subtitle} animate-fade-in delay-200`}>
          As a QA Engineer, I have gained strong technical knowledge and practical skills through my education and hands on experience. I am adept at reviewing requirements and specifications to define test scenarios, designing and developing comprehensive test cases, and executing and analyzing moderate test scripts. My goal is to ensure the delivery of high-quality software products that meet customer expectations.
        </p>
        
        <div className={`${styles.ctaGroup} animate-fade-in delay-300`}>
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="https://www.linkedin.com/in/afraskhan" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            LinkedIn Profile
          </a>
        </div>

        <div id="contact" className={`${styles.contactInfo} animate-fade-in delay-300`}>
          <div className={styles.contactItem}>
            <span>📧</span> afraskhan1122@gmail.com
          </div>
          <div className={styles.contactItem}>
            <span>📞</span> (+92) 311-8139036
          </div>
          <div className={styles.contactItem}>
            <span>📍</span> Charsadda, Pakistan
          </div>
        </div>
      </div>
    </section>
  );
}
