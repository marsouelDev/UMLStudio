// src/components/sql/StatsBar.tsx

import { sqlStats } from "@/data/sqlData";

export default function StatsBar() {
  return (
    <div className="flex gap-3 px-4 py-3">
      {sqlStats.map((stat) => (
        <div
          key={stat.label}
          className="flex-1 bg-[#12122a] border border-[#2a2a4a] rounded px-3 py-2"
        >
          {/* Label */}
          <div className="text-[#666] text-[9px] uppercase tracking-widest mb-1">
            {stat.label}
          </div>

          {/* Value */}
          <div className="text-[#aaaaee] font-bold text-sm">
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
}