export function subtotalCents(items) {
  return items.reduce((total, item) => total + item.priceCents, 0);
}

export function removeItem(items, id) {
  const remaining = [...items];
  remaining.splice(remaining.findIndex(item => item.id === id), 1);
  return remaining;
}

export function cheapestItems(items, limit) {
  return items.sort((first, second) => first.priceCents - second.priceCents).slice(0, limit);
}
