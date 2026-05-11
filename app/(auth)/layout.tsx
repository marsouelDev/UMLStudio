import Navbar from "@/components/layout/Navbar";
import "@/styles/auth/auth-layout.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-layout">
      <Navbar />
      <main className="auth-main">{children}</main>
    </div>
  );
}