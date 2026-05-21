import React from 'react';
// Vérifie que cet import pointe bien vers le fichier de la CARTE unique
import TableCard from './TableCard'; 
import { Table } from "@/data/mldData";

interface TablesGridProps {
  tables: Table[];
}

export default function TablesGrid({ tables }: TablesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {tables.map((table, index) => (
        /* Correction de la KEY : Puisque 'id' n'existe pas dans ton type Table,
           on utilise uniquement le nom et l'index.
        */
        <TableCard 
          key={`${table.name}-${index}`} 
          table={table} 
        />
      ))}
    </div>
  );
}