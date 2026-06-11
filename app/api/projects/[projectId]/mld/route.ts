import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/Authoptions";
import { prisma } from "@/lib/prisma";

// ✅ Supprimer les interfaces UmlClass et UmlRelation non utilisées

interface MldAttribute {
  id: string;
  name: string;
  type: string;
  visibility: string;
  isPrimary: boolean;
}

interface MldMethod {
  id: string;
  name: string;
  returnType: string;
  visibility: string;
}

interface MldTable {
  id: string;
  name: string;
  stereotype: string | null;
  attributes: MldAttribute[];
  methods: MldMethod[];
}

interface MldRelation {
  id: string;
  type: string;
  name: string | null;
  sourceId: string;
  targetId: string;
  sourceCard: string | null;
  targetCard: string | null;
}

interface MldData {
  tables: MldTable[];
  relations: MldRelation[];
  generatedAt: string;
}

// ✅ Next.js 15+ : params est une Promise
export async function GET(
  request: Request,
  { params }: { params: Promise<{ projectId: string }> },
) {
  try {
    // ✅ AWAIT les params
    const { projectId } = await params;

    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
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

    const mld: MldData = {
      tables: project.classes.map((cls) => ({
        id: cls.id,
        name: cls.name,
        stereotype: cls.stereotype,
        attributes: cls.attributes.map((attr) => ({
          id: attr.id,
          name: attr.name,
          type: attr.type,
          visibility: attr.visibility,
          isPrimary: attr.name.toLowerCase().includes("id"),
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
        sourceId: rel.sourceId,
        targetId: rel.targetId,
        sourceCard: rel.sourceCard,
        targetCard: rel.targetCard,
      })),
      generatedAt: new Date().toISOString(),
    };

    return NextResponse.json(mld);
  } catch (error) {
    console.error("❌ Erreur /api/projects/[projectId]/mld:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
