"use client";

import { styles } from "../styles";

const STEPS = [
  { n: 1, title: "Créez un compte",       desc: "Inscrivez-vous avec votre email ou continuez via Facebook en quelques secondes.", bg: "#2563eb" },
  { n: 2, title: "Nouveau diagramme",     desc: "Nommez votre projet et accédez à l'éditeur visuel avec canvas interactif.",       bg: "#4c3db5" },
  { n: 3, title: "Modélisez vos classes", desc: "Ajoutez classes, attributs, méthodes et reliez-les par des relations UML.",        bg: "#2563eb" },
  { n: 4, title: "Exportez",              desc: "Téléchargez en PNG, PDF ou générez le script SQL correspondant à votre modèle.",   bg: "#4c3db5" },
];

export default function Steps() {
  return (
    <div style={styles.stepsSection}>
      <div style={styles.tag}>Comment ça marche</div>
      <div style={{ ...styles.sectionTitle, marginTop: 6 }}>Modélisez en 4 étapes</div>
      <div style={{ ...styles.sectionDesc, marginTop: 6 }}>
        De la connexion à l&apos;export, le parcours est pensé pour les développeurs.
      </div>

      <div style={styles.stepsGrid}>
        {STEPS.map((s) => (
          <div key={s.n} style={{ ...styles.step, backgroundColor: s.bg }}>
            <div style={styles.stepNum}>{s.n}</div>
            <div style={styles.stepTitle}>{s.title}</div>
            <div style={styles.stepDesc}>{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}