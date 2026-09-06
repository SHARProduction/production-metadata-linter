/*
 * Standalone Windows entry point for Production Metadata Linter.
 * It intentionally mirrors the small dependency-free validation contract in
 * cli.mjs so Node's Single Executable Application runtime can execute it.
 */
const { readFileSync } = require('node:fs');

const stages = new Set(['preproduction', 'production', 'postproduction', 'delivery']);
const rights = new Set(['cleared', 'licensed', 'synthetic', 'unknown']);

function lintManifest(value) {
  const errors = [];
  if (!value || typeof value !== 'object' || Array.isArray(value)) return ['manifest must be a JSON object'];
  for (const field of ['title', 'project', 'stage', 'rights_status']) {
    if (typeof value[field] !== 'string' || !value[field].trim()) errors.push(`${field} is required`);
  }
  if (value.stage && !stages.has(value.stage)) errors.push(`stage must be one of: ${[...stages].join(', ')}`);
  if (value.rights_status && !rights.has(value.rights_status)) errors.push(`rights_status must be one of: ${[...rights].join(', ')}`);
  if (value.rights_status === 'unknown') errors.push('rights_status=unknown is not releasable');
  return errors;
}

const file = process.argv[2];
if (!file) {
  console.error('Usage: production-metadata-linter <manifest.json>');
  process.exit(2);
}
let input;
try {
  input = JSON.parse(readFileSync(file, 'utf8'));
} catch (error) {
  console.error(`Invalid JSON: ${error.message}`);
  process.exit(2);
}
const errors = lintManifest(input);
if (errors.length) {
  console.error(`FAIL\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log('PASS: production metadata manifest is releasable');
