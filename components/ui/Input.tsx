import { InputHTMLAttributes } from "react";
import styles from "@/styles/ui/Input.module.css";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={styles.input} {...props} />;
}
