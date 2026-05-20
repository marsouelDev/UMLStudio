// import { tables } from "@/data/mldData";
// import TableCard from "./TableCard";

// export default function TablesGrid() {
//   return (
//     <div style={{
//       display: "grid",
//       gridTemplateColumns: "repeat(3, 1fr)",
//       gap: "16px",
//       marginBottom: "20px"
//     }}>
//       {tables.map((table) => (
//         <TableCard key={table.name} table={table} />
//       ))}
//     </div>
//   );
// }

// src/components/mld/TablesGrid.tsx

import { Table } from "@/data/mldData";
import TableCard from "./TableCard";

type Props = {
  tables: Table[];
};

export default function TablesGrid({ tables }: Props) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {tables.map((table) => (
        <TableCard key={table.name} table={table} />
      ))}
    </div>
  );
}