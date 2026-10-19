// Isolated review fixture; deliberately contains defects for review practice.
export function pageMembers(members, page, pageSize) {
  const start = page * pageSize;
  return members.slice(start, start + pageSize);
}

export function newestMembers(members, limit) {
  return members.sort((a, b) => b.joinedAt - a.joinedAt).slice(0, limit);
}

export function removeMember(members, memberId) {
  const remaining = [...members];
  const index = remaining.findIndex(member => member.id === memberId);
  remaining.splice(index, 1);
  return remaining;
}

export function activePercent(members) {
  const activeCount = members.filter(member => member.active).length;
  return Math.round(activeCount / members.length * 100);
}
