import { tRPC } from "trpc";
import { setupRouter } from "./index";

export const router = tRPC.setup({
  middleware: [
    // Add authentication middleware here
  ],
  // Define types and functions
});

export default router;
