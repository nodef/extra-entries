import compare from './compare';
import type {compareFn, mapFn, Entries} from './_types';

/**
 * Checks if two maps are equal.
 * @param x a map
 * @param y another map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function isEqual<T, U, V=U>(x: Entries<T, U>, y: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  return compare(x, y, fc, fm)===0;
}
export default isEqual;
