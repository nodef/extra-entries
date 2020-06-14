/**
 * Removes first value.
 * @param x entries
 * @returns [[key, value], entries]
 */
function shift<K, V>(x: Iterable<[K, V]>): [[K, V], IterableIterator<[K, V]>] {
  var x1 = new Map(x);
  return [shift$(x1), x1];
}
export default shift;
