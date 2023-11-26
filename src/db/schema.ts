import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  description: text("description"),
  price: integer("price"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
