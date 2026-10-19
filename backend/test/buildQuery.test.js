// Tests the query builder without requiring a running MongoDB instance.
const test = require('node:test');
const assert = require('node:assert/strict');
const { buildQuery, escapeRegex } = require('../utils/buildQuery');

test('buildQuery maps filters and search', () => {
  const query = buildQuery({ priority: 'High', status: 'Done', search: 'API' });
  assert.equal(query.priority, 'High');
  assert.equal(query.status, 'Done');
  assert.equal(query.$or.length, 2);
  assert.equal(query.$or[0].name.test('api setup'), true);
});

test('escapeRegex neutralizes regex characters', () => {
  assert.equal(escapeRegex('a+b?'), 'a\\+b\\?');
});
