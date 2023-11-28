ALTER TABLE "comments" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "comments" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "category" varchar(200);--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "rating" integer;