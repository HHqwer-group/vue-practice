import test from 'node:test';
import assert from 'node:assert/strict';
import { applyRetention, checkoutTotal, pageCount } from './operations.js';

const snapshot = [
  { id: 'a1', tenantId: 'a', createdAt: 10 },
  { id: 'a2', tenantId: 'a', createdAt: 30 },
  { id: 'b1', tenantId: 'b', createdAt: 10 },
];

test('retention removes only expired records in the selected tenant', () => {
  assert.deepEqual(applyRetention(snapshot, 'a', 20), [snapshot[1], snapshot[2]]);
});

test('retention preserves the complete snapshot when nothing has expired', () => {
  assert.deepEqual(applyRetention(snapshot, 'a', 5), snapshot);
});

test('checkout without a promotion includes shipping', () => {
  assert.equal(checkoutTotal([{ priceCents: 1000, quantity: 2 }], 0, 500), 2500);
});

test('merchandise promotion does not discount shipping', () => {
  assert.equal(checkoutTotal([{ priceCents: 1000, quantity: 2 }], 50, 500), 1500);
});

test('pagination handles empty and exactly full pages', () => {
  assert.equal(pageCount(0, 10), 0);
  assert.equal(pageCount(20, 10), 2);
});

test('pagination keeps the last partial page accessible', () => {
  assert.equal(pageCount(21, 10), 3);
  assert.equal(pageCount(1, 10), 1);
});
