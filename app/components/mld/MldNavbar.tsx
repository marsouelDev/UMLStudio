"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsDatabase, BsDownload, BsArrowLeft } from "react-icons/bs";

type Tab = "MCD" | "MLD" | "SQL";
type Props = { activeTab: Tab };
const tabs: Tab[] = ["MCD", "MLD", "SQL"];

export default function MldNavbar({ activeTab }: Props) {
  const router = useRouter();

  return (
    <div style={{
      backgroundColor: "white",
      borderBottom: "1px solid #e5e7eb",
      padding: "0 16px",
      height: "48px",
      display: "flex",
      alignItems: "center",
      gap: "16px"
    }}>

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Image
          src="/logo.jpeg"
          alt="UMLStudio Logo"
          width={28}
          height={28}
          priority
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#111827", fontWeight: "700", fontSize: "14px", lineHeight: "1" }}>
            UML<span style={{ color: "#150f68", fontWeight: "700", fontSize: "14px" }}>Studio</span>
          </span>
          <span style={{ color: "#4f46e5", fontSize: "9px", lineHeight: "1", display: "flex", alignItems: "center", gap: "4px", marginTop: "1px" }}>
            <BsDatabase size={10} />
            Modèle Logique de Données
          </span>
        </div>
      </div>

      <div style={{ width: "1px", height: "28px", backgroundColor: "#e5e7eb", margin: "0 8px" }} />

      {/* Tabs */}
      <div style={{ display: "flex", alignItems: "center", gap: "4px", flex: 1, justifyContent: "center" }}>
        {tabs.map((tab) => (
          <Link
            key={tab}
            href={`/classe/${tab.toLowerCase()}`}
            style={{
              padding: "4px 16px",
              fontSize: "12px",
              fontFamily: "monospace",
              borderRadius: "6px",
              border: activeTab === tab ? "1px solid #4f46e5" : "1px solid #e5e7eb",
              backgroundColor: activeTab === tab ? "#4f46e5" : "transparent",
              color: activeTab === tab ? "white" : "#9ca3af",
              fontWeight: activeTab === tab ? "700" : "400",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {tab}
          </Link>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>

        {/* Exporter */}
        <button style={{
          backgroundColor: "#4f46e5",
          border: "1px solid #4338ca",
          color: "white",
          fontSize: "12px",
          padding: "6px 12px",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          cursor: "pointer",
        }}>
          <BsDownload size={14} />
          <span>Exporter</span>
        </button>

        {/* Retour → /classe */}
        <button
          onClick={() => router.push('/classe')}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f3f4f6";
            (e.currentTarget as HTMLButtonElement).style.color = "#111827";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f9fafb";
            (e.currentTarget as HTMLButtonElement).style.color = "#4b5563";
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "28px",
            height: "28px",
            borderRadius: "6px",
            border: "1px solid #e5e7eb",
            color: "#4b5563",
            backgroundColor: "#f9fafb",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
        >
          <BsArrowLeft size={16} />
        </button>

      </div>
    </div>
  );
}