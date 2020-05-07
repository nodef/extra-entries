/**
 * Fills with given value.
 * @param x entries
 * @param v value
 */
function* fill<K, V>(x: Iterable<[K, V]>, v: V): IterableIterator<[K, V]> {
  for(var [k,] of x)
    yield [k, v];
}
export default fill;
