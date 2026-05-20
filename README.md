This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
---------------------------------------------------

# 📦 UML Studio — Documentation Backend

> Ce document explique toute la partie backend du projet : les technologies utilisées, la structure de la base de données, les routes API et les instructions pour démarrer.

---

## 🛠️ Technologies utilisées

| Technologie | Version | Rôle |
|---|---|---|
| **Next.js** | 15+ | Framework React — fournit les API Routes |
| **Prisma** | 7+ | ORM — communication avec la base de données |
| **SQLite** | — | Base de données locale (fichier `.db`) |
| **TypeScript** | 5+ | Typage statique |
| **dotenv** | — | Chargement des variables d'environnement |

---

## 💡 Pourquoi ces choix ?

- **SQLite** : pas besoin d'installer un serveur de base de données. Tout est dans un seul fichier `database.db` sur ton PC. Chaque développeur a sa propre base locale.
- **Prisma** : écrire du TypeScript au lieu du SQL brut. Les modèles Prisma correspondent directement aux tables de la base.
- **Next.js API Routes** : pas besoin d'un serveur backend séparé (Express, NestJS...). Les routes API vivent directement dans le projet Next.js.

---

## 📁 Structure des fichiers backend

```
uml-studio/
│
├── prisma/
│   ├── schema.prisma        ← structure de la base de données
│   └── database.db          ← base de données locale (ignorée par Git)
│
├── src/
│   ├── app/
│   │   └── api/
│   │       └── projects/
│   │           ├── route.ts         ← POST /api/projects
│   │           └── [id]/
│   │               └── route.ts     ← PUT /api/projects/:id
│   │
│   └── lib/
│       └── prisma.ts        ← instance Prisma partagée
│
├── prisma.config.ts         ← configuration Prisma 7
├── .env                     ← variables d'environnement (ignoré par Git)
└── .env.example             ← modèle à partager avec l'équipe
```

---

## 🗄️ Schéma de la base de données

La base contient **5 tables** qui correspondent aux éléments d'un diagramme de classes UML.

### Diagramme des tables

```
Project
  ├── id        (identifiant unique)
  ├── name      (nom du diagramme)
  ├── createdAt (date de création)
  ├── updatedAt (date de modification)
  ├── UMLClass[]     ← relation : un projet a plusieurs classes
  └── UMLRelation[]  ← relation : un projet a plusieurs relations

UMLClass
  ├── id         (identifiant unique)
  ├── name       (nom de la classe, ex: "User")
  ├── stereotype (optionnel, ex: "entity")
  ├── color      (couleur de l'en-tête, ex: "#6B4EFF")
  ├── positionX  (position X sur le canvas)
  ├── positionY  (position Y sur le canvas)
  ├── projectId  (clé étrangère → Project)
  ├── UMLAttribute[] ← relation : une classe a plusieurs attributs
  └── UMLMethod[]    ← relation : une classe a plusieurs méthodes

UMLAttribute
  ├── id         (identifiant unique)
  ├── name       (nom de l'attribut, ex: "email")
  ├── type       (type, ex: "String", "Long")
  ├── visibility (public | private | protected)
  └── classId    (clé étrangère → UMLClass)

UMLMethod
  ├── id         (identifiant unique)
  ├── name       (nom de la méthode, ex: "login")
  ├── returnType (type de retour, ex: "Boolean", "void")
  ├── visibility (public | private | protected)
  └── classId    (clé étrangère → UMLClass)

UMLRelation
  ├── id          (identifiant unique)
  ├── type        (association | heritage | composition | agregation)
  ├── name        (nom de la relation, optionnel)
  ├── sourceLabel (cardinalité côté source, ex: "1")
  ├── targetLabel (cardinalité côté cible, ex: "0..*")
  ├── sourceId    (id de la classe source)
  ├── targetId    (id de la classe cible)
  └── projectId   (clé étrangère → Project)
```

> **Note :** `onDelete: Cascade` est défini sur toutes les relations. Cela signifie que si tu supprimes un `Project`, toutes ses classes, attributs, méthodes et relations sont automatiquement supprimés.

---

## 🔌 Routes API

### `POST /api/projects`

Crée un nouveau projet avec toutes ses classes et relations en une seule opération.

**Corps de la requête :**
```json
{
  "name": "Système e-commerce",
  "classes": [
    {
      "id": "id-123",
      "name": "User",
      "color": "#6B4EFF",
      "position": { "x": 100, "y": 150 },
      "stereotype": "entity",
      "attributes": [
        { "id": "attr-1", "name": "email", "type": "String", "visibility": "private" }
      ],
      "methods": [
        { "id": "meth-1", "name": "login", "returnType": "Boolean", "visibility": "public" }
      ]
    }
  ],
  "relations": [
    {
      "id": "rel-1",
      "type": "association",
      "source": "id-123",
      "target": "id-456",
      "name": "commande",
      "sourceLabel": "1",
      "targetLabel": "0..*"
    }
  ]
}
```

**Réponse (201) :**
```json
{
  "id": "clx123abc",
  "name": "Système e-commerce",
  "createdAt": "2026-01-01T00:00:00.000Z",
  "updatedAt": "2026-01-01T00:00:00.000Z"
}
```

---

### `PUT /api/projects/:id`

Met à jour un projet existant. Cette route **supprime tout l'ancien contenu** du projet et le recrée avec les nouvelles données. C'est plus simple que de calculer les différences.

**Corps de la requête :** même format que le POST.

**Réponse (200) :**
```json
{ "success": true }
```

---

## ⚙️ Configuration

### `prisma.config.ts`

Fichier de configuration de Prisma 7 à la racine du projet :

```ts
import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: env('DATABASE_URL'),
  },
})
```

### `src/lib/prisma.ts`

Instance Prisma partagée dans toute l'application. Utilise le pattern **singleton** pour éviter de créer trop de connexions en développement (à cause du hot reload de Next.js) :

```ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
```

---

## 🚀 Installation et démarrage

### Première installation (nouveau développeur)

```bash
# 1. Cloner le projet
git clone https://github.com/ton-compte/uml-studio.git
cd uml-studio

# 2. Installer les dépendances
npm install

# 3. Créer le fichier .env à partir du modèle
cp .env.example .env
# → Le fichier .env contient déjà la bonne valeur pour SQLite, rien à modifier

# 4. Générer le client Prisma
npx prisma generate

# 5. Créer la base de données locale
npx prisma db push

# 6. Lancer le projet
npm run dev
```

### Après un `git pull` qui modifie `schema.prisma`

Si un coéquipier a modifié le schéma Prisma, tu dois mettre à jour ta base locale :

```bash
npx prisma generate   # met à jour le client TypeScript
npx prisma db push    # met à jour la structure de ta base locale
```

---

## 🔄 Workflow de modification du schéma

> ⚠️ **Règle d'or : une seule personne modifie `schema.prisma` à la fois.**

```
1. Tu modifies prisma/schema.prisma
        ↓
2. npx prisma db push   (applique sur ta base locale)
        ↓
3. npx prisma generate  (met à jour le client TypeScript)
        ↓
4. git add prisma/schema.prisma
   git commit -m "db: description de la modification"
   git push
        ↓
5. Les autres font : git pull
                     npx prisma generate
                     npx prisma db push
```

---

## 📋 Variables d'environnement

### `.env` (ne jamais committer sur Git)

```env
DATABASE_URL="file:./prisma/database.db"
```

### `.env.example` (committer sur Git — sans vraies valeurs)

```env
# Copie ce fichier en .env
DATABASE_URL="file:./prisma/database.db"
```

> Pour SQLite, la valeur est la même pour tout le monde — pas de secret à partager.

---

## 📦 Fichiers ignorés par Git

Ces lignes doivent être présentes dans `.gitignore` :

```
# Variables d'environnement
.env
.env.local

# Base de données locale SQLite
prisma/database.db
prisma/database.db-journal
```

> Chaque développeur a sa **propre base de données locale**. On ne partage pas les données, seulement la **structure** (`schema.prisma`).

---

## 🐛 Erreurs fréquentes

| Erreur | Cause | Solution |
|---|---|---|
| `PrismaClient is not exported` | Client pas généré | `npx prisma generate` |
| `Table does not exist` | Base pas à jour | `npx prisma db push` |
| `P1012 url not supported` | URL dans `schema.prisma` | Retirer `url` du schéma, la mettre dans `prisma.config.ts` |
| `Cannot find module @prisma/client` | Dépendances manquantes | `npm install` puis `npx prisma generate` |

---

## 🔍 Commandes utiles

```bash
# Voir le contenu de la base dans un navigateur
npx prisma studio

# Régénérer le client après modification du schéma
npx prisma generate

# Synchroniser la base avec le schéma
npx prisma db push

# Réinitialiser complètement la base (⚠️ supprime toutes les données)
npx prisma db push --force-reset
```

---

*Dernière mise à jour : Mai 2026*