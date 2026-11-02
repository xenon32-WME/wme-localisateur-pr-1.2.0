'use strict';
// Exécute uniquement le chargement des définitions de la candidate.
// Aucune initialisation WME ni requête réseau.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(
  path.join(__dirname, '../src/WME-Localisateur-de-PR-France-v1.2.0.user.js'), 'utf8');
const anchor = '    initialize();';
assert.equal(source.split(anchor).length, 2);
const instrumented = source.replace(anchor,
  '    root.__PUBLIC_UI_AUDIT = Object.freeze({countries: COUNTRY_CONFIG, translations: UI_TRANSLATIONS});');
const root = {document: {}};
vm.runInNewContext(instrumented, {
  unsafeWindow: root, console, module: {exports: {}}, Promise, Date
}, {filename: 'localisateur-pr-fr-public-audit.js', timeout: 5000});
const state = root.__PUBLIC_UI_AUDIT;
assert(state);
assert.deepEqual(Object.keys(state.countries), ['FR']);
assert.equal(state.countries.FR.source, 'IGN BD TOPO · X32 Data');
assert(!source.includes('<option value="CO">'));
for (const lang of ['fr', 'es', 'en']) {
  const disclosure = state.translations[lang].sourceServerInfo;
  assert(disclosure.includes('api.x32data.fr'), lang + ': hostname must be disclosed');
  assert(disclosure.includes('IONOS'), lang + ': technical hosting must be disclosed');
  assert(state.translations[lang].franceSourceInfo.includes('IGN'));
}
assert(source.includes('const X32_COMPAT_URL = "https://api.x32data.fr/v1/pr/compat/";'));
assert.match(source, /^\/\/ @connect\s+api\.x32data\.fr$/m);
assert.doesNotMatch(source, /\/\/ @(?:updateURL|downloadURL)/);
console.log('PUBLIC_FR_SOURCES_UI=PASS — France enabled, X32 brand, API and privacy disclosures preserved');
