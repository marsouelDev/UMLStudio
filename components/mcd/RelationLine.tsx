"use client";
// components/mcd/RelationLine.tsx
import { Entity, Relation } from "@/store/diagramStore";

type Props = { relation: Relation; entities: Entity[] };

const ENTITY_W = 160;
const ENTITY_H = 80; // approx

export default function RelationLine({ relation, entities }: Props) {
  const src = entities.find(e => e.id === relation.sourceId);
  const tgt = entities.find(e => e.id === relation.targetId);
  if (!src || !tgt) return null;

  // Centre des entités
  const sx = src.x + ENTITY_W / 2;
  const sy = src.y + ENTITY_H / 2;
  const tx = tgt.x + ENTITY_W / 2;
  const ty = tgt.y + ENTITY_H / 2;

  // Milieu pour le losange de relation
  const mx = (sx + tx) / 2;
  const my = (sy + ty) / 2;

  const isDashed = relation.type === "heritage";
  const color    = relation.type === "composition" ? "#6366f1"
                 : relation.type === "heritage"    ? "#10b981"
                 : "#94a3b8";

  return (
    <g>
      {/* Ligne source → losange */}
      <line
        x1={sx} y1={sy} x2={mx - 12} y2={my}
        stroke={color} strokeWidth={1.5}
        strokeDasharray={isDashed ? "5,3" : "none"}
        markerEnd="url(#arrow)"
      />
      {/* Ligne losange → target */}
      <line
        x1={mx + 12} y1={my} x2={tx} y2={ty}
        stroke={color} strokeWidth={1.5}
        strokeDasharray={isDashed ? "5,3" : "none"}
      />

      {/* Losange relation (association) */}
      {relation.type === "association" && (
        <polygon
          points={`${mx},${my - 14} ${mx + 20},${my} ${mx},${my + 14} ${mx - 20},${my}`}
          fill="white" stroke={color} strokeWidth={1.5}
        />
      )}

      {/* Nom de la relation */}
      <text x={mx} y={my + (relation.type === "association" ? 4 : -8)}
        textAnchor="middle" fontSize={9} fill={color} fontFamily="monospace" fontWeight={600}>
        {relation.name}
      </text>

      {/* Cardinalités */}
      <text x={sx + (mx - sx) * 0.25} y={sy + (my - sy) * 0.25 - 8}
        textAnchor="middle" fontSize={10} fill="#6b7280" fontFamily="monospace">
        {relation.sourceCard}
      </text>
      <text x={tx + (mx - tx) * 0.25} y={ty + (my - ty) * 0.25 - 8}
        textAnchor="middle" fontSize={10} fill="#6b7280" fontFamily="monospace">
        {relation.targetCard}
      </text>
    </g>
  );
}
