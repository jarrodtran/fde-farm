// rule:no-helper-text
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const helperPatterns = [
  /this is the client-side/i,
  /is a full-stack/i,
  /connects to the backend/i,
  /built with vite/i,
];

describe("no-helper-text", () => {
  it("App.tsx carries no helper text or explanatory copy", () => {
    const app = readFileSync(new URL("../client/src/App.tsx", import.meta.url), "utf8");
    for (const p of helperPatterns) {
      expect(app).not.toMatch(p);
    }
  });
});
