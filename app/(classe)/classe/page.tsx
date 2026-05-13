"use client";
import { Navbar } from "@/components/Navbar";
import { Toolbar } from "@/components/Toolbar";
import { RelationBar } from "@/components/RelationBar";
import { Canvas } from "@/components/Canvas";
import { Sidebar } from "@/components/Siderbar";
import { useDiagramStore } from "@/store/useDiagramStore";

export default function ClassePage() {
  const store = useDiagramStore();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <Navbar
        projectName="Mon Diagramme UML"
        onProjectNameChange={() => {}}
      />

      <RelationBar
        activeType={store.activeRelationType}
        onTypeChange={store.setActiveRelationType}
        onAddClass={store.addClass}
      />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Toolbar />

        <Canvas
          classes={store.classes}
          relations={store.relations}
          selectedClassId={store.selectedClassId}
          onSelectClass={store.setSelectedClassId}
          onUpdatePosition={(id, position) => store.updateClass(id, { position })}
          onAddRelation={store.addRelation}
        />

        <Sidebar
          selectedClass={store.selectedClass}
          onUpdateClass={store.updateClass}
          onDeleteClass={store.deleteClass}
          relations={store.relations}
          onUpdateRelation={store.updateRelation}
        />
      </div>
    </div>
  );
}