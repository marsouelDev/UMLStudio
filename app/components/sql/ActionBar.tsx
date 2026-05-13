// src/components/sql/ActionBar.tsx

import { sqlInfo, sqlCode } from "@/data/sqlData";

export default function ActionBar() {

  // ─── Copy to clipboard ──────────────────────
  const handleCopy = () => {
    navigator.clipboard.writeText(sqlCode);
  };

  // ─── Download .sql file ─────────────────────
  const handleDownload = () => {
    const blob = new Blob([sqlCode], { type: "text/plain" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = "script.sql";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#0f0f26] border-b border-[#2a2a4a]">

      {/* Left — engine info */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
        <span className="text-[#888] text-xs font-mono">
          {sqlInfo.engine} — {sqlInfo.label}
        </span>
      </div>

      {/* Right — action buttons */}
      <div className="flex items-center gap-2">

        {/* Copy */}
        <button
          onClick={handleCopy}
          className="text-[10px] font-mono px-3 py-1.5 rounded border border-[#2a2a4a] bg-[#12122a] text-[#888] hover:text-[#ccc] hover:border-[#4444aa] transition-colors"
        >
          📋 Copier tout
        </button>

        {/* Download */}
        <button
          onClick={handleDownload}
          className="text-[10px] font-mono px-3 py-1.5 rounded border border-[#2a2a4a] bg-[#12122a] text-[#888] hover:text-[#ccc] hover:border-[#4444aa] transition-colors"
        >
          ↓ Télécharger .sql
        </button>

        {/* Export PDF — no logic yet, Phase 3 */}
        <button
          className="text-[10px] font-mono px-3 py-1.5 rounded border border-green-800 bg-green-950 text-green-400 hover:bg-green-900 transition-colors"
        >
          ↑ Exporter PDF
        </button>

      </div>
    </div>
  );
}