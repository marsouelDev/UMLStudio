"use client";
import { useState } from "react";
import { Trash2, Plus } from "lucide-react";
import { UMLClass, UMLAttribute, UMLMethod, UMLRelation } from "../types/uml";
import "./Siderbar.css";

interface SidebarProps {
  selectedClass: UMLClass | null;
  onUpdateClass: (id: string, updates: Partial<UMLClass>) => void;
  onDeleteClass: (id: string) => void;
  relations: UMLRelation[];
  onUpdateRelation: (id: string, updates: Partial<UMLRelation>) => void;
}

// ID unique simple
const uid = () => `id-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;

// Couleurs disponibles pour les classes (comme dans l'image)
const CLASS_COLORS = ["#6B4EFF", "#0e7490", "#0369a1", "#92400e"];

type Tab = "proprietes" | "relations" | "conception";

export function Sidebar({
  selectedClass,
  onUpdateClass,
  onDeleteClass,
  relations,
  onUpdateRelation,
}: SidebarProps) {
  const [activeTab, setActiveTab] = useState<Tab>("proprietes");

  // Si aucune classe sélectionnée, on affiche un message
  if (!selectedClass) {
    return (
      <aside className="sidebar">
        <div className="sidebar__tabs">
          {(["proprietes", "relations", "conception"] as Tab[]).map((tab) => (
            <button
              key={tab}
              className={`sidebar__tab ${activeTab === tab ? "sidebar__tab--active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="sidebar__empty">
          <p>Sélectionnez une classe pour voir ses propriétés</p>
        </div>
      </aside>
    );
  }

  // --- Fonctions pour modifier les attributs ---
  const addAttribute = () => {
    const newAttr: UMLAttribute = {
      id: uid(),
      name: "attribut",
      type: "String",
      visibility: "private",
    };
    onUpdateClass(selectedClass.id, {
      attributes: [...selectedClass.attributes, newAttr],
    });
  };

  const updateAttribute = (
    attrId: string,
    field: keyof UMLAttribute,
    value: string,
  ) => {
    onUpdateClass(selectedClass.id, {
      attributes: selectedClass.attributes.map((a) =>
        a.id === attrId ? { ...a, [field]: value } : a,
      ),
    });
  };

  const deleteAttribute = (attrId: string) => {
    onUpdateClass(selectedClass.id, {
      attributes: selectedClass.attributes.filter((a) => a.id !== attrId),
    });
  };

  // --- Fonctions pour modifier les méthodes ---
  const addMethod = () => {
    const newMethod: UMLMethod = {
      id: uid(),
      name: "methode",
      returnType: "void",
      visibility: "public",
    };
    onUpdateClass(selectedClass.id, {
      methods: [...selectedClass.methods, newMethod],
    });
  };

  const updateMethod = (
    methodId: string,
    field: keyof UMLMethod,
    value: string,
  ) => {
    onUpdateClass(selectedClass.id, {
      methods: selectedClass.methods.map((m) =>
        m.id === methodId ? { ...m, [field]: value } : m,
      ),
    });
  };

  const deleteMethod = (methodId: string) => {
    onUpdateClass(selectedClass.id, {
      methods: selectedClass.methods.filter((m) => m.id !== methodId),
    });
  };

  return (
    <aside className="sidebar">
      {/* Onglets */}
      <div className="sidebar__tabs">
        {(["proprietes", "relations", "conception"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`sidebar__tab ${activeTab === tab ? "sidebar__tab--active" : ""}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Contenu de l'onglet Propriétés */}
      {activeTab === "proprietes" && (
        <div className="sidebar__content">
          {/* Section CLASSE */}
          <div className="sidebar__section">
            <h3 className="sidebar__section-title">CLASSE</h3>

            <div className="sidebar__field">
              <label className="sidebar__label">Nom</label>
              <input
                className="sidebar__input"
                value={selectedClass.name}
                onChange={(e) =>
                  onUpdateClass(selectedClass.id, { name: e.target.value })
                }
              />
            </div>

            <div className="sidebar__field">
              <label className="sidebar__label">Stéréotype</label>
              <input
                className="sidebar__input"
                value={selectedClass.stereotype ?? ""}
                placeholder="ex: entity"
                onChange={(e) =>
                  onUpdateClass(selectedClass.id, {
                    stereotype: e.target.value,
                  })
                }
              />
            </div>

            <div className="sidebar__field">
              <label className="sidebar__label">Couleur</label>
              <div className="sidebar__colors">
                {CLASS_COLORS.map((color) => (
                  <button
                    key={color}
                    onClick={() => onUpdateClass(selectedClass.id, { color })}
                    className={`sidebar__color-btn ${selectedClass.color === color ? "sidebar__color-btn--active" : ""}`}
                    style={{ background: color }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Section ATTRIBUTS */}
          <div className="sidebar__section">
            <h3 className="sidebar__section-title">ATTRIBUTS</h3>

            {selectedClass.attributes.map((attr) => (
              <div key={attr.id} className="sidebar__member">
                {/* Visibilité */}
                <select
                  className="sidebar__select sidebar__select--visibility"
                  value={attr.visibility}
                  onChange={(e) =>
                    updateAttribute(attr.id, "visibility", e.target.value)
                  }
                >
                  <option value="private">–</option>
                  <option value="public">+</option>
                  <option value="protected">#</option>
                </select>

                {/* Nom */}
                <input
                  className="sidebar__input sidebar__input--grow"
                  value={attr.name}
                  onChange={(e) =>
                    updateAttribute(attr.id, "name", e.target.value)
                  }
                />

                {/* Type */}
                <input
                  className="sidebar__input sidebar__input--type"
                  value={attr.type}
                  onChange={(e) =>
                    updateAttribute(attr.id, "type", e.target.value)
                  }
                />

                
                {/* Supprimer */}
                <button
                  className="sidebar__delete-btn"
                  onClick={() => deleteAttribute(attr.id)}
                >
                  <Trash2 size={12} />
                </button>
              </div>
            ))}

            <button className="sidebar__add-btn" onClick={addAttribute}>
              <Plus size={13} /> Ajouter un attribut
            </button>
          </div>

          {/* Section MÉTHODES */}
          <div className="sidebar__section">
            <h3 className="sidebar__section-title">MÉTHODES</h3>

            {selectedClass.methods.map((method) => (
              <div key={method.id} className="sidebar__member">
                {/* Visibilité */}
                <select
                  className="sidebar__select sidebar__select--visibility"
                  value={method.visibility}
                  onChange={(e) =>
                    updateMethod(method.id, "visibility", e.target.value)
                  }
                >
                  <option value="public">+</option>
                  <option value="private">–</option>
                  <option value="protected">#</option>
                </select>

                {/* Nom */}
                <input
                  className="sidebar__input sidebar__input--grow"
                  value={method.name}
                  onChange={(e) =>
                    updateMethod(method.id, "name", e.target.value)
                  }
                />

                {/* Type retour */}
                <input
                  className="sidebar__input sidebar__input--type"
                  value={method.returnType}
                  onChange={(e) =>
                    updateMethod(method.id, "returnType", e.target.value)
                  }
                />

                {/* Supprimer */}
                <button
                  className="sidebar__delete-btn"
                  onClick={() => deleteMethod(method.id)}
                >
                  <Trash2 size={12} />
                </button>
              </div>
            ))}

            <button className="sidebar__add-btn" onClick={addMethod}>
              <Plus size={13} /> Ajouter une méthode
            </button>
          </div>

          {/* Section RELATIONS */}
                <div className="sidebar__section">
                  <h3 className="sidebar__section-title">RELATIONS</h3>

                  {/* Filtre les relations qui concernent la classe sélectionnée */}
                  {relations
  .filter(r => r.source === selectedClass.id || r.target === selectedClass.id)
  .map(rel => (
    <div key={rel.id} className="sidebar__relation">
      <span className="sidebar__relation-type">{rel.type}</span>

      {/* Nom de la relation ← nouveau */}
      <div className="sidebar__field">
        <label className="sidebar__label">Nom</label>
        <input
          className="sidebar__input"
          value={rel.name ?? ''}
          placeholder="ex: contient"
          onChange={e => onUpdateRelation(rel.id, { name: e.target.value })}
        />
      </div>

      {/* Cardinalités — déjà présentes */}
      <div className="sidebar__relation-cardinalities">
        <div className="sidebar__field">
          <label className="sidebar__label">Source</label>
          <input
            className="sidebar__input"
            value={rel.sourceLabel ?? ''}
            placeholder="1"
            onChange={e => onUpdateRelation(rel.id, { sourceLabel: e.target.value })}
          />
        </div>
        <div className="sidebar__field">
          <label className="sidebar__label">Cible</label>
          <input
            className="sidebar__input"
            value={rel.targetLabel ?? ''}
            placeholder="0..*"
            onChange={e => onUpdateRelation(rel.id, { targetLabel: e.target.value })}
          />
        </div>
      </div>
    </div>
  ))
}
                </div>

          {/* Supprimer la classe */}
          <button
            className="sidebar__delete-class-btn"
            onClick={() => onDeleteClass(selectedClass.id)}
          >
            <Trash2 size={13} /> Supprimer la classe
          </button>
        </div>
      )}

      {/* Onglet Relations (placeholder) */}
      {activeTab === "relations" && (
        <div className="sidebar__content">
          <div className="sidebar__empty">
            <p>Les relations seront affichées ici</p>
          </div>
        </div>
      )}

      {/* Onglet Conception (placeholder) */}
      {activeTab === "conception" && (
        <div className="sidebar__content">
          <div className="sidebar__empty">
            <p>Options de conception à venir</p>
          </div>
        </div>
      )}
    </aside>
  );
}
