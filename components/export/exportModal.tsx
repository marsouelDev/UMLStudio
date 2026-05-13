"use client"; 

import ExportNavbar from "./exportNavbar";
import styles from "@/styles/export/export-modal.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useRouter } from "next/navigation";

const formats = [
  {
    id: "png",
    icon: "bi-file-image",
    label: "PNG",
    description: "Image haute résolution",
  },
  {
    id: "svg",
    icon: "bi-vector-pen",
    label: "SVG",
    description: "Vecteur scalable",
  },
  {
    id: "pdf",
    icon: "bi-file-earmark-text",
    label: "PDF",
    description: "Document imprimable",
  },
  {
    id: "sql",
    icon: "bi-code-slash",
    label: "SQL",
    description: "Script CREATE TABLE",
  },
];

export default function ExportModal() {
  // 3. Initialiser le routeur
  const router = useRouter();

  return (
    <div className={styles.page}>
      <ExportNavbar />

      <div className={styles.overlay}>
        <div className={styles.modal}>
          <h2 className={styles.title}>Exporter le diagramme</h2>
          <p className={styles.subtitle}>Choisissez le format d&apos;export souhaité</p>

          <div className={styles.grid}>
            {formats.map((format) => (
              <button key={format.id} className={styles.formatCard}>
                <i className={`bi ${format.icon} ${styles.icon}`}></i>
                <span className={styles.label}>{format.label}</span>
                <span className={styles.description}>{format.description}</span>
              </button>
            ))}
          </div>

          <div className={styles.footer}>
            {/* 4. Ajouter l'action de retour vers la route /classe au clic */}
            <button 
              className={styles.cancelBtn}
              onClick={() => router.push('/classe')}
            >
              Annuler
            </button>
            <button className={styles.downloadBtn}>Télécharger</button>
          </div>
        </div>
      </div>
    </div>
  );
}
