"use client";
import { useRouter } from "next/navigation";
import styles from "@/styles/dashboard/header.module.css";
import { BsPlusLg, BsBoxArrowRight } from "react-icons/bs";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.actions}>

        <button
          className={styles.newBtn}
          onClick={() => router.push('/classe')}
        >
          <BsPlusLg size={16} />
          <span>Nouveau diagramme</span>
        </button>

        <div className={styles.contenairLogout}>
          <button 
          className={styles.logoutBtn}
          onClick={() => router.push('/login')}
          >
            <BsBoxArrowRight size={18} />
            Déconnexion
          </button>
        </div>

        <div className={styles.avatar}>MN</div>
      </div>
    </header>
  );
}