import { relations } from "@/data/mldData";

export default function RelationsSection() {
  return (
    <div style={{
      backgroundColor: "white",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      overflow: "hidden",
      marginTop: "16px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
    }}>
      <div style={{
        backgroundColor: "#f9fafb",
        borderBottom: "1px solid #e5e7eb",
        padding: "8px 12px",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}>
        <span style={{color:"#6366f1"}}>✎</span>
        <span style={{color:"#374151", fontWeight:"700", fontSize:"13px"}}>
          Relations et contraintes d&apos;intégrité
        </span>
      </div>

      {/* En-têtes */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 80px 40px 1fr 1fr",
        padding: "6px 12px",
        borderBottom: "1px solid #f3f4f6",
        fontSize: "9px",
        color: "#9ca3af",
        textTransform: "uppercase",
        letterSpacing: "0.08em"
      }}>
        <span>Table</span>
        <span>Card.</span>
        <span></span>
        <span>Cible</span>
        <span>Contrainte</span>
      </div>

      {relations.map((rel, index) => (
        <div
          key={index}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 80px 40px 1fr 1fr",
            padding: "6px 12px",
            borderBottom: "1px solid #f9fafb",
            alignItems: "center",
            fontSize: "10px"
          }}
        >
          <span style={{color:"#6366f1", fontWeight:"500"}}>{rel.fromTable}</span>
          <span style={{color:"#6b7280"}}>{rel.cardLeft}</span>
          <span style={{color:"#9ca3af", textAlign:"center"}}>→</span>
          <span style={{color:"#3b82f6"}}>{rel.cardRight} &nbsp; {rel.toTable}</span>
          <span style={{color:"#6b7280"}}>{rel.constraint}</span>
        </div>
      ))}
    </div>
  );
}