"use client";

import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import styles from "@/styles/dashboard/header.module.css";
import { BsPlusLg, BsBoxArrowRight } from "react-icons/bs";

function getInitials(firstName?: string | null, lastName?: string | null, name?: string | null, email?: string | null): string {
  if (firstName && lastName) {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  }
  if (name) {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return parts[0].slice(0, 2).toUpperCase();
  }
  if (email) return email.slice(0, 2).toUpperCase();
  return "??";
}

export default function Header() {
  const router = useRouter();
  const { data: session } = useSession();

  const user = session?.user as {
    firstName?: string;
    lastName?: string;
    name?: string;
    email?: string;
  } | undefined;

  const initials = getInitials(user?.firstName, user?.lastName, user?.name, user?.email);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  return (
    <header className={styles.header}>
      <div className={styles.actions}>

        <button
          className={styles.newBtn}
          onClick={() => router.push("/classe")}
        >
          <BsPlusLg size={16} />
          <span>Nouveau diagramme</span>
        </button>

        <div className={styles.contenairLogout}>
          <button
            className={styles.logoutBtn}
            onClick={handleLogout}
          >
            <BsBoxArrowRight size={18} />
            Déconnexion
          </button>
        </div>

        <div className={styles.avatar} title={user?.name ?? user?.email ?? ""}>
          {initials}
        </div>

      </div>
    </header>
  );
}