import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { router } from "./routes";
import { createContext } from "./context";

const app = express();
app.use(express.json());
app.use("/api", createExpressMiddleware({ router, createContext }));

app.get("/health", (_req: unknown, res: express.Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
