import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthCard
      title="Connexion"
      subtitle="Accédez à vos diagrammes UML"
      italic
    >
      <LoginForm />
    </AuthCard>
  );
}