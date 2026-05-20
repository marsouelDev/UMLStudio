/* eslint-disable react-hooks/static-components */
"use client";
import { useState } from "react";
import { Trash2, Plus, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { UMLClass, UMLAttribute, UMLMethod, UMLRelation } from "../types/uml";
import "./Siderbar.css";

interface SidebarProps {
  selectedClass: UMLClass | null;
  onUpdateClass: (id: string, updates: Partial<UMLClass>) => void;
  onDeleteClass: (id: string) => void;
  relations: UMLRelation[];
  onUpdateRelation: (id: string, updates: Partial<UMLRelation>) => void;
}

const uid = () => `id-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
const CLASS_COLORS = ["#6B4EFF", "#0e7490", "#0369a1", "#92400e", "yellow"];
type Tab = "proprietes" | "relations" | "conception";

const CONCEPTION_OPTIONS = [
  { id: "mcd", label: "MCD", description: "Modèle Conceptuel des Données", route: "/mcd", color: "#0e7490" },
  { id: "mld", label: "MLD", description: "Modèle Logique des Données",    route: "/mld", color: "#6B4EFF" },
  { id: "sql", label: "SQL", description: "Générer le script SQL",          route: "/sql", color: "#0369a1" },
];

export function Sidebar({
  selectedClass,
  onUpdateClass,
  onDeleteClass,
  relations,
  onUpdateRelation,
}: SidebarProps) {
  const [activeTab, setActiveTab] = useState<Tab>("proprietes");
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const router = useRouter();

  const ConceptionContent = () => (
    <div className="sidebar__content">
      <div className="sidebar__section">
        <h3 className="sidebar__section-title">CONCEPTION</h3>
        <p style={{ fontSize: "12px", color: "#6b7280", marginBottom: "16px", lineHeight: "1.6" }}>
          Choisissez le type de modèle à générer depuis votre diagramme UML.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {CONCEPTION_OPTIONS.map(option => (
            <button
              key={option.id}
              onClick={() => router.push(option.route)}
              onMouseEnter={() => setHoveredOption(option.id)}
              onMouseLeave={() => setHoveredOption(null)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                width: "100%",
                padding: "12px 14px",
                background: hoveredOption === option.id ? `${option.color}12` : "#f9fafb",
                border: `1.5px solid ${hoveredOption === option.id ? option.color : "#e5e7eb"}`,
                borderRadius: "10px",
                cursor: "pointer",
                transition: "all 0.18s ease",
                textAlign: "left",
              }}
            >
              {/* Badge */}
              <div style={{
                width: "38px",
                height: "38px",
                borderRadius: "8px",
                background: option.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transform: hoveredOption === option.id ? "scale(1.08)" : "scale(1)",
                transition: "transform 0.18s ease",
              }}>
                <span style={{ color: "white", fontSize: "11px", fontWeight: "800", fontFamily: "monospace" }}>
                  {option.label}
                </span>
              </div>

              {/* Texte */}
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  color: hoveredOption === option.id ? option.color : "#111827",
                  transition: "color 0.18s ease",
                }}>
                  {option.label}
                </div>
                <div style={{ fontSize: "11px", color: "#9ca3af", marginTop: "2px" }}>
                  {option.description}
                </div>
              </div>

              {/* Flèche */}
              <ChevronRight
                size={15}
                color={hoveredOption === option.id ? option.color : "#d1d5db"}
                style={{
                  transition: "all 0.18s ease",
                  transform: hoveredOption === option.id ? "translateX(2px)" : "translateX(0)",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const addAttribute = () => {
    onUpdateClass(selectedClass!.id, {
      attributes: [...selectedClass!.attributes, { id: uid(), name: "attribut", type: "String", visibility: "private" }],
    });
  };

  const updateAttribute = (attrId: string, field: keyof UMLAttribute, value: string) => {
    onUpdateClass(selectedClass!.id, {
      attributes: selectedClass!.attributes.map(a => a.id === attrId ? { ...a, [field]: value } : a),
    });
  };

  const deleteAttribute = (attrId: string) => {
    onUpdateClass(selectedClass!.id, {
      attributes: selectedClass!.attributes.filter(a => a.id !== attrId),
    });
  };

  const addMethod = () => {
    onUpdateClass(selectedClass!.id, {
      methods: [...selectedClass!.methods, { id: uid(), name: "methode", returnType: "void", visibility: "public" }],
    });
  };

  const updateMethod = (methodId: string, field: keyof UMLMethod, value: string) => {
    onUpdateClass(selectedClass!.id, {
      methods: selectedClass!.methods.map(m => m.id === methodId ? { ...m, [field]: value } : m),
    });
  };

  const deleteMethod = (methodId: string) => {
    onUpdateClass(selectedClass!.id, {
      methods: selectedClass!.methods.filter(m => m.id !== methodId),
    });
  };

  if (!selectedClass) {
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
        {activeTab === "conception"
          ? <ConceptionContent />
          : <div className="sidebar__empty"><p>Sélectionnez une classe pour voir ses propriétés</p></div>
        }
      </aside>
    );
  }

  return (
    <aside className="sidebar">
      <div className="sidebar__tabs">
        {(["proprietes", "relations", "conception"] as Tab[]).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`sidebar__tab ${activeTab === tab ? "sidebar__tab--active" : ""}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* ── Propriétés ── */}
      {activeTab === "proprietes" && (
        <div className="sidebar__content">
          <div className="sidebar__section">
            <h3 className="sidebar__section-title">CLASSE</h3>
            <div className="sidebar__field">
              <label className="sidebar__label">Nom</label>
              <input className="sidebar__input" value={selectedClass.name}
                onChange={e => onUpdateClass(selectedClass.id, { name: e.target.value })} />
            </div>
            <div className="sidebar__field">
              <label className="sidebar__label">Stéréotype</label>
              <input className="sidebar__input" value={selectedClass.stereotype ?? ""} placeholder="ex: entity"
                onChange={e => onUpdateClass(selectedClass.id, { stereotype: e.target.value })} />
            </div>
            <div className="sidebar__field">
              <label className="sidebar__label">Couleur</label>
              <div className="sidebar__colors">
                {CLASS_COLORS.map(color => (
                  <button key={color}
                    onClick={() => onUpdateClass(selectedClass.id, { color })}
                    className={`sidebar__color-btn ${selectedClass.color === color ? "sidebar__color-btn--active" : ""}`}
                    style={{ background: color }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="sidebar__section">
            <h3 className="sidebar__section-title">ATTRIBUTS</h3>
            {selectedClass.attributes.map(attr => (
              <div key={attr.id} className="sidebar__member">
                <select className="sidebar__select sidebar__select--visibility" value={attr.visibility}
                  onChange={e => updateAttribute(attr.id, "visibility", e.target.value)}>
                  <option value="private">–</option>
                  <option value="public">+</option>
                  <option value="protected">#</option>
                </select>
                <input className="sidebar__input sidebar__input--grow" value={attr.name}
                  onChange={e => updateAttribute(attr.id, "name", e.target.value)} />
                <input className="sidebar__input sidebar__input--type" value={attr.type}
                  onChange={e => updateAttribute(attr.id, "type", e.target.value)} />
                <button className="sidebar__delete-btn" onClick={() => deleteAttribute(attr.id)}>
                  <Trash2 size={12} />
                </button>
              </div>
            ))}
            <button className="sidebar__add-btn" onClick={addAttribute}>
              <Plus size={13} /> Ajouter un attribut
            </button>
          </div>

          <div className="sidebar__section">
            <h3 className="sidebar__section-title">MÉTHODES</h3>
            {selectedClass.methods.map(method => (
              <div key={method.id} className="sidebar__member">
                <select className="sidebar__select sidebar__select--visibility" value={method.visibility}
                  onChange={e => updateMethod(method.id, "visibility", e.target.value)}>
                  <option value="public">+</option>
                  <option value="private">–</option>
                  <option value="protected">#</option>
                </select>
                <input className="sidebar__input sidebar__input--grow" value={method.name}
                  onChange={e => updateMethod(method.id, "name", e.target.value)} />
                <input className="sidebar__input sidebar__input--type" value={method.returnType}
                  onChange={e => updateMethod(method.id, "returnType", e.target.value)} />
                <button className="sidebar__delete-btn" onClick={() => deleteMethod(method.id)}>
                  <Trash2 size={12} />
                </button>
              </div>
            ))}
            <button className="sidebar__add-btn" onClick={addMethod}>
              <Plus size={13} /> Ajouter une méthode
            </button>
          </div>

          <div className="sidebar__section">
            <h3 className="sidebar__section-title">RELATIONS</h3>
            {relations
              .filter(r => r.source === selectedClass.id || r.target === selectedClass.id)
              .map(rel => (
                <div key={rel.id} className="sidebar__relation">
                  <span className="sidebar__relation-type">{rel.type}</span>
                  <div className="sidebar__field">
                    <label className="sidebar__label">Nom</label>
                    <input className="sidebar__input" value={rel.name ?? ""} placeholder="ex: contient"
                      onChange={e => onUpdateRelation(rel.id, { name: e.target.value })} />
                  </div>
                  <div className="sidebar__relation-cardinalities">
                    <div className="sidebar__field">
                      <label className="sidebar__label">Source</label>
                      <input className="sidebar__input" value={rel.sourceLabel ?? ""} placeholder="1"
                        onChange={e => onUpdateRelation(rel.id, { sourceLabel: e.target.value })} />
                    </div>
                    <div className="sidebar__field">
                      <label className="sidebar__label">Cible</label>
                      <input className="sidebar__input" value={rel.targetLabel ?? ""} placeholder="0..*"
                        onChange={e => onUpdateRelation(rel.id, { targetLabel: e.target.value })} />
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <button className="sidebar__delete-class-btn" onClick={() => onDeleteClass(selectedClass.id)}>
            <Trash2 size={13} /> Supprimer la classe
          </button>
        </div>
      )}

      {/* ── Relations ── */}
      {activeTab === "relations" && (
        <div className="sidebar__content">
          <div className="sidebar__empty">
            <p>Les relations seront affichées ici</p>
          </div>
        </div>
      )}

      {/* ── Conception ── */}
      {activeTab === "conception" && <ConceptionContent />}
    </aside>
  );
}