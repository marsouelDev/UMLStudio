"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import FacebookButton from "@/components/auth/FacebookButton";
import styles from "@/styles/auth/LoginForm.module.css";

interface FormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      console.log("Connexion :", formData);
      // await signIn(formData)
      router.push('/dashboard');
    } catch {
      setError("Email ou mot de passe incorrect.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>

      {/* Email */}
      <div className={styles.field}>
        <label className={styles.label}>Adresse e-mail</label>
        <Input
          name="email"
          type="email"
          placeholder="votre@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Mot de passe */}
      <div className={styles.field}>
        <label className={styles.label}>Mot de passe</label>
        <Input
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div className={styles.forgotRow}>
          <Link href="/forgot-password" className={styles.forgotLink}>
            Mot de passe oublié ?
          </Link>
        </div>
      </div>

      {/* Erreur */}
      {error && <p className={styles.error}>{error}</p>}

      {/* Bouton principal */}
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Connexion en cours..." : "Se connecter"}
      </Button>

      <Divider label="ou" />

      <FacebookButton label="Continuer avec Facebook" />

      <p className={styles.registerText}>
        Pas encore de compte ?{" "}
        <Link href="/register" className={styles.registerLink}>
          Créer un compte
        </Link>
      </p>

    </form>
  );
}