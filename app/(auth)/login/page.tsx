
import { Suspense } from "react";
import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";

export const metadata = { title: "Connexion — UMLStudio" };

export default function LoginPage() {
  return (
    <AuthCard title="Connexion" subtitle="Accédez à vos diagrammes UML" italic>
     
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </AuthCard>
  );
}
