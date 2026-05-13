"use client";

import { styles } from "../styles";

export default function CTA() {
  return (
    <div style={styles.ctaSection}>
      <h2 style={{ fontSize: 31, fontWeight: 700, color: "#111827", marginBottom: 3 }}>
        Prêt à modéliser
      </h2>
      <h2 style={{ fontSize: 31, fontWeight: 700, color: "#5b4fcf", marginBottom: 16 }}>
        votre premier diagramme ?
      </h2>
      <div style={styles.ctaSub}>
        Rejoignez plus de 2 400 développeurs et étudiants qui utilisent<br />
        UMLStudio chaque jour. Gratuit pour démarrer.
      </div>
      <div style={styles.ctaBtns}>
        <button style={styles.btnCta2}>Créer mon compte gratuitement</button>
        <a href="#" style={{ fontSize: 14, color: "#374151", textDecoration: "none" }}>
          Voir une démo live
        </a>
      </div>
      <div style={styles.ctaNote}>
        Aucune carte bancaire requise · Accessible depuis n&apos;importe quel navigateur
      </div>
    </div>
  );
}