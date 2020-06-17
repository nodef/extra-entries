/**
 * Breaks entries into chunks of given size.
 * @param x entries
 * @param n chunk size (1)
 */
function* chunk<K, V>(x: Iterable<[K, V]>, n: number=1): Iterable<Array<[K, V]>> {
  var a: Array<[K, V]> = [], m = n;
  for(var e of x) {
    a.push(e);
    if(--m>0) continue;
    yield a;
    a = [e];
    m = n;
  }
  if(a.length) yield a;
}
export default chunk;
