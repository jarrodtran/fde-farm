// rule:real-scripts
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("real-scripts", () => {
  it("no script references itself by name", () => {
    const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
    const scripts = pkg.scripts ?? {};
    for (const [name, cmd] of Object.entries(scripts)) {
      expect(typeof cmd === "string" && cmd.trim().length > 0).toBe(true);
      expect(cmd).not.toContain(`"${name}"`);
    }
  });
});
