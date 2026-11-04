// rule:no-circular-imports
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("no-circular-imports", () => {
  it("no module imports itself (a self-import breaks the module graph)", () => {
    const src = readFileSync(new URL("../server/_core/routes/index.ts", import.meta.url), "utf8");
    const selfImports = src.match(/import\s*\{\s*[^}]+\}\s*from\s*["']\.\/index["']/g);
    expect(selfImports).toBeNull();
  });
});
