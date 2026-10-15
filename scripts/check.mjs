// Node-Checks ohne Abhängigkeiten: node scripts/check.mjs
import fs from 'node:fs';
const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const test = fs.readFileSync(new URL('../test.html', import.meta.url), 'utf8');
let fail = 0;
const ok = (c, m) => { if (!c) { fail++; console.error('FAIL', m); } else console.log('ok  ', m); };
const grab = (src, re, what) => { const m = src.match(re); if (!m) throw new Error(what + ' nicht gefunden'); return m[0]; };

// 1) i18n-Vollständigkeit: jede Sprache hat alle en-Schlüssel, keine fremden, keine leeren Werte
const i18n = new Function(grab(html, /const i18n\s*=\s*\{[\s\S]*?\n\};/, 'i18n') + '; return i18n;')();
for (const l of Object.keys(i18n)) {
  const miss = Object.keys(i18n.en).filter(k => !(k in i18n[l]) || i18n[l][k] === '');
  const extra = Object.keys(i18n[l]).filter(k => !(k in i18n.en));
  ok(!miss.length && !extra.length, `i18n ${l}: fehlt [${miss}] extra [${extra}]`);
}

// 2) Formel in index.html == Kopie in test.html (whitespace-normalisiert)
const fn = s => grab(s, /function computeCapacity[\s\S]*?\n\}\n/, 'computeCapacity').replace(/\s+/g, ' ');
ok(fn(html) === fn(test), 'computeCapacity identisch in index.html und test.html');

// 3) clampNum / LIMITS
const clamp = new Function(grab(html, /const LIMITS=[^\n]*\n/, 'LIMITS') + grab(html, /function clampNum[^\n]*\n/, 'clampNum') + '; return clampNum;')();
ok(clamp('0', 'focus') === 10 && clamp('', 'focus') === 70 && clamp('abc', 'employment') === 100 &&
   clamp('999', 'absence') === 60 && clamp('-5', 'absence') === 0 && clamp('0', 'sprintScope') === 10 &&
   clamp('99', 'holidayDays') === 14, 'clampNum Grenzen/Defaults');

// 4) Export: Spaltenzahl und |-Escape
const bm = grab(html, /function buildMarkdown\(\)\{[\s\S]*?\n\}\n/, 'buildMarkdown');
const t = k => k;
const r = { sprintName: 'S', rows: [{ name: 'A|B', employment: 100, allocation: 100, absence: 0, holidays: 0, available: 10, focus: 70, capDays: 7, capHours: 56, scopeDays: 4.9, scopeHours: 39.2 }],
  totalDays: 7, totalHours: 56, usDays: 4.9, usHours: 39.2, sprintDays: 10, totalHolidays: 0, bufferDays: 2.1, bufferHours: 16.8, scopePct: 70, discEntries: [['X|Y', { days: 1, hours: 8 }]] };
const md = new Function('t', '_lastResult', bm + '; return buildMarkdown();')(t, r);
const cells = l => l.replace(/\\\|/g, '').split('|').length - 2;
const tl = md.split('\n').filter(l => l.startsWith('|'));
ok([0, 1, 2, 3].every(i => cells(tl[i]) === 11), 'Export: Kopf/Trenner/Zeile/Total je 11 Spalten');
ok(md.includes('A\\|B') && md.includes('X\\|Y'), 'Export: | in Namen escaped');
process.exit(fail ? 1 : 0);
