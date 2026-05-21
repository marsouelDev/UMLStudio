"use client";
// components/ui/Navbar.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { projectId: string; projectName: string };

const TABS = [
  { label: "MCD", href: (id: string) => `/mcd?projectId=${id}` },
  { label: "MLD", href: (id: string) => `/mld?projectId=${id}` },
  { label: "SQL", href: (id: string) => `/sql?projectId=${id}` },
];

export default function Navbar({ projectId, projectName }: Props) {
  const path = usePathname();
  const active = path.startsWith("/mcd") ? "MCD" : path.startsWith("/mld") ? "MLD" : "SQL";

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      height: 52,
      background: "white",
      borderBottom: "1px solid #e5e7eb",
      display: "flex", alignItems: "center",
      padding: "0 20px", gap: 16,
    }}>
      {/* Brand */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 140 }}>
        <div style={{
          width: 30, height: 30, borderRadius: 8,
          background: "linear-gradient(135deg,#4f46e5,#7c3aed)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white", fontWeight: 800, fontSize: 14,
        }}>U</div>
        <div>
          <div style={{ fontWeight: 800, fontSize: 14, color: "#111", lineHeight: 1, fontFamily: "serif" }}>
            UML<span style={{ color: "#4f46e5" }}>Studio</span>
          </div>
          <div style={{ fontSize: 9, color: "#6366f1", lineHeight: 1, marginTop: 2 }}>
            Modèle Conceptuel de Données
          </div>
        </div>
      </div>

      <div style={{ width: 1, height: 28, background: "#e5e7eb" }} />

      {/* Project name */}
      <span style={{ fontSize: 13, color: "#374151", fontWeight: 600, flex: 1 }}>
        {projectName}
      </span>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, flex: 1, justifyContent: "center" }}>
        {TABS.map(tab => (
          <Link key={tab.label} href={tab.href(projectId)} style={{
            padding: "5px 20px",
            borderRadius: 6,
            fontSize: 12,
            fontFamily: "monospace",
            fontWeight: active === tab.label ? 700 : 400,
            color: active === tab.label ? "white" : "#9ca3af",
            background: active === tab.label ? "#4f46e5" : "transparent",
            border: `1px solid ${active === tab.label ? "#4338ca" : "#e5e7eb"}`,
            textDecoration: "none",
            transition: "all 0.15s",
          }}>{tab.label}</Link>
        ))}
      </div>

      {/* Export button */}
      <button style={{
        background: "#4f46e5", color: "white",
        border: "none", borderRadius: 8,
        padding: "7px 16px", fontSize: 12, fontWeight: 600,
        cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
      }}>
        ↑ Exporter
      </button>
    </nav>
  );
}
