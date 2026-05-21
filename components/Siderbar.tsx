"use client";

import { useState } from "react";
import { Trash2, Plus, Layout, Palette, Pipette, ChevronRight, GitBranch, Database, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { UMLClass, UMLAttribute, UMLMethod, UMLRelation } from "../types/uml";
import "./Siderbar.css";

interface SidebarProps {
  projectId: string;
  selectedClass: UMLClass | null;
  onUpdateClass: (id: string, updates: Partial<UMLClass>) => void;
  onDeleteClass: (id: string) => void;
  relations: UMLRelation[];
  onUpdateRelation: (id: string, updates: Partial<UMLRelation>) => void;
}

const uid = () => `id-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
const PRESET_COLORS = ["#6B4EFF", "#0e7490", "#0369a1", "#b45309", "#047857", "#be123c", "#334155"];
type Tab = "proprietes" | "relations" | "conception";

const ConceptionContent = ({ projectId }: { projectId: string }) => {
  const router = useRouter();
  const isSaved = projectId && projectId.length > 0;
  const options = [
    { id: "mcd", label: "MCD", desc: "Modèle Conceptuel", route: "/mcd", color: "#0e7490", icon: <Layout size={18} /> },
    { id: "mld", label: "MLD", desc: "Modèle Logique", route: "/mld", color: "#6B4EFF", icon: <GitBranch size={18} /> },
    { id: "sql", label: "SQL", desc: "Script DDL SQL", route: "/sql", color: "#0369a1", icon: <Database size={18} /> },
  ];

  return (
    <div className="sidebar__content">
      <div className="sidebar__section">
        <h3 className="sidebar__section-title">GÉNÉRATION</h3>
        {!isSaved && (
          <div className="sidebar__alert">
            <AlertCircle size={14} />
            <span>Veuillez sauvegarder pour débloquer l&apos;exportation.</span>
          </div>
        )}
        <div className="conception-grid">
          {options.map((opt) => (
            <button
              key={opt.id}
              disabled={!isSaved}
              onClick={() => router.push(`${opt.route}?projectId=${projectId}`)}
              className={`conception-card ${!isSaved ? "conception-card--disabled" : ""}`}
            >
              <div className="conception-card__icon" style={{ backgroundColor: opt.color }}>{opt.icon}</div>
              <div className="conception-card__info">
                <span className="conception-card__label">{opt.label}</span>
                <span className="conception-card__desc">{opt.desc}</span>
              </div>
              <ChevronRight size={14} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export function Sidebar({
  projectId,
  selectedClass,
  onUpdateClass,
  onDeleteClass,
  relations,
  onUpdateRelation,
}: SidebarProps) {
  const [activeTab, setActiveTab] = useState<Tab>("proprietes");

  const handleAddAttribute = () => {
    if (!selectedClass) return;
    const newAttr: UMLAttribute = { id: uid(), name: "attribut", type: "String", visibility: "private" };
    onUpdateClass(selectedClass.id, { attributes: [...selectedClass.attributes, newAttr] });
  };

  const handleAddMethod = () => {
    if (!selectedClass) return;
    const newMethod: UMLMethod = { id: uid(), name: "methode", returnType: "void", visibility: "public" };
    onUpdateClass(selectedClass.id, { methods: [...selectedClass.methods, newMethod] });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__tabs">
        {(["proprietes", "relations", "conception"] as Tab[]).map(tab => (
          <button
            key={tab}
            className={`sidebar__tab ${activeTab === tab ? "sidebar__tab--active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="sidebar__container">
        {activeTab === "conception" ? (
          <ConceptionContent projectId={projectId} />
        ) : !selectedClass ? (
          <div className="sidebar__empty">
            <Layout size={48} strokeWidth={1} color="#cbd5e1" />
            <p>Sélectionnez une classe sur l&apos;espace de travail</p>
          </div>
        ) : (
          <div className="sidebar__content">
            {activeTab === "proprietes" && (
              <>
                <div className="sidebar__section sidebar__section--main">
                  <h3 className="sidebar__section-title">CONFIGURATION CLASSE</h3>
                  <input 
                    className="sidebar__input-hero" 
                    value={selectedClass.name}
                    placeholder="Nom de la classe..."
                    onChange={e => onUpdateClass(selectedClass.id, { name: e.target.value })} 
                  />
                  
                  <div className="sidebar__color-picker-container">
                    <div className="sidebar__label-small"><Palette size={12} /> THÈME VISUEL</div>
                    <div className="sidebar__color-row">
                      <div className="custom-color-wrapper">
                        <Pipette size={14} className="pipette-icon" />
                        <input 
                          type="color" 
                          value={selectedClass.color || "#6B4EFF"}
                          onChange={e => onUpdateClass(selectedClass.id, { color: e.target.value })}
                          className="sidebar__input-color-custom"
                        />
                      </div>
                      <div className="color-separator" />
                      {PRESET_COLORS.map(hex => (
                        <button
                          key={hex}
                          className={`color-dot ${selectedClass.color === hex ? 'is-active' : ''}`}
                          style={{ backgroundColor: hex }}
                          onClick={() => onUpdateClass(selectedClass.id, { color: hex })}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="sidebar__section">
                  <div className="sidebar__section-header">
                    <h3 className="sidebar__section-title">ATTRIBUTS</h3>
                    <button onClick={handleAddAttribute} className="btn-add-minimal"><Plus size={14}/></button>
                  </div>
                  <div className="sidebar__list">
                    {selectedClass.attributes.map((attr) => (
                      <div key={attr.id} className="sidebar__field-row">
                        <select 
                          value={attr.visibility} 
                          className="sidebar__field-select"
                          onChange={e => {
                            const val = e.target.value as UMLAttribute["visibility"];
                            const newAttrs = selectedClass.attributes.map(a => a.id === attr.id ? {...a, visibility: val} : a);
                            onUpdateClass(selectedClass.id, { attributes: newAttrs });
                          }}
                        >
                          <option value="public">+</option>
                          <option value="private">-</option>
                          <option value="protected">#</option>
                        </select>
                        <input 
                          className="sidebar__field-input name" 
                          value={attr.name}
                          onChange={e => {
                            const newAttrs = selectedClass.attributes.map(a => a.id === attr.id ? {...a, name: e.target.value} : a);
                            onUpdateClass(selectedClass.id, { attributes: newAttrs });
                          }}
                        />
                        <span className="sidebar__field-sep">:</span>
                        <input 
                          className="sidebar__field-input type" 
                          value={attr.type}
                          onChange={e => {
                            const newAttrs = selectedClass.attributes.map(a => a.id === attr.id ? {...a, type: e.target.value} : a);
                            onUpdateClass(selectedClass.id, { attributes: newAttrs });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sidebar__section">
                  <div className="sidebar__section-header">
                    <h3 className="sidebar__section-title">MÉTHODES</h3>
                    <button onClick={handleAddMethod} className="btn-add-minimal"><Plus size={14}/></button>
                  </div>
                  <div className="sidebar__list">
                    {selectedClass.methods.map((m) => (
                      <div key={m.id} className="sidebar__field-row">
                        <select 
                          value={m.visibility} 
                          className="sidebar__field-select"
                          onChange={e => {
                            const val = e.target.value as UMLMethod["visibility"];
                            const newMethods = selectedClass.methods.map(met => met.id === m.id ? {...met, visibility: val} : met);
                            onUpdateClass(selectedClass.id, { methods: newMethods });
                          }}
                        >
                          <option value="public">+</option>
                          <option value="private">-</option>
                        </select>
                        <input 
                          className="sidebar__field-input name" 
                          value={m.name}
                          onChange={e => {
                            const newMethods = selectedClass.methods.map(met => met.id === m.id ? {...met, name: e.target.value} : met);
                            onUpdateClass(selectedClass.id, { methods: newMethods });
                          }}
                        />
                        <span className="sidebar__field-sep">():</span>
                        <input 
                          className="sidebar__field-input type" 
                          value={m.returnType}
                          onChange={e => {
                            const newMethods = selectedClass.methods.map(met => met.id === m.id ? {...met, returnType: e.target.value} : met);
                            onUpdateClass(selectedClass.id, { methods: newMethods });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === "relations" && (
              <div className="sidebar__section">
                <h3 className="sidebar__section-title">RELATIONS & CARDINALITÉS</h3>
                <div className="sidebar__list">
                  {relations
                    .filter(r => r.source === selectedClass.id || r.target === selectedClass.id)
                    .map(rel => (
                      <div key={rel.id} className="sidebar__rel-item">
                        <div className="rel-item__info">
                          <span className="rel-item__type">{rel.type}</span>
                          <span className="rel-item__dir">{rel.source === selectedClass.id ? "→ Cible" : "← Source"}</span>
                        </div>
                        <input 
                          placeholder="Cardinalité..."
                          className="sidebar__field-input full"
                          value={rel.name ?? ""}
                          onChange={e => onUpdateRelation(rel.id, { name: e.target.value })}
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}

            <button className="sidebar__delete-btn" onClick={() => onDeleteClass(selectedClass.id)}>
              <Trash2 size={14} /> Supprimer la classe
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}