export function centsToDollars(cents: number): string {
  const dollars = cents * 0.01;
  return `$${dollars.toFixed(2)}`;
}
