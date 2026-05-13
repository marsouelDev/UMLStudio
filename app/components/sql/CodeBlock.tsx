// src/components/sql/CodeBlock.tsx

import { sqlCode } from "@/data/sqlData";

// ─── Syntax highlight one line ────────────────────
function highlightLine(line: string): React.ReactNode {

  // Comments
  if (line.trimStart().startsWith("--")) {
    return <span className="text-[#666]">{line}</span>;
  }

  // Split line into tokens and colorize
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

  // Replace keywords with colored spans
  let result = line;

  // We build the highlighted JSX by splitting on known tokens
  const parts: React.ReactNode[] = [];
  let remaining = line;

  // Simple token-by-token pass
  while (remaining.length > 0) {

    // Check keywords
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

    // Check types
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

    // Check strings in single quotes
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

    // Default — one character at a time
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

  return (
    <div className="mx-4 mb-4 bg-[#0a0a1a] border border-[#2a2a4a] rounded overflow-auto max-h-[420px]">
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
  );
}