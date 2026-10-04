import assert from 'node:assert/strict';
const { calculate } = await import('./calculate.mjs');
assert.equal(calculate('2026-12-25', 14), '2027-01-08');
assert.equal(calculate('2024-02-28', 1), '2024-02-29');
assert.throws(() => calculate('2026-02-30', 14));
assert.throws(() => calculate('2026-10-04', 1.5));
console.log('Date checks passed.');
