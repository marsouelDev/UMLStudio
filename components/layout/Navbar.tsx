import Link from "next/link";
import styles from "@/styles/layout/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoIcon}>D</div>
        <span className={styles.logoText}>
          <span className={styles.logoDark}>UML</span>
          <span className={styles.logoAccent}>Studio</span>
        </span>
      </Link>
    </header>
  );
}