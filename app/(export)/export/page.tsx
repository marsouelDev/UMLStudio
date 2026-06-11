"use client";

import { useEffect, useState } from "react";
import ExportModal from "@/components/export/exportModal";
import { Canvas } from "@/components/Canvas"; 
import { useDiagramStore } from "@/store/useDiagramStore";
import { useProjectId } from "@/app/hooks/useProjectId";

export default function ExportPage() {
  const projectId = useProjectId();
  const [isLoading, setIsLoading] = useState(true);
  
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
      fetch(`/api/projects/${projectId}`)
        .then(res => res.json())
        .then(data => {
          loadProject(data.classes || [], data.relations || [], data.name || "");
          setIsLoading(false);
        })
        .catch(err => {
          console.error("Erreur base de données:", err);
          setIsLoading(false);
        });
    }
  }, [projectId, loadProject]);

  if (isLoading) {
    return (
      <div style={{ 
        minHeight: "100vh", 
        backgroundColor: "#6b7280", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px"
      }}>
        <div style={{
          width: "50px",
          height: "50px",
          border: "4px solid #e5e7eb",
          borderTop: "4px solid #6366f1",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }} />
        <p style={{ color: "white", fontSize: "16px" }}>Chargement du projet...</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (classes.length === 0) {
    return (
      <div style={{ 
        minHeight: "100vh", 
        backgroundColor: "#6b7280", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px"
      }}>
        <div style={{ fontSize: "48px", marginBottom: "10px" }}>⚠️</div>
        <p style={{ color: "white", fontSize: "18px", textAlign: "center" }}>
          Aucune classe trouvée dans ce projet.
        </p>
        <button 
          onClick={() => window.history.back()}
          style={{
            padding: "10px 20px",
            backgroundColor: "#6366f1",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Retour
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#6b7280", position: "relative" }}>
      <ExportModal />

      <div 
        style={{ 
          position: "fixed",
          top: 0,
          left: 0,
          width: "1200px",
          height: "800px",
          opacity: 0,
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        <div 
          id="diagram-canvas" 
          style={{ 
            width: "1200px",
            height: "800px",
            padding: "50px", 
            background: "white",
            boxSizing: "border-box",
          }}
        >
          <Canvas 
            classes={classes} 
            relations={relations}
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