"use client";
import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProjectId } from "@/app/hooks/useProjectId";
import { useMldData } from "@/app/hooks/useMldData";
import { useSqlGenerator } from "@/app/hooks/useSqlGenerator";
import { buildStats } from "@/data/sqlData";
import MldNavbar from "@/app/components/mld/MldNavbar";
import StatsBar  from "@/app/components/sql/StatsBar";
import ActionBar from "@/app/components/sql/ActionBar";
import CodeBlock from "@/app/components/sql/CodeBlock";

function SqlContent() {
  const projectId = useProjectId();
  const router    = useRouter();

  useEffect(() => {
    if (!projectId) router.replace("/dashboard");
  }, [projectId, router]);

  const { data: mldData, loading: mldLoading, error: mldError } = useMldData(projectId ?? "");
  const { sql, stats, loading: sqlLoading, error: sqlError, generate } = useSqlGenerator();

  useEffect(() => {
    if (!mldData || !mldData.tables.length) return;

    // ✅ Types compatibles directement — plus d'adaptateur nécessaire
    generate({
      projectName: "mon-projet",
      tables:      mldData.tables,
      relations:   mldData.relations,
    });
  }, [mldData, generate]);

  if (!projectId) return null;

  if (mldLoading) {
    return (
      <main className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
        <p className="text-[#4444aa] text-sm font-mono animate-pulse">
          ⟳ Chargement du projet...
        </p>
      </main>
    );
  }

  if (mldError) {
    return (
      <main className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
        <p className="text-red-400 text-sm font-mono">
          ✗ Projet introuvable ou erreur serveur.
        </p>
      </main>
    );
  }

  const statItems = buildStats(stats);

  return (
    <main className="min-h-screen bg-[#0a0a1a] flex flex-col">
      <MldNavbar activeTab="SQL" projectId={projectId} />
      <StatsBar stats={statItems} />

      {sqlLoading && (
        <div className="px-4 py-1 text-[10px] font-mono text-[#4444aa] bg-[#0f0f26]">
          ⟳ Génération SQL en cours...
        </div>
      )}
      {sqlError && (
        <div className="px-4 py-1 text-[10px] font-mono text-red-400 bg-[#0f0f26]">
          ✗ {sqlError}
        </div>
      )}

      <ActionBar sql={sql} />
      <CodeBlock sql={sql} />
    </main>
  );
}

export default function SqlPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
        <p className="text-[#555] text-sm font-mono">Initialisation du module SQL...</p>
      </main>
    }>
      <SqlContent />
    </Suspense>
  );
}