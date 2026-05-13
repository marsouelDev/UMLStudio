"use client";

import { styles } from "../styles";

const LEGEND = [
  {
    label: "Association",
    desc: "Relation simple entre deux classes. Une classe utilise une autre ou s'y réfère.",
    svg: (
      <svg width="48" height="12" viewBox="0 0 48 12">
        <line x1="0" y1="6" x2="42" y2="6" stroke="#5b4fcf" strokeWidth="1.3" />
        <polygon points="39,3 47,6 39,9" fill="#5b4fcf" />
      </svg>
    ),
  },
  {
    label: "Héritage (généralisation)",
    desc: "Une classe enfant hérite des attributs et méthodes de la classe parent.",
    svg: (
      <svg width="48" height="12" viewBox="0 0 48 12">
        <line x1="0" y1="6" x2="38" y2="6" stroke="#5b4fcf" strokeWidth="1.3" strokeDasharray="5,3" />
        <polygon points="36,3 46,6 36,9" fill="none" stroke="#5b4fcf" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    label: "Composition",
    desc: "La classe composante ne peut exister sans son composé. Cycle de vie partagé.",
    svg: (
      <svg width="48" height="12" viewBox="0 0 48 12">
        <polygon points="0,6 6,2 12,6 6,10" fill="#1a7a5e" />
        <line x1="12" y1="6" x2="48" y2="6" stroke="#1a7a5e" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    label: "Agrégation",
    desc: "Relation de tout à partie. La partie peut exister indépendamment du tout.",
    svg: (
      <svg width="48" height="12" viewBox="0 0 48 12">
        <polygon points="0,6 6,2 12,6 6,10" fill="none" stroke="#7c5c30" strokeWidth="1.3" />
        <line x1="12" y1="6" x2="48" y2="6" stroke="#7c5c30" strokeWidth="1.3" />
      </svg>
    ),
  },
];

export default function Relations() {
  return (
    <div style={styles.relSection}>
      {/* En-tête */}
      <div style={styles.headerBox}>
        <div style={styles.tag}>Relations UML</div>
        <div style={styles.sectionTitle}>Les 4 types de relations supportés</div>
        <div style={styles.sectionDesc}>
          UMLStudio implémente fidèlement la notation UML standard pour chaque type de relation.
        </div>
      </div>

      <div style={{ border: "1.5px dashed #93c5fd", padding: 18 }}>
        <div style={styles.relBody}>

          {/* Légende */}
          <div style={styles.legend}>
            {LEGEND.map((r) => (
              <div key={r.label} style={styles.legendItem}>
                <div style={styles.legendHeader}>
                  {r.svg}
                  <span style={styles.legendLabel}>{r.label}</span>
                </div>
                <div style={styles.legendDesc}>{r.desc}</div>
              </div>
            ))}
          </div>

          {/* Diagramme SVG */}
          <div style={styles.diagramBox}>
            <svg width="100%" viewBox="0 0 480 360" style={{ display: "block" }}>
              {/* Connexions */}
              <line x1="185" y1="255" x2="272" y2="183" stroke="#5b4fcf" strokeWidth="1.4" strokeDasharray="7,4" />
              <polygon points="272,183 262,195 282,197" fill="none" stroke="#5b4fcf" strokeWidth="1.4" />
              <line x1="368" y1="148" x2="404" y2="112" stroke="#1a7a5e" strokeWidth="1.4" />
              <polygon points="404,112 396,104 404,96 412,104" fill="#1a7a5e" />
              <line x1="345" y1="185" x2="385" y2="258" stroke="#7c5c30" strokeWidth="1.4" />
              <polygon points="385,258 377,249 385,241 393,249" fill="#fafafa" stroke="#7c5c30" strokeWidth="1.4" />

              {/* Vehicule */}
              <rect x="240" y="108" width="142" height="90" rx="6" fill="#eeeaf8" stroke="#8b7fd4" strokeWidth="1.5" />
              <rect x="240" y="108" width="142" height="30" rx="6" fill="#5b4fcf" />
              <rect x="240" y="127" width="142" height="11" fill="#5b4fcf" />
              <text x="311" y="127" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Vehicule</text>
              <text x="253" y="154" fill="#374151" fontSize="10.5">- immatriculation</text>
              <text x="253" y="168" fill="#374151" fontSize="10.5">- marque</text>
              <text x="253" y="182" fill="#374151" fontSize="10.5">+ demarrer()</text>

              {/* Moteur */}
              <rect x="404" y="75"  width="98" height="66" rx="6" fill="#d4f0e8" stroke="#1a7a5e" strokeWidth="1.5" />
              <rect x="404" y="75"  width="98" height="26" rx="6" fill="#1a7a5e" />
              <rect x="404" y="90"  width="98" height="11" fill="#1a7a5e" />
              <text x="453" y="92"  textAnchor="middle" fill="#fff" fontSize="11.5" fontWeight="700">Moteur</text>
              <text x="415" y="117" fill="#374151" fontSize="10.5">- cylindree</text>
              <text x="415" y="130" fill="#374151" fontSize="10.5">+ demarrer()</text>

              {/* Voiture */}
              <rect x="90"  y="220" width="122" height="72" rx="6" fill="#eeeaf8" stroke="#8b7fd4" strokeWidth="1.5" />
              <rect x="90"  y="220" width="122" height="26" rx="6" fill="#5b4fcf" />
              <rect x="90"  y="235" width="122" height="11" fill="#5b4fcf" />
              <text x="151" y="237" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">Voiture</text>
              <text x="102" y="261" fill="#374151" fontSize="10.5">- nbPortes : Int</text>
              <text x="102" y="275" fill="#374151" fontSize="10.5">+ ouvrir()</text>

              {/* Conducteur */}
              <rect x="378" y="262" width="122" height="72" rx="6" fill="#f5e8d4" stroke="#7c5c30" strokeWidth="1.5" />
              <rect x="378" y="262" width="122" height="26" rx="6" fill="#7c5c30" />
              <rect x="378" y="277" width="122" height="11" fill="#7c5c30" />
              <text x="439" y="279" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">Conducteur</text>
              <text x="390" y="303" fill="#374151" fontSize="10.5">- permis : String</text>
              <text x="390" y="317" fill="#374151" fontSize="10.5">+ conduire()</text>

              {/* Légendes bas */}
              <text x="78"  y="344" textAnchor="middle" fill="#5b4fcf" fontSize="12.5" fontWeight="600">Héritage</text>
              <line x1="30"  y1="357" x2="126" y2="357" stroke="#5b4fcf" strokeWidth="1.4" strokeDasharray="7,4" />
              <text x="240" y="344" textAnchor="middle" fill="#1a7a5e" fontSize="12.5" fontWeight="600">Composition</text>
              <polygon points="170,357 178,351 186,357 178,363" fill="#1a7a5e" />
              <line x1="186" y1="357" x2="305" y2="357" stroke="#1a7a5e" strokeWidth="1.4" />
              <text x="398" y="344" textAnchor="middle" fill="#7c5c30" fontSize="12.5" fontWeight="600">Agrégation</text>
              <polygon points="328,357 336,351 344,357 336,363" fill="#fafafa" stroke="#7c5c30" strokeWidth="1.4" />
              <line x1="344" y1="357" x2="462" y2="357" stroke="#7c5c30" strokeWidth="1.4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}