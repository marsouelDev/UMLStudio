import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { convertToMld } from "@/lib/convertToMld";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const {id} = await context.params

    const project = await prisma.project.findUnique({
      where: { id},
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

    const mld = convertToMld({
      id: project.id,
      name: project.name,
      classes: project.classes.map((cls) => ({
        id: cls.id,
        name: cls.name,
        stereotype: cls.stereotype,
        attributes: cls.attributes,
        methods: cls.methods,
      })),
      relations: project.relations.map((rel) => ({
        id: rel.id,
        type: rel.type,
        name: rel.name,
        sourceId: rel.sourceId,
        targetId: rel.targetId,
        sourceLabel: rel.sourceLabel,
        targetLabel: rel.targetLabel,
      })),
    });

    return NextResponse.json({
      projectName: project.name,
      tables: mld.tables,
      relations: mld.relations,
    });
  } catch (error) {
    console.error("Erreur MLD :", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}