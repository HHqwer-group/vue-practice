import test from 'node:test';
import assert from 'node:assert/strict';
import { pageOrders, newestOrders, cancelOrder, totalCents } from './orders.js';

const makeOrders = () => [
  { id: 'a', createdAt: 100, priceCents: 1200, quantity: 1 },
  { id: 'b', createdAt: 300, priceCents: 800, quantity: 1 },
  { id: 'c', createdAt: 200, priceCents: 500, quantity: 1 },
];

test('returns the requested 1-based page', () => {
  const orders = makeOrders();
  assert.deepEqual(pageOrders(orders, 1, 2).map(order => order.id), ['a', 'b']);
  assert.deepEqual(pageOrders(orders, 2, 2).map(order => order.id), ['c']);
});

test('returns newest orders without reordering the input array', () => {
  const orders = makeOrders();
  const originalOrder = [...orders];

  assert.deepEqual(newestOrders(orders, 2).map(order => order.id), ['b', 'c']);
  assert.deepEqual(orders, originalOrder);
});

test('cancels an existing order', () => {
  const orders = makeOrders();
  assert.deepEqual(cancelOrder(orders, 'b').map(order => order.id), ['a', 'c']);
  assert.deepEqual(orders.map(order => order.id), ['a', 'b', 'c']);
});

test('keeps all orders when the cancellation ID is unknown', () => {
  const orders = makeOrders();
  assert.deepEqual(cancelOrder(orders, 'missing'), orders);
  assert.deepEqual(orders.map(order => order.id), ['a', 'b', 'c']);
});

test('sums each order price multiplied by its quantity in cents', () => {
  const orders = makeOrders();
  orders[1].quantity = 3;
  assert.equal(totalCents(orders), 4100);
  assert.equal(totalCents([]), 0);
});
