"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
// 1. Remplacer Lucide par les icônes Bootstrap
import { BsArrowLeft, BsDownload, BsCheckLg } from "react-icons/bs";
import './Navbar.css';

interface NavbarProps {
  projectName: string;
  onProjectNameChange: (name: string) => void;
}

export function Navbar({ projectName, onProjectNameChange }: NavbarProps) {
  const router = useRouter();

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Image
          src="/Logo.jpeg"
          alt="UMLStudio logo"
          width={36}
          height={36}
          style={{ borderRadius: '8px', objectFit: 'cover' }}
          priority
        />
        <span className="navbar__logo-text">UMLStudio</span>
      </div>

      <input
        className="navbar__project-name"
        value={projectName}
        onChange={e => onProjectNameChange(e.target.value)}
      />

      <div className="navbar__actions">
        {/* Bouton Retour */}
        <button
          className="btn btn--secondary"
          onClick={() => router.push('/dashboard')}
        >
          <BsArrowLeft size={14} /> Retour
        </button>

        {/* Bouton Sauvegardé */}
        <button className="btn btn--saved">
          <BsCheckLg size={14} /> Sauvegardé
        </button>

        {/* 2. Ajout de l'événement onClick pour naviguer vers la page d'exportation */}
        <button 
          className="btn btn--secondary"
          onClick={() => router.push('/export')}
        >
          <BsDownload size={14} /> Exporter
        </button>

        <div className="navbar__avatar">MN</div>
      </div>
    </header>
  );
}
