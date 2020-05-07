/**
 * Gets value at key.
 * @param x entries
 * @param k key
 */
function get<K, V>(x: Iterable<[K, V]>, k: K): V {
  for(var [l, v] of x)
    if(k===l) return v;
}
export default get;
