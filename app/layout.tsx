import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DiagramFlow — Diagrammes UML de classes",
  description: "Créez, collaborez et exportez des diagrammes de classes UML professionnels directement dans votre navigateur.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}