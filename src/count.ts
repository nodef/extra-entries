import {count as mapCount} from 'extra-map';
import type {testFn, Entries} from './_types';

/**
 * Counts values which satisfy a test.
 * @param x a map
 * @param fn test function (v, k, x)
 */
function count<T, U>(x: Entries<T, U>, fn: testFn<T, U>): number {
  return mapCount(x, fn);
}
export default count;
