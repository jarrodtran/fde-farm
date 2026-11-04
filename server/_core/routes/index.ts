import { initTRPC } from "@trpc/server";
import type { Context } from "../context";

const t = initTRPC.context<Context>().create();

export const router = t.router({
  // Minimal demonstration query. Add real procedures in later PRs.
  hello: t.procedure.query(() => ({ text: "world" })),
});

export type AppRouter = typeof router;
