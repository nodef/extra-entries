import {isSubset as mapIsSubset} from 'extra-map';
import type {compareFn, mapFn, Entries} from './_types';

/**
 * Checks if entries has a subset.
 * @param x entries
 * @param y subset?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function isSubset<T, U, V=U>(x: Entries<T, U>, y: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  return mapIsSubset(new Map(x), y, fc, fm);
}
export default isSubset;
