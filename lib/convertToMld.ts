
import { Table, Column, BadgeType, Relation } from "@/data/mldData";

// ─── Types Prisma simplifiés ───────────────────────
// (ce que Prisma nous retourne)
export type PrismaAttribute = {
  name: string;
  type: string;
  visibility: string;
};

export type PrismaMethod = {
  name: string;
  returnType: string;
  visibility: string;
};

export type PrismaClass = {
  id: string;
  name: string;
  stereotype?: string | null;
  attributes: PrismaAttribute[];
  methods: PrismaMethod[];
};

export type PrismaRelation = {
  id: string;
  type: string;
  name?: string | null;
  sourceId: string;
  targetId: string;
  sourceLabel?: string | null;
  targetLabel?: string | null;
};

export type PrismaProject = {
  id: string;
  name: string;
  classes: PrismaClass[];
  relations: PrismaRelation[];
};

// ─── Règle 3 : conversion des types ───────────────
function convertType(javaType: string): string {
  const map: Record<string, string> = {
    Long: "BIGINT",
    Int: "INT",
    Integer: "INT",
    String: "VARCHAR(120)",
    Double: "DECIMAL(10,2)",
    Float: "DECIMAL(10,2)",
    Boolean: "TINYINT(1)",
    DateTime: "DATETIME",
    Date: "DATETIME",
    Text: "TEXT",
  };
  return map[javaType] ?? "VARCHAR(255)";
}

// ─── Règle 5 : badges d'une colonne ───────────────
function getBadges(
  colName: string,
  colType: string,
  isFk: boolean,
  isUnique: boolean,
): BadgeType[] {
  if (colName === "id") return ["PK"];
  if (isFk) return ["FK"];
  if (isUnique) return ["UQ"];
  return ["NN"];
}

// ─── Règle 4 : trouver les FK d'une classe ────────
function getForeignKeys(
  classId: string,
  relations: PrismaRelation[],
  classes: PrismaClass[],
): { colName: string; fkTarget: string }[] {
  const fks: { colName: string; fkTarget: string }[] = [];

  for (const rel of relations) {
    // Association ou héritage qui pointe VERS cette classe
    // → la classe SOURCE reçoit la FK
    if (rel.sourceId === classId) {
      const targetClass = classes.find((c) => c.id === rel.targetId);
      if (targetClass) {
        fks.push({
          colName: `${targetClass.name.toLowerCase()}_id`,
          fkTarget: targetClass.name.toLowerCase(),
        });
      }
    }
  }

  return fks;
}

// ─── Fonction principale ───────────────────────────
export function convertToMld(project: PrismaProject): {
  tables: Table[];
  relations: Relation[];
} {
  const tables: Table[] = [];
  const relations: Relation[] = [];

  for (const cls of project.classes) {
    const columns: Column[] = [];

    // ── Colonne id (toujours en premier) ──────────
    columns.push({
      name: "id",
      type: "BIGINT",
      badges: ["PK"],
    });

    // ── Colonnes FK (depuis les relations) ────────
    const fks = getForeignKeys(cls.id, project.relations, project.classes);
    for (const fk of fks) {
      columns.push({
        name: fk.colName,
        type: "BIGINT",
        badges: ["FK"],
        fkTarget: fk.fkTarget,
      });
    }

    // ── Colonnes depuis les attributs ─────────────
    for (const attr of cls.attributes) {
      // On saute "id" — déjà ajouté manuellement
      if (attr.name.toLowerCase() === "id") continue;

      const sqlType = convertType(attr.type);
      const isUnique = attr.name.toLowerCase() === "email";
      const badges = getBadges(attr.name, sqlType, false, isUnique);

      columns.push({
        name: attr.name,
        type: sqlType,
        badges,
      });
    }

    // ── Déterminer le meta (spécialisation, N-N) ──
    const isSpecialisation = project.relations.some(
      (r) => r.type === "heritage" && r.sourceId === cls.id,
    );

    tables.push({
      name: cls.name.toLowerCase(),
      meta: isSpecialisation ? "spécialisation" : undefined,
      columns,
    });
  }
  // ─── Construire les relations MLD ─────────────────
  for (const rel of project.relations) {
    const source = project.classes.find((c) => c.id === rel.sourceId);
    const target = project.classes.find((c) => c.id === rel.targetId);

    if (!source || !target) continue;

    // Cardinalités depuis les labels Prisma
    const cardLeft = rel.sourceLabel ?? "1,1";
    const cardRight = rel.targetLabel ?? "0,N";

    // Contrainte selon le type de relation
    const constraint =
      rel.type === "heritage"
        ? "spécialisation · ON DELETE CASCADE"
        : rel.type === "composition"
          ? "ON DELETE CASCADE"
          : rel.type === "agregation"
            ? "ON DELETE RESTRICT"
            : "ON DELETE CASCADE";

    relations.push({
      fromTable: source.name.toLowerCase(),
      cardLeft,
      cardRight,
      toTable: target.name.toLowerCase(),
      constraint,
    });
  }

  return { tables, relations };
}
