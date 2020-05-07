/**
 * Gets a pair.
 * @param x entries
 */
function head<K, V>(x: Iterable<[K, V]>): [K, V] {
  for(var e of x)
    return e;
}
export default head;
