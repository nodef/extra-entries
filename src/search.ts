import {search as mapSearch} from 'extra-map';
import type {testFn, Entries} from './_types';

/**
 * Finds key of an entry passing a test.
 * @param x entries
 * @param fn test function (v, k, x)
 */
function search<T, U>(x: Entries<T, U>, fn: testFn<T, U>): T {
  return mapSearch(x, fn);
}
export default search;
