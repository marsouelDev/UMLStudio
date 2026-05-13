"use client";

import { styles } from "../styles";
import LogoSVG from "./logosvg";

const FOOTER_COLS = [
  {
    title: "Produit",
    links: ["Fonctionnalités", "Tarifs", "Nouveautés", "Roadmap"],
  },
  {
    title: "Ressources",
    links: ["Documentation", "Tutoriels", "Templates UML", "Blog"],
  },
  {
    title: "Entreprise",
    links: ["À propos", "Contact", "Conditions d'utilisation", "Politique de confidentialité"],
  },
];

export default function Footer() {
  return (
    <div style={styles.footer}>
      {/* Logo + description */}
      <div>
        <div style={styles.footerLogoWrap}>
          <div style={styles.logoBox}>
            <LogoSVG />
          </div>
          UMLStudio
        </div>
        <div style={styles.footerDesc}>
          L&apos;outil de modélisation UML en ligne pensé pour les développeurs et les équipes.
        </div>
      </div>

      {/* Colonnes de liens */}
      {FOOTER_COLS.map((col) => (
        <div key={col.title}>
          <div style={styles.footerColTitle}>{col.title}</div>
          {col.links.map((link) => (
            <a key={link} href="#" style={styles.footerLink}>
              {link}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}