// src/components/mld/MldNavbar.tsx

type Tab = "MCD" | "MLD" | "SQL";

type Props = {
  activeTab: Tab;
};

const tabs: Tab[] = ["MCD", "MLD", "SQL"];

export default function MldNavbar({ activeTab }: Props) {
  return (
    <div className="bg-[#12122a] border-b border-[#2a2a4a] px-4 h-12 flex items-center gap-4">

      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-[#3a3a7a] border border-[#555] rounded flex items-center justify-center text-[#aaa] text-xs">
          ◈
        </div>
        <div className="flex flex-col">
          <span className="text-[#ccc] font-bold text-sm leading-none">
            UMLStudio
          </span>
          <span className="text-[#555] text-[9px] leading-none mt-0.5">
            Système e-commerce
          </span>
          <span className="text-[#444] text-[8px] leading-none">
            Modèle Logique de Données
          </span>
        </div>
      </div>

      <div className="w-px h-7 bg-[#2a2a4a] mx-2" />

      <div className="flex items-center gap-1 flex-1 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-1.5 text-xs font-mono rounded border transition-colors ${
              activeTab === tab
                ? "bg-[#222244] border-[#4444aa] text-[#aaaaff] font-bold"
                : "bg-transparent border-transparent text-[#666] hover:text-[#999]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <button className="bg-[#3355cc] border border-[#4466dd] text-[#ddeeff] text-xs font-mono px-3 py-1.5 rounded flex items-center gap-2 hover:bg-[#4466dd] transition-colors">
        <span>↑</span>
        <span>Exporter</span>
      </button>

    </div>
  );
}