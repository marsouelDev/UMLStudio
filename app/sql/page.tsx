
'use client'
import MldNavbar from "../components/mld/MldNavbar";
import ActionBar from "../components/sql/ActionBar";
import CodeBlock from "../components/sql/CodeBlock";
import StatsBar from "../components/sql/StatsBar";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffff]">

      <MldNavbar activeTab="SQL" />

      <StatsBar />

      <div className="mx-4 border border-[#2a2a4a] rounded overflow-hidden">
        <ActionBar />
        <CodeBlock />
      </div>

    </main>
  );
}