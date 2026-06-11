"use client";
import { create } from "zustand";
import { UMLClass, UMLRelation, RelationType } from "../types/uml";

const generateId = () =>
  `id-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

interface DiagramState {
  classes: UMLClass[];
  relations: UMLRelation[];
  selectedClassId: string | null;
  activeRelationType: RelationType;
  projectId: string | null;
  projectName: string;

  addClass: () => void;
  updateClass: (id: string, updates: Partial<UMLClass>) => void;
  deleteClass: (id: string) => void;
  addRelation: (sourceId: string, targetId: string) => void;
  updateRelation: (id: string, updates: Partial<UMLRelation>) => void;
  setSelectedClassId: (id: string | null) => void;
  setActiveRelationType: (type: RelationType) => void;
  setClasses: (classes: UMLClass[]) => void;
  setRelations: (relations: UMLRelation[]) => void;
  setProjectId: (id: string | null) => void;
  setProjectName: (name: string) => void;
  loadProject: (
    classes: UMLClass[],
    relations: UMLRelation[],
    name?: string,
    id?: string | null,
  ) => void;
  reset: () => void;
}

export const useDiagramStore = create<DiagramState>((set, get) => ({
  classes: [],
  relations: [],
  selectedClassId: null,
  activeRelationType: "association",
  projectId: null,
  projectName: "",

  addClass: () => {
    const newClass: UMLClass = {
      id: generateId(),
      name: "NouvelleClasse",
      color: "#6B4EFF",
      attributes: [],
      methods: [],
      position: {
        x: 100 + Math.random() * 300,
        y: 100 + Math.random() * 200,
      },
    };
    set((state) => ({
      classes: [...state.classes, newClass],
      selectedClassId: newClass.id,
    }));
  },

  updateClass: (id, updates) => {
    set((state) => ({
      classes: state.classes.map((c) =>
        c.id === id ? { ...c, ...updates } : c,
      ),
    }));
  },

  deleteClass: (id) => {
    set((state) => ({
      classes: state.classes.filter((c) => c.id !== id),
      relations: state.relations.filter(
        (r) => r.source !== id && r.target !== id,
      ),
      selectedClassId: null,
    }));
  },

  addRelation: (sourceId, targetId) => {
    const { activeRelationType } = get();
    const defaultLabels: Record<
      RelationType,
      { sourceLabel: string; targetLabel: string; name: string }
    > = {
      association: {
        sourceLabel: "1",
        targetLabel: "0..*",
        name: "association",
      },
      heritage: { sourceLabel: "", targetLabel: "", name: "" },
      composition: { sourceLabel: "1", targetLabel: "1..*", name: "" },
      agregation: { sourceLabel: "0..1", targetLabel: "0..*", name: "" },
    };

    const newRelation: UMLRelation = {
      id: generateId(),
      source: sourceId,
      target: targetId,
      type: activeRelationType,
      ...defaultLabels[activeRelationType],
    };

    set((state) => ({
      relations: [...state.relations, newRelation],
    }));
  },

  updateRelation: (id, updates) => {
    set((state) => ({
      relations: state.relations.map((r) =>
        r.id === id ? { ...r, ...updates } : r,
      ),
    }));
  },

  setSelectedClassId: (id) => set({ selectedClassId: id }),
  setActiveRelationType: (type) => set({ activeRelationType: type }),

  setClasses: (newClasses) => {
    const validatedClasses = newClasses.map((cls) => ({
      ...cls,
      position:
        cls.position &&
        typeof cls.position.x === "number" &&
        typeof cls.position.y === "number"
          ? cls.position
          : { x: 100 + Math.random() * 300, y: 100 + Math.random() * 200 },
    }));
    set({ classes: validatedClasses });
  },

  setRelations: (newRelations) => {
    const validatedRelations = newRelations.filter(
      (rel) => rel.source && rel.target,
    );
    set({ relations: validatedRelations });
  },

  setProjectId: (id) => set({ projectId: id }),
  setProjectName: (name) => set({ projectName: name }),

  loadProject: (loadedClasses, loadedRelations, name, id) => {
    const validatedClasses = loadedClasses.map((cls) => ({
      ...cls,
      position:
        cls.position &&
        typeof cls.position.x === "number" &&
        typeof cls.position.y === "number"
          ? cls.position
          : { x: 100 + Math.random() * 300, y: 100 + Math.random() * 200 },
    }));

    const validatedRelations = loadedRelations.filter(
      (rel) => rel.source && rel.target,
    );

    set({
      classes: validatedClasses,
      relations: validatedRelations,
      selectedClassId: null,
      projectName: name || "",
      ...(id !== undefined && { projectId: id }),
    });
  },

  reset: () =>
    set({
      classes: [],
      relations: [],
      selectedClassId: null,
      activeRelationType: "association",
      projectId: null,
      projectName: "",
    }),
}));

export const useSelectedClass = () => {
  return useDiagramStore(
    (state) =>
      state.classes.find((c) => c.id === state.selectedClassId) || null,
  );
};
