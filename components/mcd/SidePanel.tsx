
"use client";
import { useState } from "react";
import { useDiagram, Attribute } from "@/store/diagramStore";
import { nanoid } from "nanoid";

const COLORS = ["#4f46e5","#7c3aed","#db2777","#dc2626","#d97706","#16a34a","#0891b2","#0284c7"];
const TYPES  = ["String","Int","Float","Boolean","DateTime","Text","Long","UUID"];
const REL_TYPES = ["association","composition","agregation","heritage"];
const CARDS  = ["1,1","0,1","1,N","0,N","*"];

export default function SidePanel() {
  const { entities, relations, selected, addEntity, updateEntity, removeEntity, addRelation, updateRelation, removeRelation, setSelected, save } = useDiagram();
  const [tab, setTab]   = useState<"entity"|"relation">("entity");
  const [newName, setNewName] = useState("");
  const [newColor, setNewColor] = useState(COLORS[0]);
  const [relForm, setRelForm] = useState({ name: "", type: "association", sourceId: "", targetId: "", sourceCard: "1,1", targetCard: "0,N" });

  // ── Créer entité ──────────────────────────────────────────────────────────
  const createEntity = () => {
    if (!newName.trim()) return;
    addEntity({ id: nanoid(), name: newName.trim(), x: 100 + entities.length * 20, y: 100 + entities.length * 20, color: newColor, attributes: [] });
    setNewName("");
    save();
  };

  // ── Ajouter attribut ─────────────────────────────────────────────────────
  const addAttr = (entityId: string) => {
    const e = entities.find(x => x.id === entityId);
    if (!e) return;
    const attr: Attribute = { id: nanoid(), name: "attribut", type: "String", isPrimary: false };
    updateEntity(entityId, { attributes: [...e.attributes, attr] });
    save();
  };

  const updateAttr = (entityId: string, attrId: string, patch: Partial<Attribute>) => {
    const e = entities.find(x => x.id === entityId);
    if (!e) return;
    updateEntity(entityId, { attributes: e.attributes.map(a => a.id === attrId ? { ...a, ...patch } : a) });
  };

  const removeAttr = (entityId: string, attrId: string) => {
    const e = entities.find(x => x.id === entityId);
    if (!e) return;
    updateEntity(entityId, { attributes: e.attributes.filter(a => a.id !== attrId) });
    save();
  };

  // ── Créer relation ────────────────────────────────────────────────────────
  const createRelation = () => {
    if (!relForm.name.trim() || !relForm.sourceId || !relForm.targetId) return;
    addRelation({ id: nanoid(), ...relForm });
    setRelForm({ name: "", type: "association", sourceId: "", targetId: "", sourceCard: "1,1", targetCard: "0,N" });
    save();
  };

  const S: React.CSSProperties = {
    display: "flex", flexDirection: "column", gap: 4,
  };
  const labelS: React.CSSProperties = { fontSize: 10, color: "#6b7280", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" };
  const inputS: React.CSSProperties = { padding: "5px 8px", borderRadius: 6, border: "1px solid #e5e7eb", fontSize: 12, outline: "none", width: "100%", boxSizing: "border-box" };
  const btnS: React.CSSProperties = { padding: "6px 12px", borderRadius: 6, border: "none", background: "#4f46e5", color: "white", fontSize: 12, fontWeight: 600, cursor: "pointer", width: "100%" };
  const dangerS: React.CSSProperties = { ...btnS, background: "#dc2626" };

  return (
    <div style={{
      width: 260, borderRight: "1px solid #e5e7eb",
      background: "white", display: "flex", flexDirection: "column",
      overflow: "hidden",
    }}>
      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid #e5e7eb" }}>
        {(["entity","relation"] as const).map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            flex: 1, padding: "10px 0", fontSize: 11, fontWeight: tab === t ? 700 : 400,
            color: tab === t ? "#4f46e5" : "#9ca3af",
            background: "none", border: "none",
            borderBottom: tab === t ? "2px solid #4f46e5" : "2px solid transparent",
            cursor: "pointer", textTransform: "capitalize",
          }}>{t === "entity" ? "Entités" : "Relations"}</button>
        ))}
      </div>

      <div style={{ flex: 1, overflow: "auto", padding: 12, display: "flex", flexDirection: "column", gap: 12 }}>

        {/* ── ENTITY TAB ── */}
        {tab === "entity" && (
          <>
            {/* Créer */}
            <div style={{ ...S, padding: 10, background: "#f9fafb", borderRadius: 8, border: "1px solid #e5e7eb" }}>
              <div style={labelS}>Nouvelle entité</div>
              <input 
                style={inputS} 
                placeholder="Nom de l&apos;entité" 
                value={newName} 
                onChange={e => setNewName(e.target.value)} 
                onKeyDown={e => e.key === "Enter" && createEntity()} 
              />
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {COLORS.map(c => (
                  <div key={c} onClick={() => setNewColor(c)} style={{
                    width: 18, height: 18, borderRadius: 4, background: c, cursor: "pointer",
                    border: newColor === c ? "2px solid #111" : "2px solid transparent",
                  }} />
                ))}
              </div>
              <button style={btnS} onClick={createEntity}>+ Ajouter</button>
            </div>

            {/* Liste */}
            {entities.map(e => (
              <div key={e.id} style={{
                border: `1px solid ${selected === e.id ? "#4f46e5" : "#e5e7eb"}`,
                borderRadius: 8, overflow: "hidden",
              }}>
                {/* Header entité */}
                <div
                  onClick={() => setSelected(selected === e.id ? null : e.id)}
                  style={{
                    display: "flex", alignItems: "center", gap: 8, padding: "8px 10px",
                    background: selected === e.id ? "#f0f0ff" : "#f9fafb",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ width: 10, height: 10, borderRadius: 2, background: e.color, flexShrink: 0 }} />
                  <span style={{ fontWeight: 700, fontSize: 12, flex: 1, fontFamily: "monospace" }}>{e.name}</span>
                  <span style={{ fontSize: 10, color: "#9ca3af" }}>{e.attributes.length} attr.</span>
                </div>

                {/* Attributs (si sélectionné) */}
                {selected === e.id && (
                  <div style={{ padding: 8, borderTop: "1px solid #e5e7eb", display: "flex", flexDirection: "column", gap: 4 }}>
                    {/* Champ nom */}
                    <div style={S}>
                      <div style={labelS}>Nom</div>
                      <input style={inputS} value={e.name}
                        onChange={ev => updateEntity(e.id, { name: ev.target.value })}
                        onBlur={save} />
                    </div>

                    {/* Couleur */}
                    <div style={S}>
                      <div style={labelS}>Couleur</div>
                      <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                        {COLORS.map(c => (
                          <div key={c} onClick={() => { updateEntity(e.id, { color: c }); save(); }} style={{
                            width: 16, height: 16, borderRadius: 3, background: c, cursor: "pointer",
                            border: e.color === c ? "2px solid #111" : "2px solid transparent",
                          }} />
                        ))}
                      </div>
                    </div>

                    {/* Attributs */}
                    <div style={labelS}>Attributs</div>
                    {e.attributes.map(a => (
                      <div key={a.id} style={{ display: "flex", gap: 4, alignItems: "center" }}>
                        <input
                          style={{ ...inputS, width: 80 }}
                          value={a.name}
                          onChange={ev => updateAttr(e.id, a.id, { name: ev.target.value })}
                          onBlur={save}
                        />
                        <select style={{ ...inputS, width: 80 }} value={a.type} onChange={ev => { updateAttr(e.id, a.id, { type: ev.target.value }); save(); }}>
                          {TYPES.map(t => <option key={t}>{t}</option>)}
                        </select>
                        <button
                          onClick={() => { updateAttr(e.id, a.id, { isPrimary: !a.isPrimary }); save(); }}
                          style={{ padding: "3px 5px", borderRadius: 4, border: "1px solid #e5e7eb", fontSize: 9, fontWeight: 700, cursor: "pointer", background: a.isPrimary ? "#fef3c7" : "white", color: a.isPrimary ? "#d97706" : "#9ca3af" }}
                          title="Clé primaire"
                        >PK</button>
                        <button onClick={() => removeAttr(e.id, a.id)} style={{ padding: "3px 6px", borderRadius: 4, border: "none", background: "#fee2e2", color: "#dc2626", cursor: "pointer", fontSize: 11 }}>×</button>
                      </div>
                    ))}
                    <button style={{ ...btnS, background: "#f0f0ff", color: "#4f46e5" }} onClick={() => addAttr(e.id)}>+ Attribut</button>
                    <button style={dangerS} onClick={() => { removeEntity(e.id); save(); }}>Supprimer l&apos;entité</button>
                  </div>
                )}
              </div>
            ))}
          </>
        )}

        {/* ── RELATION TAB ── */}
        {tab === "relation" && (
          <>
            {/* Créer */}
            <div style={{ ...S, padding: 10, background: "#f9fafb", borderRadius: 8, border: "1px solid #e5e7eb" }}>
              <div style={labelS}>Nouvelle relation</div>
              <input style={inputS} placeholder="Nom (ex: PASSE, CONTIENT...)" value={relForm.name} onChange={e => setRelForm(f => ({ ...f, name: e.target.value }))} />
              <select style={inputS} value={relForm.type} onChange={e => setRelForm(f => ({ ...f, type: e.target.value }))}>
                {REL_TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
              <select style={inputS} value={relForm.sourceId} onChange={e => setRelForm(f => ({ ...f, sourceId: e.target.value }))}>
                <option value="">— Source —</option>
                {entities.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
              </select>
              <select style={inputS} value={relForm.targetId} onChange={e => setRelForm(f => ({ ...f, targetId: e.target.value }))}>
                <option value="">— Cible —</option>
                {entities.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
              </select>
              <div style={{ display: "flex", gap: 4 }}>
                <div style={{ flex: 1, ...S }}>
                  <div style={labelS}>Card. source</div>
                  <select style={inputS} value={relForm.sourceCard} onChange={e => setRelForm(f => ({ ...f, sourceCard: e.target.value }))}>
                    {CARDS.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div style={{ flex: 1, ...S }}>
                  <div style={labelS}>Card. cible</div>
                  <select style={inputS} value={relForm.targetCard} onChange={e => setRelForm(f => ({ ...f, targetCard: e.target.value }))}>
                    {CARDS.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <button style={btnS} onClick={createRelation}>+ Ajouter</button>
            </div>

            {/* Liste relations */}
            {relations.map(r => {
              const src = entities.find(e => e.id === r.sourceId);
              const tgt = entities.find(e => e.id === r.targetId);
              return (
                <div key={r.id} style={{
                  border: `1px solid ${selected === r.id ? "#4f46e5" : "#e5e7eb"}`,
                  borderRadius: 8, overflow: "hidden",
                }}>
                  <div onClick={() => setSelected(selected === r.id ? null : r.id)} style={{
                    padding: "8px 10px", background: selected === r.id ? "#f0f0ff" : "#f9fafb",
                    cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
                  }}>
                    <span style={{ fontWeight: 700, fontSize: 12, fontFamily: "monospace" }}>{r.name}</span>
                    <span style={{ fontSize: 10, color: "#9ca3af" }}>
                      {src?.name} → {tgt?.name}
                    </span>
                  </div>
                  {selected === r.id && (
                    <div style={{ padding: 8, borderTop: "1px solid #e5e7eb", display: "flex", flexDirection: "column", gap: 4 }}>
                      <input style={inputS} value={r.name} onChange={e => updateRelation(r.id, { name: e.target.value })} onBlur={save} />
                      <select style={inputS} value={r.type} onChange={e => { updateRelation(r.id, { type: e.target.value }); save(); }}>
                        {REL_TYPES.map(t => <option key={t}>{t}</option>)}
                      </select>
                      <div style={{ display: "flex", gap: 4 }}>
                        <select style={{ ...inputS, flex: 1 }} value={r.sourceCard} onChange={e => { updateRelation(r.id, { sourceCard: e.target.value }); save(); }}>
                          {CARDS.map(c => <option key={c}>{c}</option>)}
                        </select>
                        <select style={{ ...inputS, flex: 1 }} value={r.targetCard} onChange={e => { updateRelation(r.id, { targetCard: e.target.value }); save(); }}>
                          {CARDS.map(c => <option key={c}>{c}</option>)}
                        </select>
                      </div>
                      <button style={dangerS} onClick={() => { removeRelation(r.id); save(); }}>Supprimer</button>
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

