import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />

      {/* Footer */}
      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Afrasiyab. All rights reserved. <br/>
          <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>SQA Engineer</span>
        </p>
      </footer>
    </main>
  );
}
