import assert from 'node:assert/strict'
import test from 'node:test'
import { nextTick } from 'vue'
import { useLocalCounter } from '../src/composables/useLocalCounter.js'

test('loads and persists the counter with the supplied storage key', async () => {
  const storage = new Map([['saved-counter', '7']])
  globalThis.localStorage = {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
  }
  const { count, increment } = useLocalCounter('saved-counter')

  assert.equal(count.value, 7)
  increment()
  await nextTick()
  assert.equal(storage.get('saved-counter'), '8')
})
