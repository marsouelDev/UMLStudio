"use client"
import { useCallback } from 'react';
import { Navbar }      from '@/components/Navbar';
import { RelationBar } from '@/components/RelationBar';
import { Toolbar }     from '@/components/Toolbar';
import { Canvas }      from '@/components/Canvas';
import { Sidebar }     from '@/components/Siderbar';
import { useDiagramStore } from '@/store/useDiagramStore';
import './page.css';

export default function Page() {
  // On récupère toutes les données et actions du store
  const {
    classes,
    relations,
    selectedClass,
    selectedClassId,
    activeRelationType,
    addClass,
    updateClass,
    deleteClass,
    addRelation,
    setSelectedClassId,
    setActiveRelationType,
    updateRelation,
  } = useDiagramStore();

  // Quand on déplace un nœud sur le canvas, on met à jour sa position
  const handleUpdatePosition = useCallback((
    id: string,
    position: { x: number; y: number }
  ) => {
    updateClass(id, { position });
  }, [updateClass]);

  return (
    <div className="app">
      {/* Barre du haut */}
      <Navbar
        projectName="Système e-commerce"
        onProjectNameChange={() => {}}
      />

      {/* Barre des relations */}
      <RelationBar
        activeType={activeRelationType}
        onTypeChange={setActiveRelationType}
        onAddClass={addClass}
      />

      {/* Zone principale : toolbar + canvas + sidebar */}
      <div className="app__workspace">
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
    </div>
  );
}