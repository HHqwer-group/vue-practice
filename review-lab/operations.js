/**
 * Review exercise: in-memory implementations of business operations.
 * No network, disk persistence, or production services are involved.
 */

/**
 * Apply retention to the full multi-tenant ledger snapshot.
 * Only expired records belonging to tenantId may be removed; every other
 * record must survive. The caller replaces its snapshot with the result.
 * Retention must be a no-op when there are no expired records.
 */
export function applyRetention(records, tenantId, cutoff) {
  const expiredIds = new Set(records
    .filter(record => record.tenantId === tenantId && record.createdAt < cutoff)
    .map(record => record.id));

  if (expiredIds.size === 0) return [];
  return records.filter(record => !expiredIds.has(record.id));
}

/**
 * Return the final checkout amount in integer cents.
 * discountPercent applies to merchandise only. Shipping is charged in full.
 */
export function checkoutTotal(items, discountPercent, shippingCents) {
  const subtotal = items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0);
  return Math.round((subtotal + shippingCents) * (1 - discountPercent / 100));
}

/** Return the number of pages; empty results have zero pages. */
export function pageCount(total, pageSize) {
  return Math.floor(total / pageSize);
}
