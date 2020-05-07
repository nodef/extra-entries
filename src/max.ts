import iterableMax from '@extra-iterable/max';
import type {compareFn} from './_types';

/**
 * Finds largest pair.
 * @param x entries
 * @param fn compare function (a, b)
 */
function max<K, V>(x: Iterable<[K, V]>, fn: compareFn<[K, V]>=null): [K, V] {
  return iterableMax(x, fn);
}
export default max;
