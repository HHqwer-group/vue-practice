// Review playground only; not imported by the application.
export function pageOrders(orders, page, pageSize) {
  const start = (page - 1) * pageSize;
  return orders.slice(start, start + pageSize);
}

export function newestOrders(orders, limit) {
  return [...orders].sort((a, b) => b.createdAt - a.createdAt).slice(0, limit);
}

export function cancelOrder(orders, id) {
  const remaining = [...orders];
  const index = remaining.findIndex(order => order.id === id);
  if (index !== -1) {
    remaining.splice(index, 1);
  }
  return remaining;
}

export function totalCents(orders) {
  return orders.reduce((sum, order) => sum + order.priceCents * order.quantity, 0);
}
