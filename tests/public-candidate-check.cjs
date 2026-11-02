'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const file = path.join(__dirname, '../src/WME-Localisateur-de-PR-France-v1.2.0.user.js');
const source = fs.readFileSync(file, 'utf8');
const header = source.slice(0, source.indexOf('// ==/UserScript=='));

function meta(name) {
  const line = header.split('\n').find((s) => s.startsWith('// @' + name + ' '));
  return line ? line.slice(4 + name.length).trim() : null;
}
assert.equal(meta('version'), '1.2.0');
assert.match(meta('name'), /candidate publique/);
assert.match(meta('description'), /France/);
assert.equal(meta('license'), 'MIT');
assert.equal(meta('run-at'), 'document-idle');
const connections = [...header.matchAll(/^\/\/ @connect\s+(.+)$/gm)].map((m) => m[1].trim());
assert.deepEqual(connections, ['api.x32data.fr', 'greasyfork.org', 'update.greasyfork.org']);
assert.doesNotMatch(header, /^\/\/ @(?:updateURL|downloadURL|require)\s/m);
assert.match(header, /^\/\/ @match\s+https:\/\/www\.waze\.com\/editor/m);
assert.match(header, /^\/\/ @match\s+https:\/\/beta\.waze\.com\/editor/m);

const countryStart = source.indexOf('const COUNTRY_CONFIG = Object.freeze({');
const translationsStart = source.indexOf('const UI_TRANSLATIONS = Object.freeze({', countryStart);
assert(countryStart >= 0 && translationsStart > countryStart);
const countryConfig = source.slice(countryStart, translationsStart);
assert.match(countryConfig, /FR:\s*Object\.freeze\(\{/);
assert.doesNotMatch(countryConfig, /CO:\s*Object\.freeze\(\{/);
assert.doesNotMatch(source, /<option\s+value="CO"/);
assert.match(source, /const next = COUNTRY_CONFIG\[countryCode\] \? countryCode : "FR";/);
assert(source.includes('currentCountry = COUNTRY_CONFIG[String(readSetting(SETTINGS_COUNTRY_KEY)'));

assert.match(source, /const X32_COMPAT_URL = "https:\/\/api\.x32data\.fr\/v1\/pr\/compat\/";/);
assert.equal([...source.matchAll(/\broot\.getWmeSdk\s*\(/g)].length, 1);
assert.match(source, /sdk = root\.getWmeSdk\(\{ scriptId: SCRIPT_ID, scriptName: SCRIPT_NAME, mode: "async" \}\);/);
assert.doesNotMatch(source, /repli de compatibilité|mode:\s*isAsync\s*\?/);

for (const privatePattern of [
  /\bFDB\b/i,
  /fdb\.x32data\.fr/i,
  /(?:^|[^\w])Bearer\s+\S+/i,
  /\/\/ @(?:updateURL|downloadURL)/i
]) {
  assert.doesNotMatch(source, privatePattern, 'No private integration or automatic-update directive allowed');
}
console.log('PUBLIC_CANDIDATE_CHECK=PASS — France only, no private bridge, no automatic update, SDK async, X32 HTTPS');
