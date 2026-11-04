import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("foundation gate", () => {
  it("exposes exactly one primary action on the first screen", () => {
    // Deliberately red until PR #2 (foundation diff). The gate is wired so the
    // failing suite proves it runs; PR #2 adds the primary-action marker to
    // client/src/App.tsx and makes this pass.
    const app = readFileSync(new URL("./client/src/App.tsx", import.meta.url), "utf8");
    expect(app).toContain(`data-testid="primary-action"`);
  });
});
