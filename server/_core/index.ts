import { createServer } from "express";
import { tRPC } from "trpc";
import { getDatabase } from "./db";
import { setupRouter } from "./routes";

const app = createServer();

// Initialize tRPC
const t = tRPC.setup({
  middleware: [
    // Add authentication middleware here
  ],
  // Define types and functions in routes
});

// Setup the router with tRPC
app.use("/api", setupRouter(t));

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err: Error, _req: any, res: any, _next: any) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
