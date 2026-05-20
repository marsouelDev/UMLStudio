"use client";
import { useState, useCallback } from 'react'
import { Navbar } from "@/components/Navbar";
import { Toolbar } from "@/components/Toolbar";
import { RelationBar } from "@/components/RelationBar";
import { Canvas } from "@/components/Canvas";
import { Sidebar } from "@/components/Siderbar";
import { useDiagramStore } from "@/store/useDiagramStore";
import { SaveModal } from '@/components/SaveModal';
import { Toast } from '@/components/Toast';

export default function ClassePage() {
 const {
    classes, relations, selectedClass, selectedClassId,
    activeRelationType, projectId, projectName,
    addClass, updateClass, deleteClass,
    addRelation, updateRelation,
    setSelectedClassId, setActiveRelationType,
    setProjectId, setProjectName,
  } = useDiagramStore()

  const [showModal, setShowModal] = useState(false)
  const [isSaving, setIsSaving]   = useState(false)
  const [toast, setToast]         = useState<string | null>(null)

  // Clic sur "Sauvegarder"
  function handleSaveClick() {
    if (projectId === null) {
      // Première fois → ouvre le modal
      setShowModal(true)
    } else {
      // Déjà sauvegardé → sauvegarde directe
      handleUpdate()
    }
  }

  // Première sauvegarde
  async function handleFirstSave(name: string) {
    setIsSaving(true)
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, classes, relations }),
      })
      if (!res.ok) throw new Error(await res.text())

      const project = await res.json()
      setProjectId(project.id)
      setProjectName(name)
      setShowModal(false)
      setToast('Diagramme sauvegardé avec succès !')
    } catch (error) {
      console.error(error)
      setToast('Erreur lors de la sauvegarde')
    } finally {
      setIsSaving(false)
    }
  }

  // Mises à jour suivantes
  async function handleUpdate() {
    if (!projectId) return
    setIsSaving(true)
    try {
      const res = await fetch(`/api/projects/${projectId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: projectName, classes, relations }),
      })
      if (!res.ok) throw new Error(await res.text())
      setToast('Diagramme mis à jour !')
    } catch (error) {
      console.error(error)
      setToast('Erreur lors de la mise à jour')
    } finally {
      setIsSaving(false)
    }
  }

  const handleUpdatePosition = useCallback((
    id: string,
    position: { x: number; y: number }
  ) => {
    updateClass(id, { position })
  }, [updateClass])


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
          selectedClass={selectedClass}
          onUpdateClass={updateClass}
          onDeleteClass={deleteClass}
          relations={relations}
          onUpdateRelation={updateRelation}
        />
      </div>
      {/* Modal première sauvegarde */}
      {showModal && (
        <SaveModal
          onSave={handleFirstSave}
          onClose={() => setShowModal(false)}
          isSaving={isSaving}
        />
      )}

      {/* Notification */}
      {toast && (
        <Toast
          message={toast}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}