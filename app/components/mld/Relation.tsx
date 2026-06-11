import { Relation } from "@/data/mldData";

type Props = {
  relations: Relation[];
};

export default function RelationsSection({ relations }: Props) {
  return (
    <div style={{
      backgroundColor: "white",
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      overflow: "hidden",
      marginTop: "16px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
        borderBottom: "1px solid #e5e7eb",
        padding: "10px 14px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}>
        <span style={{ color: "#6366f1", fontSize: "14px" }}>✎</span>
        <span style={{ color: "#111827", fontWeight: "700", fontSize: "13px" }}>
          Relations et contraintes d&apos;intégrité
        </span>
      </div>

      {/* En-têtes colonnes */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 80px 40px 1fr 1fr",
        padding: "6px 14px",
        borderBottom: "1px solid #f3f4f6",
        fontSize: "9px",
        color: "#9ca3af",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        backgroundColor: "#fafafa",
      }}>
        <span>Table</span>
        <span>Card.</span>
        <span />
        <span>Cible</span>
        <span>Contrainte</span>
      </div>

      {/* Lignes */}
      {relations.map((rel, index) => (
        <div
          key={index}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 80px 40px 1fr 1fr",
            padding: "7px 14px",
            borderBottom: "1px solid #f3f4f6",
            alignItems: "center",
            fontSize: "11px",
            backgroundColor: index % 2 === 0 ? "white" : "#fafafa",
          }}
        >
          <span style={{ color: "#6366f1", fontWeight: "500" }}>{rel.fromTable}</span>
          <span style={{ color: "#6b7280" }}>{rel.cardLeft}</span>
          <span style={{ color: "#9ca3af", textAlign: "center" }}>→</span>
          <span style={{ color: "#3b82f6" }}>{rel.cardRight}&nbsp;&nbsp;{rel.toTable}</span>
          <span style={{ color: "#6b7280" }}>{rel.constraint}</span>
        </div>
      ))}
    </div>
  );
}