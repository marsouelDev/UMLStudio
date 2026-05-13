"use client";

import { styles } from "../styles";

const STATS = [
  { val: "2400+", lbl: "Utilisateurs actifs",  bg: "#7ecfba" },
  { val: "18k+",  lbl: "Diagrammes créés",     bg: "#4c3db5" },
  { val: "140k+", lbl: "Classes modélisées",   bg: "#c95f2a" },
  { val: "4.8/5", lbl: "Note moyenne",         bg: "#2563eb" },
];

export default function Stats() {
  return (
    <div style={styles.stats}>
      {STATS.map((s) => (
        <div key={s.val} style={{ ...styles.stat, backgroundColor: s.bg }}>
          <div style={styles.statVal}>{s.val}</div>
          <div style={styles.statLbl}>{s.lbl}</div>
        </div>
      ))}
    </div>
  );
}