/**
 * Sets value at key.
 * @param x entries
 * @param k key
 * @param v value
 */
function* set<K, V>(x: Iterable<[K, V]>, k: K, v: V): IterableIterator<[K, V]> {
  for(var [j, u] of x)
    yield j===k? [j, v] : [j, u];
}
export default set;
