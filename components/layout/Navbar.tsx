import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/layout/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/Logo.jpeg"
          alt="UMLStudio logo"
          width={32}
          height={32}
          style={{ borderRadius: "6px", objectFit: "cover" }}
        />
        <span className={styles.logoText}>
          <span className={styles.logoDark}>UML</span>
          <span className={styles.logoAccent}>Studio</span>
        </span>
      </Link>
    </header>
  );
}