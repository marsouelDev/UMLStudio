"use client"
import { ArrowLeft, Download, Check } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  projectName: string;
  onProjectNameChange: (name: string) => void;
}

export function Navbar({ projectName, onProjectNameChange }: NavbarProps) {
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
        <button className="btn btn--secondary">
          <ArrowLeft size={14} /> Retour
        </button>
        <button className="btn btn--saved">
          <Check size={14} /> Sauvegardé
        </button>
        <button className="btn btn--secondary">
          <Download size={14} /> Exporter
        </button>
        <div className="navbar__avatar">MN</div>
      </div>
    </header>
  );
}