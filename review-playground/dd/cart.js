export function subtotalCents(items) {
  return items.reduce((total, item) => total + item.priceCents * item.quantity, 0);
}

export function removeItem(items, id) {
  return items.filter(item => item.id !== id);
}

export function cheapestItems(items, limit) {
  return [...items].sort((first, second) => first.priceCents - second.priceCents).slice(0, limit);
}
