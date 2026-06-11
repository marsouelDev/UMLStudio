import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/Authoptions";
import { prisma } from "@/lib/prisma";

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

    let sql = `-- SQL généré le ${new Date().toLocaleDateString("fr-FR")}\n\n`;

    project.classes.forEach((cls) => {
      sql += `CREATE TABLE ${cls.name.toUpperCase()} (\n`;

      const cols = cls.attributes.map((attr) => {
        const isPrimary = attr.name.toLowerCase().includes("id");
        const type = mapType(attr.type);
        return `  ${attr.name} ${type}${isPrimary ? " PRIMARY KEY" : ""}`;
      });

      const foreignKeys = project.relations
        .filter((rel) => rel.targetId === cls.id && rel.type === "association")
        .map((rel) => {
          const sourceClass = project.classes.find(
            (c) => c.id === rel.sourceId,
          );
          if (sourceClass) {
            return `  ${sourceClass.name.toLowerCase()}_id INTEGER REFERENCES ${sourceClass.name.toUpperCase()}(id)`;
          }
          return null;
        })
        .filter(Boolean);

      sql += [...cols, ...foreignKeys].join(",\n");
      sql += `\n);\n\n`;
    });

    return NextResponse.json({ sql, generatedAt: new Date().toISOString() });
  } catch (error) {
    console.error("❌ Erreur /api/projects/[projectId]/sql:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

function mapType(type: string): string {
  const typeMap: Record<string, string> = {
    string: "TEXT",
    number: "INTEGER",
    boolean: "BOOLEAN",
    date: "DATE",
    text: "TEXT",
  };
  return typeMap[type.toLowerCase()] || "TEXT";
}
