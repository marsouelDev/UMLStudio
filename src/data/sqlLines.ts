export const SQL_LINES: string[] = [
  '-- UMLStudio · Script SQL auto-généré',
  '-- Diagramme : Système e-commerce',
  '-- Généré le : 2025-04-25  par Jean Dupont',
  '-- Moteur    : MySQL 8.0 · InnoDB · utf8mb4',
  '',
  '-- ─────────────────────────────────────────',
  '',
  'CREATE DATABASE IF NOT EXISTS uml_ecommerce',
  '  CHARACTER SET utf8mb4',
  '  COLLATE utf8mb4_unicode_ci;',
  'USE uml_ecommerce;',
  '',
  '-- ────── 1. user ──────────────────────────',
  'CREATE TABLE user {',
  '  id            BIGINT       NOT NULL AUTO_INCREMENT,',
  '  nom           VARCHAR(80)  NOT NULL,',
  '  email         VARCHAR(120) NOT NULL,',
  '  password_hash VARCHAR(255) NOT NULL,',
  '  facebook_id   VARCHAR(100) DEFAULT NULL,',
  '  created_at    DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,',
  '  PRIMARY KEY (id),',
  '  UNIQUE KEY uq_user_email (email)',
  '} ENGINE=InnoDB;',
  '',
  '-- ────── 2. admin (spécialisation de user) ─',
  'CREATE TABLE admin {',
  '  id      BIGINT      NOT NULL,',
  '  user_id BIGINT      NOT NULL,',
  '  role    VARCHAR(60) NOT NULL,',
  '  PRIMARY KEY (id),',
  '  CONSTRAINT fk_admin',
  '    FOREIGN KEY (user_id) REFERENCES user(id)',
  '    ON DELETE CASCADE',
  '} ENGINE=InnoDB;',
  '',
  '-- ────── 3. produit ────────────────────────',
  'CREATE TABLE produit {',
  '  id          BIGINT        NOT NULL AUTO_INCREMENT,',
  '  nom         VARCHAR(150)  NOT NULL,',
  '  prix        DECIMAL(10,2) NOT NULL,',
  '  stock       INT           NOT NULL DEFAULT 0,',
  '  categorie   VARCHAR(80)   DEFAULT NULL,',
  '  description TEXT,',
  '  PRIMARY KEY (id)',
  '} ENGINE=InnoDB;',
  '',
  '-- ────── 4. commande ───────────────────────',
  'CREATE TABLE commande {',
  '  id         BIGINT   NOT NULL AUTO_INCREMENT,',
  '  user_id    BIGINT   NOT NULL,',
  '  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,',
  "  statut     ENUM('pending','paid','shipped','done') NOT NULL,",
  '  PRIMARY KEY (id),',
  '  CONSTRAINT fk_cmd_user',
  '    FOREIGN KEY (user_id) REFERENCES user(id)',
  '} ENGINE=InnoDB;',
  '',
  '-- ────── 5. ligne_commande ─────────────────',
  'CREATE TABLE ligne_commande {',
  '  id          BIGINT        NOT NULL AUTO_INCREMENT,',
  '  commande_id BIGINT        NOT NULL,',
  '  produit_id  BIGINT        NOT NULL,',
  '  quantite    INT           NOT NULL DEFAULT 1,',
  '  prix_u      DECIMAL(10,2) NOT NULL,',
  '  PRIMARY KEY (id),',
  '  CONSTRAINT fk_lc_cmd  FOREIGN KEY (commande_id) REFERENCES commande(id),',
  '  CONSTRAINT fk_lc_prod FOREIGN KEY (produit_id)  REFERENCES produit(id)',
  '} ENGINE=InnoDB;',
  '',
  '-- ────── 6. paiement ───────────────────────',
  'CREATE TABLE paiement {',
  '  id          BIGINT        NOT NULL AUTO_INCREMENT,',
  '  commande_id BIGINT        NOT NULL,',
  '  montant     DECIMAL(10,2) NOT NULL,',
  '  methode     VARCHAR(40)   NOT NULL,',
  '  paid_at     DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,',
  '  PRIMARY KEY (id),',
  '  CONSTRAINT fk_pay_cmd',
  '    FOREIGN KEY (commande_id) REFERENCES commande(id)',
  '} ENGINE=InnoDB;',
]

interface Token {
  re: RegExp
  cls: string
}

function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function span(cls: string, text: string): string {
  return `<span class="${cls}">${text}</span>`
}

export function highlight(raw: string): string {
  if (!raw.trim()) return ' '

  if (/^\s*--/.test(raw)) {
    return span('c', esc(raw))
  }

  const TOKENS: Token[] = [
    { re: /'[^']*'/g,                                                                                                                                             cls: 's'   },
    { re: /\b(CREATE DATABASE IF NOT EXISTS|CREATE TABLE|USE|DROP TABLE)\b/g,                                                                                     cls: 'kw'  },
    { re: /\b(PRIMARY KEY|FOREIGN KEY|UNIQUE KEY|CONSTRAINT|REFERENCES|NOT NULL|DEFAULT NULL|DEFAULT|AUTO_INCREMENT|ON DELETE CASCADE|CHARACTER SET|COLLATE)\b/g, cls: 'con' },
    { re: /\b(BIGINT|INT|VARCHAR|CHAR|TEXT|DATETIME|DATE|DECIMAL|FLOAT|DOUBLE|ENUM|BOOLEAN|TINYINT)\b/g,                                                          cls: 'k'   },
    { re: /\b(uml_ecommerce)\b/g,                                                                                                                                 cls: 'db'  },
    { re: /\b(user|admin|produit|commande|ligne_commande|paiement)\b/g,                                                                                           cls: 't'   },
    { re: /\b(\d+)\b/g,                                                                                                                                           cls: 'n'   },
    { re: /([(),;{}=])/g,                                                                                                                                         cls: 'sep' },
  ]

  interface Match {
    start: number
    end: number
    text: string
    cls: string
  }

  const matches: Match[] = []

  for (const { re, cls } of TOKENS) {
    re.lastIndex = 0
    let m: RegExpExecArray | null
    while ((m = re.exec(raw)) !== null) {
      matches.push({ start: m.index, end: m.index + m[0].length, text: m[0], cls })
    }
  }

  matches.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start))

  let result = ''
  let cursor = 0

  for (const { start, end, text, cls } of matches) {
    if (start < cursor) continue
    result += esc(raw.slice(cursor, start))
    result += span(cls, esc(text))
    cursor = end
  }

  result += esc(raw.slice(cursor))
  return result
}
