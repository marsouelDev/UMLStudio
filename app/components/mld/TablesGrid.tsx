import { tables } from "@/data/mldData";
import TableCard from "./TableCard";

export default function TablesGrid() {
    const tablesDisplay = tables.map((table) => (
        <TableCard key={table.name} table={table} />
      ))
  return (
    <div className="grid grid-cols-3 gap-3">
      {tablesDisplay}
    </div>
  );
}