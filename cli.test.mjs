import test from 'node:test';
import assert from 'node:assert/strict';
import { lintManifest } from './cli.mjs';

test('accepts a cleared delivery manifest', () => {
  assert.deepEqual(lintManifest({title:'Master', project:'SHAR demo', stage:'delivery', rights_status:'cleared'}), []);
});
test('rejects unknown rights and missing fields', () => {
  assert.deepEqual(lintManifest({project:'x', stage:'delivery', rights_status:'unknown'}), ['title is required', 'rights_status=unknown is not releasable']);
});
