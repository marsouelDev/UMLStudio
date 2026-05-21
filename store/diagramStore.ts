// store/diagramStore.ts
import { create } from "zustand";

export type Attribute = {
  id: string;
  name: string;
  type: string;
  isPrimary: boolean;
};
export type Entity = {
  id: string;
  name: string;
  x: number;
  y: number;
  color: string;
  attributes: Attribute[];
};
export type Relation = {
  id: string;
  name: string;
  type: string;
  sourceId: string;
  targetId: string;
  sourceCard: string;
  targetCard: string;
};

interface DiagramStore {
  projectId: string;
  projectName: string;
  entities: Entity[];
  relations: Relation[];
  selected: string | null;

  setProject: (id: string, name: string) => void;
  setDiagram: (entities: Entity[], relations: Relation[]) => void;
  addEntity: (e: Entity) => void;
  updateEntity: (id: string, patch: Partial<Entity>) => void;
  removeEntity: (id: string) => void;
  addRelation: (r: Relation) => void;
  updateRelation: (id: string, patch: Partial<Relation>) => void;
  removeRelation: (id: string) => void;
  setSelected: (id: string | null) => void;
  save: () => Promise<void>;
}

export const useDiagram = create<DiagramStore>((set, get) => ({
  projectId: "",
  projectName: "",
  entities: [],
  relations: [],
  selected: null,

  setProject: (id, name) => set({ projectId: id, projectName: name }),

  setDiagram: (entities, relations) => set({ entities, relations }),

  addEntity: (e) => set((s) => ({ entities: [...s.entities, e] })),

  updateEntity: (id, patch) =>
    set((s) => ({
      entities: s.entities.map((e) => (e.id === id ? { ...e, ...patch } : e)),
    })),

  removeEntity: (id) =>
    set((s) => ({
      entities: s.entities.filter((e) => e.id !== id),
      relations: s.relations.filter(
        (r) => r.sourceId !== id && r.targetId !== id,
      ),
      selected: s.selected === id ? null : s.selected,
    })),

  addRelation: (r) => set((s) => ({ relations: [...s.relations, r] })),

  updateRelation: (id, patch) =>
    set((s) => ({
      relations: s.relations.map((r) => (r.id === id ? { ...r, ...patch } : r)),
    })),

  removeRelation: (id) =>
    set((s) => ({ relations: s.relations.filter((r) => r.id !== id) })),

  setSelected: (id) => set({ selected: id }),

  save: async () => {
    const { projectId, entities, relations } = get();
    if (!projectId) return;
    await fetch(`/api/projects/${projectId}/diagram`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ entities, relations }),
    });
  },
}));
