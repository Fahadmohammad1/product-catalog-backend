import app from "./app";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import * as schema from "./db/schema";

const client = new Client({
  connectionString: process.env.URI,
});

export const db = drizzle(client, { schema });

async function main() {
  await client.connect();

  console.log("migration started");
  await migrate(db, { migrationsFolder: "drizzle" });
  console.log("migration ended");

  app.listen(port, () => {
    console.info(`Server running on port ${port}`);
  });
}

main().catch((err) => {
  console.log(err);
  process.exit(0);
});
