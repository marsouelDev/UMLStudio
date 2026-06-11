"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { jsPDF } from "jspdf";
import { useDiagramStore } from "@/store/useDiagramStore";
import { exportDiagramToCanvas, canvasToDataUrl } from "@/app/utils/diagramExporter";
import ExportNavbar from "./exportNavbar";
import styles from "@/styles/export/export-modal.module.css";

const formats = [
  { id: "png", icon: "bi-file-image",        label: "PNG", description: "Image haute résolution" },
  { id: "svg", icon: "bi-vector-pen",         label: "SVG", description: "Vecteur scalable" },
  { id: "pdf", icon: "bi-file-earmark-text",  label: "PDF", description: "Document imprimable" },
  { id: "sql", icon: "bi-code-slash",         label: "SQL", description: "Script CREATE TABLE" },
];

export default function ExportModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get("projectId");

  const { classes, relations, projectName } = useDiagramStore();
  const [selectedFormat, setSelectedFormat] = useState("png");
  const [isExporting, setIsExporting] = useState(false);

  // ✅ Enregistre l'export en base pour le comptage stats
  const trackExport = async (format: string) => {
    try {
      await fetch("/api/exports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, format }),
      });
    } catch (err) {
      // Non bloquant — si le tracking échoue, l'export continue quand même
      console.warn("Tracking export échoué:", err);
    }
  };

  const downloadDataUrl = (dataUrl: string, filename: string) => {
    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadTextFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = filename;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleExport = async () => {
    const fileName = projectName || "mon-diagramme";
    setIsExporting(true);

    try {
      // Export SQL
      if (selectedFormat === "sql") {
        let sql = `-- Export SQL : ${fileName}\n-- Généré le ${new Date().toLocaleDateString("fr-FR")}\n\n`;
        classes.forEach((cls) => {
          sql += `CREATE TABLE ${cls.name.toUpperCase()} (\n`;
          const cols = cls.attributes.map(
            (a: { name: string; type: string }) =>
              `  ${a.name} ${a.type.toUpperCase()}`
          );
          sql += cols.join(",\n") + `\n);\n\n`;
        });
        downloadTextFile(sql, `${fileName}.sql`);
        await trackExport("sql"); // ✅ tracker
        return;
      }

      // Construire les données pour l'export canvas
      const exportClasses = classes.map((cls) => ({
        id: cls.id,
        name: cls.name,
        stereotype: cls.stereotype ?? null,
        color: cls.color ?? "#6B4EFF",
        positionX: cls.position?.x ?? 0,
        positionY: cls.position?.y ?? 0,
        attributes: cls.attributes ?? [],
        methods: cls.methods ?? [],
      }));

      const exportRelations = relations.map((rel) => ({
        id: rel.id,
        type: rel.type,
        name: rel.name ?? null,
        sourceLabel: rel.sourceLabel ?? null,
        targetLabel: rel.targetLabel ?? null,
        sourceId: rel.source,
        targetId: rel.target,
      }));

      const canvas = await exportDiagramToCanvas(exportClasses, exportRelations);
      const dataUrl = canvasToDataUrl(canvas);

      if (selectedFormat === "png") {
        downloadDataUrl(dataUrl, `${fileName}.png`);

      } else if (selectedFormat === "svg") {
        const { width, height } = canvas;
        const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${width / 2}" height="${height / 2}">
  <image href="${dataUrl}" width="${width / 2}" height="${height / 2}"/>
</svg>`;
        const blob = new Blob([svgContent], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        downloadDataUrl(url, `${fileName}.svg`);
        URL.revokeObjectURL(url);

      } else if (selectedFormat === "pdf") {
        const imgWidth = canvas.width / 2;
        const imgHeight = canvas.height / 2;
        const orientation = imgWidth > imgHeight ? "landscape" : "portrait";
        const pdf = new jsPDF({ orientation, unit: "px", format: [imgWidth, imgHeight] });
        pdf.addImage(dataUrl, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save(`${fileName}.pdf`);
      }

      await trackExport(selectedFormat); // ✅ tracker

    } catch (err) {
      console.error("Erreur d'export:", err);
      alert(`Erreur : ${err instanceof Error ? err.message : "Erreur inconnue"}`);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className={styles.page}>
      <ExportNavbar />
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <h2 className={styles.title}>Exporter le projet</h2>
          <p className={styles.subtitle}>
            Format sélectionné : <strong>{selectedFormat.toUpperCase()}</strong>
          </p>

          <div className={styles.grid}>
            {formats.map((f) => (
              <button
                key={f.id}
                className={`${styles.formatCard} ${selectedFormat === f.id ? styles.active : ""}`}
                onClick={() => setSelectedFormat(f.id)}
                type="button"
                style={{
                  border: selectedFormat === f.id ? "2px solid #6366f1" : "1px solid #e5e7eb",
                  backgroundColor: selectedFormat === f.id ? "#f5f3ff" : "#fff",
                  cursor: "pointer",
                }}
              >
                <i
                  className={`bi ${f.icon} ${styles.icon}`}
                  style={{ color: selectedFormat === f.id ? "#6366f1" : "#6b7280" }}
                />
                <span
                  className={styles.label}
                  style={{ color: selectedFormat === f.id ? "#4338ca" : "#374151" }}
                >
                  {f.label}
                </span>
                <span className={styles.description}>{f.description}</span>
              </button>
            ))}
          </div>

          <div className={styles.footer}>
            <button className={styles.cancelBtn} onClick={() => router.back()} type="button">
              Annuler
            </button>
            <button
              className={styles.downloadBtn}
              onClick={handleExport}
              disabled={isExporting}
            >
              {isExporting ? "Export en cours..." : "Télécharger"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}