import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/Authoptions";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const { projectId, format } = await request.json();

    const exported = await prisma.userExport.create({
      data: {
        userId: session.user.id,
        projectId: projectId || null,
        format,
      },
    });

    return NextResponse.json(exported, { status: 201 });
  } catch (error) {
    console.error("POST /api/exports error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
