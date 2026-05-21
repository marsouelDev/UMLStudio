"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Divider from "@/components/ui/Divider";
import FacebookButton from "@/components/auth/FacebookButton";
import styles from "@/styles/auth/RegisterForm.module.css";

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Une erreur est survenue.");
      }

      router.push("/login?registered=1");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur inconnue est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="firstName">Prénom</label>
          <Input id="firstName" name="firstName" placeholder="Prénom"
            value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="lastName">Nom</label>
          <Input id="lastName" name="lastName" placeholder="Nom"
            value={formData.lastName} onChange={handleChange} required />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">Adresse e-mail</label>
        <Input id="email" name="email" type="email" placeholder="votre@email.com"
          value={formData.email} onChange={handleChange} required />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="password">Mot de passe</label>
        <Input id="password" name="password" type="password"
          placeholder="•••••••• (8 caractères min.)"
          value={formData.password} onChange={handleChange} minLength={8} required />
      </div>

      {error && <p className={styles.error} role="alert">{error}</p>}

      <button type="submit" disabled={loading} className={styles.submitButton}>
        {loading ? "Création en cours…" : "Créer mon compte"}
      </button>

      <Divider label="ou" />
      <FacebookButton label="S'inscrire avec Facebook" />

      <p className={styles.loginText}>
        Déjà un compte ?{" "}
        <Link href="/login" className={styles.loginLink}>Se connecter</Link>
      </p>
    </form>
  );
}