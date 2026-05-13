import { tables } from "@/data/mldData";
import TableCard from "./TableCard";

export default function TablesGrid() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "16px",
      marginBottom: "20px"
    }}>
      {tables.map((table) => (
        <TableCard key={table.name} table={table} />
      ))}
    </div>
  );
}