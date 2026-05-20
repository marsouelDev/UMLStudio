"use client"

import MldLegend from "../../components/mld/MldLegend";
import MldNavbar from "../../components/mld/MldNavbar";
import Relation from "../../components/mld/Relation";
import TablesGrid from "../../components/mld/TablesGrid";
import RelationsSection from "../../components/mld/Relation";
import { useMldData } from "@/app/hooks/useMldData"; 

// export default function Home() {
//   return (
//     <main style={{backgroundColor:"#f3f4f6", minHeight:"100vh"}}>
//       <MldNavbar activeTab="MLD" />
//       <MldLegend />
//       <div style={{padding:"16px"}}>
//         <TablesGrid />
//         <Relation />
//       </div>
//     </main>
//   );
// }

// src/app/mld/page.tsx

// import MldNavbar        from "@/components/mld/MldNavbar";
// import MldLegend        from "@/components/mld/MldLegend";
// import TablesGrid       from "@/components/mld/TablesGrid";
// import RelationsSection from "@/components/mld/RelationsSection";


const PROJECT_ID = process.env.NEXT_PUBLIC_TEST_PROJECT_ID ?? "";

export default function MldPage() {

  const { data, status } = useMldData(PROJECT_ID);

  return (
    <main className="min-h-screen bg-[#0f0f26]">

      <MldNavbar activeTab="MLD" />
      <MldLegend />

      <div className="p-4">

        {/* Chargement */}
        {status === "loading" && (
          <div className="text-[#555] text-sm text-center mt-20">
            Chargement du MLD...
          </div>
        )}

        {/* Erreur */}
        {status === "error" && (
          <div className="text-red-500 text-sm text-center mt-20">
            Erreur — projet introuvable
          </div>
        )}

        {/* Données chargées */}
        {status === "success" && data && (
          <>
            <TablesGrid       tables={data.tables}       />
            <RelationsSection relations={data.relations} />
          </>
        )}

      </div>
    </main>
  );
}