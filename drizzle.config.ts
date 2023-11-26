import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./schema/*",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.URI as string,
  },
} satisfies Config;
