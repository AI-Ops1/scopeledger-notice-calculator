# ScopeLedger Notice Deadline Calculator

[Open the web calculator](https://ai-ops1.github.io/scopeledger-notice-calculator/).

Choose a period, enter the event or discovery date and calculate the date. The tool adds calendar days. It excludes the start date, counts weekends and holidays, and does not adjust the result for holidays.

Confirm the signed notice clause, amendments and correct trigger date. Standard-form presets are defaults, not a guarantee for your contract. This tool does not send notices or determine legal rights.

## AI agent skill

[Download the skill ZIP](https://github.com/AI-Ops1/scopeledger-notice-calculator/releases/latest/download/notice-deadline-calculator-skill.zip) or inspect [the skill folder](skills/notice-deadline-calculator).

Extract the ZIP and copy the notice-deadline-calculator folder into your agent's skills directory. For Codex, this is normally ~/.codex/skills/. The included Node.js script does date arithmetic without AI credits or dependencies. The agent confirms the inputs and explains the assumptions.

Example: `node skills/notice-deadline-calculator/scripts/calculate.mjs 2026-12-25 14`

Check: `node skills/notice-deadline-calculator/scripts/check.mjs`

Related tool: [ScopeLedger Lens](https://github.com/AI-Ops1/scopeledger-lens) for comparing scope with a new instruction.

## Chrome extension

[Get Notice Deadline Calculator on the Chrome Web Store](https://chromewebstore.google.com/detail/notice-deadline-calculato/bncibbamfhacacpbnnfbhlkkooeedgnj).
