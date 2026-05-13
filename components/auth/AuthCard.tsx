import styles from "@/styles/auth/AuthCard.module.css";

interface AuthCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  italic?: boolean;
}

export default function AuthCard({ title, subtitle, children, italic }: AuthCardProps) {
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