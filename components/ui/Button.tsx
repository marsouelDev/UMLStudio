import { ButtonHTMLAttributes } from "react";
import styles from "@/styles/ui/Button.module.css";

export default function Button({ children, type = "button", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={styles.button} {...props}>
      {children}
    </button>
  );
}
