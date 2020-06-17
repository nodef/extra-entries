import {range as mapRange} from 'extra-map';
import type {compareFn, mapFn, Entries} from './_types';

/**
 * Finds smallest and largest entries.
 * @param x entries
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [smallest, largest]
 */
function range<T, U, V=U>(x: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): [[T, U], [T, U]] {
  return mapRange(x, fc, fm);
}
export default range;
