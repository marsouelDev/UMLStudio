// src/components/sql/StatsBar.tsx

import { sqlStats } from "@/data/sqlData";

export default function StatsBar() {
  return (
    <div className="flex gap-3 px-4 py-3">
      {sqlStats.map((stat) => (
        <div
          key={stat.label}
          /* Fond blanc (bg-white) et bordure grise claire (border-gray-200) */
          className="flex-1 bg-white border border-gray-200 rounded px-3 py-2"
        >
          {/* Label — Gris foncé pour rester lisible sur fond blanc */}
          <div className="text-gray-500 text-[9px] uppercase tracking-widest mb-1">
            {stat.label}
          </div>

          {/* Value — Changement en noir pur (text-black) */}
          <div className="text-black font-bold text-sm">
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
}
