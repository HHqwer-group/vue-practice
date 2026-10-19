import test from 'node:test';
import assert from 'node:assert/strict';
import { pageOrders, newestOrders, cancelOrder, totalCents } from './orders.js';

const makeOrders = () => [
  { id: 'a', createdAt: 100, priceCents: 1200, quantity: 1 },
  { id: 'b', createdAt: 300, priceCents: 800, quantity: 1 },
  { id: 'c', createdAt: 200, priceCents: 500, quantity: 1 },
];

test('page stays within the requested size', () => {
  assert.ok(pageOrders(makeOrders(), 1, 2).length <= 2);
});

test('returns the newest order', () => {
  assert.equal(newestOrders(makeOrders(), 1)[0].id, 'b');
});

test('cancels an existing order', () => {
  assert.deepEqual(cancelOrder(makeOrders(), 'b').map(order => order.id), ['a', 'c']);
});

test('sums single-quantity orders in cents', () => {
  assert.equal(totalCents(makeOrders()), 2500);
  assert.equal(totalCents([]), 0);
});
