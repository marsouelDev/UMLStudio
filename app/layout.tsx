import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UML Studio',
  description: 'Créez vos diagrammes de classes UML',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}