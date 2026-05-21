"use client";

// components/sql/CodeBlock.tsx
import { useState } from "react";
import { BsFileEarmarkCode, BsCopy, BsCheckLg } from "react-icons/bs";

// ── Coloration syntaxique ────────────────────────────────────────────────────
function highlightLine(line: string): React.ReactNode {
  if (line.trimStart().startsWith("--")) {
    return <span className="text-[#666]">{line}</span>;
  }

  const keywords = [
    "CREATE","TABLE","NOT NULL","NULL","DEFAULT","AUTO_INCREMENT",
    "PRIMARY KEY","UNIQUE KEY","FOREIGN KEY","REFERENCES","CONSTRAINT",
    "ENGINE","CHARACTER SET","ON DELETE","CASCADE","RESTRICT","IF NOT EXISTS",
  ];
  const types = [
    "BIGINT","VARCHAR","INT","TEXT","LONGTEXT","DATETIME","DECIMAL",
    "ENUM","FLOAT","DOUBLE","TINYINT","DATE","JSON","CHAR",
  ];

  const parts: React.ReactNode[] = [];
  let remaining = line;

  while (remaining.length > 0) {
    const kw = keywords.find((k) => remaining.toUpperCase().startsWith(k));
    if (kw) {
      parts.push(<span key={parts.length} className="text-[#7ec8e3] font-semibold">{remaining.slice(0, kw.length)}</span>);
      remaining = remaining.slice(kw.length);
      continue;
    }
    const tp = types.find((t) => remaining.toUpperCase().startsWith(t));
    if (tp) {
      parts.push(<span key={parts.length} className="text-[#c792ea]">{remaining.slice(0, tp.length)}</span>);
      remaining = remaining.slice(tp.length);
      continue;
    }
    if (remaining.startsWith("'")) {
      const end = remaining.indexOf("'", 1);
      if (end !== -1) {
        parts.push(<span key={parts.length} className="text-[#90be6d]">{remaining.slice(0, end + 1)}</span>);
        remaining = remaining.slice(end + 1);
        continue;
      }
    }
    parts.push(<span key={parts.length} className="text-[#ccc]">{remaining[0]}</span>);
    remaining = remaining.slice(1);
  }
  return <>{parts}</>;
}

// ── Composant ────────────────────────────────────────────────────────────────
interface Props {
  sql: string;  // ← reçoit le SQL dynamique
}

export default function CodeBlock({ sql }: Props) {
  const lines  = sql.split("\n");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(sql);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Échec de la copie :", err);
    }
  };

  return (
    <div className="mx-4 mb-4 bg-[#0a0a1a] border border-[#2a2a4a] rounded overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-[#12122a] border-b border-[#2a2a4a]">
        <div className="flex items-center gap-2 text-[#7ec8e3] text-xs font-medium">
          <BsFileEarmarkCode size={14} />
          <span className="font-mono text-[11px] text-[#ccc]">schema.sql</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-medium rounded text-[#aaa] hover:bg-[#1a1a33] hover:text-white transition-all cursor-pointer"
        >
          {copied ? (
            <><BsCheckLg size={12} className="text-green-400" /><span className="text-green-400">Copié !</span></>
          ) : (
            <><BsCopy size={11} /><span>Copier</span></>
          )}
        </button>
      </div>

      <div className="overflow-auto max-h-[380px]">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, i) => (
              <tr key={i} className="hover:bg-[#12122a] transition-colors">
                <td className="text-[#444] text-[10px] font-mono text-right pr-4 pl-3 py-0.5 select-none w-8 border-r border-[#1a1a33]">
                  {i + 1}
                </td>
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
