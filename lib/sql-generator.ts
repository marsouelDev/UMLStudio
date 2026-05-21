// lib/sql-generator.ts
// Convertit les classes UML en script MySQL — utilisable partout dans Next.js

export interface AttributeInput {
  name: string;
  type: string;
  visibility: string;
}

export interface MethodInput {
  name: string;
  returnType: string;
  visibility: string;
}

export interface ClassInput {
  id: string;
  name: string;
  stereotype?: string | null;
  attributes: AttributeInput[];
  methods: MethodInput[];
}

export interface RelationInput {
  type: string;
  sourceId: string;
  targetId: string;
  name?: string | null;
  sourceLabel?: string | null;
  targetLabel?: string | null;
}

export interface GenerateInput {
  projectName: string;
  classes: ClassInput[];
  relations: RelationInput[];
}

export interface SqlStats {
  tables:   string;
  columns:  string;
  fkeys:    string;
  engine:   string;
  encoding: string;
}

// ── Mapping types UML → MySQL ────────────────────────────────────────────────
function toMysqlType(umlType: string): string {
  const map: Record<string, string> = {
    string:   "VARCHAR(255)",
    String:   "VARCHAR(255)",
    int:      "INT",
    Int:      "INT",
    integer:  "INT",
    Integer:  "INT",
    float:    "DECIMAL(10,2)",
    Float:    "DECIMAL(10,2)",
    double:   "DOUBLE",
    Double:   "DOUBLE",
    boolean:  "TINYINT(1)",
    Boolean:  "TINYINT(1)",
    bool:     "TINYINT(1)",
    date:     "DATE",
    Date:     "DATE",
    datetime: "DATETIME",
    DateTime: "DATETIME",
    text:     "TEXT",
    Text:     "TEXT",
    long:     "BIGINT",
    Long:     "BIGINT",
    uuid:     "VARCHAR(36)",
    UUID:     "VARCHAR(36)",
    json:     "JSON",
    JSON:     "JSON",
  };
  return map[umlType] ?? "VARCHAR(255)";
}

// ── Échappe les mots réservés MySQL ─────────────────────────────────────────
const RESERVED = new Set([
  "order","user","group","select","insert","update","delete",
  "table","index","key","primary","foreign","references","from",
  "where","join","left","right","inner","create","drop","add",
]);

function esc(name: string): string {
  return RESERVED.has(name.toLowerCase()) ? `\`${name}\`` : name;
}

// ── Génère le SQL complet ────────────────────────────────────────────────────
export function generateMySQL(input: GenerateInput): string {
  const { projectName, classes, relations } = input;
  const now = new Date().toISOString().slice(0, 10);
  const classMap = new Map(classes.map((c) => [c.id, c]));
  const lines: string[] = [];

  // En-tête
  lines.push(`-- UMLStudio · Script SQL auto-généré`);
  lines.push(`-- Projet  : ${projectName}`);
  lines.push(`-- Généré  : ${now}`);
  lines.push(`-- Moteur  : MySQL 8.0 · InnoDB · utf8mb4`);
  lines.push(`-- ─────────────────────────────────────────────────────`);
  lines.push(``);

  classes.forEach((cls, index) => {
    const tableName = esc(cls.name.toLowerCase());
    const label = cls.stereotype ? `${cls.name} (${cls.stereotype})` : cls.name;
    lines.push(`-- ──── ${index + 1}. ${label} ────`);
    lines.push(`CREATE TABLE ${tableName} (`);

    const cols: string[] = [];

    // PK auto
    cols.push(`  id BIGINT NOT NULL AUTO_INCREMENT`);

    // FK héritage parent
    const parentRel = relations.find(
      (r) => (r.type === "inheritance" || r.type === "realization") && r.sourceId === cls.id
    );
    if (parentRel) {
      const parent = classMap.get(parentRel.targetId);
      if (parent) cols.push(`  ${parent.name.toLowerCase()}_id BIGINT NOT NULL`);
    }

    // Colonnes des attributs
    cls.attributes.forEach((attr) => {
      cols.push(`  ${esc(attr.name)} ${toMysqlType(attr.type)} NOT NULL`);
    });

    // FK associations / compositions / agrégations
    relations
      .filter((r) => r.sourceId === cls.id && ["association","composition","aggregation"].includes(r.type))
      .forEach((r) => {
        const target = classMap.get(r.targetId);
        if (target) cols.push(`  ${esc(target.name.toLowerCase() + "_id")} BIGINT NOT NULL`);
      });

    // PRIMARY KEY
    cols.push(`  PRIMARY KEY (id)`);

    // UNIQUE email si présent
    if (cls.attributes.some((a) => a.name.toLowerCase() === "email")) {
      cols.push(`  UNIQUE KEY uq_${cls.name.toLowerCase()}_email (email)`);
    }

    // CONSTRAINT héritage
    if (parentRel) {
      const parent = classMap.get(parentRel.targetId);
      if (parent) {
        cols.push(
          `  CONSTRAINT fk_${cls.name.toLowerCase()}_${parent.name.toLowerCase()}\n` +
          `    FOREIGN KEY (${parent.name.toLowerCase()}_id)\n` +
          `    REFERENCES ${esc(parent.name.toLowerCase())}(id)\n` +
          `    ON DELETE CASCADE`
        );
      }
    }

    // CONSTRAINT associations
    relations
      .filter((r) => r.sourceId === cls.id && ["association","composition","aggregation"].includes(r.type))
      .forEach((r) => {
        const target = classMap.get(r.targetId);
        if (!target) return;
        const fkCol    = target.name.toLowerCase() + "_id";
        const onDelete = r.type === "composition" ? "CASCADE" : "RESTRICT";
        cols.push(
          `  CONSTRAINT fk_${cls.name.toLowerCase()}_${target.name.toLowerCase()}\n` +
          `    FOREIGN KEY (${esc(fkCol)})\n` +
          `    REFERENCES ${esc(target.name.toLowerCase())}(id)\n` +
          `    ON DELETE ${onDelete}`
        );
      });

    lines.push(cols.join(",\n"));
    lines.push(`) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`);
    lines.push(``);
  });

  // Tables de liaison N-N
  relations
    .filter((r) => r.type === "association" && r.sourceLabel?.includes("*") && r.targetLabel?.includes("*"))
    .forEach((r) => {
      const src = classMap.get(r.sourceId);
      const tgt = classMap.get(r.targetId);
      if (!src || !tgt) return;
      const tName  = `${src.name.toLowerCase()}_${tgt.name.toLowerCase()}`;
      const srcCol = `${src.name.toLowerCase()}_id`;
      const tgtCol = `${tgt.name.toLowerCase()}_id`;
      lines.push(`-- ──── Table liaison N-N : ${src.name} ↔ ${tgt.name} ────`);
      lines.push(`CREATE TABLE ${tName} (`);
      lines.push(`  ${srcCol} BIGINT NOT NULL,`);
      lines.push(`  ${tgtCol} BIGINT NOT NULL,`);
      lines.push(`  PRIMARY KEY (${srcCol}, ${tgtCol}),`);
      lines.push(`  CONSTRAINT fk_${tName}_${src.name.toLowerCase()}`);
      lines.push(`    FOREIGN KEY (${srcCol}) REFERENCES ${esc(src.name.toLowerCase())}(id) ON DELETE CASCADE,`);
      lines.push(`  CONSTRAINT fk_${tName}_${tgt.name.toLowerCase()}`);
      lines.push(`    FOREIGN KEY (${tgtCol}) REFERENCES ${esc(tgt.name.toLowerCase())}(id) ON DELETE CASCADE`);
      lines.push(`) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`);
      lines.push(``);
    });

  return lines.join("\n");
}

// ── Stats ────────────────────────────────────────────────────────────────────
export function computeStats(sql: string): SqlStats {
  return {
    tables:   String((sql.match(/^CREATE TABLE/gm) ?? []).length),
    columns:  String((sql.match(/^\s{2}(?!CONSTRAINT|PRIMARY|UNIQUE|FOREIGN)\w/gm) ?? []).length),
    fkeys:    String((sql.match(/FOREIGN KEY/g) ?? []).length),
    engine:   "InnoDB",
    encoding: "utf8mb4",
  };
}
