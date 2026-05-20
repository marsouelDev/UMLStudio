import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, password } = await req.json();

  if (!firstName || !lastName || !email || !password) {
    return NextResponse.json({ message: "Champs manquants." }, { status: 400 });
  }

  // Vérifier si l'email est déjà utilisé
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ message: "Cet email est déjà utilisé." }, { status: 409 });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hash,
    },
  });

  return NextResponse.json({ message: "Compte créé avec succès.", id: user.id }, { status: 201 });
}