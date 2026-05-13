const legendItems = [
  { label: "Clé primaire (PK)", color: "background:#fef9c3; border:1px solid #ca8a04" },
  { label: "Clé étrangère (FK)", color: "background:#dbeafe; border:1px solid #3b82f6" },
  { label: "NOT NULL", color: "background:#f3f4f6; border:1px solid #9ca3af" },
  { label: "UNIQUE", color: "background:#f3e8ff; border:1px solid #a855f7" },
];

export default function MldLegend() {
  return (
    <div style={{
      backgroundColor: "white",
      borderBottom: "1px solid #e5e7eb",
      padding: "6px 16px",
      display: "flex",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap"
    }}>
      <span style={{color:"#9ca3af", fontSize:"9px", textTransform:"uppercase", letterSpacing:"0.08em"}}>
        Légende :
      </span>
      {legendItems.map((item) => (
        <div key={item.label} style={{display:"flex", alignItems:"center", gap:"6px"}}>
          <span style={{
            width:"12px", height:"12px", borderRadius:"2px",
            display:"inline-block", ...Object.fromEntries(
              item.color.split(";").map(s => {
                const [k, v] = s.split(":");
                return [k.trim() === "background" ? "backgroundColor" : k.trim(), v?.trim()];
              })
            )
          }} />
          <span style={{color:"#6b7280", fontSize:"10px"}}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}