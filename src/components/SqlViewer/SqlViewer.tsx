import { useState } from 'react'
import { SQL_LINES, highlight } from '../../data/sqlLines'
import './SqlViewer.css'

interface Stat {
  label: string
  value: string
}

const STATS: Stat[] = [
  { label: 'Tables',   value: '6'       },
  { label: 'Colonnes', value: '29'      },
  { label: 'Clés FK',  value: '5'       },
  { label: 'Moteur',   value: 'InnoDB'  },
  { label: 'Encodage', value: 'utf8mb4' },
]

export default function SqlViewer(): JSX.Element {
  const [copyLabel, setCopyLabel] = useState<string>('📋 Copier tout')

  function copyAll(): void {
    navigator.clipboard.writeText(SQL_LINES.join('\n')).then(() => {
      setCopyLabel('✅ Copié !')
      setTimeout(() => setCopyLabel('📋 Copier tout'), 2000)
    })
  }

  function downloadSQL(): void {
    const a: HTMLAnchorElement = document.createElement('a')
    a.href = 'data:text/sql;charset=utf-8,' + encodeURIComponent(SQL_LINES.join('\n'))
    a.download = 'uml_ecommerce.sql'
    a.click()
  }

  return (
    <div className="sql-viewer">

      {/* Stats */}
      <div className="stats-bar">
        {STATS.map((s: Stat) => (
          <div key={s.label} className="stat-chip">
            <span className="stat-label">{s.label}</span>
            <span className="stat-value">{s.value}</span>
          </div>
        ))}
      </div>

      {/* Status */}
      <div className="sql-status">
        <div className="sql-indicator">
          <div className="dot" />
          <span className="sql-engine">MySQL 8.0</span>
          <span className="sql-label">— CREATE TABLE</span>
        </div>
        <div className="action-group">
          <button className="action-btn action-btn-outline" onClick={copyAll}>
            {copyLabel}
          </button>
          <button className="action-btn action-btn-outline" onClick={downloadSQL}>
            ⬇ Télécharger .sql
          </button>
          <button className="action-btn action-btn-success">
            🔴 Exporter PDF
          </button>
        </div>
      </div>

      {/* Code */}
      <div className="editor">
        <table className="code-table">
          <tbody>
            {SQL_LINES.map((line: string, i: number) => (
              <tr key={i} className="line-row">
                <td className="line-num">{i + 1}</td>
                <td
                  className="line-code"
                  dangerouslySetInnerHTML={{ __html: highlight(line) }}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}
