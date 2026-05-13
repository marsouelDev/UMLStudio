"use client";

import { styles } from "../styles";

const AVATARS = [
  { initials: "JD", bg: "#5b4fcf" },
  { initials: "ML", bg: "#2563eb" },
  { initials: "AR", bg: "#059669" },
  { initials: "TC", bg: "#d97706" },
];

export default function Hero() {
  return (
    <div style={styles.hero}>

      {/* ── Colonne gauche : texte ── */}
      <div style={styles.heroLeft}>
        <h1 style={styles.h1}>
          Modélisez vos<br />
          diagrammes UML<br />
          <span style={styles.h1Purple}>en quelques clics</span>
        </h1>

        <p style={styles.heroP}>
          Créez, collaborez et exportez des diagrammes de classes UML<br />
          professionnels directement dans votre navigateur. Sans installation,<br />
          sans friction.
        </p>

        <div style={styles.heroBtns}>
          <button style={styles.btnCta}>Créer mon premier diagramme</button>
          <a href="#" style={styles.btnDemo}>Voir la démo</a>
        </div>

        {/* Avatars + compteur */}
        <div style={styles.avatars}>
          {AVATARS.map((av, i) => (
            <div
              key={i}
              style={{
                width: 26, height: 26, borderRadius: "50%",
                backgroundColor: av.bg, border: "2px solid #fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontSize: 8, fontWeight: 700,
                marginLeft: i === 0 ? 0 : -7,
                zIndex: 4 - i, position: "relative",
              }}
            >
              {av.initials}
            </div>
          ))}
          <span style={styles.avLabel}>Rejoint par +2 400 développeurs ce mois</span>
        </div>
      </div>

      {/* ── Colonne droite : canvas UML ── */}
      <div style={styles.heroRight}>

        {/* Badge haut droit */}
        <div style={styles.badgeTop}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <polyline points="1,10 4,5 7,7.5 10,2 12,4" stroke="#5b4fcf" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
          </svg>
          5 classes • 4 relations
        </div>

        {/* Diagramme SVG */}
        <svg width="100%" viewBox="0 0 600 310" style={{ display: "block", marginTop: 8 }}>
          {/* Connexions */}
          <line x1="155" y1="78"  x2="248" y2="95"  stroke="#5b4fcf" strokeWidth="1.4" />
          <line x1="378" y1="130" x2="418" y2="175" stroke="#5b4fcf" strokeWidth="1.4" />
          <line x1="325" y1="160" x2="318" y2="220" stroke="#5b4fcf" strokeWidth="1.4" strokeDasharray="6,4" />
          <line x1="180" y1="225" x2="265" y2="248" stroke="#5b4fcf" strokeWidth="1.4" />
          <line x1="418" y1="215" x2="380" y2="248" stroke="#5b4fcf" strokeWidth="1.4" />

          {/* Admin */}
          <rect x="55"  y="50" width="108" height="68" rx="3" fill="#fff" stroke="#c7c2e8" strokeWidth="1" />
          <rect x="55"  y="50" width="108" height="22" rx="3" fill="#5b4fcf" />
          <rect x="55"  y="64" width="108" height="8"  fill="#5b4fcf" />
          <text x="109" y="62"  textAnchor="middle" fill="#fff" fontSize="9"  opacity=".8">«nomRole»</text>
          <text x="109" y="74"  textAnchor="middle" fill="#fff" fontSize="10" fontWeight="600">Admin</text>
          <line x1="55" y1="72" x2="163" y2="72" stroke="#c7c2e8" strokeWidth=".6" />
          <text x="65"  y="87"  fill="#555" fontSize="9">- role : String</text>
          <line x1="55" y1="93" x2="163" y2="93" stroke="#c7c2e8" strokeWidth=".6" />
          <text x="65"  y="107" fill="#555" fontSize="9">+ manage() : void</text>

          {/* User */}
          <rect x="248" y="72"  width="135" height="96" rx="3" fill="#fff" stroke="#c7c2e8" strokeWidth="1" />
          <rect x="248" y="72"  width="135" height="22" rx="3" fill="#5b4fcf" />
          <rect x="248" y="86"  width="135" height="8"  fill="#5b4fcf" />
          <text x="315" y="87"  textAnchor="middle" fill="#fff" fontSize="11" fontWeight="600">User</text>
          <line x1="248" y1="94"  x2="383" y2="94"  stroke="#c7c2e8" strokeWidth=".6" />
          <text x="258" y="107" fill="#555" fontSize="9">- id : Long</text>
          <text x="258" y="118" fill="#555" fontSize="9">- email : String</text>
          <text x="258" y="129" fill="#555" fontSize="9">- password : String</text>
          <line x1="248" y1="135" x2="383" y2="135" stroke="#c7c2e8" strokeWidth=".6" />
          <text x="258" y="147" fill="#555" fontSize="9">+ login() : Boolean</text>
          <text x="258" y="158" fill="#555" fontSize="9">+ getProfile() : User</text>

          {/* Product */}
          <rect x="68"  y="195" width="120" height="84" rx="3" fill="#fff" stroke="#b08050" strokeWidth="1" />
          <rect x="68"  y="195" width="120" height="22" rx="3" fill="#7c5c30" />
          <rect x="68"  y="209" width="120" height="8"  fill="#7c5c30" />
          <text x="128" y="210" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="600">Product</text>
          <line x1="68" y1="217" x2="188" y2="217" stroke="#b08050" strokeWidth=".6" />
          <text x="78"  y="229" fill="#555" fontSize="9">- name : String</text>
          <text x="78"  y="240" fill="#555" fontSize="9">- price : Double</text>
          <text x="78"  y="251" fill="#555" fontSize="9">- stock : Int</text>
          <line x1="68" y1="256" x2="188" y2="256" stroke="#b08050" strokeWidth=".6" />
          <text x="78"  y="268" fill="#555" fontSize="9">+ updateStock()</text>

          {/* OrderItem */}
          <rect x="265" y="222" width="122" height="84" rx="3" fill="#fff" stroke="#6bbfa0" strokeWidth="1" />
          <rect x="265" y="222" width="122" height="22" rx="3" fill="#1a7a5e" />
          <rect x="265" y="236" width="122" height="8"  fill="#1a7a5e" />
          <text x="326" y="237" textAnchor="middle" fill="#fff" fontSize="10.5" fontWeight="600">OrderItem</text>
          <line x1="265" y1="244" x2="387" y2="244" stroke="#6bbfa0" strokeWidth=".6" />
          <text x="275" y="256" fill="#555" fontSize="9">- id : Long</text>
          <text x="275" y="267" fill="#555" fontSize="9">- total : Double</text>
          <text x="275" y="278" fill="#555" fontSize="9">- status : String</text>
          <line x1="265" y1="283" x2="387" y2="283" stroke="#6bbfa0" strokeWidth=".6" />
          <text x="275" y="295" fill="#555" fontSize="9">+ reduce() : Double</text>

          {/* Order */}
          <rect x="418" y="175" width="132" height="85" rx="3" fill="#fff" stroke="#6bbfa0" strokeWidth="1" />
          <rect x="418" y="175" width="132" height="22" rx="3" fill="#1a7a5e" />
          <rect x="418" y="189" width="132" height="8"  fill="#1a7a5e" />
          <text x="484" y="190" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="600">Order</text>
          <line x1="418" y1="197" x2="550" y2="197" stroke="#6bbfa0" strokeWidth=".6" />
          <text x="428" y="210" fill="#555" fontSize="9">- id : Long</text>
          <text x="428" y="221" fill="#555" fontSize="9">- total : Double</text>
          <text x="428" y="232" fill="#555" fontSize="9">- status : String</text>
          <line x1="418" y1="238" x2="550" y2="238" stroke="#6bbfa0" strokeWidth=".6" />
          <text x="428" y="250" fill="#555" fontSize="9">+ calculate() : Double</text>
        </svg>

        {/* Badge bas droit */}
        <div style={styles.badgeBottom}>
          <span style={styles.dotGreen} />
          Sauvegarde automatique
        </div>
      </div>
    </div>
  );
}