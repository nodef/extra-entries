import {count as mapCount} from 'extra-map';
import type {testFn, Entries} from './_types';

/**
 * Counts values which satisfy a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function count<T, U>(x: Entries<T, U>, ft: testFn<T, U>): number {
  return mapCount(x, ft);
}
export default count;
