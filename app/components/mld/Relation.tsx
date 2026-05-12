// src/components/mld/RelationsSection.tsx

import { relations } from "@/data/mldData";

export default function RelationsSection() {
  return (
    <div className="bg-[#12122a] border border-[#2a2a4a] rounded overflow-hidden mt-3">

      <div className="bg-[#1a1a40] border-b border-[#2a2a4a] px-3 py-2 flex items-center gap-2">
        <span className="text-[#5555aa]">✎</span>
        <span className="text-[#aaaaee] font-bold text-sm">
          Relations et contraintes d'intégrité
        </span>
      </div>

      <div className="grid grid-cols-5 px-3 py-1 border-b border-[#222244] text-[9px] text-[#555] uppercase tracking-widest">
        <span>Table</span>
        <span>Card.</span>
        <span></span>
        <span>Cible</span>
        <span>Contrainte</span>
      </div>

      {relations.map((rel, index) => (
        <div
          key={index}
          className="grid grid-cols-5 px-3 py-1 border-b border-[#1a1a33] last:border-none items-center text-[10px]"
        >
          <span className="text-[#aaaaee]">{rel.fromTable}</span>
          <span className="text-[#666]">{rel.cardLeft}</span>
          <span className="text-[#4444aa] text-center">→</span>
          <span className="text-[#88ccee]">
            {rel.cardRight} &nbsp; {rel.toTable}
          </span>
          <span className="text-[#777]">{rel.constraint}</span>
        </div>
      ))}

    </div>
  );
}