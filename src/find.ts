import {find as mapFind} from "extra-map";
import type {testFn, Entries} from "./_types";

/**
 * Finds a value passing a test.
 * @param x entries
 * @param ft test function (v, k, x)
 */
function find<T, U>(x: Entries<T, U>, ft: testFn<T, U>): U {
  return mapFind(x, ft);
}
export default find;
