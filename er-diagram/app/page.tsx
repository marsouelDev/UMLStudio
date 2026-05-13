/**
 * EXPLICATION page.tsx
 * 
 * C'est la page d'accueil du site.
 * 
 * En Next.js, chaque dossier avec page.tsx crée une route.
 * app/page.tsx → http://localhost:3000/
 * 
 * 'use client' est nécessaire pour utiliser les Hooks React
 * (useState, useEffect, etc.)
 */

'use client';

import ERDiagram from './components/ERDiagram';

export default function Home() {
  return (
    <main>
      <ERDiagram />
    </main>
  );
}