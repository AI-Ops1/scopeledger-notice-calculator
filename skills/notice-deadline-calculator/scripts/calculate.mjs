import { pathToFileURL } from 'node:url';
export function calculate(start, days) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(start) || !Number.isSafeInteger(days) || days < 1 || days > 365) throw new Error('Supply a real YYYY-MM-DD date and 1–365 whole calendar days.');
  const date = new Date(start + 'T00:00:00Z');
  if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== start) throw new Error('The start date is invalid.');
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try { console.log(JSON.stringify({start:process.argv[2], calendar_days:Number(process.argv[3]), date:calculate(process.argv[2], Number(process.argv[3])), counting:'Start date excluded; weekends and holidays included; no holiday adjustment.'})); }
  catch(error) { console.error(error.message); process.exitCode = 1; }
}
