// hooks/useProjects.ts
import { useEffect, useState } from "react";

export interface Project {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  _count: { classes: number; relations: number };
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/projects/list", { credentials: "include" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Project[] = await res.json();
        setProjects(data);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Erreur inconnue";
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return { projects, isLoading, error };
}