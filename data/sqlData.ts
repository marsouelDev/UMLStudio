// ─── SQL PAGE DATA ────────────────────────────────

export type Stat = {
  label: string;
  value: string;
};

export const sqlStats: Stat[] = [
  { label: "Tables",   value: "6"       },
  { label: "Colonnes", value: "29"      },
  { label: "Clés FK",  value: "5"       },
  { label: "Moteur",   value: "InnoDB"  },
  { label: "Encodage", value: "utf8mb4" },
];

export const sqlInfo = {
  engine:  "MySQL 8.0",
  label:   "CREATE TABLE",
};

export const sqlCode = `-- UMLStudio · Script SQL auto-généré
-- Diagramme : Système e-commerce
-- Généré le : 2025-04-25  par Jean Dupont
-- Moteur    : MySQL 8.0 · InnoDB · utf8mb4

-- ──────────────────────────────────────────────

-- ──── 1. user ────────────────────────────────

CREATE TABLE user (
  id            BIGINT        NOT NULL AUTO_INCREMENT,
  nom           VARCHAR(80)   NOT NULL NULL,
  email         VARCHAR(120)  NOT NULL NULL,
  password_hash VARCHAR(255)  NOT NULL NULL,
  facebook_id   VARCHAR(100)  DEFAULT NULL,
  created_at    DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_user_email (email)
) ENGINE=InnoDB;

-- ──── 2. admin (spécialisation de user) ──────
CREATE TABLE admin (
  id      BIGINT       NOT NULL AUTO_INCREMENT,
  user_id BIGINT       NOT NULL,
  role    VARCHAR(60)  NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_admin_user
    FOREIGN KEY (user_id) REFERENCES user(id)
    ON DELETE CASCADE
) ENGINE=InnoDB;

-- ──── 3. product ─────────────────────────────
CREATE TABLE product (
  id          BIGINT         NOT NULL AUTO_INCREMENT,
  name        VARCHAR(150)   NOT NULL,
  price       DECIMAL(10,2)  NOT NULL,
  stock       INT            NOT NULL,
  description TEXT           DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

-- ──── 4. order ───────────────────────────────
CREATE TABLE \order\ (
  id         BIGINT         NOT NULL AUTO_INCREMENT,
  user_id    BIGINT         NOT NULL,
  status     ENUM('pending','paid','shipped','cancelled') NOT NULL,
  total      DECIMAL(10,2)  NOT NULL,
  created_at DATETIME       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT fk_order_user
    FOREIGN KEY (user_id) REFERENCES user(id)
    ON DELETE CASCADE
) ENGINE=InnoDB;

-- ──── 5. order_item (liaison N-N) ────────────
CREATE TABLE order_item (
  id         BIGINT         NOT NULL AUTO_INCREMENT,
  order_id   BIGINT         NOT NULL,
  product_id BIGINT         NOT NULL,
  quantity   INT            NOT NULL,
  unit_price DECIMAL(10,2)  NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_orderitem_order
    FOREIGN KEY (order_id) REFERENCES \order\(id)
    ON DELETE CASCADE,
  CONSTRAINT fk_orderitem_product
    FOREIGN KEY (product_id) REFERENCES product(id)
    ON DELETE RESTRICT
) ENGINE=InnoDB;

-- ──── 6. diagram ─────────────────────────────
CREATE TABLE diagram (
  id         BIGINT        NOT NULL AUTO_INCREMENT,
  user_id    BIGINT        NOT NULL,
  title      VARCHAR(120)  NOT NULL,
  data_json  LONGTEXT      NOT NULL,
  updated_at DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT fk_diagram_user
    FOREIGN KEY (user_id) REFERENCES user(id)
    ON DELETE CASCADE
) ENGINE=InnoDB;;`