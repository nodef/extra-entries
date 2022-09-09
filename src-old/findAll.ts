import {findAll as mapFindAll} from "extra-map";
import type {testFn, Entries} from "./_types";

/**
 * Finds values passing a test.
 * @param x entries
 * @param ft test function (v, k, x)
 */
function findAll<T, U>(x: Entries<T, U>, ft: testFn<T, U>): Iterable<U> {
  return mapFindAll(x, ft);
}
export default findAll;
