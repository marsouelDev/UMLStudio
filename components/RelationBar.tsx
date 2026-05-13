"use client"
import { RelationType } from '../types/uml';
import './RelationBar.css';

interface RelationBarProps {
  activeType: RelationType;
  onTypeChange: (type: RelationType) => void;
  onAddClass: () => void;
}

const RELATION_TYPES: { type: RelationType; label: string }[] = [
  { type: 'association', label: 'Association' },
  { type: 'heritage',    label: 'Héritage' },
  { type: 'composition', label: 'Composition' },
  { type: 'agregation',  label: 'Agrégation' },
];

export function RelationBar({ activeType, onTypeChange, onAddClass }: RelationBarProps) {
  return (
    <div className="relation-bar">
      <span className="relation-bar__zoom">Zoom: 100% – +</span>

      <div className="relation-bar__types">
        {RELATION_TYPES.map(({ type, label }) => (
          <button
            key={type}
            onClick={() => onTypeChange(type)}
            className={`relation-bar__btn ${activeType === type ? 'relation-bar__btn--active' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>

      <button onClick={onAddClass} className="relation-bar__add">
        + Classe
      </button>
    </div>
  );
}