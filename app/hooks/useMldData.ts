// src/hooks/useMldData.ts

"use client";

import { useEffect, useState } from "react";
import { Table, Relation } from "@/data/mldData";

type MldData = {
  projectName: string;
  tables:      Table[];
  relations:   Relation[];
};

type Status = "loading" | "success" | "error";

export function useMldData(projectId: string) {

  const [data,   setData]   = useState<MldData | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {

    async function fetchMld() {
      try {
        const res = await fetch(`/api/projects/${projectId}/mld`);

        if (!res.ok) throw new Error("Projet introuvable");

        const json = await res.json();
        setData(json);
        setStatus("success");

      } catch (error) {
        console.error("Erreur fetch MLD :", error);
        setStatus("error");
      }
    }

    fetchMld();

  }, [projectId]);

  return { data, status };
}