import styles from "@/styles/dashboard/stats-cards.module.css";

const stats = [
  {
    label: "Nombre de diagramme réalisés",
    value: "12",
    sub: "+3 ce mois",
    color: "green",
  },
  {
    label: "Classes créées",
    value: "87",
    sub: "",
    color: "blue",
  },
  {
    label: "Exports",
    value: "24",
    sub: "",
    color: "pink",
  },
];

export default function StatsCards() {
  return (
    <div className={styles.grid}>
      {stats.map((stat) => (
        <div key={stat.label} className={`${styles.card} ${styles[stat.color]}`}>
          <p className={styles.label}>{stat.label}</p>
          <p className={styles.value}>
            {stat.value}
            {stat.sub && <span className={styles.sub}> {stat.sub}</span>}
          </p>
        </div>
      ))}
    </div>
  );
}