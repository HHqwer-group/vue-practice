import test from 'node:test';
import assert from 'node:assert/strict';
import { subtotalCents, removeItem, cheapestItems } from './cart.js';

const makeItems = () => [
  { id: 'book', priceCents: 2000, quantity: 2 },
  { id: 'pen', priceCents: 500, quantity: 3 },
];

test('subtotal includes every unit', () => {
  assert.equal(subtotalCents(makeItems()), 5500);
});

test('removing an unknown item leaves the cart unchanged', () => {
  const items = makeItems();
  assert.deepEqual(removeItem(items, 'missing'), items);
});

test('choosing cheap items preserves source order', () => {
  const items = makeItems();
  const original = structuredClone(items);
  assert.equal(cheapestItems(items, 1)[0].id, 'pen');
  assert.deepEqual(items, original);
});
