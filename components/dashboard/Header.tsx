import styles from "@/styles/dashboard/header.module.css";
// Importer les icônes Bootstrap
import { BsPlusLg, BsBoxArrowRight } from "react-icons/bs";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.actions}>
       
        <button className={styles.newBtn}>
          <BsPlusLg size={16} />
          <span>Nouveau diagramme</span>
        </button>

        <div className={styles.contenairLogout}>
       
          <button className={styles.logoutBtn}>
            <BsBoxArrowRight size={18} />
            Déconnexion
          </button>
        </div>

        <div className={styles.avatar}>MN</div>
      </div>
    </header>
  );
}
