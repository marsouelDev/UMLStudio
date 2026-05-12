import { useState } from 'react'
import './ExportModal.css'

type FormatId = 'PNG' | 'SVG' | 'PDF' | 'SQL'

interface Format {
  id: FormatId
  desc: string
  icon: React.ReactNode
}

interface Option {
  id: string
  label: string
}

interface OptionsState {
  legende: boolean
  fond: boolean
  filigrane: boolean
  [key: string]: boolean
}

interface ExportModalProps {
  onClose: () => void
}

const FORMATS: Format[] = [
  {
    id: 'PNG',
    desc: 'Image haute résolution',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
  },
  {
    id: 'SVG',
    desc: 'Vectoriel scalable',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="4"/>
        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/>
        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/>
      </svg>
    ),
  },
  {
    id: 'PDF',
    desc: 'Document imprimable',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    id: 'SQL',
    desc: 'Script CREATE TABLE',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
]

const OPTIONS: Option[] = [
  { id: 'legende',   label: 'Inclure la légende' },
  { id: 'fond',      label: 'Fond transparent'   },
  { id: 'filigrane', label: 'Filigrane'           },
]

export default function ExportModal({ onClose }: ExportModalProps) {
  const [selected, setSelected] = useState<FormatId>('PNG')
  const [options, setOptions] = useState<OptionsState>({
    legende: true,
    fond: false,
    filigrane: false,
  })
  const [downloaded, setDownloaded] = useState<boolean>(false)

  function toggleOption(id: string): void {
    setOptions(prev => ({ ...prev, [id]: !prev[id] }))
  }

  function handleDownload(): void {
    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 2000)
  }

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>): void {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">Exporter le diagramme</h2>
          <p className="modal-subtitle">Choisissez le format d'export souhaité</p>
        </div>

        <div className="format-grid">
          {FORMATS.map((f: Format) => (
            <div
              key={f.id}
              className={`format-card ${selected === f.id ? 'active' : ''}`}
              onClick={() => setSelected(f.id)}
            >
              <div className="format-icon">{f.icon}</div>
              <div>
                <div className="format-name">{f.id}</div>
                <div className="format-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="divider" />

        <div className="options-section">
          <p className="options-label">Options</p>
          <div className="options-list">
            {OPTIONS.map((opt: Option) => (
              <label key={opt.id} className="option-item">
                <input
                  type="checkbox"
                  checked={options[opt.id]}
                  onChange={() => toggleOption(opt.id)}
                />
                <div className="custom-check" />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        <div className="modal-actions">
          <button className="btn btn-ghost" onClick={onClose}>
            Annuler
          </button>
          <button
            className="btn btn-primary"
            onClick={handleDownload}
            style={downloaded ? { background: 'var(--success)' } : {}}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {downloaded
                ? <polyline points="20 6 9 17 4 12"/>
                : <>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </>
              }
            </svg>
            {downloaded ? 'Téléchargé !' : `Télécharger ${selected}`}
          </button>
        </div>
      </div>
    </div>
  )
}
