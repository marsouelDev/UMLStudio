"use client";
import { Entity } from "@/store/diagramStore";

type Props = {
  entity: Entity;
  isSelected: boolean;
  onMouseDown: (e: React.MouseEvent) => void;
};

export default function EntityCard({ entity, isSelected, onMouseDown }: Props) {
  const x = isFinite(entity.x) ? entity.x : 0;
  const y = isFinite(entity.y) ? entity.y : 0;

  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        position: "absolute",
        left: x,
        top: y,
        minWidth: 160,
        background: "white",
        border: `2px solid ${isSelected ? "#4f46e5" : entity.color}`,
        borderRadius: 8,
        boxShadow: isSelected
          ? `0 0 0 3px ${entity.color}33, 0 4px 20px rgba(0,0,0,0.12)`
          : "0 2px 8px rgba(0,0,0,0.08)",
        cursor: "grab",
        userSelect: "none",
        transition: "box-shadow 0.15s",
        zIndex: isSelected ? 10 : 1,
      }}
    >
      {/* Header */}
      <div style={{
        background: entity.color,
        padding: "6px 12px",
        borderRadius: "6px 6px 0 0",
        display: "flex", alignItems: "center", gap: 6,
      }}>
        <span style={{ color: "white", fontWeight: 700, fontSize: 13, fontFamily: "monospace" }}>
          {entity.name.toUpperCase()}
        </span>
      </div>

      {/* Attributes */}
      <div style={{ padding: "4px 0" }}>
        {entity.attributes.map(attr => (
          <div key={attr.id} style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "3px 12px",
            fontSize: 11, fontFamily: "monospace",
            borderBottom: "1px solid #f3f4f6",
          }}>
            {attr.isPrimary && (
              <span style={{ color: "#d97706", fontSize: 10, fontWeight: 700 }}>PK</span>
            )}
            <span style={{ color: attr.isPrimary ? "#92400e" : "#374151", fontWeight: attr.isPrimary ? 600 : 400 }}>
              {attr.name}
            </span>
            <span style={{ color: "#9ca3af", marginLeft: "auto", fontSize: 10 }}>{attr.type}</span>
          </div>
        ))}
        {entity.attributes.length === 0 && (
          <div style={{ padding: "4px 12px", fontSize: 11, color: "#9ca3af", fontStyle: "italic" }}>
            Aucun attribut
          </div>
        )}
      </div>
    </div>
  );
}