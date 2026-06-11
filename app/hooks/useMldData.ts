"use client";
import { useState, useEffect } from "react";

// Types pour les données MLD
interface MldAttribute {
  id: string;
  name: string;
  type: string;
  visibility: string;
  isPrimary: boolean;
}

interface MldMethod {
  id: string;
  name: string;
  returnType: string;
  visibility: string;
}

interface MldTable {
  id: string;
  name: string;
  stereotype: string | null;
  attributes: MldAttribute[];
  methods: MldMethod[];
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

interface MldData {
  tables: MldTable[];
  relations: MldRelation[];
  generatedAt: string;
}

export function useMldData(projectId: string | null) {
  const [data, setData] = useState<MldData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!projectId) {
      console.warn("⚠️ projectId manquant");
      return;
    }

    let cancelled = false;

    const fetchMld = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/projects/${projectId}/mld`);

        if (res.status === 404) {
          if (!cancelled) {
            setData(null);
            setError(null);
            setLoading(false);
          }
          return;
        }

        if (!res.ok) {
          throw new Error(`Erreur ${res.status}`);
        }

        const json: MldData = await res.json();
        
        if (!cancelled) {
          setData(json);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Erreur inconnue");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchMld();

    return () => {
      cancelled = true;
    };
  }, [projectId]);

  return { data, loading, error };
}