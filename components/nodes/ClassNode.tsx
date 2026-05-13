"use client"
import { Handle, Position } from '@xyflow/react';
import { UMLClass } from '../../types/uml';
import './ClassNode.css';

interface ClassNodeProps {
  data: {
    umlClass: UMLClass;
    onSelect: (id: string) => void;
  };
  selected: boolean;
}

const visibilitySymbol = (v: string) =>
  v === 'public' ? '+' : v === 'private' ? '-' : '#';

export function ClassNode({ data, selected }: ClassNodeProps) {
  const { umlClass, onSelect } = data;

  return (
    <div
      onClick={() => onSelect(umlClass.id)}
      className={`class-node ${selected ? 'class-node--selected' : ''}`}
      style={{ borderColor: selected ? umlClass.color : 'transparent' }}
    >
      <Handle type="target" position={Position.Top}    className="class-node__handle" />
      <Handle type="source" position={Position.Bottom} className="class-node__handle" />
      <Handle type="source" position={Position.Left}   className="class-node__handle" />
      <Handle type="source" position={Position.Right}  className="class-node__handle" />

      <div className="class-node__header" style={{ background: umlClass.color }}>
        {umlClass.stereotype && (
          <span className="class-node__stereotype">«{umlClass.stereotype}»</span>
        )}
        <span className="class-node__name">{umlClass.name}</span>
      </div>

      <div className="class-node__section">
        {umlClass.attributes.length === 0 ? (
          <span className="class-node__empty">Aucun attribut</span>
        ) : (
          umlClass.attributes.map(attr => (
            <div key={attr.id} className="class-node__row">
              <span className="class-node__visibility">{visibilitySymbol(attr.visibility)}</span>
              <span className="class-node__member-name">{attr.name}</span>
              <span className="class-node__member-type">: {attr.type}</span>
            </div>
          ))
        )}
      </div>

      <div className="class-node__divider" />

      <div className="class-node__section">
        {umlClass.methods.length === 0 ? (
          <span className="class-node__empty">Aucune méthode</span>
        ) : (
          umlClass.methods.map(method => (
            <div key={method.id} className="class-node__row">
              <span className="class-node__visibility">{visibilitySymbol(method.visibility)}</span>
              <span className="class-node__member-name">{method.name}</span>
              <span className="class-node__member-type">(): {method.returnType}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}