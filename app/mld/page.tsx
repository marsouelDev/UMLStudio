import MldLegend from "../components/mld/MldLegend";
import MldNavbar from "../components/mld/MldNavbar";
import Relation from "../components/mld/Relation";
import TablesGrid from "../components/mld/TablesGrid";

export default function Home(){
    return(
        <main className="bg-[#0f0f26] p-4">
          <MldNavbar activeTab="MLD"/>
          <MldLegend/>
          <div className="p-4">
            <TablesGrid/>
            <Relation/>
          </div>
        </main>
    );
}