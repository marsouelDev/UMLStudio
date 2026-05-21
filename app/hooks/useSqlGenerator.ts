// hooks/useSqlGenerator.ts
import { useEffect, useState, useRef, useCallback } from "react";
import { Table, Relation } from "@/data/mldData";
import { SqlStats } from "@/lib/sql-generator";

export interface MldToSqlInput {
  projectName: string;
  tables: Table[];
  relations: Relation[];
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

    timer.current = setTimeout(async () => {
      if (!payload.tables.length) {
        setSql("-- Ajoutez des classes au diagramme pour générer le SQL.");
        setStats(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/uml/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error(`Erreur ${res.status}`);

        const data = await res.json();
        setSql(data.sql);
        setStats(data.stats);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    }, 300);
  }, []);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return { sql, stats, loading, error, generate };
}
