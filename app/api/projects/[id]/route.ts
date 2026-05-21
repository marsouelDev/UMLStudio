import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET /api/projects/:id
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params  //  await params
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
    }

    const userId = (session.user as { id: string }).id

    const project = await prisma.project.findFirst({
      where: { id, userId },
      include: {
        classes: {
          include: { attributes: true, methods: true }
        },
        relations: true,
      }
    })

    if (!project) {
      return NextResponse.json({ error: 'Projet introuvable' }, { status: 404 })
    }

    return NextResponse.json(project)
  } catch (error) {
    console.error('GET /api/projects/[id] error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

// PUT /api/projects/:id
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params  // ✅ await params
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
    }

    const userId = (session.user as { id: string }).id
    const { name, classes, relations } = await request.json()

    const existing = await prisma.project.findFirst({
      where: { id, userId }
    })

    if (!existing) {
      return NextResponse.json({ error: 'Projet introuvable' }, { status: 404 })
    }

    const project = await prisma.$transaction(async (tx) => {
      await tx.umlRelation.deleteMany({ where: { projectId: id } })
      await tx.umlAttribute.deleteMany({
        where: { class: { projectId: id } }
      })
      await tx.umlMethod.deleteMany({
        where: { class: { projectId: id } }
      })
      await tx.umlClass.deleteMany({ where: { projectId: id } })

      const updated = await tx.project.update({
        where: { id },
        data: { name: name.trim() }
      })

      for (const cls of classes) {
        await tx.umlClass.create({
          data: {
            id: cls.id,
            name: cls.name,
            stereotype: cls.stereotype ?? null,
            color: cls.color,
            positionX: cls.position.x,
            positionY: cls.position.y,
            projectId: id,
            attributes: {
              create: cls.attributes.map((a: {
                id: string; name: string; type: string; visibility: string
              }) => ({ id: a.id, name: a.name, type: a.type, visibility: a.visibility }))
            },
            methods: {
              create: cls.methods.map((m: {
                id: string; name: string; returnType: string; visibility: string
              }) => ({ id: m.id, name: m.name, returnType: m.returnType, visibility: m.visibility }))
            }
          }
        })
      }

      for (const rel of relations) {
        await tx.umlRelation.create({
          data: {
            id: rel.id,
            type: rel.type,
            name: rel.name ?? null,
            sourceLabel: rel.sourceLabel ?? null,
            targetLabel: rel.targetLabel ?? null,
            sourceId: rel.source,
            targetId: rel.target,
            projectId: id,
          }
        })
      }

      return updated
    })

    return NextResponse.json(project)
  } catch (error) {
    console.error('PUT /api/projects/[id] error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

// DELETE /api/projects/:id
export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params  // ✅ await params
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
    }

    const userId = (session.user as { id: string }).id

    const existing = await prisma.project.findFirst({
      where: { id, userId }
    })

    if (!existing) {
      return NextResponse.json({ error: 'Projet introuvable' }, { status: 404 })
    }

    await prisma.project.delete({ where: { id } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('DELETE /api/projects/[id] error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}