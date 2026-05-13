"use client"

import MldLegend from "../../components/mld/MldLegend";
import MldNavbar from "../../components/mld/MldNavbar";
import Relation from "../../components/mld/Relation";
import TablesGrid from "../../components/mld/TablesGrid";

export default function Home() {
  return (
    <main style={{backgroundColor:"#f3f4f6", minHeight:"100vh"}}>
      <MldNavbar activeTab="MLD" />
      <MldLegend />
      <div style={{padding:"16px"}}>
        <TablesGrid />
        <Relation />
      </div>
    </main>
  );
}