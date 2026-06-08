import AuthCard from "@/components/auth/AuthCard";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata = { title: "Inscription — UMLStudio" };

export default function RegisterPage() {
  return (
    <AuthCard title="Créer un compte" subtitle="Rejoignez UMLStudio gratuitement">
      <RegisterForm />
    </AuthCard>
  );
}