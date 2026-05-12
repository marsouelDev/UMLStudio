
const legendItems = [
  {
    label: "Clé primaire (PK)",
    color: "bg-yellow-900 border border-yellow-600",
  },
  {
    label: "Clé étrangère (FK)",
    color: "bg-blue-900 border border-blue-600",
  },
  {
    label: "NOT NULL",
    color: "bg-gray-700 border border-gray-500",
  },
  {
    label: "UNIQUE",
    color: "bg-purple-900 border border-purple-600",
  },
];

export default function MldLegend() {
  return (
    <div className="bg-[#14142a] border-b border-[#2a2a4a] px-4 py-2 flex items-center gap-5 flex-wrap">

      <span className="text-[#666] text-[9px] uppercase tracking-widest">
        Légende :
      </span>

      {legendItems.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-sm inline-block ${item.color}`} />
          <span className="text-[#888] text-[10px]">{item.label}</span>
        </div>
      ))}

    </div>
  );
}