// src/components/SaveModal.tsx
"use client"
import { useState } from 'react'
import { X, Save } from 'lucide-react'
import './SaveModal.css'

interface SaveModalProps {
  onSave: (name: string) => void
  onClose: () => void
  isSaving: boolean
}

export function SaveModal({ onSave, onClose, isSaving }: SaveModalProps) {
  const [name, setName] = useState('')

  function handleSubmit() {
    if (name.trim() === '') return
    onSave(name.trim())
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>

        <div className="modal__header">
          <h2 className="modal__title">Nommer le diagramme</h2>
          <button className="modal__close" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <div className="modal__body">
          <label className="modal__label">Nom du diagramme</label>
          <input
            className="modal__input"
            placeholder="ex: Système e-commerce"
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            autoFocus
          />
        </div>

        <div className="modal__footer">
          <button className="modal__btn-cancel" onClick={onClose}>
            Annuler
          </button>
          <button
            className="modal__btn-save"
            onClick={handleSubmit}
            disabled={name.trim() === '' || isSaving}
          >
            <Save size={14} />
            {isSaving ? 'Sauvegarde...' : 'Sauvegarder'}
          </button>
        </div>

      </div>
    </div>
  )
}