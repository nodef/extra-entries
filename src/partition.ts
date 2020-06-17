import {partition as mapPartition} from 'extra-map';
import type {testFn, Entries} from './_types';

/**
 * Segregates values by test result.
 * @param x entries
 * @param fn test function (v, k, x)
 * @returns [satisfies, doesnt]
 */
function partition<T, U>(x: Entries<T, U>, fn: testFn<T, U>): [Entries<T, U>, Entries<T, U>] {
  return mapPartition(x, fn);
}
export default partition;
