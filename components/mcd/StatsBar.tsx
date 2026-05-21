"use client";
// components/mcd/StatsBar.tsx
import { useDiagram } from "@/store/diagramStore";

export default function StatsBar() {
  const { entities, relations } = useDiagram();

  const cards = [
    { label: "Entités",      value: entities.length },
    { label: "Associations", value: relations.filter(r => r.type === "association").length },
    { label: "Cardinalités", value: `1,N · 0,N · 1,1` },
    { label: "Nombre de liens", value: relations.length },
  ];

  return (
    <div style={{
      display: "flex", gap: 12, padding: "10px 16px",
      background: "white", borderTop: "1px solid #e5e7eb",
    }}>
      {cards.map(c => (
        <div key={c.label} style={{
          flex: 1, background: "#f9fafb",
          border: "1px solid #e5e7eb", borderRadius: 8,
          padding: "8px 12px",
        }}>
          <div style={{ fontSize: 9, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>
            {c.label}
          </div>
          <div style={{ fontSize: 16, fontWeight: 800, color: "#111" }}>{c.value}</div>
        </div>
      ))}
    </div>
  );
}
