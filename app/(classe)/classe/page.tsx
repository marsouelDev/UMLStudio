"use client";

import { useState, useCallback, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Navbar } from "@/components/Navbar";
import { Toolbar } from "@/components/Toolbar";
import { RelationBar } from "@/components/RelationBar";
import { Canvas } from "@/components/Canvas";
import { Sidebar } from "@/components/Siderbar";
import { useDiagramStore, useSelectedClass } from "@/store/useDiagramStore";
import { SaveModal } from '@/components/SaveModal';
import { Toast } from '@/components/Toast';

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
  position: { x: number; y: number };
  attributes: ApiAttribute[];
  methods: ApiMethod[];
}

interface ApiRelation {
  id: string;
  type: string;
  name: string | null;
  sourceLabel: string | null;
  targetLabel: string | null;
  source: string;
  target: string;
}

export default function ClassePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlProjectId = searchParams.get('projectId');

  const {
    classes, relations, selectedClassId,
    activeRelationType, projectId, projectName,
    addClass, updateClass, deleteClass, addRelation, updateRelation,
    setSelectedClassId, setActiveRelationType,
    setProjectId, setProjectName, loadProject,
  } = useDiagramStore();

  const selectedClass = useSelectedClass();

  const [showModal, setShowModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!urlProjectId) return;

    let cancelled = false;

    async function loadData() {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/projects/${urlProjectId}`);
    
        

        if (res.status === 401) throw new Error("Session expirée. Veuillez vous reconnecter.");
        if (res.status === 403) throw new Error("Vous n'avez pas accès à ce projet.");
        if (res.status === 404) throw new Error("Projet non trouvé dans la base de données.");
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Erreur ${res.status}: ${errorText || "Projet introuvable"}`);
        }

        const project = await res.json();
console.log("🔍 API response:", JSON.stringify(project, null, 2));
if (cancelled) return;
        if (cancelled) return;

        const loadedClasses = (project.classes || []).map((cls: ApiClass) => ({
          id: cls.id,
          name: cls.name,
          stereotype: cls.stereotype ?? '',
          color: cls.color,
          position: {
            x: cls.position?.x ?? 0,
            y: cls.position?.y ?? 0,
          },
          attributes: cls.attributes || [],
          methods: cls.methods || [],
        }));

        const loadedRelations = (project.relations || []).map((rel: ApiRelation) => ({
          id: rel.id,
          type: rel.type,
          name: rel.name ?? '',
          sourceLabel: rel.sourceLabel ?? '',
          targetLabel: rel.targetLabel ?? '',
          source: rel.source,
          target: rel.target,
        }));

        loadProject(loadedClasses, loadedRelations, project.name, project.id);

      } catch (err) {
        if (cancelled) return;
        const msg = err instanceof Error ? err.message : "Erreur inconnue";
        setError(msg);
        setToast(msg);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    loadData();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlProjectId]);

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
      router.replace(`/classe?projectId=${project.id}`);
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
  

  if (isLoading) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: '100vh', backgroundColor: '#f3f4f6',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '50px', height: '50px',
            border: '4px solid #e5e7eb', borderTop: '4px solid #6366f1',
            borderRadius: '50%', animation: 'spin 1s linear infinite',
            margin: '0 auto 20px',
          }} />
          <p style={{ color: '#6b7280', fontSize: '16px' }}>Chargement du projet...</p>
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: '100vh', backgroundColor: '#f3f4f6',
      }}>
        <div style={{
          textAlign: 'center', padding: '40px', backgroundColor: 'white',
          borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', maxWidth: '500px',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>⚠️</div>
          <h2 style={{ color: '#1f2937', marginBottom: '10px', fontSize: '24px' }}>
            Erreur de chargement
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '30px', lineHeight: '1.6' }}>{error}</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button
              onClick={() => router.push('/dashboard')}
              style={{
                padding: '12px 24px', backgroundColor: '#6366f1', color: 'white',
                border: 'none', borderRadius: '8px', cursor: 'pointer',
                fontSize: '14px', fontWeight: '500',
              }}
            >
              Retour au dashboard
            </button>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '12px 24px', backgroundColor: '#e5e7eb', color: '#374151',
                border: 'none', borderRadius: '8px', cursor: 'pointer',
                fontSize: '14px', fontWeight: '500',
              }}
            >
              Réessayer
            </button>
          </div>
        </div>
      </div>
    );
  }

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

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', minHeight: 0 }}>
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