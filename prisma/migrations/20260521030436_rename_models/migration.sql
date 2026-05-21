/*
  Warnings:

  - You are about to drop the `UMLAttribute` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UMLClass` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UMLMethod` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UMLRelation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UMLAttribute";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UMLClass";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UMLMethod";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UMLRelation";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "UmlClass" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "stereotype" TEXT,
    "color" TEXT NOT NULL DEFAULT '#6B4EFF',
    "positionX" REAL NOT NULL DEFAULT 0,
    "positionY" REAL NOT NULL DEFAULT 0,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "UmlClass_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UmlAttribute" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "visibility" TEXT NOT NULL DEFAULT 'private',
    "classId" TEXT NOT NULL,
    CONSTRAINT "UmlAttribute_classId_fkey" FOREIGN KEY ("classId") REFERENCES "UmlClass" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UmlMethod" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "returnType" TEXT NOT NULL,
    "visibility" TEXT NOT NULL DEFAULT 'public',
    "classId" TEXT NOT NULL,
    CONSTRAINT "UmlMethod_classId_fkey" FOREIGN KEY ("classId") REFERENCES "UmlClass" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UmlRelation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "name" TEXT,
    "sourceLabel" TEXT,
    "targetLabel" TEXT,
    "sourceId" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "UmlRelation_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
