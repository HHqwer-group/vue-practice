import assert from 'node:assert/strict'
import test from 'node:test'
import { nextTick } from 'vue'
import { useLocalCounter } from '../src/composables/useLocalCounter.js'

test('reset restores and persists the configured initial value', async () => {
  const writes = []
  globalThis.localStorage = {
    getItem: () => '9',
    setItem: (key, value) => writes.push([key, value]),
  }
  const { count, reset } = useLocalCounter('reset-counter', 3)

  reset()
  await nextTick()
  assert.equal(count.value, 3)
  assert.deepEqual(writes, [['reset-counter', '3']])
})
