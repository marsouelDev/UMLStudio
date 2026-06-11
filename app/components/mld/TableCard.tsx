import { Table, BadgeType } from "@/data/mldData";
import { BsKey, BsLink45Deg, BsTable } from "react-icons/bs";

const badgeStyles: Record<BadgeType, string> = {
  PK:   "bg-yellow-100 border border-yellow-400 text-yellow-700",
  FK:   "bg-blue-100   border border-blue-400   text-blue-700",
  NN:   "bg-gray-100   border border-gray-400   text-gray-600",
  UQ:   "bg-purple-100 border border-purple-400 text-purple-700",
  NULL: "bg-gray-50    border border-gray-300   text-gray-400",
};

const rowBackground = (badges: BadgeType[]) => {
  if (badges.includes("PK")) return "bg-yellow-50";
  if (badges.includes("FK")) return "bg-blue-50";
  return "bg-white";
};

const rowIcon = (badges: BadgeType[]) => {
  if (badges.includes("PK")) {
    return <BsKey size={13} style={{ color: "#ca8a04", transform: "rotate(-45deg)" }} />;
  }
  if (badges.includes("FK")) {
    return <BsLink45Deg size={15} style={{ color: "#3b82f6" }} />;
  }
  return <div style={{ width: "16px" }} />;
};

type Props = { table: Table };

export default function TableCard({ table }: Props) {
  return (
    <div style={{
      backgroundColor: "white",
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
      fontSize: "12px",
    }}>
      {/* En-tête */}
      <div style={{
        background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
        borderBottom: "1px solid #e5e7eb",
        padding: "10px 14px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <BsTable size={13} style={{ color: "#6366f1" }} />
          <span style={{ fontWeight: "700", color: "#111827", fontSize: "13px" }}>
            {table.name}
          </span>
        </div>
        <span style={{ color: "#9ca3af", fontSize: "10px" }}>
          {table.columns.length} colonnes
          {table.meta && (
            <span style={{ color: "#6366f1", marginLeft: "6px" }}>· {table.meta}</span>
          )}
        </span>
      </div>

      {/* Colonnes */}
      {table.columns.map((col, idx) => (
        <div
          key={`${table.name}-col-${col.name}-${idx}`}
          className={rowBackground(col.badges)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px",
            borderBottom: "1px solid #f3f4f6",
          }}
        >
          <div style={{
            width: "16px", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {rowIcon(col.badges)}
          </div>

          <span style={{
            flex: 1,
            color: col.badges.includes("PK") ? "#92400e"
                 : col.badges.includes("FK") ? "#1d4ed8"
                 : "#374151",
            fontWeight: col.badges.includes("PK") ? "600" : "400",
          }}>
            {col.name}
            {col.fkTarget && (
              <span style={{ color: "#3b82f6", marginLeft: "4px", fontSize: "9px", fontWeight: "500" }}>
                ➔ {col.fkTarget}
              </span>
            )}
          </span>

          <span style={{ color: "#9ca3af", fontSize: "10px", minWidth: "80px", textAlign: "right" }}>
            {col.type}
          </span>

          <div style={{ display: "flex", gap: "3px" }}>
            {col.badges.map((badge, bIdx) => (
              <span
                key={`${col.name}-${badge}-${bIdx}`}
                className={`text-[8px] px-1 py-0.5 rounded font-bold ${badgeStyles[badge]}`}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}