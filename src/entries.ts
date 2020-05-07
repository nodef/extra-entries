/**
 * Lists all pairs.
 * @param x entries
 */
function* entries<K, V>(x: Iterable<[K, V]>): IterableIterator<[K, V]> {
  yield* x;
}
export default entries;
