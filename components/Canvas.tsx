// src/components/Canvas.tsx
"use client"
import { useCallback, useMemo, useState, useRef } from 'react';
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

const LEGEND_ITEMS = [
  {
    type: 'association',
    label: 'Association',
    svg: (
      <svg width="36" height="16" viewBox="0 0 36 16">
        <line x1="0" y1="8" x2="26" y2="8" stroke="#374151" strokeWidth="1.8"/>
        <path d="M 16 4 L 26 8 L 16 12" fill="none" stroke="#374151" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    type: 'heritage',
    label: 'Héritage',
    svg: (
      <svg width="36" height="16" viewBox="0 0 36 16">
        <line x1="0" y1="8" x2="24" y2="8" stroke="#6b7280" strokeWidth="1.8" strokeDasharray="4 2"/>
        <path d="M 14 4 L 24 8 L 14 12 Z" fill="white" stroke="#6b7280" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    type: 'composition',
    label: 'Composition',
    svg: (
      <svg width="36" height="16" viewBox="0 0 36 16">
        <line x1="14" y1="8" x2="36" y2="8" stroke="#374151" strokeWidth="1.8"/>
        <path d="M 0 8 L 7 4 L 14 8 L 7 12 Z" fill="#374151"/>
      </svg>
    ),
  },
  {
    type: 'agregation',
    label: 'Agrégation',
    svg: (
      <svg width="36" height="16" viewBox="0 0 36 16">
        <line x1="14" y1="8" x2="36" y2="8" stroke="#374151" strokeWidth="1.8"/>
        <path d="M 0 8 L 7 4 L 14 8 L 7 12 Z" fill="white" stroke="#374151" strokeWidth="1.8"/>
      </svg>
    ),
  },
];

export function Canvas({
  classes,
  relations,
  selectedClassId,
  onSelectClass,
  onUpdatePosition,
  onAddRelation,
}: CanvasProps) {
  const [hoveredLegend, setHoveredLegend] = useState<string | null>(null);
  const [legendExpanded, setLegendExpanded] = useState(true);
  const [legendPos, setLegendPos] = useState({ x: 24, y: -1 });
  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  const onLegendMouseDown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    dragging.current = true;
    dragOffset.current = {
      x: e.clientX - legendPos.x,
      y: e.clientY - (legendPos.y === -1
        ? (canvasRef.current?.getBoundingClientRect().bottom ?? 0) - 24 - 160
        : legendPos.y),
    };

    const onMouseMove = (ev: MouseEvent) => {
      if (!dragging.current) return;
      const canvas = canvasRef.current?.getBoundingClientRect();
      if (!canvas) return;
      const newX = Math.max(0, Math.min(ev.clientX - dragOffset.current.x, canvas.width - 200));
      const newY = Math.max(0, Math.min(ev.clientY - dragOffset.current.y, canvas.height - 40));
      setLegendPos({ x: newX, y: newY });
    };

    const onMouseUp = () => {
      dragging.current = false;
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }, [legendPos]);

  const nodes: Node[] = useMemo(() =>
    classes.map(cls => ({
      id: cls.id,
      type: 'classNode',
      position: cls.position,
      selected: cls.id === selectedClassId,
      data: { umlClass: cls, onSelect: onSelectClass },
    })),
    [classes, selectedClassId, onSelectClass]
  );

  const edges: Edge[] = useMemo(() =>
    relations.map(rel => ({
      id: rel.id,
      source: rel.source,
      target: rel.target,
      type: 'umlEdge',
      data: { relation: rel },
      sourceHandle: null,
      targetHandle: null,
      label: rel.sourceLabel && rel.targetLabel
        ? `${rel.sourceLabel}        ${rel.targetLabel}`
        : undefined,
      labelStyle: { fontSize: 11, fill: '#6b7280' },
      labelBgStyle: { fill: 'transparent' },
      style: rel.type === 'heritage'
        ? { strokeDasharray: '6 3', stroke: '#6b7280' }
        : { stroke: '#374151' },
    })),
    [relations]
  );

  const onConnect = useCallback((connection: Connection) => {
    if (connection.source && connection.target) {
      onAddRelation(connection.source, connection.target);
    }
  }, [onAddRelation]);

  const onNodeDragStop = useCallback((_event: React.MouseEvent, node: Node) => {
    onUpdatePosition(node.id, node.position);
  }, [onUpdatePosition]);

  const legendStyle: React.CSSProperties = legendPos.y === -1
    ? { left: legendPos.x, bottom: 24 }
    : { left: legendPos.x, top: legendPos.y };

  return (
    <div className="canvas" ref={canvasRef}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        onConnect={onConnect}
        onNodeDragStop={onNodeDragStop}
        onNodesChange={() => {}}
        onEdgesChange={() => {}}
        attributionPosition="bottom-right"
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

      {/* Légende draggable */}
      <div
        style={{
          position: 'absolute',
          ...legendStyle,
          zIndex: 10,
          background: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          minWidth: '185px',
          userSelect: 'none',
        }}
      >
        {/* Header — zone de drag */}
        <div
          onMouseDown={onLegendMouseDown}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '9px 14px',
            background: '#f9fafb',
            borderBottom: legendExpanded ? '1px solid #f3f4f6' : 'none',
            cursor: 'grab',
            fontSize: '11px',
            fontWeight: '600',
            color: '#6b7280',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <svg width="10" height="14" viewBox="0 0 10 14" fill="#9ca3af">
              <circle cx="2" cy="2" r="1.5"/>
              <circle cx="8" cy="2" r="1.5"/>
              <circle cx="2" cy="7" r="1.5"/>
              <circle cx="8" cy="7" r="1.5"/>
              <circle cx="2" cy="12" r="1.5"/>
              <circle cx="8" cy="12" r="1.5"/>
            </svg>
            <span>Légende</span>
          </div>

          <button
            onMouseDown={e => e.stopPropagation()}
            onClick={() => setLegendExpanded(p => !p)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#9ca3af',
              padding: '0',
              fontSize: '13px',
              lineHeight: 1,
              transform: legendExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
              transition: 'transform 0.25s',
            }}
          >
            ▾
          </button>
        </div>

        {/* Items */}
        <div style={{
          maxHeight: legendExpanded ? '300px' : '0',
          opacity: legendExpanded ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease',
        }}>
          {LEGEND_ITEMS.map(item => (
            <div
              key={item.type}
              onMouseEnter={() => setHoveredLegend(item.type)}
              onMouseLeave={() => setHoveredLegend(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 14px',
                background: hoveredLegend === item.type ? '#f5f3ff' : 'transparent',
                borderLeft: hoveredLegend === item.type
                  ? '3px solid #6B4EFF'
                  : '3px solid transparent',
                transition: 'all 0.15s ease',
                cursor: 'default',
              }}
            >
              <div style={{
                transform: hoveredLegend === item.type ? 'scale(1.12)' : 'scale(1)',
                transition: 'transform 0.15s ease',
                display: 'flex',
                alignItems: 'center',
              }}>
                {item.svg}
              </div>
              <span style={{
                fontSize: '12px',
                fontWeight: hoveredLegend === item.type ? '600' : '400',
                color: hoveredLegend === item.type ? '#4c1d95' : '#374151',
                transition: 'all 0.15s ease',
                whiteSpace: 'nowrap',
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}