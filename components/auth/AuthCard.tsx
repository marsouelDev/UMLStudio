// components/auth/AuthCard.tsx
import styles from "@/styles/auth/AuthCard.module.css";

interface AuthCardProps {
  title: string;
  subtitle?: string;
  italic?: boolean;
  children: React.ReactNode;
}

export default function AuthCard({ title, subtitle, italic, children }: AuthCardProps) {
  return (
    <div className={styles.card}>
      <h1 className={italic ? `${styles.title} ${styles.titleItalic}` : styles.title}>
        {title}
      </h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {children}
    </div>
  );
}
