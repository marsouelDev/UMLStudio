"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import FacebookButton from "@/components/auth/FacebookButton";
import styles from "@/styles/auth/RegisterForm.module.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      console.log("Inscription :", formData);
      // await signUp(formData)
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>Prénom</label>
          <Input name="firstName" placeholder="Prénom" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Nom</label>
          <Input name="lastName" placeholder="Nom" value={formData.lastName} onChange={handleChange} required />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Adresse e-mail</label>
        <Input name="email" type="email" placeholder="votre@email.com" value={formData.email} onChange={handleChange} required />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Mot de passe</label>
        <Input name="password" type="password" placeholder="••••••••" value={formData.password} onChange={handleChange} required />
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Création en cours..." : "Créer mon compte"}
      </Button>

      <Divider label="ou" />

      <FacebookButton />

      <p className={styles.loginText}>
        Déjà un compte ?{" "}
        <Link href="/login" className={styles.loginLink}>Se connecter</Link>
      </p>
    </form>
  );
}