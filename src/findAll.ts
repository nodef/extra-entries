import {findAll as mapFindAll} from 'extra-map';
import type {testFn, Entries} from './_types';

/**
 * Finds values passing a test.
 * @param x entries
 * @param fn test function (v, k, x)
 */
function findAll<T, U>(x: Entries<T, U>, fn: testFn<T, U>): Iterable<U> {
  return mapFindAll(x, fn);
}
export default findAll;
