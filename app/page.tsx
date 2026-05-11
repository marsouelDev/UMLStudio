"use client";
import React from "react";

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", color: "#1a1a2e", backgroundColor: "#ffffff", margin: 0, padding: 0, overflowX: "hidden" }}>

      {/* ═══════════════════════════════════════
          NAVBAR
      ═══════════════════════════════════════ */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 32px", height: "52px",
        borderBottom: "1px solid #e2e8f0",
        backgroundColor: "#ffffff",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 30, height: 30, backgroundColor: "#5b4fcf", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="5" height="5" rx="1" stroke="white" strokeWidth="1.4" />
              <rect x="10" y="10" width="5" height="5" rx="1" stroke="white" strokeWidth="1.4" />
              <line x1="6" y1="3.5" x2="10" y2="3.5" stroke="white" strokeWidth="1.4" />
              <line x1="12.5" y1="6" x2="12.5" y2="10" stroke="white" strokeWidth="1.4" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 15, color: "#1a1a2e", letterSpacing: "-0.2px" }}>DiagramFlow</span>
        </div>

        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Fonctionnalités", "Comment ça marche", "Tarifs", "Documentation"].map(link => (
            <a key={link} href="#" style={{ fontSize: 13.5, color: "#374151", textDecoration: "none", borderBottom: "1.5px dashed #93c5fd", paddingBottom: "1px" }}>{link}</a>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a href="#" style={{ fontSize: 13.5, color: "#374151", textDecoration: "none", border: "1.5px dashed #93c5fd", padding: "6px 16px", borderRadius: 6 }}>Se connecter</a>
          <button style={{ fontSize: 13.5, fontWeight: 600, color: "#ffffff", backgroundColor: "#5b4fcf", border: "none", padding: "7px 16px", borderRadius: 6, cursor: "pointer" }}>Commencer gratuitement</button>
        </div>
      </nav>

      {/* Bande bleue fine sous navbar */}
      <div style={{ height: "3px", backgroundColor: "#3b82f6", width: "100%" }} />


      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "64px 64px 40px 64px", gap: 0 }}>
        <div style={{ maxWidth: 380, paddingTop: 20 }}>
          <h1 style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.18, margin: "0 0 16px 0", color: "#111827" }}>
            Modélisez vos<br />diagrammes UML<br />
            <span style={{ color: "#5b4fcf" }}>en quelques clics</span>
          </h1>
          <p style={{ fontSize: 14.5, color: "#6b7280", lineHeight: 1.75, margin: "0 0 28px 0" }}>
            Créez, collaborez et exportez des diagrammes de classes UML<br />
            professionnels directement dans votre navigateur. Sans installation,<br />
            sans friction.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 28 }}>
            <button style={{ backgroundColor: "#5b4fcf", color: "#ffffff", border: "none", padding: "11px 20px", borderRadius: 7, fontSize: 13.5, fontWeight: 600, cursor: "pointer" }}>Créer mon premier diagramme</button>
            <a href="#" style={{ fontSize: 13.5, color: "#374151", textDecoration: "none" }}>Voir la démo</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
            {[{ initials: "JD", bg: "#5b4fcf" }, { initials: "ML", bg: "#2563eb" }, { initials: "AR", bg: "#059669" }, { initials: "TC", bg: "#d97706" }].map((av, i) => (
              <div key={i} style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: av.bg, border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 9, fontWeight: 700, marginLeft: i === 0 ? 0 : -7, zIndex: 4 - i, position: "relative" }}>{av.initials}</div>
            ))}
            <span style={{ fontSize: 12.5, color: "#6b7280", marginLeft: 10 }}>Rejoint par +2 400 développeurs ce mois</span>
          </div>
        </div>

        {/* Canvas UML droite */}
        <div style={{ flex: 1, position: "relative", marginLeft: 60 }}>
          <div style={{ position: "absolute", top: 0, right: 0, fontSize: 12.5, color: "#5b4fcf", fontWeight: 600, display: "flex", alignItems: "center", gap: 5 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><polyline points="1,11 4,6 7,8 11,2 13,4" stroke="#5b4fcf" strokeWidth="1.4" fill="none" strokeLinejoin="round" /></svg>
            5 classes • 4 relations
          </div>
          <div style={{ position: "absolute", bottom: 0, right: 0, fontSize: 12, color: "#374151", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#22c55e", display: "inline-block" }} />
            Sauvegarde automatique
          </div>
          <svg width="100%" viewBox="0 0 640 340" style={{ display: "block", marginTop: 10 }}>
            <line x1="175" y1="85" x2="278" y2="110" stroke="#5b4fcf" strokeWidth="1.5" />
            <line x1="410" y1="140" x2="460" y2="195" stroke="#5b4fcf" strokeWidth="1.5" />
            <line x1="350" y1="175" x2="345" y2="240" stroke="#5b4fcf" strokeWidth="1.5" strokeDasharray="6,4" />
            <line x1="210" y1="245" x2="290" y2="265" stroke="#5b4fcf" strokeWidth="1.5" />
            <line x1="460" y1="235" x2="410" y2="270" stroke="#5b4fcf" strokeWidth="1.5" />
            {/* Admin */}
            <rect x="60" y="55" width="120" height="72" rx="4" fill="#ffffff" stroke="#c7c2e8" strokeWidth="1" />
            <rect x="60" y="55" width="120" height="26" rx="4" fill="#5b4fcf" />
            <rect x="60" y="71" width="120" height="10" fill="#5b4fcf" />
            <text x="120" y="71" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="400">«nomRole»</text>
            <text x="120" y="83" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">Admin</text>
            <line x1="60" y1="81" x2="180" y2="81" stroke="#c7c2e8" strokeWidth="0.7" />
            <text x="72" y="97" fill="#555" fontSize="9.5">- role : String</text>
            <line x1="60" y1="104" x2="180" y2="104" stroke="#c7c2e8" strokeWidth="0.7" />
            <text x="72" y="118" fill="#555" fontSize="9.5">+ manage() : void</text>
            {/* User */}
            <rect x="278" y="80" width="140" height="100" rx="4" fill="#ffffff" stroke="#c7c2e8" strokeWidth="1" />
            <rect x="278" y="80" width="140" height="24" rx="4" fill="#5b4fcf" />
            <rect x="278" y="96" width="140" height="8" fill="#5b4fcf" />
            <text x="348" y="96" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="700">User</text>
            <line x1="278" y1="104" x2="418" y2="104" stroke="#c7c2e8" strokeWidth="0.7" />
            <text x="290" y="118" fill="#555" fontSize="9.5">- id : Long</text>
            <text x="290" y="131" fill="#555" fontSize="9.5">- email : String</text>
            <text x="290" y="144" fill="#555" fontSize="9.5">- password : String</text>
            <line x1="278" y1="150" x2="418" y2="150" stroke="#c7c2e8" strokeWidth="0.7" />
            <text x="290" y="163" fill="#555" fontSize="9.5">+ login() : Boolean</text>
            <text x="290" y="175" fill="#555" fontSize="9.5">+ getProfile() : User</text>
            {/* Product */}
            <rect x="80" y="210" width="135" height="88" rx="4" fill="#ffffff" stroke="#c09060" strokeWidth="1" />
            <rect x="80" y="210" width="135" height="24" rx="4" fill="#7c5c30" />
            <rect x="80" y="226" width="135" height="8" fill="#7c5c30" />
            <text x="147" y="226" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="700">Product</text>
            <line x1="80" y1="234" x2="215" y2="234" stroke="#c09060" strokeWidth="0.7" />
            <text x="92" y="249" fill="#555" fontSize="9.5">- name : String</text>
            <text x="92" y="262" fill="#555" fontSize="9.5">- price : Double</text>
            <text x="92" y="275" fill="#555" fontSize="9.5">- stock : Int</text>
            <line x1="80" y1="281" x2="215" y2="281" stroke="#c09060" strokeWidth="0.7" />
            <text x="92" y="294" fill="#555" fontSize="9.5">+ updateStock()</text>
            {/* OrderItem */}
            <rect x="290" y="240" width="130" height="88" rx="4" fill="#ffffff" stroke="#6bbfa0" strokeWidth="1" />
            <rect x="290" y="240" width="130" height="24" rx="4" fill="#1a7a5e" />
            <rect x="290" y="256" width="130" height="8" fill="#1a7a5e" />
            <text x="355" y="256" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="700">OrderItem</text>
            <line x1="290" y1="264" x2="420" y2="264" stroke="#6bbfa0" strokeWidth="0.7" />
            <text x="302" y="279" fill="#555" fontSize="9.5">- id : Long</text>
            <text x="302" y="292" fill="#555" fontSize="9.5">- total : Double</text>
            <text x="302" y="305" fill="#555" fontSize="9.5">- status : String</text>
            <line x1="290" y1="311" x2="420" y2="311" stroke="#6bbfa0" strokeWidth="0.7" />
            <text x="302" y="324" fill="#555" fontSize="9.5">+ reduce() : Double</text>
            {/* Order */}
            <rect x="455" y="195" width="145" height="90" rx="4" fill="#ffffff" stroke="#6bbfa0" strokeWidth="1" />
            <rect x="455" y="195" width="145" height="24" rx="4" fill="#1a7a5e" />
            <rect x="455" y="211" width="145" height="8" fill="#1a7a5e" />
            <text x="527" y="211" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="700">Order</text>
            <line x1="455" y1="219" x2="600" y2="219" stroke="#6bbfa0" strokeWidth="0.7" />
            <text x="467" y="234" fill="#555" fontSize="9.5">- id : Long</text>
            <text x="467" y="247" fill="#555" fontSize="9.5">- total : Double</text>
            <text x="467" y="260" fill="#555" fontSize="9.5">- status : String</text>
            <line x1="455" y1="266" x2="600" y2="266" stroke="#6bbfa0" strokeWidth="0.7" />
            <text x="467" y="279" fill="#555" fontSize="9.5">+ calculate() : Double</text>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS
      ═══════════════════════════════════════ */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {[
          { val: "2400+", label: "Utilisateurs actifs", bg: "#7ecfba" },
          { val: "18k+", label: "Diagrammes créés", bg: "#4c3db5" },
          { val: "140k+", label: "Classes modélisées", bg: "#c95f2a" },
          { val: "4.8/5", label: "Note moyenne", bg: "#2563eb" },
        ].map(s => (
          <div key={s.val} style={{ backgroundColor: s.bg, padding: "32px 20px", textAlign: "center" }}>
            <div style={{ fontSize: 34, fontWeight: 700, color: "#fff" }}>{s.val}</div>
            <div style={{ fontSize: 14, color: "#fff", marginTop: 4, opacity: 0.92 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ═══════════════════════════════════════
          FONCTIONNALITÉS
      ═══════════════════════════════════════ */}
      <section style={{ padding: "56px 64px" }}>
        <div style={{ border: "1.5px dashed #93c5fd", padding: "16px 20px", marginBottom: 20, boxSizing: "border-box" }}>
          <p style={{ color: "#5b4fcf", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", margin: "0 0 8px 0" }}>FONCTIONNALITÉS</p>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 8px 0", color: "#111827" }}>Tout ce dont vous avez besoin</h2>
          <p style={{ fontSize: 14, color: "#6b7280", margin: 0, maxWidth: 460 }}>De la création des classes à l'export SQL, UMLStudio couvre l'intégralité du cycle de modélisation.</p>
        </div>

        <div style={{ border: "1.5px dashed #93c5fd", boxSizing: "border-box" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
            {[
              { iconBg: "#ede9fe", icon: "🗂️", title: "Éditeur de classes", desc: "Ajoutez attributs et méthodes avec visibilité (+, -, #), types et stéréotypes UML en quelques secondes." },
              { iconBg: "#d1fae5", icon: "✏️", title: "Relations UML", desc: "Association, héritage, composition et agrégation — tracez les relations par glisser-déposer entre classes." },
              { iconBg: "#e0f2fe", icon: "🔵", title: "Canvas React Flow", desc: "Zoom, panoramique, grille magnétique et auto-layout pour organiser vos diagrammes sans effort." },
              { iconBg: "#fff7ed", icon: "🗄️", title: "Sauvegarde en base", desc: "Chaque diagramme est sauvegardé automatiquement en temps réel dans votre espace personnel sécurisé." },
              { iconBg: "#fff7ed", icon: "📄", title: "Export PDF & image", desc: "Exportez vos diagrammes en PNG haute résolution, SVG vectoriel ou PDF prêt à imprimer en un clic." },
              { iconBg: "#e0f2fe", icon: "⇆", title: "Génération SQL", desc: "Traduisez vos classes UML en script SQL (CREATE TABLE) avec clés primaires, étrangères et contraintes." },
            ].map((f, i) => (
              <div key={f.title} style={{
                padding: "24px 22px",
                borderRight: i % 3 < 2 ? "1px solid #e5e7eb" : "none",
                borderBottom: i < 3 ? "1px solid #e5e7eb" : "none",
              }}>
                <div style={{ width: 38, height: 38, borderRadius: 8, backgroundColor: f.iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ fontSize: 14.5, fontWeight: 700, margin: "0 0 8px 0", color: "#111827" }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "#6b7280", margin: 0, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Séparateur bleu */}
      <div style={{ height: "3px", backgroundColor: "#3b82f6" }} />

      {/* ═══════════════════════════════════════
          COMMENT ÇA MARCHE
      ═══════════════════════════════════════ */}
      <section style={{ padding: "56px 64px" }}>
        <p style={{ color: "#5b4fcf", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", margin: "0 0 8px 0" }}>COMMENT ÇA MARCHE</p>
        <h2 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 6px 0", color: "#111827" }}>Modélisez en 4 étapes</h2>
        <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 32px 0" }}>De la connexion à l'export, le parcours est pensé pour les développeurs.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {[
            { n: 1, title: "Créez un compte", desc: "Inscrivez-vous avec votre email ou continuez via Facebook en quelques secondes.", bg: "#2563eb" },
            { n: 2, title: "Nouveau diagramme", desc: "Nommez votre projet et accédez à l'éditeur visuel avec canvas interactif.", bg: "#4c3db5" },
            { n: 3, title: "Modélisez vos classes", desc: "Ajoutez classes, attributs, méthodes et reliez-les par des relations UML.", bg: "#2563eb" },
            { n: 4, title: "Exportez", desc: "Téléchargez en PNG, PDF ou générez le script SQL correspondant à votre modèle.", bg: "#4c3db5" },
          ].map(step => (
            <div key={step.n} style={{ backgroundColor: step.bg, borderRadius: 14, padding: "26px 20px 24px", color: "#fff" }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.55)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, marginBottom: 18, color: "#fff" }}>{step.n}</div>
              <h3 style={{ fontSize: 14.5, fontWeight: 700, margin: "0 0 8px 0", color: "#fff" }}>{step.title}</h3>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.78)", margin: 0, lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RELATIONS UML
      ═══════════════════════════════════════ */}
      <section style={{ padding: "56px 64px" }}>
        <div style={{ border: "1.5px dashed #93c5fd", padding: "14px 18px", marginBottom: 24, boxSizing: "border-box" }}>
          <p style={{ color: "#5b4fcf", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", margin: "0 0 6px 0" }}>RELATIONS UML</p>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 8px 0", color: "#111827" }}>Les 4 types de relations supportés</h2>
          <p style={{ fontSize: 13.5, color: "#6b7280", margin: 0, maxWidth: 380 }}>UMLStudio implémente fidèlement la notation UML standard pour chaque type de relation.</p>
        </div>

        <div style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>
          {/* Légende */}
          <div style={{ minWidth: 240 }}>
            {[
              { label: "Association", desc: "Relation simple entre deux classes. Une classe utilise une autre ou s'y réfère.", lineEl: <svg width="50" height="14" viewBox="0 0 50 14"><line x1="0" y1="7" x2="44" y2="7" stroke="#5b4fcf" strokeWidth="1.4" /><polygon points="42,4 50,7 42,10" fill="#5b4fcf" /></svg> },
              { label: "Héritage (généralisation)", desc: "Une classe enfant hérite des attributs et méthodes de la classe parent.", lineEl: <svg width="50" height="14" viewBox="0 0 50 14"><line x1="0" y1="7" x2="40" y2="7" stroke="#5b4fcf" strokeWidth="1.4" strokeDasharray="5,3" /><polygon points="38,4 48,7 38,10" fill="none" stroke="#5b4fcf" strokeWidth="1.4" /></svg> },
              { label: "Composition", desc: "La classe composante ne peut exister sans son composé. Cycle de vie partagé.", lineEl: <svg width="50" height="14" viewBox="0 0 50 14"><polygon points="0,7 7,3 14,7 7,11" fill="#1a7a5e" /><line x1="14" y1="7" x2="50" y2="7" stroke="#1a7a5e" strokeWidth="1.4" /></svg> },
              { label: "Agrégation", desc: "Relation de tout à partie. La partie peut exister indépendamment du tout.", lineEl: <svg width="50" height="14" viewBox="0 0 50 14"><polygon points="0,7 7,3 14,7 7,11" fill="none" stroke="#7c5c30" strokeWidth="1.4" /><line x1="14" y1="7" x2="50" y2="7" stroke="#7c5c30" strokeWidth="1.4" /></svg> },
            ].map(r => (
              <div key={r.label} style={{ marginBottom: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>{r.lineEl}<span style={{ fontSize: 12.5, fontWeight: 600, color: "#111827" }}>{r.label}</span></div>
                <p style={{ fontSize: 11.5, color: "#9ca3af", margin: 0, lineHeight: 1.5 }}>{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Diagramme */}
          <div style={{ flex: 1, border: "1px solid #e5e7eb", borderRadius: 10, padding: "20px", backgroundColor: "#fafafa" }}>
            <svg width="100%" viewBox="0 0 540 400" style={{ display: "block" }}>
              {/* Voiture → Vehicule : Héritage pointillé */}
              <line x1="200" y1="265" x2="285" y2="195" stroke="#5b4fcf" strokeWidth="1.5" strokeDasharray="7,4" />
              <polygon points="285,195 276,205 294,208" fill="none" stroke="#5b4fcf" strokeWidth="1.5" />
              {/* Vehicule → Moteur : Composition diamant plein vert */}
              <line x1="390" y1="155" x2="430" y2="120" stroke="#1a7a5e" strokeWidth="1.5" />
              <polygon points="430,120 422,112 430,104 438,112" fill="#1a7a5e" />
              {/* Vehicule → Conducteur : Agrégation diamant vide marron */}
              <line x1="360" y1="195" x2="400" y2="265" stroke="#7c5c30" strokeWidth="1.5" />
              <polygon points="400,265 392,256 400,248 408,256" fill="#ffffff" stroke="#7c5c30" strokeWidth="1.5" />
              {/* Vehicule */}
              <rect x="255" y="115" width="150" height="95" rx="6" fill="#eeeaf8" stroke="#8b7fd4" strokeWidth="1.5" />
              <rect x="255" y="115" width="150" height="32" rx="6" fill="#5b4fcf" />
              <rect x="255" y="135" width="150" height="12" fill="#5b4fcf" />
              <text x="330" y="135" textAnchor="middle" fill="#ffffff" fontSize="13.5" fontWeight="700">Vehicule</text>
              <text x="268" y="163" fill="#374151" fontSize="11">- immatriculation</text>
              <text x="268" y="178" fill="#374151" fontSize="11">- marque</text>
              <text x="268" y="193" fill="#374151" fontSize="11">+ demarrer()</text>
              {/* Moteur */}
              <rect x="430" y="82" width="102" height="70" rx="6" fill="#d4f0e8" stroke="#1a7a5e" strokeWidth="1.5" />
              <rect x="430" y="82" width="102" height="28" rx="6" fill="#1a7a5e" />
              <rect x="430" y="99" width="102" height="11" fill="#1a7a5e" />
              <text x="481" y="100" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="700">Moteur</text>
              <text x="442" y="124" fill="#374151" fontSize="11">- cylindree</text>
              <text x="442" y="139" fill="#374151" fontSize="11">+ demarrer()</text>
              {/* Voiture */}
              <rect x="100" y="230" width="130" height="75" rx="6" fill="#eeeaf8" stroke="#8b7fd4" strokeWidth="1.5" />
              <rect x="100" y="230" width="130" height="28" rx="6" fill="#5b4fcf" />
              <rect x="100" y="248" width="130" height="10" fill="#5b4fcf" />
              <text x="165" y="249" textAnchor="middle" fill="#ffffff" fontSize="12.5" fontWeight="700">Voiture</text>
              <text x="114" y="275" fill="#374151" fontSize="11">- nbPortes : Int</text>
              <text x="114" y="290" fill="#374151" fontSize="11">+ ouvrir()</text>
              {/* Conducteur */}
              <rect x="400" y="270" width="128" height="78" rx="6" fill="#f5e8d4" stroke="#7c5c30" strokeWidth="1.5" />
              <rect x="400" y="270" width="128" height="28" rx="6" fill="#7c5c30" />
              <rect x="400" y="288" width="128" height="10" fill="#7c5c30" />
              <text x="464" y="289" textAnchor="middle" fill="#ffffff" fontSize="12.5" fontWeight="700">Conducteur</text>
              <text x="412" y="315" fill="#374151" fontSize="11">- permis : String</text>
              <text x="412" y="330" fill="#374151" fontSize="11">+ conduire()</text>
              {/* Légendes bas */}
              <text x="105" y="355" textAnchor="middle" fill="#5b4fcf" fontSize="13" fontWeight="600">Héritage</text>
              <line x1="55" y1="370" x2="155" y2="370" stroke="#5b4fcf" strokeWidth="1.5" strokeDasharray="7,4" />
              <text x="275" y="355" textAnchor="middle" fill="#1a7a5e" fontSize="13" fontWeight="600">Composition</text>
              <polygon points="200,370 208,364 216,370 208,376" fill="#1a7a5e" />
              <line x1="216" y1="370" x2="350" y2="370" stroke="#1a7a5e" strokeWidth="1.5" />
              <text x="435" y="355" textAnchor="middle" fill="#7c5c30" fontSize="13" fontWeight="600">Agrégation</text>
              <polygon points="360,370 368,364 376,370 368,376" fill="#ffffff" stroke="#7c5c30" strokeWidth="1.5" />
              <line x1="376" y1="370" x2="510" y2="370" stroke="#7c5c30" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TÉMOIGNAGES
      ═══════════════════════════════════════ */}
      <section style={{ padding: "56px 64px", backgroundColor: "#ffffff" }}>
        <div style={{ border: "1.5px dashed #93c5fd", padding: "14px 18px", marginBottom: 28, boxSizing: "border-box" }}>
          <p style={{ color: "#5b4fcf", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", margin: "0 0 6px 0" }}>TÉMOIGNAGES</p>
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: 0, color: "#111827" }}>Ce que disent nos utilisateurs</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {[
            { text: "\"UMLStudio a complètement changé ma façon de travailler. Je modélise mes bases de données 3x plus vite qu'avec des outils classiques.\"", name: "Arnaud Mboma", role: "Développeur Backend · Yaoundé", initials: "AM", bg: "#4c3db5" },
            { text: "\"La génération SQL automatique est bluffante. Je dessine mon diagramme et j'obtiens directement les CREATE TABLE prêts à exécuter.\"", name: "Fatou Kouyaté", role: "Architecte logiciel · Dakar", initials: "FK", bg: "#1a7a5e" },
            { text: "\"Idéal pour les cours et les projets académiques. Mes étudiants l'adoptent immédiatement, l'interface est vraiment intuitive.\"", name: "Prof. Pierre Tchinda", role: "Enseignant informatique · IUT", initials: "PT", bg: "#2563eb" },
          ].map(t => (
            <div key={t.name} style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: "22px 20px", backgroundColor: "#ffffff" }}>
              <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>{[...Array(5)].map((_, i) => <span key={i} style={{ color: "#f59e0b", fontSize: 17 }}>★</span>)}</div>
              <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.72, margin: "0 0 20px 0" }}>{t.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: t.bg, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#9ca3af" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════ */}
      <section style={{ padding: "80px 40px", textAlign: "center", borderTop: "2.5px solid #2563eb" }}>
        <h2 style={{ fontSize: 33, fontWeight: 700, color: "#111827", margin: "0 0 4px 0" }}>Prêt à modéliser</h2>
        <h2 style={{ fontSize: 33, fontWeight: 700, color: "#5b4fcf", margin: "0 0 18px 0" }}>votre premier diagramme ?</h2>
        <p style={{ fontSize: 14.5, color: "#6b7280", lineHeight: 1.7, margin: "0 0 30px 0" }}>
          Rejoignez plus de 2 400 développeurs et étudiants qui utilisent<br />UMLStudio chaque jour. Gratuit pour démarrer.
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20 }}>
          <button style={{ backgroundColor: "#5b4fcf", color: "#fff", border: "none", padding: "13px 26px", borderRadius: 8, fontSize: 14.5, fontWeight: 600, cursor: "pointer" }}>Créer mon compte gratuitement</button>
          <a href="#" style={{ fontSize: 14, color: "#374151", textDecoration: "none" }}>Voir une démo live</a>
        </div>
        <p style={{ fontSize: 12.5, color: "#9ca3af", marginTop: 16 }}>Aucune carte bancaire requise · Accessible depuis n'importe quel navigateur</p>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
      <footer style={{ padding: "48px 64px 32px", borderTop: "1px solid #e5e7eb", display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: 40, backgroundColor: "#ffffff" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ width: 30, height: 30, backgroundColor: "#5b4fcf", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="1" width="5" height="5" rx="1" stroke="white" strokeWidth="1.4" />
                <rect x="10" y="10" width="5" height="5" rx="1" stroke="white" strokeWidth="1.4" />
                <line x1="6" y1="3.5" x2="10" y2="3.5" stroke="white" strokeWidth="1.4" />
                <line x1="12.5" y1="6" x2="12.5" y2="10" stroke="white" strokeWidth="1.4" />
              </svg>
            </div>
            <span style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>UMLStudio</span>
          </div>
          <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0, maxWidth: 220 }}>L'outil de modélisation UML en ligne pensé pour les développeurs et les équipes.</p>
        </div>
        {[
          { title: "Produit", links: ["Fonctionnalités", "Tarifs", "Nouveautés", "Roadmap"] },
          { title: "Ressources", links: ["Documentation", "Tutoriels", "Templates UML", "Blog"] },
          { title: "Entreprise", links: ["À propos", "Contact", "Conditions d'utilisation", "Politique de confidentialité"] },
        ].map(col => (
          <div key={col.title}>
            <h4 style={{ fontSize: 13.5, fontWeight: 700, margin: "0 0 14px 0", color: "#111827" }}>{col.title}</h4>
            {col.links.map(l => (
              <div key={l} style={{ marginBottom: 9 }}>
                <a href="#" style={{ fontSize: 13, color: "#6b7280", textDecoration: "none" }}>{l}</a>
              </div>
            ))}
          </div>
        ))}
      </footer>
    </div>
  );
}