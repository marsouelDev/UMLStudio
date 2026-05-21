// components/sql/StatsBar.tsx
import { Stat } from "@/data/sqlData";

interface Props {
  stats: Stat[];
}

export default function StatsBar({ stats }: Props) {
  return (
    <div className="flex gap-3 px-4 py-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex-1 bg-white border border-gray-200 rounded px-3 py-2"
        >
          <div className="text-gray-500 text-[9px] uppercase tracking-widest mb-1">
            {stat.label}
          </div>
          <div className="text-black font-bold text-sm">
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
}
