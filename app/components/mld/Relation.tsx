// import { relations } from "@/data/mldData";

// export default function RelationsSection() {
//   return (
//     <div style={{
//       backgroundColor: "white",
//       border: "1px solid #e5e7eb",
//       borderRadius: "8px",
//       overflow: "hidden",
//       marginTop: "16px",
//       boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
//     }}>
//       <div style={{
//         backgroundColor: "#f9fafb",
//         borderBottom: "1px solid #e5e7eb",
//         padding: "8px 12px",
//         display: "flex",
//         alignItems: "center",
//         gap: "8px"
//       }}>
//         <span style={{color:"#6366f1"}}>✎</span>
//         <span style={{color:"#374151", fontWeight:"700", fontSize:"13px"}}>
//           Relations et contraintes d&apos;intégrité
//         </span>
//       </div>

//       {/* En-têtes */}
//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "1fr 80px 40px 1fr 1fr",
//         padding: "6px 12px",
//         borderBottom: "1px solid #f3f4f6",
//         fontSize: "9px",
//         color: "#9ca3af",
//         textTransform: "uppercase",
//         letterSpacing: "0.08em"
//       }}>
//         <span>Table</span>
//         <span>Card.</span>
//         <span></span>
//         <span>Cible</span>
//         <span>Contrainte</span>
//       </div>

//       {relations.map((rel, index) => (
//         <div
//           key={index}
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 80px 40px 1fr 1fr",
//             padding: "6px 12px",
//             borderBottom: "1px solid #f9fafb",
//             alignItems: "center",
//             fontSize: "10px"
//           }}
//         >
//           <span style={{color:"#6366f1", fontWeight:"500"}}>{rel.fromTable}</span>
//           <span style={{color:"#6b7280"}}>{rel.cardLeft}</span>
//           <span style={{color:"#9ca3af", textAlign:"center"}}>→</span>
//           <span style={{color:"#3b82f6"}}>{rel.cardRight} &nbsp; {rel.toTable}</span>
//           <span style={{color:"#6b7280"}}>{rel.constraint}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

// src/components/mld/RelationsSection.tsx

import { Relation } from "@/data/mldData";

type Props = {
  relations: Relation[];
};

export default function RelationsSection({ relations }: Props) {
  return (
    <div className="bg-[#12122a] border border-[#2a2a4a] rounded overflow-hidden mt-3">

      {/* Header */}
      <div className="bg-[#1a1a40] border-b border-[#2a2a4a] px-3 py-2 flex items-center gap-2">
        <span className="text-[#5555aa]">✎</span>
        <span className="text-[#aaaaee] font-bold text-sm">
          Relations et contraintes d'intégrité
        </span>
      </div>

      {/* Column titles */}
      <div className="grid grid-cols-5 px-3 py-1 border-b border-[#222244] text-[9px] text-[#555] uppercase tracking-widest">
        <span>Table</span>
        <span>Card.</span>
        <span></span>
        <span>Cible</span>
        <span>Contrainte</span>
      </div>

      {/* Rows */}
      {relations.map((rel, index) => (
        <div
          key={index}
          className="grid grid-cols-5 px-3 py-1 border-b border-[#1a1a33] last:border-none items-center text-[10px]"
        >
          <span className="text-[#aaaaee]">{rel.fromTable}</span>
          <span className="text-[#666]">{rel.cardLeft}</span>
          <span className="text-[#4444aa] text-center">→</span>
          <span className="text-[#88ccee]">{rel.cardRight} &nbsp; {rel.toTable}</span>
          <span className="text-[#777]">{rel.constraint}</span>
        </div>
      ))}

    </div>
  );
}