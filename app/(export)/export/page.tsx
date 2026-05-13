import ExportModal from "@/components/export/exportModal";

export default function ExportPage() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#6b7280",
      display: "flex",
      flexDirection: "column"
    }}>
      <ExportModal />
    </div>
  );
}