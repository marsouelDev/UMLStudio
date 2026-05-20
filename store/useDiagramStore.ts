// src/store/useDiagramStore.ts
"use client"
import { useState, useCallback } from 'react'
import { UMLClass, UMLRelation, RelationType } from '../types/uml'

const generateId = () =>
  `id-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`

export function useDiagramStore() {
  const [classes, setClassesState]     = useState<UMLClass[]>([])
  const [relations, setRelationsState] = useState<UMLRelation[]>([])
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null)
  const [activeRelationType, setActiveRelationType] = useState<RelationType>('association')

  // ID du projet en base — null = pas encore sauvegardé
  const [projectId, setProjectId]     = useState<string | null>(null)
  const [projectName, setProjectName] = useState<string>('')

  const selectedClass = classes.find(c => c.id === selectedClassId) || null

  const addClass = useCallback(() => {
    const newClass: UMLClass = {
      id: generateId(),
      name: 'NouvelleClasse',
      color: '#6B4EFF',
      attributes: [],
      methods: [],
      position: {
        x: 100 + Math.random() * 300,
        y: 100 + Math.random() * 200
      },
    }
    setClassesState(prev => [...prev, newClass])
    setSelectedClassId(newClass.id)
  }, [])

  const updateClass = useCallback((id: string, updates: Partial<UMLClass>) => {
    setClassesState(prev =>
      prev.map(c => c.id === id ? { ...c, ...updates } : c)
    )
  }, [])

  const deleteClass = useCallback((id: string) => {
    setClassesState(prev => prev.filter(c => c.id !== id))
    setRelationsState(prev =>
      prev.filter(r => r.source !== id && r.target !== id)
    )
    setSelectedClassId(null)
  }, [])

  const addRelation = useCallback((sourceId: string, targetId: string) => {
    const defaultLabels: Record<RelationType, {
      sourceLabel: string; targetLabel: string; name: string
    }> = {
      association: { sourceLabel: '1',    targetLabel: '0..*', name: 'association' },
      heritage:    { sourceLabel: '',     targetLabel: '',     name: ''            },
      composition: { sourceLabel: '1',    targetLabel: '1..*', name: ''            },
      agregation:  { sourceLabel: '0..1', targetLabel: '0..*', name: ''            },
    }
    const newRelation: UMLRelation = {
      id: generateId(),
      source: sourceId,
      target: targetId,
      type: activeRelationType,
      ...defaultLabels[activeRelationType],
    }
    setRelationsState(prev => [...prev, newRelation])
  }, [activeRelationType])

  const updateRelation = useCallback((id: string, updates: Partial<UMLRelation>) => {
    setRelationsState(prev =>
      prev.map(r => r.id === id ? { ...r, ...updates } : r)
    )
  }, [])

  const setClasses = useCallback((newClasses: UMLClass[]) => {
    setClassesState(newClasses)
  }, [])

  const setRelations = useCallback((newRelations: UMLRelation[]) => {
    setRelationsState(newRelations)
  }, [])

  return {
    classes, relations, selectedClass, selectedClassId,
    activeRelationType, projectId, projectName,
    addClass, updateClass, deleteClass,
    addRelation, updateRelation,
    setSelectedClassId, setActiveRelationType,
    setClasses, setRelations,
    setProjectId, setProjectName,
  }
}