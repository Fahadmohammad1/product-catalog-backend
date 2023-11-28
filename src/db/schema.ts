import { relations, sql } from "drizzle-orm";
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
  image: text("image"),
  category: varchar("category", { length: 200 }),
  rating: integer("rating"),
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`now()`),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  email: varchar("email").unique(),
  password: varchar("password"),
  avatar: text("avatar"),
});

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  text: text("text"),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  productId: integer("productId")
    .notNull()
    .references(() => products.id),
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`now()`),
  updatedAt: timestamp("updated_at"),
});

export const commentRelation = relations(comments, ({ one }) => ({
  user: one(users, {
    fields: [comments.userId],
    references: [users.id],
  }),
  product: one(products, {
    fields: [comments.productId],
    references: [products.id],
  }),
}));
