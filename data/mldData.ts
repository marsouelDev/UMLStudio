
export type BadgeType = "PK" | "FK" | "NN" | "UQ" | "NULL";

export type Column = {
  name: string;
  type: string;
  badges: BadgeType[];
  fkTarget?: string;
};

export type Table = {
  name: string;
  meta?: string;
  columns: Column[];
};

export type Relation = {
  fromTable: string;
  cardLeft: string;
  cardRight: string;
  toTable: string;
  constraint: string;
};  

export const tables: Table[] = [
  {
    name: "user",
    columns: [
      { name: "id",            type: "BIGINT",       badges: ["PK"] },
      { name: "nom",           type: "VARCHAR(30)",  badges: ["NN"] },
      { name: "email",         type: "VARCHAR(120)", badges: ["UQ"] },
      { name: "password_hash", type: "VARCHAR(255)", badges: ["NN"] },
      { name: "facebook_id",   type: "VARCHAR(100)", badges: ["NULL"] },
      { name: "created_at",    type: "DATETIME",     badges: ["NN"] },
    ],
  },
  {
    name: "order",
    columns: [
      { name: "id",         type: "BIGINT",        badges: ["PK"] },
      { name: "user_id",    type: "BIGINT",        badges: ["FK"], fkTarget: "user" },
      { name: "status",     type: "ENUM",          badges: ["NN"] },
      { name: "total",      type: "DECIMAL(10,2)", badges: ["NN"] },
      { name: "created_at", type: "DATETIME",      badges: ["NN"] },
    ],
  },
  {
    name: "product",
    columns: [
      { name: "id",          type: "BIGINT",        badges: ["PK"] },
      { name: "name",        type: "VARCHAR(150)",  badges: ["NN"] },
      { name: "price",       type: "DECIMAL(10,2)", badges: ["NN"] },
      { name: "stock",       type: "INT",           badges: ["NN"] },
      { name: "description", type: "TEXT",          badges: ["NULL"] },
    ],
  },
  {
    name: "order_item",
    meta: "",
    columns: [
      { name: "id",         type: "BIGINT",        badges: ["PK"] },
      { name: "order_id",   type: "BIGINT",        badges: ["FK"], fkTarget: "order" },
      { name: "product_id", type: "BIGINT",        badges: ["FK"], fkTarget: "product" },
      { name: "quantity",   type: "INT",           badges: ["NN"] },
      { name: "unit_price", type: "DECIMAL(10,2)", badges: ["NN"] },
    ],
  },
  {
    name: "diagram",
    columns: [
      { name: "id",         type: "BIGINT",        badges: ["PK"] },
      { name: "user_id",    type: "BIGINT",        badges: ["FK"], fkTarget: "user" },
      { name: "title",      type: "VARCHAR(120)",  badges: ["NN"] },
      { name: "data_json",  type: "LONGTEXT",      badges: ["NN"] },
      { name: "updated_at", type: "DATETIME",      badges: ["NN"] },
    ],
  },
  {
    name: "admin",
    meta: "spécialisation",
    columns: [
      { name: "id",      type: "BIGINT",      badges: ["PK"] },
      { name: "user_id", type: "BIGINT",      badges: ["FK"], fkTarget: "user" },
      { name: "nom", type: "BIGINT",      badges: ["FK"], fkTarget: "user" },
      { name: "role",    type: "VARCHAR(60)", badges: ["NN"] },
      { name: "description",    type: "VARCHAR(60)", badges: ["NN"] },
    ],
  },
];

export const relations: Relation[] = [
  { fromTable: "user",    cardLeft: "1,1", cardRight: "0,N", toTable: "order",      constraint: "ON DELETE CASCADE" },
  { fromTable: "order",   cardLeft: "1,1", cardRight: "1,N", toTable: "order_item", constraint: "ON DELETE CASCADE" },
  { fromTable: "product", cardLeft: "1,N", cardRight: "1,N", toTable: "order_item", constraint: "ON DELETE RESTRICT" },
  { fromTable: "user",    cardLeft: "1,1", cardRight: "0,N", toTable: "diagram",    constraint: "ON DELETE CASCADE" },
  { fromTable: "user",    cardLeft: "1,1", cardRight: "0,1", toTable: "admin",      constraint: "spécialisation · ON DELETE CASCADE" },
];