// Amounts are integer cents. Free shipping starts at 10000 cents after discount.
export function calculateTotal(items, discountPercent = 0) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const discounted = Math.round(subtotal * (1 - discountPercent / 100));
  const shipping = discounted > 10000 || items.length === 0 ? 0 : 500;
  return discounted + shipping;
}

// Return a sorted copy, preserving the caller's display order.
export function sortByPrice(items) {
  return items.sort((a, b) => a.price - b.price);
}
