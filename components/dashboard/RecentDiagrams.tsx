"use client";

import { useRouter } from "next/navigation";
import styles from "@/styles/dashboard/recent-diagrams.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const diagrams = [
  {
    id: "diagram-ecommerce",
    title: "Système e-commerce",
    modified: "Modifié il y a 2h",
    classes: "8 classes",
    tag: "E-commerce",
    color: "blue",
    tagClass: "blueTag",
    label: "User",
  },
  {
    id: "diagram-rh",
    title: "Gestion des employés",
    modified: "Modifié hier",
    classes: "5 classes",
    tag: "RH",
    color: "green",
    tagClass: "greenTag",
    label: "Employe",
  },
  {
    id: "diagram-cms",
    title: "Blog CMS",
    modified: "Modifié il y a 3j",
    classes: "6 classes",
    tag: "CMS",
    color: "teal",
    tagClass: "tealTag",
    label: "Article",
  },
];

export default function RecentDiagrams() {
  const router = useRouter();

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Récents</h2>
      <div className={styles.grid}>
        {diagrams.map((diagram) => (
          <div key={diagram.id} className={styles.card}>
            <div className={`${styles.preview} ${styles[diagram.color]}`}>
              <div className={styles.previewBox}>
                <div className={styles.previewHeader}>
                  <span className={styles.previewHeaderText}>{diagram.label}</span>
                </div>
                <div className={styles.previewBody}>
                  <div className={styles.previewLine} />
                  <div className={styles.previewLine} />
                  <div className={styles.previewLine} />
                </div>
              </div>
              
              <div className={styles.previewBox}>
                <div className={styles.previewHeader}>
                  <span className={styles.previewHeaderText}>Classe</span>
                </div>
                <div className={styles.previewBody}>
                  <div className={styles.previewLine} />
                  <div className={styles.previewLine} />
                </div>
              </div>
            </div>

            <div className={styles.info}>
              <p className={styles.diagramTitle}>{diagram.title}</p>
              <p className={styles.meta}>{diagram.modified} • {diagram.classes}</p>
            </div>

            <div className={styles.footer}>
              <span className={`${styles.tag} ${styles[diagram.tagClass]}`}>
                {diagram.tag}
              </span>
              <button 
                className={styles.openBtn}
                onClick={() => router.push('/classe')}
              >
                <i className="bi bi-folder2-open me-1"></i> Ouvrir
              </button>
            </div>
          </div>
        ))}

        <div 
          className={styles.newCard}
          onClick={() => router.push('/classe')}
          style={{ cursor: 'pointer' }}
        >
          <i className={`bi bi-plus-lg ${styles.plus}`}></i>
          <p className={styles.newLabel}>Nouveau diagramme</p>
        </div>
      </div>
    </div>
  );
}
