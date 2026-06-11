import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/Authoptions";
import { prisma } from "@/lib/prisma";

interface RequestAttribute {
  id?: string;
  name: string;
  type: string;
  visibility?: string;
}

interface RequestMethod {
  id?: string;
  name: string;
  returnType: string;
  visibility?: string;
}

interface RequestClass {
  id?: string; //  id conservé
  name: string;
  stereotype?: string | null;
  color?: string;
  position?: { x: number; y: number };
  attributes?: RequestAttribute[];
  methods?: RequestMethod[];
}

interface RequestRelation {
  id?: string; //  id conservé
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
        classes: { include: { attributes: true, methods: true } },
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
      classes: project.classes.map((cls) => ({
        id: cls.id,
        name: cls.name,
        stereotype: cls.stereotype,
        color: cls.color,
        position: { x: cls.positionX, y: cls.positionY },
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
      relations: project.relations.map((rel) => ({
        id: rel.id,
        type: rel.type,
        name: rel.name,
        source: rel.sourceId,
        target: rel.targetId,
        sourceLabel: rel.sourceLabel ?? rel.sourceCard,
        targetLabel: rel.targetLabel ?? rel.targetCard,
      })),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error(" [API] Erreur GET:", error);
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

    //  Tout dans une transaction atomique
    await prisma.$transaction(async (tx) => {
      // Mettre à jour le nom du projet
      await tx.project.update({
        where: { id: projectId },
        data: { name: body.name, updatedAt: new Date() },
      });

      // Supprimer les anciens enregistrements
      await tx.umlRelation.deleteMany({ where: { projectId } });
      await tx.umlClass.deleteMany({ where: { projectId } });

      //  Recréer les classes EN CONSERVANT LEURS IDs
      if (body.classes && body.classes.length > 0) {
        for (const cls of body.classes) {
          await tx.umlClass.create({
            data: {
              id: cls.id, //  ID conservé — les relations peuvent pointer dessus
              name: cls.name,
              stereotype: cls.stereotype || null,
              color: cls.color || "#6B4EFF",
              positionX: cls.position?.x ?? 0,
              positionY: cls.position?.y ?? 0,
              projectId,
              attributes: {
                create: (cls.attributes || []).map(
                  (attr: RequestAttribute) => ({
                    id: attr.id, //  ID attribut conservé
                    name: attr.name,
                    type: attr.type,
                    visibility: attr.visibility || "private",
                  }),
                ),
              },
              methods: {
                create: (cls.methods || []).map((method: RequestMethod) => ({
                  id: method.id, //  ID méthode conservé
                  name: method.name,
                  returnType: method.returnType,
                  visibility: method.visibility || "public",
                })),
              },
            },
          });
        }
      }

      //  Recréer les relations EN CONSERVANT LEURS IDs
      if (body.relations && body.relations.length > 0) {
        for (const rel of body.relations) {
          await tx.umlRelation.create({
            data: {
              id: rel.id, // ID conservé
              type: rel.type,
              name: rel.name || null,
              sourceId: rel.source,
              targetId: rel.target,
              sourceLabel: rel.sourceLabel || null,
              targetLabel: rel.targetLabel || null,
              sourceCard: rel.sourceLabel || null,
              targetCard: rel.targetLabel || null,
              projectId,
            },
          });
        }
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(" [API] Erreur PUT:", error);
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
    console.error(" [API] Erreur DELETE:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
