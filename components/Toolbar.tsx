"use client"
import { MousePointer2, Move, Square, Minus, Trash2, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import './Toolbar.css';

const TOOLS = [
  { id: 'select', icon: MousePointer2, label: 'Sélectionner' },
  { id: 'move',   icon: Move,          label: 'Déplacer' },
  { id: 'rect',   icon: Square,        label: 'Rectangle' },
  { id: 'line',   icon: Minus,         label: 'Ligne' },
  { id: 'delete', icon: Trash2,        label: 'Supprimer' },
  { id: 'undo',   icon: RotateCcw,     label: 'Annuler' },
];

export function Toolbar() {
  const [activeTool, setActiveTool] = useState('select');

  return (
    <div className="toolbar">
      {TOOLS.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          title={label}
          onClick={() => setActiveTool(id)}
          className={`toolbar__btn ${activeTool === id ? 'toolbar__btn--active' : ''}`}
        >
          <Icon size={16} />
        </button>
      ))}
    </div>
  );
}