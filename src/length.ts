import size from './size';

/**
 * Gets size of entries.
 * @param x entries
 */
function length<K, V>(x: Iterable<[K, V]>): number {
  return size(x);
}
export default length;
