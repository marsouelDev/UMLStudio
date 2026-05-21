import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        classes: {
          include: {
            attributes: true,
            methods: true,
          },
        },
        relations: true,
      },
    });

    if (!project) {
      return NextResponse.json(
        { error: "Projet introuvable" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      projectName: project.name,
      classes: project.classes.map((cls) => ({
        id:         cls.id,
        name:       cls.name,
        stereotype: cls.stereotype,
        attributes: cls.attributes.map((a) => ({
          name:       a.name,
          type:       a.type,
          visibility: a.visibility,
        })),
        methods: cls.methods.map((m) => ({
          name:       m.name,
          returnType: m.returnType,
          visibility: m.visibility,
        })),
      })),
      relations: project.relations.map((rel) => ({
        type:        rel.type,
        sourceId:    rel.sourceId,
        targetId:    rel.targetId,
        name:        rel.name,
        sourceLabel: rel.sourceLabel,
        targetLabel: rel.targetLabel,
      })),
    });
  } catch (error) {
    console.error("[SQL GET PROJECT]", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
