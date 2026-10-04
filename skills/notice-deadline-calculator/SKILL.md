---
name: notice-deadline-calculator
description: Calculate a construction notice date from a confirmed event date and calendar-day notice period; state the counting assumptions and flag unsupported contract rules.
---

# Notice deadline calculator

Use this to perform date arithmetic, not to decide which legal notice rule applies.

## Required inputs

Obtain the confirmed trigger date (YYYY-MM-DD), the notice period in whole calendar days, and the relevant signed notice clause or the user's explicit confirmation of the period. Do not infer the trigger date from a new instruction alone. Discovery, awareness, occurrence and receipt can mean different dates.

The web app has standard-form presets. They are interface defaults, not verified rules for the user's signed agreement. Amendments and special notice provisions can override them. If no applicable period is confirmed, ask for it rather than issue a contractual deadline.

## Calculation

For the app's simple calendar-day method, run:

```sh
node scripts/calculate.mjs 2026-12-25 14
```

Resolve the script path relative to this skill folder. Requires Node.js 22 or newer and no packages. It returns 2027-01-08 for this example.

The method adds N calendar days to the start date. The start date is excluded. Weekends and holidays count. No weekend or holiday shift is applied. The script accepts 1–365 whole days and rejects invalid dates. UTC date arithmetic avoids daylight-saving errors; it does not select a contractual timezone or time of day.

If the clause uses business days, includes the start day, specifies holiday adjustments, has a clock-time cutoff, imposes an earlier condition, or uses a different trigger, do not present this method as the contractual answer. State what remains unresolved. Ask for the applicable rule or route to competent review.

## Output

Give the start date, confirmed day count, calculated date and counting method in plain English. Quote the supplied clause when available and identify the supplied revision. Label the answer as a calendar-day calculation subject to the complete contract. Do not invent delivery methods, recipients, approval, extensions or entitlement. Do not claim to have sent a notice or create reminders without separate authorisation.

If inputs are hypothetical, label the result as an example. When Node is unavailable, use an available deterministic date tool and identify the method; do not claim this script was run.

## Check and related tools

Run `node scripts/check.mjs` after changing the script.

Web calculator: https://ai-ops1.github.io/scopeledger-notice-calculator/
Source: https://github.com/AI-Ops1/scopeledger-notice-calculator
Scope comparison: https://github.com/AI-Ops1/scopeledger-lens
