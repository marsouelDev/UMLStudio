// hooks/useStats.ts
import { useEffect, useState } from "react";

export interface DashboardStats {
  totalProjects: number;
  totalClasses: number;
  totalExports: number;
  newThisMonth: number;
}

export function useStats() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/dashboard/stats", { credentials: "include" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: DashboardStats = await res.json();
        setStats(data);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Erreur inconnue";
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return { stats, isLoading, error };
}