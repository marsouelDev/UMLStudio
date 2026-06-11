"use client";
import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProjectId } from "@/app/hooks/useProjectId";
import { useMldData } from "@/app/hooks/useMldData";
import MldNavbar from "@/app/components/mld/MldNavbar";
import MldLegend from "@/app/components/mld/MldLegend";
import TablesGrid from "@/app/components/mld/TablesGrid";
import RelationsSection from "@/app/components/mld/Relation";
import { Table, Relation } from "@/data/mldData";

function MldContent() {
  const projectId = useProjectId();
  const router    = useRouter();
  const { data, loading, error } = useMldData(projectId ?? "");

  useEffect(() => {
    if (!projectId) router.replace("/dashboard");
  }, [projectId, router]);

  if (!projectId) return null;

  // ✅ Convertir MldTable[] → Table[]
  const tables: Table[] = (data?.tables ?? []).map((t) => ({
    name: t.name,
    meta: t.stereotype ?? undefined,
    columns: (t.attributes ?? []).map((attr) => ({
      name: attr.name,
      type: attr.type,
      badges: attr.isPrimary ? ["PK" as const] : [],
    })),
  }));

  // ✅ Convertir MldRelation[] → Relation[]
  const relations: Relation[] = (data?.relations ?? []).map((r) => ({
    fromTable:  r.sourceId,
    cardLeft:   r.sourceCard ?? "1,1",
    cardRight:  r.targetCard ?? "0,N",
    toTable:    r.targetId,
    constraint: r.name ?? r.type,
  }));

  return (
    <main className="min-h-screen bg-[#f3f4f6]">
      <MldNavbar activeTab="MLD" projectId={projectId} />
      <MldLegend />

      <div className="p-4">
        {loading && (
          <div className="text-gray-400 text-sm text-center mt-20">
            Chargement du MLD…
          </div>
        )}
        {error && (
          <div className="text-red-500 text-sm text-center mt-20">
            Erreur — projet introuvable.
          </div>
        )}
        {!loading && !error && (
          <>
            <TablesGrid       tables={tables} />
            <RelationsSection relations={relations} />
          </>
        )}
      </div>
    </main>
  );
}

export default function MldPage() {
  return (
    <Suspense fallback={null}>
      <MldContent />
    </Suspense>
  );
}