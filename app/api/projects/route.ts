import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;
    const body = await request.json();
    const { name, classes, relations } = body;

    if (!name || name.trim() === "") {
      return NextResponse.json({ error: "Le nom est requis" }, { status: 400 });
    }

    const project = await prisma.$transaction(async (tx) => {
      const newProject = await tx.project.create({
        data: { name: name.trim(), userId },
      });

      for (const cls of classes) {
        await tx.umlClass.create({
          data: {
            id: cls.id,
            name: cls.name,
            stereotype: cls.stereotype ?? null,
            color: cls.color,
            positionX: cls.position.x,
            positionY: cls.position.y,
            projectId: newProject.id,
            attributes: {
              create: cls.attributes.map(
                (a: {
                  id: string;
                  name: string;
                  type: string;
                  visibility: string;
                }) => ({
                  id: a.id,
                  name: a.name,
                  type: a.type,
                  visibility: a.visibility,
                }),
              ),
            },
            methods: {
              create: cls.methods.map(
                (m: {
                  id: string;
                  name: string;
                  returnType: string;
                  visibility: string;
                }) => ({
                  id: m.id,
                  name: m.name,
                  returnType: m.returnType,
                  visibility: m.visibility,
                }),
              ),
            },
          },
        });
      }

      for (const rel of relations) {
        await tx.umlRelation.create({
          data: {
            id: rel.id,
            type: rel.type,
            name: rel.name ?? null,
            sourceLabel: rel.sourceLabel ?? null,
            targetLabel: rel.targetLabel ?? null,
            sourceCard: rel.sourceLabel ?? null, //  aussi stocker en sourceCard
            targetCard: rel.targetLabel ?? null, //  aussi stocker en targetCard
            sourceId: rel.source,
            targetId: rel.target,
            projectId: newProject.id,
          },
        });
      }

      return newProject;
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("POST /api/projects error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;

    const projects = await prisma.project.findMany({
      where: { userId },
      orderBy: { updatedAt: "desc" },
      include: { classes: true, relations: true },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error("GET /api/projects error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération" },
      { status: 500 },
    );
  }
}
