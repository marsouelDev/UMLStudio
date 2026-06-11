import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/Authoptions";
import { prisma } from "@/lib/prisma";

interface RequestAttribute {
  name: string;
  type: string;
  visibility?: string;
}

interface RequestMethod {
  name: string;
  returnType: string;
  visibility?: string;
}

interface RequestClass {
  name: string;
  stereotype?: string | null;
  color?: string;
  position?: { x: number; y: number };
  attributes?: RequestAttribute[];
  methods?: RequestMethod[];
}

interface RequestRelation {
  type: string;
  name?: string | null;
  source: string;
  target: string;
  sourceLabel?: string | null;
  targetLabel?: string | null;
}

interface UpdateProjectBody {
  name: string;
  classes?: RequestClass[];
  relations?: RequestRelation[];
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ projectId: string }> },
) {
  try {
    const { projectId } = await params;

    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    if (!projectId || projectId.trim() === "") {
      return NextResponse.json(
        { error: "projectId invalide" },
        { status: 400 },
      );
    }

    const project = await prisma.project.findUnique({
      where: { id: projectId },
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
        { status: 404 },
      );
    }

    if (project.userId !== session.user.id) {
      return NextResponse.json(
        { error: "Accès non autorisé" },
        { status: 403 },
      );
    }

    const response = {
      id: project.id,
      name: project.name,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
      // positionX/Y → position.x/y pour React Flow
      classes: project.classes.map((cls) => ({
        id: cls.id,
        name: cls.name,
        stereotype: cls.stereotype,
        color: cls.color,
        position: {
          x: cls.positionX,
          y: cls.positionY,
        },
        attributes: cls.attributes.map((attr) => ({
          id: attr.id,
          name: attr.name,
          type: attr.type,
          visibility: attr.visibility,
        })),
        methods: cls.methods.map((method) => ({
          id: method.id,
          name: method.name,
          returnType: method.returnType,
          visibility: method.visibility,
        })),
      })),
      // sourceId/targetId → source/target pour React Flow
      relations: project.relations.map((rel) => ({
        id: rel.id,
        type: rel.type,
        name: rel.name,
        source: rel.sourceId,
        target: rel.targetId,
        sourceCard: rel.sourceCard,
        targetCard: rel.targetCard,
        sourceLabel: rel.sourceLabel ?? rel.sourceCard, // ✅ fallback
        targetLabel: rel.targetLabel ?? rel.targetCard, // ✅ fallback
      })),
    }; // ✅ Fix 1 : accolade et point-virgule manquants ici

    return NextResponse.json(response);
  } catch (error) {
    console.error("❌ [API] Erreur GET:", error);
    return NextResponse.json(
      {
        error: "Erreur serveur",
        details: error instanceof Error ? error.message : "Unknown",
      },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ projectId: string }> },
) {
  try {
    const { projectId } = await params;

    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const body: UpdateProjectBody = await request.json();

    const existingProject = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!existingProject) {
      return NextResponse.json({ error: "Projet non trouvé" }, { status: 404 });
    }

    if (existingProject.userId !== session.user.id) {
      return NextResponse.json(
        { error: "Accès non autorisé" },
        { status: 403 },
      );
    }

    await prisma.project.update({
      where: { id: projectId },
      data: { name: body.name, updatedAt: new Date() },
    });

    await prisma.umlClass.deleteMany({ where: { projectId } });
    await prisma.umlRelation.deleteMany({ where: { projectId } });

    if (body.classes && body.classes.length > 0) {
      for (const cls of body.classes) {
        await prisma.umlClass.create({
          data: {
            name: cls.name,
            stereotype: cls.stereotype || null,
            color: cls.color || "#6B4EFF",
            positionX: cls.position?.x ?? 0,
            positionY: cls.position?.y ?? 0,
            projectId,
            attributes: {
              create: (cls.attributes || []).map((attr: RequestAttribute) => ({
                name: attr.name,
                type: attr.type,
                visibility: attr.visibility || "private",
              })),
            },
            methods: {
              create: (cls.methods || []).map((method: RequestMethod) => ({
                name: method.name,
                returnType: method.returnType,
                visibility: method.visibility || "public",
              })),
            },
          },
        });
      }
    }

    // ✅ Fix 2 : guard sur body.relations potentiellement undefined
    if (body.relations && body.relations.length > 0) {
      for (const rel of body.relations) {
        await prisma.umlRelation.create({
          data: {
            type: rel.type,
            name: rel.name || null,
            sourceId: rel.source,
            targetId: rel.target,
            sourceLabel: rel.sourceLabel || null,
            targetLabel: rel.targetLabel || null,
            sourceCard: rel.sourceLabel || null, // cohérent avec POST
            targetCard: rel.targetLabel || null, // cohérent avec POST
            projectId,
          },
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ [API] Erreur PUT:", error);
    return NextResponse.json(
      {
        error: "Erreur serveur",
        details: error instanceof Error ? error.message : "Unknown",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ projectId: string }> },
) {
  try {
    const { projectId } = await params;

    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const existingProject = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!existingProject) {
      return NextResponse.json({ error: "Projet non trouvé" }, { status: 404 });
    }

    if (existingProject.userId !== session.user.id) {
      return NextResponse.json(
        { error: "Accès non autorisé" },
        { status: 403 },
      );
    }

    await prisma.project.delete({ where: { id: projectId } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ [API] Erreur DELETE:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
