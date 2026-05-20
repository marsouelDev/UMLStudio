// src/app/api/projects/[id]/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// PUT /api/projects/[id] — met à jour un projet existant
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { name, classes, relations } = body

    await prisma.$transaction(async (tx) => {

      // 1. Met à jour le nom
      await tx.project.update({
        where: { id: params.id },
        data: { name }
      })

      // 2. Supprime tout l'ancien contenu
      await tx.uMLRelation.deleteMany({ where: { projectId: params.id } })
      await tx.uMLAttribute.deleteMany({
        where: { class: { projectId: params.id } }
      })
      await tx.uMLMethod.deleteMany({
        where: { class: { projectId: params.id } }
      })
      await tx.uMLClass.deleteMany({ where: { projectId: params.id } })

      // 3. Recrée tout le contenu mis à jour
      for (const cls of classes) {
        await tx.uMLClass.create({
          data: {
            id: cls.id,
            name: cls.name,
            stereotype: cls.stereotype ?? null,
            color: cls.color,
            positionX: cls.position.x,
            positionY: cls.position.y,
            projectId: params.id,
            attributes: {
              create: cls.attributes.map((a: {
                id: string; name: string
                type: string; visibility: string
              }) => ({
                id: a.id, name: a.name,
                type: a.type, visibility: a.visibility,
              }))
            },
            methods: {
              create: cls.methods.map((m: {
                id: string; name: string
                returnType: string; visibility: string
              }) => ({
                id: m.id, name: m.name,
                returnType: m.returnType, visibility: m.visibility,
              }))
            }
          }
        })
      }

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
            projectId: params.id,
          }
        })
      }
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('PUT /api/projects/[id] error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour' },
      { status: 500 }
    )
  }
}