import {searchAll as mapSearchAll} from 'extra-map';
import type {testFn, Entries} from './_types';

/**
 * Finds keys of entries passing a test.
 * @param x entries
 * @param fn test function (v, k, x)
 */
function searchAll<T, U>(x: Entries<T, U>, fn: testFn<T, U>): Iterable<T> {
  return mapSearchAll(x, fn);
}
export default searchAll;
