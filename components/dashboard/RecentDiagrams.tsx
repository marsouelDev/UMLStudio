import styles from "@/styles/dashboard/recent-diagrams.module.css";

const diagrams = [
  {
    title: "Système e-commerce",
    modified: "Modifié il y a 2h",
    classes: "8 classes",
    tag: "E-commerce",
    color: "blue",
    tagClass: "blueTag",
    label: "User",
  },
  {
    title: "Gestion des employés",
    modified: "Modifié hier",
    classes: "5 classes",
    tag: "RH",
    color: "green",
    tagClass: "greenTag",
    label: "Employe",
  },
  {
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
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Récents</h2>
      <div className={styles.grid}>
        {diagrams.map((diagram) => (
          <div key={diagram.title} className={styles.card}>
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
              <button className={styles.openBtn}>Ouvrir</button>
            </div>
          </div>
        ))}

        <div className={styles.newCard}>
          <span className={styles.plus}>+</span>
          <p className={styles.newLabel}>Nouveau diagramme</p>
        </div>
      </div>
    </div>
  );
}