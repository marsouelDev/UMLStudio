"use client";

import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/styles/export/export-navbar.module.css";
// 1. Importer useRouter depuis next/navigation
import { useRouter } from "next/navigation";

export default function ExportNavbar() {

  const router = useRouter();

  return (
    <header className={styles.navbar}>
      {/* Logo Group */}
      <div className={styles.logo}>
        <Image
          src="/Logo.jpeg"
          alt="UMLStudio logo"
          width={32}
          height={32}
          style={{ borderRadius: '6px', objectFit: 'cover' }}
          priority
        />
        <span className={styles.logoText}>
          <span className={styles.logoDark}>UML</span>
          <span className={styles.logoAccent}>Studio</span>
        </span>
      </div>

      <div className={styles.actions}>
       
        <button 
          className={styles.backBtn}
          onClick={() => router.push('/classe')}
        >
          <i className="bi bi-arrow-left"></i> Retour
        </button>
        <button className={styles.saveBtn}>
          <i className="bi bi-check2"></i> Sauvegardé
        </button>
        <div className={styles.avatar}>MN</div>
      </div>
    </header>
  );
}
