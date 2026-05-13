"use client";

import { styles } from "../styles";
import LogoSVG from "./logosvg";

const NAV_LINKS = ["Fonctionnalités", "Comment ça marche", "Tarifs", "Documentation"];

export default function Navbar() {
  return (
    <>
      <div style={styles.navbar}>
        {/* Logo */}
        <div style={styles.logoWrap}>
          <div style={styles.logoBox}>
            <LogoSVG />
          </div>
          <span style={styles.logoText}>DiagramFlow</span>
        </div>

        {/* Liens de navigation */}
        <div style={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" style={styles.navLink}>
              {link}
            </a>
          ))}
        </div>

        {/* Boutons droite */}
        <div style={styles.navRight}>
          <a href="#" style={styles.btnLogin}>Se connecter</a>
          <button style={styles.btnStart}>Commencer gratuitement</button>
        </div>
      </div>

      {/* Barre bleue sous la navbar */}
      <div style={styles.blueBar} />
    </>
  );
}