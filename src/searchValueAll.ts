import {searchValueAll as mapSearchValueAll} from 'extra-map';
import type {compareFn, mapFn, Entries} from './_types';

/**
 * Finds keys with given value.
 * @param x entries
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function searchValueAll<T, U, V=U>(x: Entries<T, U>, v: U, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): Iterable<T> {
  return mapSearchValueAll(x, v, fc, fm);
}
export default searchValueAll;
