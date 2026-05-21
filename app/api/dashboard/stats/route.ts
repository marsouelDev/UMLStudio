// app/api/dashboard/stats/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/Authoptions";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const userId = session.user.id;
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);

  const [totalProjects, newThisMonth, totalClasses] = await Promise.all([
    prisma.project.count({ where: { userId } }),
    prisma.project.count({ where: { userId, createdAt: { gte: firstDay } } }),
    prisma.umlClass.count({ where: { project: { userId } } }),
  ]);

  return NextResponse.json({
    totalProjects,
    totalClasses,
    totalExports: 0,
    newThisMonth,
  });
}
