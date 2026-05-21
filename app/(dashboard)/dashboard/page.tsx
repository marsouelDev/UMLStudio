"use client";

import { useState } from "react";
// CORRECTION : "Sidebar" et non "Siderbar"
import  Sidebar  from "@/components/dashboard/Sidebar"; 
import Header from "@/components/dashboard/Header";
import StatsCards from "@/components/dashboard/StatsCards";
import RecentDiagrams from "@/components/dashboard/RecentDiagrams";
import styles from "@/styles/dashboard/dashboard.module.css";
import { BsSearch } from "react-icons/bs";

export default function DashboardPage() {
  const [search, setSearch] = useState("");
  
  return (
    <div className={styles.layout}>
      {/* CORRECTION : Utilisation de <Sidebar /> */}
      <Sidebar /> 
      
      <main className={styles.main}>
        <Header />
        <div className={styles.content}>
          <div className={styles.titleRow}>
            <h1 className={styles.pageTitle}>Mes diagrammes</h1>
            <div className={styles.search}>
              <BsSearch className={styles.searchIcon} size={14} />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                className={styles.searchInput}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <StatsCards />
          <RecentDiagrams search={search} />
        </div>
      </main>
    </div>
  );
}