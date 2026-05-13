"use client";

import Image from "next/image";
// 1. Importer Link pour la navigation interne fluide
import Link from "next/link";
import { styles } from "../styles";

const NAV_LINKS = ["Fonctionnalités", "Comment ça marche", "Tarifs", "Documentation"];

export default function Navbar() {
  return (
    <>
      <div style={styles.navbar}>
        {/* Logo et Nom mis à jour */}
        <div style={styles.logoWrap}>
          <div style={styles.logoBox}>
            <Image
              src="/Logo.jpeg"
              alt="UMLStudio logo"
              width={32}
              height={32}
              style={{ borderRadius: '6px', objectFit: 'cover' }}
              priority
            />
          </div>
          <span style={styles.logoText}>
            UML<span style={{ color: "#150f68", fontWeight: "700" }}>Studio</span>
          </span>
        </div>

        {/* Liens de navigation */}
        <div style={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" style={styles.navLink}>
              {link}
            </a>
          ))}
        </div>

        
        <div style={styles.navRight}>
  
          <Link href="/login" style={{ ...styles.btnLogin, textDecoration: "none" }}>
            Se connecter
          </Link>
          
        
          <Link href="/register" style={{ textDecoration: "none" }}>
            <button style={styles.btnStart}>Commencer gratuitement</button>
          </Link>
        </div>
      </div>

  
      <div style={styles.blueBar} />
    </>
  );
}
