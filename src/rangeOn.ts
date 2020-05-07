import iterableRangeOn from '@extra-iterable/range-on';
import type {mapFn} from './_types';

/**
 * Finds smallest and largest pairs.
 * @param x entries
 * @param fn map function (v, k, x)
 * @param ths this argument
 * @returns [min, max]
 */
function rangeOn<K, V, W>(x: Iterable<[K, V]>, fn: mapFn<K, V, W>=null, ths: object=null): [[K, V], [K, V]] {
  return iterableRangeOn(x, ([k, v]) => fn.call(ths, v, k, x));
}
export default rangeOn;
