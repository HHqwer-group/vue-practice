import assert from 'node:assert/strict'
import test from 'node:test'
import { useLocalCounter } from '../src/composables/useLocalCounter.js'

test('increment and decrement update the counter', () => {
  globalThis.localStorage = { getItem: () => '2', setItem: () => {} }
  const { count, increment, decrement } = useLocalCounter('actions')

  increment()
  assert.equal(count.value, 3)
  decrement()
  decrement()
  assert.equal(count.value, 1)
})
