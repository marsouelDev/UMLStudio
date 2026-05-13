/**
 * EXPLICATION STRUCTURE NEXT.JS
 * 
 * Next.js 13+ utilise l'APP ROUTER (dans le dossier app/)
 * 
 * - layout.tsx = Template partagé entre toutes les pages
 * - page.tsx = La page elle-même
 * 
 * Arborescence = Routes
 * app/layout.tsx → s'applique à TOUTES les pages
 * app/page.tsx → Route /
 * app/dashboard/page.tsx → Route /dashboard
 */

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Diagramme ER - Système E-commerce',
  description: 'Visualisation interactive d\'un modèle entité-relation pour un système e-commerce',
  keywords: ['ER Diagram', 'Database', 'E-commerce', 'React', 'Next.js'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}