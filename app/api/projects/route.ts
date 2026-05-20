// src/app/api/projects/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// POST /api/projects — crée un projet avec tout son contenu
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, classes, relations } = body

    if (!name || name.trim() === '') {
      return NextResponse.json(
        { error: 'Le nom est requis' },
        { status: 400 }
      )
    }

    // On crée le projet + toutes ses classes + relations en une seule transaction
    const project = await prisma.$transaction(async (tx) => {

      // 1. Crée le projet
      const newProject = await tx.project.create({
        data: { name: name.trim() }
      })

      // 2. Crée les classes avec leurs attributs et méthodes
      for (const cls of classes) {
        await tx.uMLClass.create({
          data: {
            id: cls.id,
            name: cls.name,
            stereotype: cls.stereotype ?? null,
            color: cls.color,
            positionX: cls.position.x,
            positionY: cls.position.y,
            projectId: newProject.id,
            attributes: {
              create: cls.attributes.map((a: {
                id: string; name: string
                type: string; visibility: string
              }) => ({
                id: a.id,
                name: a.name,
                type: a.type,
                visibility: a.visibility,
              }))
            },
            methods: {
              create: cls.methods.map((m: {
                id: string; name: string
                returnType: string; visibility: string
              }) => ({
                id: m.id,
                name: m.name,
                returnType: m.returnType,
                visibility: m.visibility,
              }))
            }
          }
        })
      }

      // 3. Crée les relations
      for (const rel of relations) {
        await tx.uMLRelation.create({
          data: {
            id: rel.id,
            type: rel.type,
            name: rel.name ?? null,
            sourceLabel: rel.sourceLabel ?? null,
            targetLabel: rel.targetLabel ?? null,
            sourceId: rel.source,
            targetId: rel.target,
            projectId: newProject.id,
          }
        })
      }

      return newProject
    })

    return NextResponse.json(project, { status: 201 })

  } catch (error) {
    console.error('POST /api/projects error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création' },
      { status: 500 }
    )
  }
}