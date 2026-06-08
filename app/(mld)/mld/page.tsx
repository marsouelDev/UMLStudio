"use client";

import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProjectId } from "@/app/hooks/useProjectId";
import { useDiagram } from "@/store/diagramStore";
import MldNavbar from "@/app/components/mld/MldNavbar";
import Canvas    from "@/components/mcd/canvas";
import StatsBar  from "@/components/mcd/StatsBar";

// Types UML venant de l'API Project
interface UmlAttribute {
  id: string;
  name: string;
  type: string;
}

interface UmlClass {
  id: string;
  name: string;
  positionX: number;
  positionY: number;
  color: string;
  attributes: UmlAttribute[];
}

interface UmlRelation {
  id: string;
  type: string;
  name?: string;
  sourceId: string;
  targetId: string;
  sourceCard?: string;
  targetCard?: string;
}

function McdContent() {
  const projectId = useProjectId();
  const router    = useRouter();
  const { setProject, setDiagram } = useDiagram();

  useEffect(() => {
    if (!projectId) {
      router.replace("/dashboard");
      return;
    }

    fetch(`/api/projects/${projectId}`)
      .then(r => r.json())
      .then(data => {
        setProject(data.id, data.name);

        const mcdEntities = data.classes.map((cls: UmlClass) => ({
          id: cls.id,
          name: cls.name.toUpperCase(),
          x: cls.positionX,
          y: cls.positionY,
          color: cls.color || "#4f46e5",
          attributes: cls.attributes.map((attr: UmlAttribute) => ({
            id: attr.id,
            name: attr.name,
            type: attr.type,
            isPrimary: attr.name.toLowerCase().includes("id")
          })),
        }));

        const mcdRelations = data.relations.map((rel: UmlRelation) => ({
          id: rel.id,
          name: rel.name || "ASSOCIATION",
          type: "association",
          sourceId: rel.sourceId,
          targetId: rel.targetId,
          sourceCard: rel.sourceCard || "1,1",
          targetCard: rel.targetCard || "0,N",
        }));

        setDiagram(mcdEntities, mcdRelations);
      })
      .catch(err => console.error("Erreur de chargement du projet:", err));
  }, [projectId, router, setProject, setDiagram]);

  if (!projectId) return null;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#f3f4f6" }}>
      {/* ✅ Utilisation de MldNavbar avec l'onglet actif MCD */}
      <MldNavbar activeTab="MCD" projectId={projectId} />
      
      {/* Container principal */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden", marginTop: 48 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
          <Canvas />
          <StatsBar />
        </div>
      </div>
    </div>
  );
}

export default function McdPage() {
  return (
    <Suspense fallback={<div className="loading">Chargement du modèle...</div>}>
      <McdContent />
    </Suspense>
  );
}