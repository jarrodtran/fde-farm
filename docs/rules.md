# rules.md — FDE Farm constraint table

This table is the constraint layer. Each rule names the test file that fails when it is
broken. `tests/agents-rules.test.ts` fails on any row without a test file or
`untestable` marker, or on any named test that does not mention the rule's id.

| Rule | Test |
|------|------|
| rule:one-primary-action | tests/screen-restraint.test.ts |
| rule:real-scripts | tests/scripts.test.ts |
| rule:no-circular-imports | tests/import-graph.test.ts |
| rule:no-helper-text | tests/copy-contract.test.ts |
| rule:data-source-first | tests/metric-ledger.test.ts |
| rule:constraint-as-test | tests/agents-rules.test.ts |

- `rule:one-primary-action` — each screen has one primary action, visually distinct and
  reachable with one keypress. Test: `tests/screen-restraint.test.ts`.
- `rule:real-scripts` — build/dev/test scripts must not be self-referential. Test: `tests/scripts.test.ts`.
- `rule:no-circular-imports` — the module graph must be acyclic. Test: `tests/import-graph.test.ts`.
- `rule:no-helper-text` — meaning comes from structure (scale, placement, hierarchy),
  not labels or helper copy. Test: `tests/copy-contract.test.ts`.
- `rule:data-source-first` — every figure ships in a committed source (résumé/ledger)
  before it renders; invented figures fail the audit. Test: `tests/metric-ledger.test.ts`.
- `rule:constraint-as-test` — no rule exists without a test that fails when it breaks.
  Test: `tests/agents-rules.test.ts`.
