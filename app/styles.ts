import React from "react";

export const colors = {
  purple:      "#5b4fcf",
  purpleDark:  "#4c3db5",
  blue:        "#2563eb",
  green:       "#1a7a5e",
  brown:       "#7c5c30",
  teal:        "#7ecfba",
  orange:      "#c95f2a",
  text:        "#111827",
  textMuted:   "#6b7280",
  textLight:   "#9ca3af",
  border:      "#e5e7eb",
  borderDash:  "#93c5fd",
  bg:          "#ffffff",
  bgLight:     "#fafafa",
};

export const styles: { [key: string]: React.CSSProperties } = {

  /* ── PAGE ── */
  page: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    color: colors.text,
    backgroundColor: colors.bg,
    margin: 0,
    padding: 0,
    overflowX: "hidden",
  },

  blueBar: {
    height: 3,
    backgroundColor: colors.blue,
    width: "100%",
  },

  /* ── NAVBAR ── */
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 32px",
    height: "52px",
    borderBottom: `1px solid ${colors.border}`,
    backgroundColor: colors.bg,
    width: "100%",
    position: "static",
  },
  logoWrap: { display: "flex", alignItems: "center", gap: 8 },
  logoBox: {
    width: 28, height: 28,
    backgroundColor: colors.purple,
    borderRadius: 6,
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  logoText: { fontWeight: 700, fontSize: 14, color: colors.text },
  navLinks: { display: "flex", gap: 28, alignItems: "center" },
  navLink: {
    fontSize: 13, color: "#374151", textDecoration: "none",
    borderBottom: `1.5px dashed ${colors.borderDash}`, paddingBottom: 1,
    cursor: "pointer",
  },
  navRight: { display: "flex", gap: 10, alignItems: "center" },
  btnLogin: {
    fontSize: 13, color: "#374151", textDecoration: "none",
    border: `1.5px dashed ${colors.borderDash}`,
    padding: "5px 14px", borderRadius: 5,
    cursor: "pointer", background: "none",
  },
  btnStart: {
    fontSize: 13, fontWeight: 700, color: "#fff",
    backgroundColor: colors.purple, border: "none",
    padding: "6px 14px", borderRadius: 5, cursor: "pointer",
  },

  /* ── HERO ── */
  hero: {
    display: "flex", alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "55px 64px 30px",
  },
  heroLeft: { maxWidth: 370, paddingTop: 10 },
  h1: { fontSize: 38, fontWeight: 700, lineHeight: 1.18, color: colors.text, marginBottom: 14 },
  h1Purple: { color: colors.purple },
  heroP: { fontSize: 14, color: colors.textMuted, lineHeight: 1.75, marginBottom: 24 },
  heroBtns: { display: "flex", alignItems: "center", gap: 18, marginBottom: 22 },
  btnCta: {
    backgroundColor: colors.purple, color: "#fff", border: "none",
    padding: "10px 18px", borderRadius: 7, fontSize: 13, fontWeight: 600, cursor: "pointer",
  },
  btnDemo: { fontSize: 13, color: "#374151", textDecoration: "none" },
  avatars: { display: "flex", alignItems: "center" },
  avLabel: { fontSize: 12, color: colors.textMuted, marginLeft: 8 },
  heroRight: { flex: 1, marginLeft: 50, position: "relative" },
  badgeTop: {
    position: "absolute", top: 0, right: 0,
    fontSize: 12, color: colors.purple, fontWeight: 600,
    display: "flex", alignItems: "center", gap: 4,
  },
  badgeBottom: {
    position: "absolute", bottom: 0, right: 0,
    fontSize: 11.5, color: "#374151",
    display: "flex", alignItems: "center", gap: 5,
  },
  dotGreen: {
    width: 7, height: 7, borderRadius: "50%",
    backgroundColor: "#22c55e", display: "inline-block",
  },

  /* ── STATS ── */
  stats: { display: "grid", gridTemplateColumns: "repeat(4,1fr)" },
  stat: { padding: "28px 20px", textAlign: "center" },
  statVal: { fontSize: 32, fontWeight: 700, color: "#fff" },
  statLbl: { fontSize: 13.5, color: "#fff", marginTop: 3, opacity: 0.93 },

  /* ── SECTION COMMUNE ── */
  section: { padding: "50px 64px" },
  headerBox: {
    border: `1.5px dashed ${colors.borderDash}`,
    padding: "14px 18px", marginBottom: 18,
  },
  tag: {
    fontSize: 10.5, fontWeight: 700, letterSpacing: 2,
    textTransform: "uppercase" as const,
    color: colors.purple, marginBottom: 7,
  },
  sectionTitle: { fontSize: 26, fontWeight: 700, color: colors.text, marginBottom: 7 },
  sectionDesc: { fontSize: 13.5, color: colors.textMuted, maxWidth: 480 },

  /* ── FEATURES ── */
  featGrid: {
    border: `1.5px dashed ${colors.borderDash}`,
    display: "grid", gridTemplateColumns: "repeat(3,1fr)",
  },
  featIcon: {
    width: 36, height: 36, borderRadius: 7,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 17, marginBottom: 12,
  },
  featTitle: { fontSize: 13.5, fontWeight: 700, color: colors.text, marginBottom: 6 },
  featDesc: { fontSize: 12.5, color: colors.textMuted, lineHeight: 1.65 },

  /* ── STEPS ── */
  stepsSection: { padding: "50px 64px" },
  stepsGrid: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginTop: 28 },
  step: { borderRadius: 12, padding: "24px 18px", color: "#fff" },
  stepNum: {
    width: 32, height: 32, borderRadius: "50%",
    border: "2px solid rgba(255,255,255,.5)",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 14, fontWeight: 700, marginBottom: 16, color: "#fff",
  },
  stepTitle: { fontSize: 13.5, fontWeight: 700, marginBottom: 7, color: "#fff" },
  stepDesc: { fontSize: 11.5, color: "rgba(255,255,255,.78)", lineHeight: 1.65 },

  /* ── RELATIONS ── */
  relSection: { padding: "50px 64px" },
  relBody: { display: "flex", gap: 36, alignItems: "flex-start" },
  legend: { minWidth: 235 },
  legendItem: { marginBottom: 20 },
  legendHeader: { display: "flex", alignItems: "center", gap: 8, marginBottom: 4 },
  legendLabel: { fontSize: 12, fontWeight: 600, color: colors.text },
  legendDesc: { fontSize: 11, color: colors.textLight, lineHeight: 1.5 },
  diagramBox: {
    flex: 1, border: `1px solid ${colors.border}`,
    borderRadius: 10, padding: 18, backgroundColor: colors.bgLight,
  },

  /* ── TESTIMONIALS ── */
  testiSection: { padding: "50px 64px", backgroundColor: colors.bg },
  testiGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 },
  testiCard: { border: `1px solid ${colors.border}`, borderRadius: 9, padding: 20 },
  stars: { color: "#f59e0b", fontSize: 16, marginBottom: 12 },
  testiText: { fontSize: 12.5, color: "#374151", lineHeight: 1.72, marginBottom: 18 },
  testiUser: { display: "flex", alignItems: "center", gap: 9 },
  avatar: {
    width: 32, height: 32, borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 10, fontWeight: 700, color: "#fff",
  },
  testiName: { fontSize: 12.5, fontWeight: 600, color: colors.text },
  testiRole: { fontSize: 11.5, color: colors.textLight },

  /* ── CTA ── */
  ctaSection: {
    padding: "72px 40px", textAlign: "center" as const,
    borderTop: `2.5px solid ${colors.blue}`,
  },
  ctaSub: { fontSize: 14, color: colors.textMuted, lineHeight: 1.7, marginBottom: 28 },
  ctaBtns: { display: "flex", justifyContent: "center", alignItems: "center", gap: 18 },
  btnCta2: {
    backgroundColor: colors.purple, color: "#fff", border: "none",
    padding: "12px 24px", borderRadius: 7, fontSize: 14, fontWeight: 600, cursor: "pointer",
  },
  ctaNote: { fontSize: 12, color: colors.textLight, marginTop: 14 },

  /* ── FOOTER ── */
  footer: {
    padding: "44px 64px 30px",
    borderTop: `1px solid ${colors.border}`,
    display: "grid", gridTemplateColumns: "1.7fr 1fr 1fr 1fr", gap: 36,
    backgroundColor: colors.bg,
  },
  footerLogoWrap: {
    display: "flex", alignItems: "center", gap: 8,
    marginBottom: 11, fontWeight: 700, fontSize: 14, color: colors.text,
  },
  footerDesc: { fontSize: 12.5, color: colors.textMuted, lineHeight: 1.7, maxWidth: 200 },
  footerColTitle: { fontSize: 13, fontWeight: 700, color: colors.text, marginBottom: 13 },
  footerLink: { display: "block", fontSize: 12.5, color: colors.textMuted, marginBottom: 8, textDecoration: "none" },
};