"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Download, Check, Save, Loader2, ArrowLeft } from 'lucide-react'
import './Navbar.css'

interface NavbarProps {
  projectId?: string
  projectName: string
  onProjectNameChange?: (name: string) => void
  onSave?: () => void
  isSaving?: boolean
  isSaved?: boolean
}

function Navbar({
  projectName,
  onProjectNameChange,
  onSave,
  isSaving = false,
  isSaved = false
}: NavbarProps) {
  return (
    <header className="navbar">
      <div className="navbar__left">
        <Link href="/dashboard" className="navbar__back-btn" title="Retour au dashboard">
          <ArrowLeft size={18} />
          <span>Retour</span>
        </Link>

        <Link href="/dashboard" className="navbar__logo">
          <Image
            src="/Logo.jpeg"
            alt="UMLStudio logo"
            width={32}
            height={32}
            style={{ borderRadius: "6px", objectFit: "cover" }}
            priority
          />
          <span className="navbar__logo-text">
            <span className="navbar__logo-dark">UML</span>
            <span className="navbar__logo-accent">Studio</span>
          </span>
        </Link>
      </div>

      <input
        className="navbar__project-name"
        value={projectName}
        onChange={e => onProjectNameChange?.(e.target.value)}
        placeholder="Nom du projet"
      />

      <div className="navbar__actions">
        {onSave && (
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
            {isSaving ? 'Sauvegarde...' : 'Sauvegarder'}
          </button>
        )}

        <button className="btn btn--secondary">
          <Download size={14} /> Exporter
        </button>

        <div className="navbar__avatar">MN</div>
      </div>
    </header>
  )
}

export default Navbar
export { Navbar }