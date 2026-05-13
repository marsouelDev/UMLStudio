import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import StatsCards from "@/components/dashboard/StatsCards";
import RecentDiagrams from "@/components/dashboard/RecentDiagrams";
import styles from "@/styles/dashboard/dashboard.module.css";
// 1. Importer l'icône de recherche Bootstrap
import { BsSearch } from "react-icons/bs";

export default function DashboardPage() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <div className={styles.content}>

          <div className={styles.titleRow}>
            <h1 className={styles.pageTitle}>Mes diagrammes</h1>
            <div className={styles.search}>
          
              <BsSearch className={styles.searchIcon} size={14} />
              <input
                type="text"
                placeholder="Rechercher..."
                className={styles.searchInput}
              />
            </div>
          </div>

          <StatsCards />
          <RecentDiagrams />
        </div>
      </div>
    </div>
  );
}
