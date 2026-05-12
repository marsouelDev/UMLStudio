// src/components/Canvas.tsx
"use client"
import { useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Connection,
  EdgeTypes,
  NodeTypes,
  Edge,
  Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { UMLClass, UMLRelation } from '../types/uml';
import { ClassNode } from './nodes/ClassNode';
import { UMLEdge } from './edges/UMLEdge';
import './Canvas.css';

// Déclaré hors du composant pour éviter des re-rendus inutiles
const NODE_TYPES: NodeTypes = { classNode: ClassNode };
const EDGE_TYPES: EdgeTypes = { umlEdge: UMLEdge }; 

interface CanvasProps {
  classes: UMLClass[];
  relations: UMLRelation[];
  selectedClassId: string | null;
  onSelectClass: (id: string) => void;
  onUpdatePosition: (id: string, position: { x: number; y: number }) => void;
  onAddRelation: (sourceId: string, targetId: string) => void;
}

export function Canvas({
  classes,
  relations,
  selectedClassId,
  onSelectClass,
  onUpdatePosition,
  onAddRelation,
}: CanvasProps) {

  // On recalcule les nœuds à CHAQUE changement de classes
  // useMemo évite de recalculer si classes n'a pas changé
  const nodes: Node[] = useMemo(() =>
    classes.map(cls => ({
      id: cls.id,
      type: 'classNode',
      position: cls.position,
      selected: cls.id === selectedClassId,
      data: {
        umlClass: cls,
        onSelect: onSelectClass,
      },
    })),
    // Ces valeurs dans le tableau déclenchent un recalcul si elles changent
    [classes, selectedClassId, onSelectClass]
  );

  // On recalcule les edges à chaque changement de relations
  const edges: Edge[] = useMemo(() =>
  relations.map(rel => ({
    id: rel.id,
    source: rel.source,
    target: rel.target,
    type: 'umlEdge',        
    data: { relation: rel },
    // Cardinalités aux deux bouts
    sourceHandle: null,
    targetHandle: null,
    label: rel.sourceLabel && rel.targetLabel
      ? `${rel.sourceLabel}        ${rel.targetLabel}`
      : undefined,
    labelStyle: { fontSize: 11, fill: '#6b7280' },
    labelBgStyle: { fill: 'transparent' },
    // Style selon le type
    style: rel.type === 'heritage'
      ? { strokeDasharray: '6 3', stroke: '#6b7280' }
      : { stroke: '#374151' },
  })),
  [relations]
);

  // Quand on connecte deux nœuds avec la souris
  const onConnect = useCallback((connection: Connection) => {
    if (connection.source && connection.target) {
      onAddRelation(connection.source, connection.target);
    }
  }, [onAddRelation]);

  // Quand on arrête de déplacer un nœud
  const onNodeDragStop = useCallback((_event: React.MouseEvent, node: Node) => {
  onUpdatePosition(node.id, node.position);
}, [onUpdatePosition]);

  return (
    <div className="canvas">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        onConnect={onConnect}
        onNodeDragStop={onNodeDragStop}
        // On désactive le state interne de ReactFlow pour les nœuds
        // car on gère nous-mêmes l'état dans notre store
        onNodesChange={() => {}}
        onEdgesChange={() => {}}
        fitView
      >
        <Background color="#e5e7eb" gap={20} />
        <Controls />
        <MiniMap
          nodeColor={n => {
            const cls = (n.data as { umlClass: UMLClass }).umlClass;
            return cls?.color ?? '#6B4EFF';
          }}
        />
      </ReactFlow>

      {/* Légende */}
      <div className="canvas__legend">
        <div className="canvas__legend-item">
          <svg width="32" height="12">
            <line x1="0" y1="6" x2="24" y2="6" stroke="#374151" strokeWidth="1.5"/>
            <path d="M 16 2 L 24 6 L 16 10" fill="none" stroke="#374151" strokeWidth="1.5"/>
          </svg>
          <span>Association</span>
        </div>
        <div className="canvas__legend-item">
          <svg width="32" height="12">
            <line x1="0" y1="6" x2="22" y2="6" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4 2"/>
            <path d="M 12 2 L 22 6 L 12 10 Z" fill="white" stroke="#6b7280" strokeWidth="1.5"/>
          </svg>
          <span>Héritage</span>
        </div>
        <div className="canvas__legend-item">
          <svg width="32" height="12">
            <line x1="12" y1="6" x2="32" y2="6" stroke="#374151" strokeWidth="1.5"/>
            <path d="M 0 6 L 6 2 L 12 6 L 6 10 Z" fill="#374151"/>
          </svg>
          <span>Composition</span>
        </div>
        <div className="canvas__legend-item">
            <svg width="32" height="12">
            <line x1="12" y1="6" x2="32" y2="6" stroke="#374151" strokeWidth="1.5"/>
            <path d="M 0 6 L 6 2 L 12 6 L 6 10 Z" fill="white" stroke="#374151" strokeWidth="1.5"/>
          </svg>
          <span>Agrégation</span>
        </div>
      </div>
    </div>
  );
}