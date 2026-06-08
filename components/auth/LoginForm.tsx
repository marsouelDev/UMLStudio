"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Input from "@/components/ui/Input";
import Divider from "@/components/ui/Divider";
import FacebookButton from "@/components/auth/FacebookButton";
import styles from "@/styles/auth/LoginForm.module.css";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const justRegistered = searchParams.get("registered") === "1";
  const authError = searchParams.get("error");

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
        callbackUrl: "/dashboard",
      });

      if (result?.error) {
        setErrorMsg("Email ou mot de passe incorrect.");
      } else if (result?.ok) {
        window.location.href = result.url ?? "/dashboard";
      }
    } catch {
      setErrorMsg("Erreur de connexion.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      {justRegistered && (
        <p className={styles.success} role="status">
          ✓ Compte créé ! Connectez-vous maintenant.
        </p>
      )}

      {(authError || errorMsg) && (
        <p className={styles.error} role="alert">
          {errorMsg || "Email ou mot de passe incorrect."}
        </p>
      )}

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">Adresse e-mail</label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="votre@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="password">Mot de passe</label>
        <div className={styles.passwordWrapper}>
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className={styles.eyeButton}
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
          >
            {showPassword ? (
              // Icône œil barré (SVG)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              // Icône œil ouvert (SVG)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
        <div className={styles.forgotRow}>
          <Link href="/forgot-password" className={styles.forgotLink}>
            Mot de passe oublié ?
          </Link>
        </div>
      </div>

      <button type="submit" disabled={isLoading} className={styles.submitButton}>
        {isLoading ? "Connexion en cours…" : "Se connecter"}
      </button>

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