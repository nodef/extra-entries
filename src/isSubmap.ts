import {isSubmap as mapIsSubmap} from 'extra-map';
import type {compareFn, mapFn, Entries} from './_types';

/**
 * Checks if entries has a submap.
 * @param x entries
 * @param y submap?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function isSubmap<T, U, V=U>(x: Entries<T, U>, y: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  return mapIsSubmap(new Map(x), y, fc, fm);
}
export default isSubmap;
