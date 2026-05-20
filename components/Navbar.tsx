// src/components/Navbar.tsx
"use client"
import { Download, Check, Save, Loader2 } from 'lucide-react'
import './Navbar.css'

interface NavbarProps {
  projectName: string
  onProjectNameChange: (name: string) => void
  onSave: () => void
  isSaving: boolean
  isSaved: boolean   // true = déjà sauvegardé en base
}

export function Navbar({
  projectName, onProjectNameChange,
  onSave, isSaving, isSaved
}: NavbarProps) {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <div className="navbar__logo-icon">U</div>
        <span className="navbar__logo-text">UMLStudio</span>
      </div>

      <input
        className="navbar__project-name"
        value={projectName}
        onChange={e => onProjectNameChange(e.target.value)}
      />

      <div className="navbar__actions">
        <button
          className={`btn ${isSaved ? 'btn--saved' : 'btn--unsaved'}`}
          onClick={onSave}
          disabled={isSaving}
        >
          {isSaving
            ? <Loader2 size={14} className="spin" />
            : isSaved
              ? <Check size={14} />
              : <Save size={14} />
          }
          {isSaving ? 'Sauvegarde...' : isSaved ? 'Sauvegarder' : 'Sauvegarder'}
        </button>

        <button className="btn btn--secondary">
          <Download size={14} /> Exporter
        </button>

        <div className="navbar__avatar">MN</div>
      </div>
    </header>
  )
}