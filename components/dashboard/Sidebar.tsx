"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { BsGrid, BsPlusLg, BsGear, BsDiagram3 } from "react-icons/bs";
import styles from "@/styles/dashboard/sidebar.module.css";
import { useProjects, type Project } from "@/app/hooks/useProjects"; // 

function getInitials(
  firstName?: string | null,
  lastName?:  string | null,
  name?:      string | null,
  email?:     string | null,
): string {
  if (firstName && lastName) return `${firstName[0]}${lastName[0]}`.toUpperCase();
  if (name) {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return parts[0].slice(0, 2).toUpperCase();
  }
  if (email) return email.slice(0, 2).toUpperCase();
  return "??";
}

function getFullName(
  firstName?: string | null,
  lastName?:  string | null,
  name?:      string | null,
  email?:     string | null,
): string {
  if (firstName && lastName) return `${firstName} ${lastName}`;
  if (name) return name;
  if (email) return email;
  return "Utilisateur";
}

export default function Sidebar() {
  const [active, setActive] = useState("Mes diagrammes");
  const router = useRouter();
  const { data: session } = useSession();
  const { projects, isLoading } = useProjects();

  const user = session?.user;
  const initials = getInitials(user?.firstName, user?.lastName, user?.name, user?.email);
  const fullName = getFullName(user?.firstName, user?.lastName, user?.name, user?.email);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  return (
    <aside className={styles.sidebar}>

      <div className={styles.logo}>
        <Image src="/Logo.jpeg" alt="UMLStudio logo" width={32} height={32} />
        <span className={styles.logoText}>
          <span className={styles.logoDark}>UML</span>
          <span className={styles.logoAccent}>Studio</span>
        </span>
      </div>

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
          onClick={() => router.push("/classe")}
        >
          <BsPlusLg size={16} />
          Nouveau
        </button>
      </nav>

      <div className={styles.section}>
        <p className={styles.sectionTitle}>PROJETS</p>

        {isLoading ? (
          <p className={styles.loadingText}>Chargement…</p>
        ) : projects.length === 0 ? (
          <p className={styles.emptyText}>Aucun projet</p>
        ) : (
          projects.map((project: Project) => ( //  type explicite
            <button
              key={project.id}
              className={`${styles.projectItem} ${active === project.id ? styles.projectItemActive : ""}`}
              onClick={() => {
                setActive(project.id);
                router.push(`/classe?projectId=${project.id}`);
              }}
            >
              <BsDiagram3 size={14} />
              {project.name}
            </button>
          ))
        )}
      </div>

      <div className={styles.bottom}>
        <div className={styles.user}>
          <div className={styles.userAvatar}>{initials}</div>
          <span className={styles.userName}>{fullName}</span>
        </div>
        <button className={styles.settings} onClick={handleLogout}>
          <BsGear size={14} />
          Paramètres
        </button>
      </div>

    </aside>
  );
}