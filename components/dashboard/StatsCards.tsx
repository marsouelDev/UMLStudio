import styles from "@/styles/dashboard/stats-cards.module.css";
import { useStats } from "@/app/hooks/useStats";
import { BsDiagram3, BsCodeSquare, BsCloudArrowUp } from "react-icons/bs";

export default function StatsCards() {
  const { stats, isLoading } = useStats();

  const cards = [
    {
      label: "Diagrammes réalisés",
      value: stats?.totalProjects ?? "—",
      sub: stats?.newThisMonth ? `+${stats.newThisMonth} ce mois` : "",
      color: "green",
      icon: <BsDiagram3 size={20} />,
    },
    {
      label: "Classes créées",
      value: stats?.totalClasses ?? "—",
      sub: "",
      color: "blue",
      icon: <BsCodeSquare size={20} />,
    },
    {
      label: "Exports",
      value: stats?.totalExports ?? "—",
      sub: "",
      color: "pink",
      icon: <BsCloudArrowUp size={20} />,
    },
  ];

  return (
    <div className={styles.grid}>
      {cards.map((stat) => (
        <div key={stat.label} className={`${styles.card} ${styles[stat.color]}`}>
          <div className={styles.iconWrap}>{stat.icon}</div>
          <p className={styles.label}>{stat.label}</p>
          <p className={styles.value}>
            {isLoading ? (
              <span className={styles.skeleton} />
            ) : (
              <>
                {stat.value}
                {stat.sub && <span className={styles.sub}> {stat.sub}</span>}
              </>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}