// rule:one-primary-action
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("one-primary-action", () => {
  it("first screen exposes exactly one primary action", () => {
    const app = readFileSync(new URL("../client/src/App.tsx", import.meta.url), "utf8");
    const buttons = (app.match(/<button/g) || []).length;
    const primary = (app.match(/data-testid="primary-action"/g) || []).length;
    expect(primary).toBe(1);
    expect(buttons).toBe(1);
  });
});
