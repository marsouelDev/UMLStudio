// app/api/uml/generate/route.ts
import { NextRequest, NextResponse } from "next/server";

function esc(n: string) {
  const R = new Set([
    "order",
    "user",
    "group",
    "select",
    "table",
    "index",
    "key",
    "from",
    "where",
  ]);
  return R.has(n.toLowerCase()) ? `\`${n}\`` : n;
}

export async function POST(req: NextRequest) {
  const { projectName, tables, relations } = await req.json();
  const now = new Date().toISOString().slice(0, 10);
  const lines: string[] = [
    `-- UMLStudio · Script SQL auto-généré`,
    `-- Projet  : ${projectName}`,
    `-- Généré  : ${now}`,
    `-- Moteur  : MySQL 8.0 · InnoDB · utf8mb4`,
    `-- ─────────────────────────────────────────────────────`,
    ``,
  ];

  tables.forEach(
    (
      table: {
        name: string;
        meta?: string;
        columns: {
          name: string;
          type: string;
          badges: string[];
          fkTarget?: string;
        }[];
      },
      i: number,
    ) => {
      lines.push(
        `-- ──── ${i + 1}. ${table.name}${table.meta ? ` (${table.meta})` : ""} ────`,
      );
      lines.push(`CREATE TABLE ${esc(table.name)} (`);
      const cols: string[] = [];
      table.columns.forEach((col) => {
        if (col.badges.includes("PK"))
          cols.push(`  ${esc(col.name)} ${col.type} NOT NULL AUTO_INCREMENT`);
        else cols.push(`  ${esc(col.name)} ${col.type} NOT NULL`);
      });
      const pk = table.columns.find((c) => c.badges.includes("PK"));
      if (pk) cols.push(`  PRIMARY KEY (${esc(pk.name)})`);
      table.columns
        .filter((c) => c.badges.includes("UQ"))
        .forEach((c) =>
          cols.push(`  UNIQUE KEY uq_${table.name}_${c.name} (${esc(c.name)})`),
        );
      table.columns
        .filter((c) => c.badges.includes("FK") && c.fkTarget)
        .forEach((c) => {
          const rel = relations.find(
            (r: { fromTable: string; toTable: string; constraint: string }) =>
              r.fromTable === table.name && r.toTable === c.fkTarget,
          );
          const onDel = rel?.constraint?.includes("RESTRICT")
            ? "RESTRICT"
            : "CASCADE";
          cols.push(
            `  CONSTRAINT fk_${table.name}_${c.fkTarget}\n    FOREIGN KEY (${esc(c.name)}) REFERENCES ${esc(c.fkTarget!)}(id)\n    ON DELETE ${onDel}`,
          );
        });
      lines.push(cols.join(",\n"));
      lines.push(`) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`);
      lines.push(``);
    },
  );

  const sql = lines.join("\n");
  const stats = {
    tables: String((sql.match(/^CREATE TABLE/gm) ?? []).length),
    columns: String(
      (sql.match(/^\s{2}(?!CONSTRAINT|PRIMARY|UNIQUE|FOREIGN)\w/gm) ?? [])
        .length,
    ),
    fkeys: String((sql.match(/FOREIGN KEY/g) ?? []).length),
    engine: "InnoDB",
    encoding: "utf8mb4",
  };

  return NextResponse.json({ sql, stats });
}
