// data/sqlData.ts
import { SqlStats } from "@/lib/sql-generator";

export type Stat = { label: string; value: string };

export function buildStats(stats: SqlStats | null): Stat[] {
  return [
    { label: "Tables",   value: stats?.tables   ?? "—" },
    { label: "Colonnes", value: stats?.columns  ?? "—" },
    { label: "Clés FK",  value: stats?.fkeys    ?? "—" },
    { label: "Moteur",   value: stats?.engine   ?? "InnoDB" },
    { label: "Encodage", value: stats?.encoding ?? "utf8mb4" },
  ];
}

export const sqlInfo = {
  engine: "MySQL 8.0",
  label:  "CREATE TABLE",
};

// Valeurs par défaut pour compatibilité avec les imports existants
export const sqlStats: Stat[] = buildStats(null);
export const sqlCode = "-- En attente du diagramme...";
