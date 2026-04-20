"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logo}>
            Afrasiyab<span className="text-gradient">.</span>
          </Link>
          
          <div className={styles.navLinks}>
            <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className={styles.navLink}>About</a>
            <a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')} className={styles.navLink}>Experience</a>
            <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className={styles.navLink}>Projects</a>
            <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className={styles.navLink}>Skills</a>
          </div>

          <div className={styles.navLinks} style={{gap: '1rem'}}>
            <button 
              onClick={() => setShowModal(true)} 
              className="btn btn-primary" 
              style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}
            >
              Hire Me
            </button>
          </div>

          <button className={styles.mobileMenuBtn}>
            ☰
          </button>
        </div>
      </nav>

      {/* Modal Popup */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Contact Me</h3>
              <button className={styles.closeBtn} onClick={() => setShowModal(false)}>×</button>
            </div>
            
            <div className={styles.modalBody}>
              <div className={styles.modalItem}>
                <span className={styles.modalIcon}>📧</span>
                <span className={styles.modalText}>afraskhan1122@gmail.com</span>
              </div>
              <div className={styles.modalItem}>
                <span className={styles.modalIcon}>📞</span>
                <span className={styles.modalText}>(+92) 311-8139036</span>
              </div>
              <div className={styles.modalItem}>
                <span className={styles.modalIcon}>📍</span>
                <span className={styles.modalText}>Charsadda, Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
