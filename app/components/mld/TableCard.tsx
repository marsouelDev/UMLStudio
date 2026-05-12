import { Table, BadgeType } from "@/data/mldData";

const badgeStyles: Record<BadgeType, string> = {
  PK:   "bg-yellow-900 border border-yellow-600 text-yellow-300",
  FK:   "bg-blue-900   border border-blue-600   text-blue-300",
  NN:   "bg-gray-700   border border-gray-500   text-gray-300",
  UQ:   "bg-purple-900 border border-purple-600 text-purple-300",
  NULL: "bg-gray-800   border border-gray-600   text-gray-500",
};

const rowBackground = (badges: BadgeType[]) => {
  if (badges.includes("PK")) return "bg-yellow-950";
  if (badges.includes("FK")) return "bg-blue-950";
  return "";
};

const rowIcon = (badges: BadgeType[]) => {
  if (badges.includes("PK")) return <span className="text-yellow-400 text-xs">🔑</span>;
  if (badges.includes("FK")) return <span className="text-blue-400  text-xs">🔗</span>;
  return <span className="w-4 inline-block" />;
};

type Props = {
  table: Table;
};

export default function TableCard({ table }: Props) {
  return (
    <div className="bg-[#12122a] border border-[#2a2a4a] rounded text-xs overflow-hidden">

      <div className="bg-[#1a1a40] border-b border-[#2a2a4a] px-3 py-2 flex justify-between items-center">
        <span className="font-bold text-[#aaaaee] text-sm">{table.name}</span>
        <span className="text-[#555] text-[10px]">
          {table.columns.length} colonnes
          {table.meta && (
            <span className="ml-2 text-[#6688aa]">· {table.meta}</span>
          )}
        </span>
      </div>

      {table.columns.map((col) => (
        <div
        key={col.name}
        className={`flex items-center gap-2 px-3 py-1 border-b border-[#1a1a33]
        last:border-none ${rowBackground(col.badges)}`}>
          <span className="w-4 flex-shrink-0">{rowIcon(col.badges)}</span>

          <span className={`flex-1 ${
            col.badges.includes("PK") ? "text-yellow-200" :
            col.badges.includes("FK") ? "text-blue-200"   :"text-gray-300"}`}>
            {col.name}
            {col.fkTarget && (
              <span className="text-[#4488aa] ml-1 text-[9px]">→{col.fkTarget}</span>
            )}
          </span>

          <span className="text-[#555] text-[10px] min-w-[80px] text-right">
            {col.type}
          </span>

          <div className="flex gap-1">
            {col.badges.map((badge) => (
              <span key={badge} className={`text-[8px] px-1 py-0.5 rounded font-bold ${badgeStyles[badge]}`}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}