export interface UMLAttribute {
  id: string;
  name: string;
  type: string;
}

export interface UMLClass {
  id: string;
  name: string;
  position: { x: number; y: number };
  color: string;
  attributes: UMLAttribute[];
}

export interface UMLRelation {
  id: string;
  type: string;
  source: string;
  target: string;
  name?: string;
  sourceCard?: string;
  targetCard?: string;
}

export function transformUMLToMCD(
  classes: UMLClass[],
  relations: UMLRelation[],
) {
  return {
    entities: classes.map((cls) => ({
      id: cls.id,
      name: cls.name.toUpperCase(),
      x: cls.position.x,
      y: cls.position.y,
      color: cls.color || "#4f46e5",
      attributes: cls.attributes.map((attr: UMLAttribute) => ({
        id: attr.id,
        name: attr.name,
        type: attr.type,
        isPrimary: attr.name.toLowerCase().includes("id"),
      })),
    })),
    associations: relations.map((rel) => ({
      id: rel.id,
      name: rel.name || "ASSOCIATION",
      sourceId: rel.source,
      targetId: rel.target,
      sourceCard: rel.sourceCard || "1,1",
      targetCard: rel.targetCard || "0,N",
    })),
  };
}
