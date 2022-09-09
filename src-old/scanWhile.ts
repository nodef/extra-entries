import {scanWhile as mapScanWhile} from "extra-map";
import type {testFn, Entries} from "./_types";

/**
 * Finds key of first entry not passing a test.
 * @param x entries
 * @param ft test function (v, k, x)
 */
function scanWhile<T, U>(x: Entries<T, U>, ft: testFn<T, U>): T {
  return mapScanWhile(x, ft);
}
export default scanWhile;
