 // prisma/seed.ts

import { prisma } from "../lib/prisma";

// const prisma = new PrismaClient();

async function main() {

  // ─── Nettoyer la base avant d'insérer ──────────
  await prisma.uMLRelation.deleteMany();
  await prisma.uMLAttribute.deleteMany();
  await prisma.uMLMethod.deleteMany();
  await prisma.uMLClass.deleteMany();
  await prisma.project.deleteMany();

  // ─── Créer le projet ───────────────────────────
  const project = await prisma.project.create({
    data: {
      name: "Système e-commerce",

      // ─── Classes ─────────────────────────────
      classes: {
        create: [

          // 1. User
          {
            name:      "User",
            stereotype: "entity",
            color:     "#6B4EFF",
            positionX: 100,
            positionY: 150,
            attributes: {
              create: [
                { name: "id",            type: "Long",    visibility: "private" },
                { name: "nom",           type: "String",  visibility: "private" },
                { name: "email",         type: "String",  visibility: "private" },
                { name: "passwordHash",  type: "String",  visibility: "private" },
                { name: "facebookId",    type: "String",  visibility: "private" },
                { name: "createdAt",     type: "DateTime",visibility: "private" },
              ],
            },
            methods: {
              create: [
                { name: "login",  returnType: "Boolean", visibility: "public" },
                { name: "logout", returnType: "void",    visibility: "public" },
              ],
            },
          },

          // 2. Order
          {
            name:      "Order",
            stereotype: "entity",
            color:     "#FF6B6B",
            positionX: 400,
            positionY: 150,
            attributes: {
              create: [
                { name: "id",        type: "Long",     visibility: "private" },
                { name: "status",    type: "String",   visibility: "private" },
                { name: "total",     type: "Double",   visibility: "private" },
                { name: "createdAt", type: "DateTime", visibility: "private" },
              ],
            },
            methods: {
              create: [
                { name: "cancel", returnType: "void", visibility: "public" },
              ],
            },
          },

          // 3. Product
          {
            name:      "Product",
            stereotype: "entity",
            color:     "#6BFF6B",
            positionX: 700,
            positionY: 150,
            attributes: {
              create: [
                { name: "id",          type: "Long",   visibility: "private" },
                { name: "name",        type: "String", visibility: "private" },
                { name: "price",       type: "Double", visibility: "private" },
                { name: "stock",       type: "Int",    visibility: "private" },
                { name: "description", type: "String", visibility: "private" },
              ],
            },
            methods: {
              create: [],
            },
          },

          // 4. Admin
          {
            name:      "Admin",
            stereotype: "entity",
            color:     "#FFB86B",
            positionX: 100,
            positionY: 400,
            attributes: {
              create: [
                { name: "role", type: "String", visibility: "private" },
              ],
            },
            methods: {
              create: [
                { name: "ban", returnType: "void", visibility: "public" },
              ],
            },
          },

          // 5. Diagram
          {
            name:      "Diagram",
            stereotype: "entity",
            color:     "#6BB5FF",
            positionX: 400,
            positionY: 400,
            attributes: {
              create: [
                { name: "id",        type: "Long",   visibility: "private" },
                { name: "title",     type: "String", visibility: "private" },
                { name: "dataJson",  type: "String", visibility: "private" },
                { name: "updatedAt", type: "DateTime", visibility: "private" },
              ],
            },
            methods: {
              create: [],
            },
          },

        ],
      },
    },
  });

  console.log("✅ Projet créé :", project.name);

  // ─── Récupérer les IDs des classes créées ──────
  const classes = await prisma.uMLClass.findMany({
    where: { projectId: project.id },
  });

  const find = (name: string) =>
    classes.find((c) => c.name === name)!;

  // ─── Créer les relations ────────────────────────
  await prisma.uMLRelation.createMany({
    data: [
      {
        type:        "association",
        name:        "passe",
        sourceId:    find("User").id,
        targetId:    find("Order").id,
        sourceLabel: "1",
        targetLabel: "0..*",
        projectId:   project.id,
      },
      {
        type:        "association",
        name:        "contient",
        sourceId:    find("Order").id,
        targetId:    find("Product").id,
        sourceLabel: "1..*",
        targetLabel: "1..*",
        projectId:   project.id,
      },
      {
        type:        "heritage",
        name:        "",
        sourceId:    find("Admin").id,
        targetId:    find("User").id,
        sourceLabel: "",
        targetLabel: "",
        projectId:   project.id,
      },
      {
        type:        "association",
        name:        "possède",
        sourceId:    find("User").id,
        targetId:    find("Diagram").id,
        sourceLabel: "1",
        targetLabel: "0..*",
        projectId:   project.id,
      },
    ],
  });

  console.log("✅ Relations créées");
  console.log("🎉 Seed terminé avec succès !");
}

main()
  .catch((e) => {
    console.error("❌ Erreur seed :", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });