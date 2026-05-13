"use client"
import { useState, useCallback } from 'react';
import { UMLClass, UMLRelation, RelationType } from '../types/uml';

// On génère des IDs uniques avec cette fonction
const generateId = () => `id-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;


// Ce hook contient TOUTE la logique de notre application
export function useDiagramStore() {
  
  // --- ÉTAT (les données) ---
  const [classes, setClasses] = useState<UMLClass[]>([]);
  const [relations, setRelations] = useState<UMLRelation[]>([]);
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);
  const [activeRelationType, setActiveRelationType] = useState<RelationType>('association');


  const updateRelation = useCallback((id: string, updates: Partial<UMLRelation>) => {
    setRelations(prev =>
      prev.map(r => r.id === id ? { ...r, ...updates } : r)
    );
  }, []);
  
  // La classe sélectionnée (calculée depuis les données)
  const selectedClass = classes.find(c => c.id === selectedClassId) || null;

  // --- ACTIONS (les fonctions qui modifient les données) ---

  // Ajouter une nouvelle classe
  const addClass = useCallback(() => {
    const newClass: UMLClass = {
      id: generateId(),
      name: 'NouvelleClasse',
      color: '#6B4EFF',
      attributes: [],
      methods: [],
      position: { x: 100 + Math.random() * 300, y: 100 + Math.random() * 200 },
    };
    setClasses(prev => [...prev, newClass]);
    setSelectedClassId(newClass.id);
  }, []);

  // Mettre à jour une classe existante
  const updateClass = useCallback((id: string, updates: Partial<UMLClass>) => {
    setClasses(prev =>
      prev.map(c => c.id === id ? { ...c, ...updates } : c)
    );
  }, []);

  // Supprimer une classe
  const deleteClass = useCallback((id: string) => {
    setClasses(prev => prev.filter(c => c.id !== id));
    setRelations(prev => prev.filter(r => r.source !== id && r.target !== id));
    setSelectedClassId(null);
  }, []);

// Ajouter une relation entre deux classes
  const addRelation = useCallback((sourceId: string, targetId: string) => {

  // Cardinalités par défaut selon le type
  const defaultLabels: Record<RelationType, { sourceLabel: string; targetLabel: string; name: string }> = {
  association: { sourceLabel: '1',    targetLabel: '0..*', name: 'association' },
  heritage:    { sourceLabel: '',     targetLabel: '',     name: ''            },
  composition: { sourceLabel: '1',    targetLabel: '1..*', name: ''            },
  agregation:  { sourceLabel: '0..1', targetLabel: '0..*', name: ''            },
};

  const newRelation: UMLRelation = {
    id: generateId(),
    source: sourceId,
    target: targetId,
    type: activeRelationType,
    ...defaultLabels[activeRelationType],
  };

    setRelations(prev => [...prev, newRelation]);
  }, [activeRelationType]);

  return {
    // Données
    classes, relations, selectedClass, selectedClassId, activeRelationType,
    // Actions
    addClass, updateClass, deleteClass, addRelation,updateRelation,
    setSelectedClassId, setActiveRelationType

  };

  
}