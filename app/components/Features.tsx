"use client";

import { styles } from "../styles";

const FEATURES = [
  {
    iconBg: "#ede9fe", icon: "🗂️",
    title: "Éditeur de classes",
    desc: "Ajoutez attributs et méthodes avec visibilité (+, -, #), types et stéréotypes UML en quelques secondes.",
    borderRight: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb",
  },
  {
    iconBg: "#d1fae5", icon: "✏️",
    title: "Relations UML",
    desc: "Association, héritage, composition et agrégation — tracez les relations par glisser-déposer entre classes.",
    borderRight: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb",
  },
  {
    iconBg: "#e0f2fe", icon: "🔵",
    title: "Canvas React Flow",
    desc: "Zoom, panoramique, grille magnétique et auto-layout pour organiser vos diagrammes sans effort.",
    borderRight: "none", borderBottom: "1px solid #e5e7eb",
  },
  {
    iconBg: "#fff7ed", icon: "🗄️",
    title: "Sauvegarde en base",
    desc: "Chaque diagramme est sauvegardé automatiquement en temps réel dans votre espace personnel sécurisé.",
    borderRight: "1px solid #e5e7eb", borderBottom: "none",
  },
  {
    iconBg: "#fff7ed", icon: "📄",
    title: "Export PDF & image",
    desc: "Exportez vos diagrammes en PNG haute résolution, SVG vectoriel ou PDF prêt à imprimer en un clic.",
    borderRight: "1px solid #e5e7eb", borderBottom: "none",
  },
  {
    iconBg: "#e0f2fe", icon: "⇆",
    title: "Génération SQL",
    desc: "Traduisez vos classes UML en script SQL (CREATE TABLE) avec clés primaires, étrangères et contraintes.",
    borderRight: "none", borderBottom: "none",
  },
];

export default function Features() {
  return (
    <div style={styles.section}>
      {/* En-tête */}
      <div style={styles.headerBox}>
        <div style={styles.tag}>Fonctionnalités</div>
        <div style={styles.sectionTitle}>Tout ce dont vous avez besoin</div>
        <div style={styles.sectionDesc}>
          De la création des classes à l&apos;export SQL, UMLStudio couvre l&apos;intégralité du cycle de modélisation.
        </div>
      </div>

      {/* Grille 3×2 */}
      <div style={styles.featGrid}>
        {FEATURES.map((f) => (
          <div
            key={f.title}
            style={{ padding: "22px 20px", borderRight: f.borderRight, borderBottom: f.borderBottom }}
          >
            <div style={{ ...styles.featIcon, backgroundColor: f.iconBg }}>{f.icon}</div>
            <div style={styles.featTitle}>{f.title}</div>
            <div style={styles.featDesc}>{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}