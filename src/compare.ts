import {compare as mapCompare} from 'extra-map';
import type {compareFn, mapFn, Entries} from './_types';

/**
 * Compares two entries.
 * @param x entries
 * @param y another entries
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns x=y: 0, otherwise: -ve/+ve
 */
function compare<T, U, V=U>(x: Entries<T, U>, y: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): number {
  return mapCompare(new Map(x), new Map(y), fc, fm);
}
export default compare;
