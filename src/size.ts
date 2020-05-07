import iterableSize from '@extra-iterable/size';

/**
 * Gets size of entries.
 * @param x entries
 */
function size<K, V>(x: Iterable<[K, V]>): number {
  return iterableSize(x);
}
export default size;
