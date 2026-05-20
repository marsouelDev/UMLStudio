"use client"; 

import { useState } from "react";
import { sqlCode } from "@/data/sqlData";
// 1. Importer les icônes Bootstrap requises
import { BsFileEarmarkCode, BsCopy, BsCheckLg } from "react-icons/bs";

// ─── Syntax highlight one line ────────────────────
function highlightLine(line: string): React.ReactNode {
  // Comments
  if (line.trimStart().startsWith("--")) {
    return <span className="text-[#666]">{line}</span>;
  }

  const keywords = [
    "CREATE", "TABLE", "DATABASE", "NOT NULL", "NULL",
    "DEFAULT", "AUTO_INCREMENT", "PRIMARY KEY", "UNIQUE KEY",
    "FOREIGN KEY", "REFERENCES", "CONSTRAINT", "ENGINE",
    "CHARACTER SET", "COLLATE", "USE", "IF NOT EXISTS",
    "ON DELETE", "CASCADE", "RESTRICT", "ON UPDATE",
  ];

  const types = [
    "BIGINT", "VARCHAR", "INT", "TEXT", "LONGTEXT",
    "DATETIME", "DECIMAL", "ENUM", "FLOAT",
  ];

  const parts: React.ReactNode[] = [];
  let remaining = line;

  while (remaining.length > 0) {
    const kwMatch = keywords.find((kw) =>
      remaining.toUpperCase().startsWith(kw)
    );
    if (kwMatch) {
      parts.push(
        <span key={parts.length} className="text-[#7ec8e3] font-semibold">
          {remaining.slice(0, kwMatch.length)}
        </span>
      );
      remaining = remaining.slice(kwMatch.length);
      continue;
    }

    const typeMatch = types.find((t) =>
      remaining.toUpperCase().startsWith(t)
    );
    if (typeMatch) {
      parts.push(
        <span key={parts.length} className="text-[#c792ea]">
          {remaining.slice(0, typeMatch.length)}
        </span>
      );
      remaining = remaining.slice(typeMatch.length);
      continue;
    }

    if (remaining.startsWith("'")) {
      const end = remaining.indexOf("'", 1);
      if (end !== -1) {
        parts.push(
          <span key={parts.length} className="text-[#90be6d]">
            {remaining.slice(0, end + 1)}
          </span>
        );
        remaining = remaining.slice(end + 1);
        continue;
      }
    }

    parts.push(
      <span key={parts.length} className="text-[#ccc]">
        {remaining[0]}
      </span>
    );
    remaining = remaining.slice(1);
  }

  return <>{parts}</>;
}

// ─── Component ────────────────────────────────────
export default function CodeBlock() {
  const lines = sqlCode.split("\n");
  const [copied, setCopied] = useState(false);

  // Fonction pour copier le code SQL dans le presse-papiers
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(sqlCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Réinitialise l'icône après 2 secondes
    } catch (err) {
      console.error("Échec de la copie : ", err);
    }
  };

  return (
    <div className="mx-4 mb-4 bg-[#0a0a1a] border border-[#2a2a4a] rounded overflow-hidden">
      
      {/* 2. En-tête du bloc de code avec icônes Bootstrap */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#12122a] border-b border-[#2a2a4a]">
        <div className="flex items-center gap-2 text-[#7ec8e3] text-xs font-medium">
          <BsFileEarmarkCode size={14} />
          <span className="font-mono text-[11px] text-[#ccc]">schema.sql</span>
        </div>
        
        {/* Bouton de copie dynamique */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-medium rounded text-[#aaaee] hover:bg-[#1a1a33] hover:text-white transition-all cursor-pointer"
        >
          {copied ? (
            <>
              <BsCheckLg size={12} className="text-green-400" />
              <span className="text-green-400">Copié !</span>
            </>
          ) : (
            <>
              <BsCopy size={11} />
              <span>Copier</span>
            </>
          )}
        </button>
      </div>

      {/* Grille de code */}
      <div className="overflow-auto max-h-[380px]">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, index) => (
              <tr
                key={index}
                className="hover:bg-[#12122a] transition-colors"
              >
                {/* Line number */}
                <td className="text-[#444] text-[10px] font-mono text-right pr-4 pl-3 py-0.5 select-none w-8 border-r border-[#1a1a33]">
                  {index + 1}
                </td>

                {/* Code line */}
                <td className="text-[10px] font-mono pl-4 py-0.5 whitespace-pre">
                  {highlightLine(line)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
