
"use client";
import { useRef, useCallback, useEffect } from "react";
import { useDiagram } from "@/store/diagramStore";
import EntityCard from "./EntityCard";
import RelationLine from "./RelationLine";

export default function Canvas() {
  const { entities, relations, selected, setSelected, updateEntity, save } = useDiagram();
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ id: string; ox: number; oy: number } | null>(null);

  // ── Drag entity ─────────────────────────────────────────────────────────
  const onMouseDown = useCallback((id: string, ex: number, ey: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected(id);
    dragRef.current = { id, ox: e.clientX - ex, oy: e.clientY - ey };
  }, [setSelected]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragRef.current) return;
      const { id, ox, oy } = dragRef.current;
      updateEntity(id, { x: e.clientX - ox, y: e.clientY - oy });
    };
    const onUp = () => {
      if (dragRef.current) { 
        save(); 
        dragRef.current = null; 
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => { 
      window.removeEventListener("mousemove", onMove); 
      window.removeEventListener("mouseup", onUp); 
    };
  }, [updateEntity, save]);

  return (
    <div
      ref={canvasRef}
      onClick={() => setSelected(null)}
      style={{
        position: "relative",
        flex: 1,
        overflow: "hidden",
        background: `
          radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)
        `,
        backgroundSize: "24px 24px",
        backgroundColor: "#f9fafb",
        cursor: "default",
      }}
    >
      {/* SVG relations */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8" />
          </marker>
          <marker id="diamond" viewBox="0 0 12 8" refX="1" refY="4" markerWidth="8" markerHeight="6" orient="auto">
            <path d="M0,4 L6,0 L12,4 L6,8 Z" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
          </marker>
        </defs>
        {relations.map(rel => (
          <RelationLine key={rel.id} relation={rel} entities={entities} />
        ))}
      </svg>

      {/* Entity cards */}
      {entities.map(entity => (
        <EntityCard
          key={entity.id}
          entity={entity}
          isSelected={selected === entity.id}
          onMouseDown={onMouseDown(entity.id, entity.x, entity.y)}
        />
      ))}

      {/* Empty state */}
      {entities.length === 0 && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 12, color: "#9ca3af",
          pointerEvents: "none",
        }}>
          <div style={{ fontSize: 48 }}>⬡</div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Canevas vide</div>
          <div style={{ fontSize: 12 }}>Utilisez le panneau gauche pour ajouter des entités</div>
        </div>
      )}
    </div>
  );
}

