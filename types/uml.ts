// Un attribut d'une classe UML (ex: - id: Long)
export interface UMLAttribute {
  id: string;           // identifiant unique (ex: "attr-1")
  name: string;         // nom (ex: "email")
  type: string;         // type (ex: "String", "Long", "Date")
  visibility: 'public' | 'private' | 'protected'; // + ou - ou #
}

// Une méthode d'une classe UML (ex: + login(): Boolean)
export interface UMLMethod {
  id: string;
  name: string;         // nom (ex: "login")
  returnType: string;   // type de retour (ex: "Boolean", "void")
  visibility: 'public' | 'private' | 'protected';
}


// Une classe UML complète (la boîte colorée)
export interface UMLClass {
  id: string;
  name: string;                    // ex: "User"
  stereotype?: string;             // ex: "entity" (optionnel, le ? le dit)
  color: string;                   // couleur d'en-tête (ex: "#6B4EFF")
  attributes: UMLAttribute[];      // liste des attributs
  methods: UMLMethod[];            // liste des méthodes
  position: { x: number; y: number }; // position sur le canvas
}

// Types de relations entre classes
export type RelationType = 'association' | 'heritage' | 'composition' | 'agregation';

export interface UMLRelation {
  id: string;
  source: string;
  target: string;
  type: RelationType;
  label?: string;
  name?: string;
  sourceLabel?: string;  // (ex: "1")
  targetLabel?: string;  // (ex: "0..*")
}

// Une relation entre deux classes
export interface UMLRelation {
  id: string;
  source: string;       // id de la classe source
  target: string;       // id de la classe cible
  type: RelationType;
  label?: string;       // ex: "extends User" (optionnel)
}