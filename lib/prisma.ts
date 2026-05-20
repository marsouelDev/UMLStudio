import { PrismaClient } from '../src/generated' // 1. Import corrigé
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import Database from 'better-sqlite3'

// Configuration de la base SQLite physique via better-sqlite3
const dbPath = process.env.DATABASE_URL?.replace('file:', '') || 'dev.db'
const sqlite = new Database(dbPath)

// 2. Initialisation corrigée avec l'objet de configuration attendu par Prisma 7
const adapter = new PrismaBetterSqlite3({ url: dbPath }) 

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Injection de l'adaptateur SQLite dans le client Prisma 7
export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
