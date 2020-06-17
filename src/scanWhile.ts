import {scanWhile as mapScanWhile} from 'extra-map';
import type {testFn, Entries} from './_types';

/**
 * Finds key of first entry not passing a test.
 * @param x entries
 * @param fn test function (v, k, x)
 */
function scanWhile<T, U>(x: Entries<T, U>, fn: testFn<T, U>): T {
  return mapScanWhile(x, fn);
}
export default scanWhile;
