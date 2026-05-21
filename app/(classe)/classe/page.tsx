"use client";

import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navbar } from "@/components/Navbar";
import { Toolbar } from "@/components/Toolbar";
import { RelationBar } from "@/components/RelationBar";
import { Canvas } from "@/components/Canvas";
import { Sidebar } from "@/components/Siderbar";
import { useDiagramStore } from "@/store/useDiagramStore";
import { SaveModal } from '@/components/SaveModal';
import { Toast } from '@/components/Toast';

// --- Interfaces API pour le typage strict ---
interface ApiAttribute {
  id: string;
  name: string;
  type: string;
  visibility: string;
}

interface ApiMethod {
  id: string;
  name: string;
  returnType: string;
  visibility: string;
}

interface ApiClass {
  id: string;
  name: string;
  stereotype: string | null;
  color: string;
  positionX: number;
  positionY: number;
  attributes: ApiAttribute[];
  methods: ApiMethod[];
}

interface ApiRelation {
  id: string;
  type: string;
  name: string | null;
  sourceLabel: string | null;
  targetLabel: string | null;
  sourceId: string;
  targetId: string;
}

export default function ClassePage() {
  const searchParams = useSearchParams();
  const urlProjectId = searchParams.get('projectId');

  const {
    classes, relations, selectedClass, selectedClassId,
    activeRelationType, projectId, projectName,
    addClass, updateClass, deleteClass, addRelation, updateRelation,
    setSelectedClassId, setActiveRelationType,
    setProjectId, setProjectName, loadProject,
  } = useDiagramStore();

  const [showModal, setShowModal] = useState(false);
  const [isSaving, setIsSaving]   = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast]         = useState<string | null>(null);

  // --- Logique de chargement initial ---
  useEffect(() => {
    if (!urlProjectId) return;
    let cancelled = false;

    async function loadData() {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/projects/${urlProjectId}`);
        if (!res.ok) throw new Error('Projet introuvable');
        const project = await res.json();
        if (cancelled) return;

        setProjectId(project.id);
        setProjectName(project.name);

        const loadedClasses = project.classes.map((cls: ApiClass) => ({
          id: cls.id,
          name: cls.name,
          stereotype: cls.stereotype ?? '',
          color: cls.color,
          position: { x: cls.positionX, y: cls.positionY },
          attributes: cls.attributes,
          methods: cls.methods,
        }));

        const loadedRelations = project.relations.map((rel: ApiRelation) => ({
          id: rel.id,
          type: rel.type,
          name: rel.name ?? '',
          sourceLabel: rel.sourceLabel ?? '',
          targetLabel: rel.targetLabel ?? '',
          source: rel.sourceId,
          target: rel.targetId,
        }));

        loadProject(loadedClasses, loadedRelations);
      } catch (err) {
        console.error("Load error:", err);
        setToast('Erreur lors du chargement');
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }
    loadData();
    return () => { cancelled = true; };
  }, [loadProject, setProjectId, setProjectName, urlProjectId]);

  // --- Logique de Sauvegarde (Mise à jour ou Création) ---
  const handleSaveClick = () => {
    if (projectId === null) {
      setShowModal(true);
    } else {
      handleUpdate();
    }
  };

  const handleFirstSave = async (name: string) => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, classes, relations }),
      });
      if (!res.ok) throw new Error('Erreur lors de la création');

      const project = await res.json();
      setProjectId(project.id);
      setProjectName(name);
      setShowModal(false);
      setToast('Diagramme sauvegardé avec succès !');
    } catch (error) {
      console.error(error);
      setToast('Erreur de sauvegarde');
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdate = async () => {
    if (!projectId) return;
    setIsSaving(true);
    try {
      const res = await fetch(`/api/projects/${projectId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: projectName, classes, relations }),
      });
      if (!res.ok) throw new Error('Erreur de mise à jour');
      setToast('Diagramme mis à jour !');
    } catch (error) {
      console.error("Save error:", error);
      setToast('Erreur lors de la mise à jour');
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdatePosition = useCallback((id: string, position: { x: number; y: number }) => {
    updateClass(id, { position });
  }, [updateClass]);

  if (isLoading) return <div className="p-10 text-center">Chargement...</div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <Navbar
        projectName={projectName || 'Nouveau diagramme'}
        onProjectNameChange={setProjectName} 
        onSave={handleSaveClick}
        isSaving={isSaving}
        isSaved={projectId !== null}
      />

      <RelationBar
        activeType={activeRelationType}
        onTypeChange={setActiveRelationType}
        onAddClass={addClass}
      />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Toolbar />
        <Canvas
          classes={classes}
          relations={relations}
          selectedClassId={selectedClassId}
          onSelectClass={setSelectedClassId}
          onUpdatePosition={handleUpdatePosition}
          onAddRelation={addRelation}
        />
        <Sidebar
          projectId={projectId || ""}
          selectedClass={selectedClass}
          onUpdateClass={updateClass}
          onDeleteClass={deleteClass}
          relations={relations}
          onUpdateRelation={updateRelation}
        />
      </div>

      {showModal && (
        <SaveModal 
          onSave={handleFirstSave} 
          onClose={() => setShowModal(false)} 
          isSaving={isSaving} 
        />
      )}
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}