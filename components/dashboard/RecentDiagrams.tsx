"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/dashboard/recent-diagrams.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

interface Project {
  id: string;
  name: string;
  updatedAt: string;
  classes: { id: string }[];
  relations: { id: string }[];
}

const COLORS = ["blue", "green", "teal", "purple", "orange"];
const TAG_CLASSES = ["blueTag", "greenTag", "tealTag", "purpleTag", "orangeTag"];

function timeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (diff < 60) return "Modifié à l'instant";
  if (diff < 3600) return `Modifié il y a ${Math.floor(diff / 60)}min`;
  if (diff < 86400) return `Modifié il y a ${Math.floor(diff / 3600)}h`;
  if (diff < 604800) return `Modifié il y a ${Math.floor(diff / 86400)}j`;
  return `Modifié le ${date.toLocaleDateString("fr-FR")}`;
}

export default function RecentDiagrams({ search = "" }: { search?: string }) {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur de chargement");
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  //  Filtre par recherche
  const filtered = projects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className={styles.section}>
        <h2 className={styles.title}>Récents</h2>
        <p style={{ color: "#6b7280", fontSize: "14px" }}>Chargement...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.section}>
        <h2 className={styles.title}>Récents</h2>
        <p style={{ color: "#ef4444", fontSize: "14px" }}>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>
        {search ? `Résultats pour "${search}"` : "Récents"}
      </h2>
      <div className={styles.grid}>

        {filtered.length === 0 && search && (
          <p style={{ color: "#6b7280", fontSize: "14px", gridColumn: "1/-1" }}>
            Aucun diagramme trouvé pour &quot;{search}&quot;.
          </p>
        )}

        {filtered.length === 0 && !search && (
          <p style={{ color: "#6b7280", fontSize: "14px", gridColumn: "1/-1" }}>
            Aucun diagramme pour l&apos;instant.
          </p>
        )}

        {filtered.map((project, index) => {
          const color = COLORS[index % COLORS.length];
          const tagClass = TAG_CLASSES[index % TAG_CLASSES.length];
          const label = project.name.charAt(0).toUpperCase();

          return (
            <div key={project.id} className={styles.card}>
              <div className={`${styles.preview} ${styles[color]}`}>
                <div className={styles.previewBox}>
                  <div className={styles.previewHeader}>
                    <span className={styles.previewHeaderText}>{label}</span>
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
                <p className={styles.diagramTitle}>{project.name}</p>
                <p className={styles.meta}>
                  {timeAgo(project.updatedAt)} • {project.classes.length} classe{project.classes.length > 1 ? "s" : ""}
                </p>
              </div>

              <div className={styles.footer}>
                <span className={`${styles.tag} ${styles[tagClass]}`}>
                  UML
                </span>
                <button
                  className={styles.openBtn}
                  onClick={() => router.push(`/classe?projectId=${project.id}`)}
                >
                  <i className="bi bi-folder2-open me-1"></i> Ouvrir
                </button>
              </div>
            </div>
          );
        })}

        <div
          className={styles.newCard}
          onClick={() => router.push("/classe")}
        >
          <i className={`bi bi-plus-lg ${styles.plus}`}></i>
          <p className={styles.newLabel}>Nouveau diagramme</p>
        </div>

      </div>
    </div>
  );
}