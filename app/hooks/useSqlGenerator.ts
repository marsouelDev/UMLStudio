// hooks/useSqlGenerator.ts
import { useState, useRef, useCallback } from "react";
import { generateMySQL, computeStats, SqlStats } from "@/lib/sql-generator";

interface MldAttribute {
  id: string;
  name: string;
  type: string;
  visibility: string;
  isPrimary: boolean;
}

interface MldTable {
  id: string;
  name: string;
  stereotype: string | null;
  attributes: MldAttribute[];
}

interface MldRelation {
  id: string;
  type: string;
  name: string | null;
  sourceId: string;
  targetId: string;
  sourceCard: string | null;
  targetCard: string | null;
}

export interface MldToSqlInput {
  projectName: string;
  tables: MldTable[];
  relations: MldRelation[];
}

interface UseSqlResult {
  sql: string;
  stats: SqlStats | null;
  loading: boolean;
  error: string | null;
  generate: (payload: MldToSqlInput) => void;
}

export function useSqlGenerator(): UseSqlResult {
  const [sql, setSql] = useState("-- En attente du diagramme...");
  const [stats, setStats] = useState<SqlStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const generate = useCallback((payload: MldToSqlInput) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      if (!payload.tables.length) {
        setSql("-- Ajoutez des classes au diagramme pour générer le SQL.");
        setStats(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // ✅ Conversion directe MldTable → ClassInput sans passer par l'API
        const classes = payload.tables.map((t) => ({
          id: t.id,
          name: t.name,
          stereotype: t.stereotype,
          attributes: t.attributes.map((a) => ({
            name: a.name,
            type: a.type,
            visibility: a.visibility,
          })),
          methods: [],
        }));

        const relations = payload.relations.map((r) => ({
          type: r.type,
          sourceId: r.sourceId,
          targetId: r.targetId,
          name: r.name,
          sourceLabel: r.sourceCard,
          targetLabel: r.targetCard,
        }));

        const generatedSql = generateMySQL({
          projectName: payload.projectName,
          classes,
          relations,
        });

        const generatedStats = computeStats(generatedSql);
        setSql(generatedSql);
        setStats(generatedStats);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    }, 300);
  }, []);

  return { sql, stats, loading, error, generate };
}
