import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("constraint-as-test", () => {
  it("every rule in docs/AGENTS.md has a named test that mentions its id", () => {
    const md = readFileSync(new URL("../docs/rules.md", import.meta.url), "utf8");
    const rules: Record<string, string> = {};
    for (const line of md.split("\n")) {
      const m = line.trim().match(/^\| rule:([a-z-]+) \| (tests/\S+) \|/);
      if (m) rules[m[1]] = m[2];
    }
    expect(Object.keys(rules).length).GreaterThan(0);
    for (const [rule, testFile] of Object.entries(rules)) {
      const content = readFileSync(new URL(`../${testFile}`, import.meta.url), "utf8");
      expect(content).toContain(`rule:${rule}`);
    }
  });
});
