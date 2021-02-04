import {search as mapSearch} from "extra-map";
import type {testFn, Entries} from "./_types";

/**
 * Finds key of an entry passing a test.
 * @param x entries
 * @param ft test function (v, k, x)
 */
function search<T, U>(x: Entries<T, U>, ft: testFn<T, U>): T {
  return mapSearch(x, ft);
}
export default search;
