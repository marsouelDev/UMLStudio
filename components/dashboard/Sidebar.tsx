"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BsGrid,
  BsPlusLg,
  BsCart3,
  BsPeople,
  BsFileEarmarkText,
  BsGear
} from "react-icons/bs";
import styles from "@/styles/dashboard/sidebar.module.css";

const projects = [
  { name: "E-commerce", icon: <BsCart3 size={14} /> },
  { name: "Gestion RH", icon: <BsPeople size={14} /> },
  { name: "Blog CMS",   icon: <BsFileEarmarkText size={14} /> },

];

export default function Sidebar() {
  const [active, setActive] = useState("Mes diagrammes");
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image src="/Logo.jpeg" alt="UMLStudio logo" width={32} height={32} />
        <span className={styles.logoText}>
          <span className={styles.logoDark}>UML</span>
          <span className={styles.logoAccent}>Studio</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <button
          className={`${styles.navItem} ${active === "Mes diagrammes" ? styles.navItemActive : ""}`}
          onClick={() => setActive("Mes diagrammes")}
        >
          <BsGrid size={16} />
          Mes diagrammes
        </button>
        <button
          className={styles.navItemNew}
          onClick={() => router.push('/classe')}
        >
          <BsPlusLg size={16} />
          Nouveau
        </button>
      </nav>

      {/* Projets */}
      <div className={styles.section}>
        <p className={styles.sectionTitle}>PROJETS</p>
        {projects.map((project) => (
          <button
            key={project.name}
            className={`${styles.projectItem} ${active === project.name ? styles.projectItemActive : ""}`}
            onClick={() => setActive(project.name)}
          >
            {project.icon}
            {project.name}
          </button>
        ))}
      </div>

      {/* Bas de sidebar */}
      <div className={styles.bottom}>
        <div className={styles.user}>
          <div className={styles.userAvatar}>MN</div>
          <span className={styles.userName}>Marsouel Ngouadjo</span>
        </div>
        <button className={styles.settings}>
          <BsGear size={14} />
          Paramètres
        </button>
      </div>
    </aside>
  );
}