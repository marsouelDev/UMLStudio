"use client";

import { styles } from "../styles";

const TESTIMONIALS = [
  {
    text: "\"UMLStudio a complètement changé ma façon de travailler. Je modélise mes bases de données 3x plus vite qu'avec des outils classiques.\"",
    name: "Arnaud Mboma",
    role: "Développeur Backend · Yaoundé",
    initials: "AM",
    bg: "#4c3db5",
  },
  {
    text: "\"La génération SQL automatique est bluffante. Je dessine mon diagramme et j'obtiens directement les CREATE TABLE prêts à exécuter.\"",
    name: "Fatou Kouyaté",
    role: "Architecte logiciel · Dakar",
    initials: "FK",
    bg: "#1a7a5e",
  },
  {
    text: "\"Idéal pour les cours et les projets académiques. Mes étudiants l'adoptent immédiatement, l'interface est vraiment intuitive.\"",
    name: "Prof. Pierre Tchinda",
    role: "Enseignant informatique · IUT",
    initials: "PT",
    bg: "#2563eb",
  },
];

export default function Testimonials() {
  return (
    <div style={styles.testiSection}>
      {/* En-tête */}
      <div style={{ ...styles.headerBox, marginBottom: 22 }}>
        <div style={styles.tag}>Témoignages</div>
        <div style={styles.sectionTitle}>Ce que disent nos utilisateurs</div>
      </div>

      {/* Grille 3 cartes */}
      <div style={styles.testiGrid}>
        {TESTIMONIALS.map((t) => (
          <div key={t.name} style={styles.testiCard}>
            <div style={styles.stars}>★★★★★</div>
            <div style={styles.testiText}>{t.text}</div>
            <div style={styles.testiUser}>
              <div style={{ ...styles.avatar, backgroundColor: t.bg }}>{t.initials}</div>
              <div>
                <div style={styles.testiName}>{t.name}</div>
                <div style={styles.testiRole}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}