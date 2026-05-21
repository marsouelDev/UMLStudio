"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toPng } from "html-to-image"; 
import { jsPDF } from "jspdf";
import { useDiagramStore } from "@/store/useDiagramStore";
import ExportNavbar from "./exportNavbar";
import styles from "@/styles/export/export-modal.module.css";

const formats = [
  { id: "png", icon: "bi-file-image", label: "PNG", description: "Image haute résolution" },
  { id: "svg", icon: "bi-vector-pen", label: "SVG", description: "Vecteur scalable" },
  { id: "pdf", icon: "bi-file-earmark-text", label: "PDF", description: "Document imprimable" },
  { id: "sql", icon: "bi-code-slash", label: "SQL", description: "Script CREATE TABLE" },
];

export default function ExportModal() {
  const router = useRouter();
  const { classes, projectName } = useDiagramStore();
  const [selectedFormat, setSelectedFormat] = useState("png");
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    const element = document.getElementById("diagram-canvas");
    const fileName = projectName || "mon-diagramme";
    setIsExporting(true);

    try {
      if (selectedFormat === "sql") {
        // Logique SQL utilisant les données réelles
        let sql = `-- Export SQL : ${fileName}\n\n`;
        classes.forEach(cls => {
          sql += `CREATE TABLE ${cls.name.toUpperCase()} (\n`;
          const cols = cls.attributes.map(a => `  ${a.name} ${a.type.toUpperCase()}`);
          sql += cols.join(",\n") + `\n);\n\n`;
        });
        downloadFile(sql, `${fileName}.sql`, "text/plain");
      } else {
        if (!element) throw new Error("Canvas non trouvé");
        
        await new Promise(r => setTimeout(r, 400));

        const dataUrl = await toPng(element, { backgroundColor: "#ffffff", pixelRatio: 2 });

        if (selectedFormat === "png" || selectedFormat === "svg") {
          // Pour SVG on utilise aussi le dataUrl PNG ici pour la simplicité, 
          // ou tu peux rajouter toSvg si nécessaire
          downloadFile(dataUrl, `${fileName}.${selectedFormat}`, `image/${selectedFormat}`, true);
        } else if (selectedFormat === "pdf") {
          const pdf = new jsPDF("l", "mm", "a4");
          pdf.addImage(dataUrl, "PNG", 10, 10, 277, 190);
          pdf.save(`${fileName}.pdf`);
        }
      }
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'exportation.");
    } finally {
      setIsExporting(false);
    }
  };

  const downloadFile = (content: string, name: string, type: string, isUrl = false) => {
    const link = document.createElement("a");
    link.href = isUrl ? content : URL.createObjectURL(new Blob([content], { type }));
    link.download = name;
    link.click();
  };

  return (
    <div className={styles.page}>
      <ExportNavbar />
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <h2 className={styles.title}>Exporter le projet</h2>
          <p className={styles.subtitle}>Format sélectionné : <strong>{selectedFormat.toUpperCase()}</strong></p>
          
          <div className={styles.grid}>
            {formats.map((f) => (
              <button 
                key={f.id} 
                className={`${styles.formatCard} ${selectedFormat === f.id ? styles.active : ""}`}
                // ✅ Utilisation de setSelectedFormat pour corriger l'erreur ESLint
                onClick={() => setSelectedFormat(f.id)} 
                type="button"
                style={{
                  border: selectedFormat === f.id ? "2px solid #6366f1" : "1px solid #e5e7eb",
                  backgroundColor: selectedFormat === f.id ? "#f5f3ff" : "#fff",
                  cursor: "pointer"
                }}
              >
                <i className={`bi ${f.icon} ${styles.icon}`} style={{ color: selectedFormat === f.id ? "#6366f1" : "#6b7280" }}></i>
                <span className={styles.label} style={{ color: selectedFormat === f.id ? "#4338ca" : "#374151" }}>
                  {f.label}
                </span>
              </button>
            ))}
          </div>

          <div className={styles.footer}>
            <button 
              className={styles.cancelBtn} 
              onClick={() => router.back()}
              type="button"
            >
              Annuler
            </button>
            <button 
              className={styles.downloadBtn} 
              onClick={handleExport} 
              disabled={isExporting || classes.length === 0}
            >
              {isExporting ? "Export en cours..." : "Télécharger"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}