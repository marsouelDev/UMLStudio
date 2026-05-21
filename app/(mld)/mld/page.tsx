"use client";
import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProjectId } from "@/app/hooks/useProjectId";
import { useMldData } from "@/app/hooks/useMldData";
import MldNavbar from "@/app/components/mld/MldNavbar";
import MldLegend from "@/app/components/mld/MldLegend";
import TablesGrid from "@/app/components/mld/TablesGrid";
import RelationsSection from "@/app/components/mld/Relation";

function MldContent() {
  const projectId = useProjectId();
  const router    = useRouter();
  const { data, status } = useMldData(projectId ?? "");

  useEffect(() => {
    if (!projectId) router.replace("/dashboard");
  }, [projectId, router]);

  if (!projectId) return null;

  return (
    <main className="min-h-screen bg-[#f3f4f6]">
      <MldNavbar activeTab="MLD" projectId={projectId} />
      <MldLegend />

      <div className="p-4">
        {status === "loading" && (
          <div className="text-gray-400 text-sm text-center mt-20">
            Chargement du MLD…
          </div>
        )}
        {status === "error" && (
          <div className="text-red-500 text-sm text-center mt-20">
            Erreur — projet introuvable.
          </div>
        )}
        {status === "success" && data && (
          <>
            <TablesGrid       tables={data.tables} />
            <RelationsSection relations={data.relations} />
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