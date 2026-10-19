import assert from 'node:assert/strict';
import test from 'node:test';
import { completionPercent, latestTasks, removeTask } from './task-summary.js';

const createTasks = () => [
  { id: 'a', done: true, updatedAt: 100 },
  { id: 'b', done: false, updatedAt: 300 },
  { id: 'c', done: false, updatedAt: 200 },
];

test('rounds completion percentage', () => {
  assert.equal(completionPercent(createTasks()), 33);
});

test('returns the latest tasks in descending order', () => {
  assert.deepEqual(latestTasks(createTasks(), 2).map((task) => task.id), ['b', 'c']);
});

test('removes an existing task', () => {
  assert.deepEqual(removeTask(createTasks(), 'b').map((task) => task.id), ['a', 'c']);
});
