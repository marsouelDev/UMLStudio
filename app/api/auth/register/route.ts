import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, password } = await req.json();

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { message: "Tous les champs sont obligatoires." },
        { status: 400 },
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { message: "Le mot de passe doit contenir au moins 8 caractères." },
        { status: 400 },
      );
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { message: "Cet email est déjà utilisé." },
        { status: 409 },
      );
    }

    const hash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: { firstName, lastName, email, password: hash },
    });

    return NextResponse.json(
      { message: "Compte créé avec succès.", id: user.id },
      { status: 201 },
    );
  } catch (error) {
    console.error("[REGISTER]", error);
    return NextResponse.json(
      { message: "Erreur serveur. Veuillez réessayer." },
      { status: 500 },
    );
  }
}
