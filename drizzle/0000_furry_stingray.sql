CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"description" text,
	"price" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
