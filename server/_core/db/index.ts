import { createPool } from "mysql2/promise";
import { getDatabase } from "./config";

export async function getDatabase() {
  return createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "app",
    port: process.env.DB_PORT || 3306,
  });
}
