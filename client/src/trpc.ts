import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../server/_core/routes";

export const trpc = createTRPCClient<AppRouter>({
  links: [httpBatchLink({ url: "/api" })],
});
