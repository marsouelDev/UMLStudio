"use client";

import { useEffect } from "react";
import ExportModal from "@/components/export/exportModal";
import { Canvas } from "@/components/Canvas"; 
import { useDiagramStore } from "@/store/useDiagramStore";
import { useProjectId } from "@/app/hooks/useProjectId";

export default function ExportPage() {
  const projectId = useProjectId();
  
  // On récupère les bonnes fonctions et variables du store
  const { 
    classes, 
    relations, 
    loadProject, 
    selectedClassId, 
    setSelectedClassId,
    updateClass,
    addRelation 
  } = useDiagramStore();

  useEffect(() => {
    if (projectId) {
      // RÉCUPÉRATION DEPUIS LA BASE DE DONNÉES
      fetch(`/api/projects/${projectId}`)
        .then(res => res.json())
        .then(data => {
          // Utilisation de loadProject comme indiqué dans ton message d'erreur
          // data.classes et data.relations viennent de ta base de données
          loadProject(data.classes || [], data.relations || []);
        })
        .catch(err => console.error("Erreur base de données:", err));
    }
  }, [projectId, loadProject]);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#6b7280", position: "relative", overflow: "hidden" }}>
      <ExportModal />

      {/* ZONE DE RENDU INVISIBLE */}
      <div style={{ position: "absolute", top: "-9999px", left: "-9999px" }}>
        <div id="diagram-canvas" style={{ padding: "50px", background: "white" }}>
          <Canvas 
            classes={classes} 
            relations={relations}
            // On passe TOUTES les props obligatoires demandées par CanvasProps
            selectedClassId={selectedClassId}
            onSelectClass={setSelectedClassId}
            onUpdatePosition={(id, pos) => updateClass(id, { position: pos })}
            onAddRelation={addRelation}
          />
        </div>
      </div>
    </div>
  );
}