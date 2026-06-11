"use client"
import { EdgeProps, getBezierPath, EdgeLabelRenderer } from '@xyflow/react';
import { UMLRelation } from '../../types/uml';

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

  const strokeColor = rel.type === 'heritage' ? '#6b7280' : '#374151';
  const markerId = `marker-${rel.type}-${id}`;

  // Calcul des positions des cardinalités
  const sourceLabelX = sourceX + (labelX - sourceX) * 0.15;
  const sourceLabelY = sourceY + (labelY - sourceY) * 0.15;
  const targetLabelX = targetX + (labelX - targetX) * 0.15;
  const targetLabelY = targetY + (labelY - targetY) * 0.15;

  return (
    <>
      <defs>
        {rel.type === 'heritage' && (
          <marker id={markerId} markerWidth="12" markerHeight="12"
            refX="10" refY="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 Z"
              fill="white" stroke={strokeColor} strokeWidth="1.5" />
          </marker>
        )}
        {rel.type === 'composition' && (
          <marker id={markerId} markerWidth="14" markerHeight="14"
            refX="12" refY="6" orient="auto">
            <path d="M 0 6 L 6 0 L 12 6 L 6 12 Z"
              fill={strokeColor} stroke={strokeColor} strokeWidth="1" />
          </marker>
        )}
        {rel.type === 'agregation' && (
          <marker id={markerId} markerWidth="14" markerHeight="14"
            refX="12" refY="6" orient="auto">
            <path d="M 0 6 L 6 0 L 12 6 L 6 12 Z"
              fill="white" stroke={strokeColor} strokeWidth="1.5" />
          </marker>
        )}
        {rel.type === 'association' && (
          <marker id={markerId} markerWidth="10" markerHeight="10"
            refX="9" refY="5" orient="auto">
            <path d="M 0 0 L 9 5 L 0 10"
              fill="none" stroke={strokeColor} strokeWidth="1.5" />
          </marker>
        )}
      </defs>

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

      <EdgeLabelRenderer>
        {rel.sourceLabel && (
          <div
            style={{
              position: 'absolute',
              left: `${sourceLabelX}px`,
              top: `${sourceLabelY}px`,
              transform: 'translate(-50%, -50%)',
              fontSize: '11px',
              fontWeight: '600',
              color: '#374151',
              pointerEvents: 'none',
              background: 'white',
              padding: '2px 6px',
              borderRadius: '3px',
              border: '1px solid #e5e7eb',
              whiteSpace: 'nowrap',
              zIndex: 100,
            }}
            className="nodrag nopan"
          >
            {rel.sourceLabel}
          </div>
        )}

        {rel.name && (
          <div
            style={{
              position: 'absolute',
              left: `${labelX}px`,
              top: `${labelY}px`,
              transform: 'translate(-50%, -50%)',
              fontSize: '11px',
              color: '#374151',
              fontStyle: 'italic',
              pointerEvents: 'none',
              background: 'white',
              padding: '2px 6px',
              borderRadius: '3px',
              border: '1px solid #e5e7eb',
              whiteSpace: 'nowrap',
              zIndex: 100,
            }}
            className="nodrag nopan"
          >
            {rel.name}
          </div>
        )}

        {rel.targetLabel && (
          <div
            style={{
              position: 'absolute',
              left: `${targetLabelX}px`,
              top: `${targetLabelY}px`,
              transform: 'translate(-50%, -50%)',
              fontSize: '11px',
              fontWeight: '600',
              color: '#374151',
              pointerEvents: 'none',
              background: 'white',
              padding: '2px 6px',
              borderRadius: '3px',
              border: '1px solid #e5e7eb',
              whiteSpace: 'nowrap',
              zIndex: 100,
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