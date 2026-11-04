import drizzle from "drizzle-orm";
import { mysql } from "mysql2/promise";

// Database schema definition
export const schema = drizzle.schema({
  users: drizzle.ColumnDef({
    id: drizzle.primaryId("id"),
    name: drizzle.Column("name"),
    email: drizzle.Column("email"),
    createdAt: drizzle.Column("createdAt"),
  }),
  posts: drizzle.ColumnDef({
    id: drizzle.primaryId("id"),
    title: drizzle.Column("title"),
    content: drizzle.Column("content"),
    userId: drizzle.Column("userId"),
    createdAt: drizzle.Column("createdAt"),
  }),
});

// Database connection
export async function getDatabase() {
  return mysql({ host: process.env.DB_HOST || "localhost", user: process.env.DB_USER || "root", password: process.env.DB_PASSWORD || "", database: process.env.DB_NAME || "app", port: process.env.DB_PORT || 3306 });
}
