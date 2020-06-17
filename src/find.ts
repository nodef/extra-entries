import {find as mapFind} from 'extra-map';
import type {testFn, Entries} from './_types';

/**
 * Finds a value passing a test.
 * @param x entries
 * @param fn test function (v, k, x)
 */
function find<T, U>(x: Entries<T, U>, fn: testFn<T, U>): U {
  return mapFind(x, fn);
}
export default find;
