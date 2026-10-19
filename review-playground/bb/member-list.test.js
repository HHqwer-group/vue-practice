import test from 'node:test';
import assert from 'node:assert/strict';
import { pageMembers, newestMembers, removeMember, activePercent } from './member-list.js';

const members = () => [
  { id: 'a', joinedAt: 10, active: true },
  { id: 'b', joinedAt: 30, active: false },
  { id: 'c', joinedAt: 20, active: true },
];

test('short first page contains at most the page size', () => {
  assert.ok(pageMembers(members(), 1, 10).length <= 10);
});
test('newest members are returned first', () => {
  assert.deepEqual(newestMembers(members(), 2).map(member => member.id), ['b', 'c']);
});
test('removes an existing member', () => {
  assert.deepEqual(removeMember(members(), 'b').map(member => member.id), ['a', 'c']);
});
test('rounds the active member percentage', () => {
  assert.equal(activePercent(members()), 67);
});
