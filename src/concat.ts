/**
 * Appends entries together.
 * @param xs entries
 */
function* concat<K, V>(...xs: Iterable<[K, V]>[]): IterableIterator<[K, V]> {
  for(var x of xs)
    yield* x;
}
export default concat;
