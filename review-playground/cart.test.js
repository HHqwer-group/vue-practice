import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTotal, sortByPrice } from './cart.js';

test('charges shipping below the threshold', () => {
  assert.equal(calculateTotal([{ price: 2000, quantity: 1 }]), 2500);
});

test('supports multiple units', () => {
  assert.equal(calculateTotal([{ price: 2000, quantity: 3 }]), 6500);
});

test('free shipping includes the exact threshold', () => {
  assert.equal(calculateTotal([{ price: 10000, quantity: 1 }]), 10000);
});

test('sorting preserves the input array', () => {
  const items = [{ price: 300 }, { price: 100 }];
  const original = structuredClone(items);
  assert.deepEqual(sortByPrice(items), [{ price: 100 }, { price: 300 }]);
  assert.deepEqual(items, original);
});
