"use client"
import { EdgeProps, getBezierPath, EdgeLabelRenderer } from '@xyflow/react';
import { UMLRelation } from '../../types/uml';

// Ce composant est utilisé pour TOUS les types de relations
// Il adapte le rendu selon rel.type
export function UMLEdge({
  id, sourceX, sourceY, targetX, targetY,
  sourcePosition, targetPosition, data,
}: EdgeProps) {
  const rel = data?.relation as UMLRelation;
  if (!rel) return null;

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX, sourceY, sourcePosition,
    targetX, targetY, targetPosition,
  });

  // Couleur selon le type
  const strokeColor = rel.type === 'heritage' ? '#6b7280' : '#374151';

  // ID du marqueur SVG (flèche/diamant au bout de la ligne)
  const markerId = `marker-${rel.type}-${id}`;

  return (
    <>
      {/* Définition du marqueur SVG (symbole au bout de la flèche) */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          {/* HÉRITAGE : triangle vide */}
          {rel.type === 'heritage' && (
            <marker id={markerId} markerWidth="12" markerHeight="12"
              refX="10" refY="5" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 Z"
                fill="white" stroke={strokeColor} strokeWidth="1.5" />
            </marker>
          )}

          {/* COMPOSITION : diamant plein */}
          {rel.type === 'composition' && (
            <marker id={markerId} markerWidth="14" markerHeight="14"
              refX="12" refY="6" orient="auto">
              <path d="M 0 6 L 6 0 L 12 6 L 6 12 Z"
                fill={strokeColor} stroke={strokeColor} strokeWidth="1" />
            </marker>
          )}

          {/* AGRÉGATION : diamant vide */}
          {rel.type === 'agregation' && (
            <marker id={markerId} markerWidth="14" markerHeight="14"
              refX="12" refY="6" orient="auto">
              <path d="M 0 6 L 6 0 L 12 6 L 6 12 Z"
                fill="white" stroke={strokeColor} strokeWidth="1.5" />
            </marker>
          )}

          {/* ASSOCIATION : flèche simple */}
          {rel.type === 'association' && (
            <marker id={markerId} markerWidth="10" markerHeight="10"
              refX="9" refY="5" orient="auto">
              <path d="M 0 0 L 9 5 L 0 10"
                fill="none" stroke={strokeColor} strokeWidth="1.5" />
            </marker>
          )}
        </defs>
      </svg>

      {/* La ligne de la relation */}
      <path
        id={id}
        d={edgePath}
        fill="none"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeDasharray={rel.type === 'heritage' ? '6 3' : undefined}
        markerEnd={`url(#${markerId})`}
        style={{ cursor: 'pointer' }}
      />

      {/* Labels : cardinalités + nom de la relation */}
      <EdgeLabelRenderer>

        {/* Cardinalité source — près du nœud source */}
        {rel.sourceLabel && (
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${sourceX + (labelX - sourceX) * 0.15}px, ${sourceY + (labelY - sourceY) * 0.15}px)`,
              fontSize: 11,
              color: '#6b7280',
              pointerEvents: 'none',
              background: 'white',
              padding: '0 2px',
            }}
            className="nodrag nopan"
          >
            {rel.sourceLabel}
          </div>
        )}

        {/* Nom de la relation — au milieu */}
        {rel.name && (
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              fontSize: 11,
              color: '#374151',
              fontStyle: 'italic',
              pointerEvents: 'none',
              background: 'white',
              padding: '0 4px',
            }}
            className="nodrag nopan"
          >
            {rel.name}
          </div>
        )}

        {/* Cardinalité cible — près du nœud cible */}
        {rel.targetLabel && (
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${targetX + (labelX - targetX) * 0.15}px, ${targetY + (labelY - targetY) * 0.15}px)`,
              fontSize: 11,
              color: '#6b7280',
              pointerEvents: 'none',
              background: 'white',
              padding: '0 2px',
            }}
            className="nodrag nopan"
          >
            {rel.targetLabel}
          </div>
        )}

      </EdgeLabelRenderer>
    </>
  );
}