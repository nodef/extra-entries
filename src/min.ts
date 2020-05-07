import iterableMin from '@extra-iterable/min';
import type {compareFn} from './_types';

/**
 * Finds smallest pair.
 * @param x entries
 * @param fn compare function (a, b)
 */
function min<K, V>(x: Iterable<[K, V]>, fn: compareFn<[K, V]>=null): [K, V] {
  return iterableMin(x, fn);
}
export default min;
