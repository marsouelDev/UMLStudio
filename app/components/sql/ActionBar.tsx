"use client";

// components/sql/ActionBar.tsx
import { useState } from "react";
import { sqlInfo } from "@/data/sqlData";
import { BsClipboard, BsDownload, BsFileEarmarkPdf, BsCheckLg } from "react-icons/bs";

interface Props {
  sql: string;  // ← reçoit le SQL dynamique
}

export default function ActionBar({ sql }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(sql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([sql], { type: "text/plain" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = "script.sql";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#0f0f26] border-b border-[#2a2a4a]">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
        <span className="text-[#888] text-xs font-mono">
          {sqlInfo.engine} — {sqlInfo.label}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[10px] font-mono px-3 py-1.5 rounded border border-[#2a2a4a] bg-[#12122a] text-[#888] hover:text-[#ccc] hover:border-[#4444aa] transition-colors cursor-pointer"
        >
          {copied ? (
            <><BsCheckLg size={11} className="text-green-400" /><span className="text-green-400">Copié !</span></>
          ) : (
            <><BsClipboard size={11} /><span>Copier tout</span></>
          )}
        </button>

        <button
          onClick={handleDownload}
          className="flex items-center gap-1.5 text-[10px] font-mono px-3 py-1.5 rounded border border-[#2a2a4a] bg-[#12122a] text-[#888] hover:text-[#ccc] hover:border-[#4444aa] transition-colors cursor-pointer"
        >
          <BsDownload size={11} /><span>Télécharger .sql</span>
        </button>

        <button className="flex items-center gap-1.5 text-[10px] font-mono px-3 py-1.5 rounded border border-green-800 bg-green-950 text-green-400 hover:bg-green-900 transition-colors cursor-pointer">
          <BsFileEarmarkPdf size={11} /><span>Exporter PDF</span>
        </button>
      </div>
    </div>
  );
}
