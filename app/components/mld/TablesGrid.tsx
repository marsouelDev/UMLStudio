import React from "react";
import TableCard from "./TableCard";
import { Table } from "@/data/mldData";

interface TablesGridProps {
  tables: Table[];
}

export default function TablesGrid({ tables }: TablesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {tables.map((table, index) => (
        <TableCard key={`${table.name}-${index}`} table={table} />
      ))}
    </div>
  );
}